import moment, { Moment } from 'moment';
import { bicycleHealthUpgration, getAllBicycle } from '../models/bicycle/bicycle.query';
import bicycleDependency from './bicyclePartsDependency.json';
import { BicycleParts } from '../interfaces/bicycle.interface';
import { DependencyPart } from '../interfaces/subpart.interface';
moment().format();

const damageCalculateForOnePart = (
  subpart: BicycleParts,
  dependencyPart: DependencyPart,
  pavedDistance: number,
  unpavedDistance: number,
  bicycleSubParts: BicycleParts[]
) => {
  const k = 217.147240952;
  const damage =
    Math.E ** ((dependencyPart.roadConditionFactor * (1.2 * unpavedDistance + pavedDistance)) / k);
  if (dependencyPart.dependentPartId === '') {
    subpart.health = Math.max(100 - damage, 0);
  } else {
    const dependencySubpart = bicycleSubParts.filter((bicycleSubPart) => {
      return String(bicycleSubPart.subpart._id) === dependencyPart.dependentPartId;
    });

    let CoefficientOfDamageOfFactorComponent = 1;
    if (dependencySubpart[0].health < 70 && dependencySubpart[0].health >= 40) {
      CoefficientOfDamageOfFactorComponent = 1.2;
    } else if (dependencySubpart[0].health < 40 && dependencySubpart[0].health >= 20) {
      CoefficientOfDamageOfFactorComponent = 1.4;
    } else {
      CoefficientOfDamageOfFactorComponent = 1.5;
    }

    subpart.health = Math.max(100 - CoefficientOfDamageOfFactorComponent * damage, 0);
  }
};

const calculatePartsHealth = (
  bicycleSubParts: BicycleParts[],
  pavedDistance: number,
  unpavedDistance: number
) => {
  bicycleDependency.forEach((dependencyPart) => {
    const subpart = bicycleSubParts.filter((bicycleSubPart) => {
      return String(bicycleSubPart.subpart._id) === dependencyPart._id;
    });

    damageCalculateForOnePart(
      subpart[0],
      dependencyPart,
      pavedDistance,
      unpavedDistance,
      bicycleSubParts
    );
  });
};

const getRecreationalCommuteUnpavedFactor = (activityTypeLength: number) => {
  return 1 / activityTypeLength;
};

const getDistance = (
  way: number,
  lastMaintainedDate: Moment,
  rodeDay: number,
  rodeDistance: number,
  rideFactor: number
) => {
  return way * moment().diff(lastMaintainedDate, 'week') * rodeDay * rodeDistance * rideFactor;
};

const bicycleHealthAlgorithm = async () => {
  const allBicycle = await getAllBicycle();

  allBicycle &&
    allBicycle.forEach((bicycle) => {
      let lastRevisionMonth: number = bicycle.purchaseMonth;
      let lastRevisionYear: number = bicycle.purchaseYear;

      if (bicycle.isRevised) {
        bicycle.revisionMonth && (lastRevisionMonth = bicycle.revisionMonth);
        bicycle.revisionYear && (lastRevisionYear = bicycle.revisionYear);
      }

      const lastRevisionDate = moment([lastRevisionYear, lastRevisionMonth - 1]);

      const totalDailyCommutedPavedDistance = getDistance(
        2,
        lastRevisionDate,
        bicycle.dailyCommute.days.length,
        bicycle.dailyCommute.totalDistance,
        1 - bicycle.dailyCommute.unpavedRoad / 100
      );

      const totalDailyCommutedUnpavedDistance = getDistance(
        2,
        lastRevisionDate,
        bicycle.dailyCommute.days.length,
        bicycle.dailyCommute.totalDistance,
        bicycle.dailyCommute.unpavedRoad / 100
      );

      let totalRecreationalCommutedPavedDistance = 0;
      let totalRecreationalCommutedUnpavedDistance = 0;

      let unpavedRoadFactor = 0;
      if (bicycle.recreationalCommute) {
        if (bicycle.recreationalCommute.activityType.includes('off-road')) {
          unpavedRoadFactor = getRecreationalCommuteUnpavedFactor(
            bicycle.recreationalCommute.activityType.length
          );
        }

        totalRecreationalCommutedPavedDistance = getDistance(
          1,
          lastRevisionDate,
          bicycle.recreationalCommute.days.length,
          bicycle.recreationalCommute.lengthOfRide,
          1 - unpavedRoadFactor
        );

        totalRecreationalCommutedPavedDistance = getDistance(
          1,
          lastRevisionDate,
          bicycle.recreationalCommute.days.length,
          bicycle.recreationalCommute.lengthOfRide,
          unpavedRoadFactor
        );
      }

      const totalPavedDistance =
        totalDailyCommutedPavedDistance + totalRecreationalCommutedPavedDistance;
      const totalUnpavedDistance =
        totalDailyCommutedUnpavedDistance + totalRecreationalCommutedUnpavedDistance;

      bicycle.bicycleParts &&
        calculatePartsHealth(bicycle.bicycleParts, totalPavedDistance, totalUnpavedDistance);

      let totalSubpartHealth = 0;
      bicycle.bicycleParts!.forEach((part) => {
        totalSubpartHealth += part.health;

        const subpart = bicycleDependency.filter((dependencyPart) => {
          return String(part.subpart._id) === dependencyPart._id;
        });

        // console.log(subpart[0].name, part.health);
      });

      bicycle.totalHealth = totalSubpartHealth / bicycle.bicycleParts!.length;

      bicycleHealthUpgration(bicycle._id, bicycle);
    });
};

export { bicycleHealthAlgorithm };
