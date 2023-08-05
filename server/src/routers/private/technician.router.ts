import { Router } from 'express';

import { authenticator } from '../../middlewares/authenticator';
import { technicianAuthorizer } from '../../middlewares/authorizer';

import * as technicianController from '../../controllers/technician/technician.controller';

const technicianRouter = Router();

// public
technicianRouter.post('/technician/sign-up', technicianController.signUp);
technicianRouter.post('/technician/sign-in', technicianController.signIn);
technicianRouter.post('/technician/forgot-password', technicianController.forgotPassword);
technicianRouter.post('/technician/reset-password', technicianController.resetPassword);

// private router
// cyclistRouter.use(authenticator, technicianAuthorizer);

// technician
technicianRouter.get('/technician/profile', technicianController.profile);
technicianRouter.put('/technician/profile-edit');
technicianRouter.post('/technician/set-up-technician');

// bicycle

// case
technicianRouter.get('/technician/get-all-cases');
technicianRouter.get('/technician/get-case-by-id');

// order

// subpart

export { technicianRouter };
