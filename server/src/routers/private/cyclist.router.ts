import { Router } from 'express';
import { authenticator } from '../../middlewares/authenticator';
import { cyclistAuthorizer } from '../../middlewares/authorizer';

import * as cyclistController from '../../controllers/cyclist/cyclist.controller';
import * as bicycleController from '../../controllers/bicycle/bicycle.controller';
import * as subpartController from '../../controllers/subpart/subpart.controller';
import * as caseController from '../../controllers/case/case.controller';
import * as orderController from '../../controllers/order/order.controller';

const cyclistRouter = Router();

// public
cyclistRouter.post('/sign-up', cyclistController.signUp);
cyclistRouter.post('/sign-in', cyclistController.signIn);
cyclistRouter.post('/forgot-password', cyclistController.forgotPassword);
cyclistRouter.post('/reset-password', cyclistController.resetPassword);

// private router
// cyclistRouter.use(authenticator, cyclistAuthorizer);

// cyclist
cyclistRouter.get('/profile', cyclistController.profile);
cyclistRouter.post('/set-up-address', cyclistController.setUpAddress);
cyclistRouter.put('/set-up-address-edit', cyclistController.setUpAddressEdit);
cyclistRouter.get('/weather-data', cyclistController.weatherData);
cyclistRouter.get('/cyclist-name', cyclistController.cyclistName);
cyclistRouter.put('/select-plan', cyclistController.selectPlan);

// bicycle
cyclistRouter.post('/set-up-bicycle', bicycleController.setUpBicycle);
cyclistRouter.put('/set-up-bicycle-edit');
cyclistRouter.get('/bicycle-health/:id', bicycleController.getBicycleHealth); //only average bicycle health
cyclistRouter.get('/bicycle/:id', bicycleController.getBicycle);

// case
cyclistRouter.get('/create-case', caseController.createCase);
cyclistRouter.get('/get-all-cases', caseController.getAllCases);
cyclistRouter.get('/get-case-by-id', caseController.getCaseById);
// order
cyclistRouter.get('/get-plan', orderController.getPlan);
cyclistRouter.post('/create-order', orderController.createOrder);

// subpart
cyclistRouter.post('/add-subpart', subpartController.addSubpart);
cyclistRouter.get('/subpart-health', subpartController.subpartHealth);
cyclistRouter.get('/maintenance-log', subpartController.maintenanceLog);

// technician

export { cyclistRouter };
