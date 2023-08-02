import { Router } from 'express';
import * as bicycleController from '../../controllers/bicycle/bicycle.controller';
import * as cyclistController from '../../controllers/cyclist/cyclist.controller';
const cyclistRouter = Router();

// public

// cyclist
cyclistRouter.post('/set-up-address', cyclistController.setUpAddress);
cyclistRouter.get('/weather-data');
cyclistRouter.get('/cyclist-name');

// bicycle
cyclistRouter.post('/set-up-bicycle', bicycleController.setUpBicycle);
cyclistRouter.get('/bicycle-health'); //only average bicycle health
cyclistRouter.get('/bicycle');

// case

// order

// subpart

// technician

export { cyclistRouter };
