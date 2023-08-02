import { Request, Response } from 'express';
const setUpBicycle = async (req: Request, res: Response) => {
  try {
    const {
      bicycleBrand,
      bicycleModel,
      serialNumber,
      purchaseMonth,
      purchaseYear,
      isRevised,
      revisionMonth,
      revisionYear,
      dailyCommute,
      recreationalCommute,
    } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

export { setUpBicycle };
