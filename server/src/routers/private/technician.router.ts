import { Router } from 'express';

import { authenticator } from '../../middlewares/authenticator';
import { technicianAuthorizer } from '../../middlewares/authorizer';

import * as technicianController from '../../controllers/technician/technician.controller';

const technicianRouter = Router();

// public
technicianRouter.post('/sign-up', technicianController.signUp);
technicianRouter.post('/sign-in', technicianController.signIn);
technicianRouter.post('/forgot-password', technicianController.forgotPassword);
technicianRouter.post('/reset-password', technicianController.resetPassword);

// private router
// cyclistRouter.use(authenticator, technicianAuthorizer);

// technician
technicianRouter.get('/profile', technicianController.profile);
technicianRouter.put('/profile-edit');
technicianRouter.post('/set-up-technician');

// bicycle

// case
technicianRouter.get('/get-all-cases');
technicianRouter.get('/get-case-by-id');

// order

// subpart

export { technicianRouter };
