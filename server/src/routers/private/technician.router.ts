import { Router } from 'express';
import * as technicianController from '../../controllers/technician/technician.controller';

const technicianRouter = Router();

// public
technicianRouter.post('/sign-up', technicianController.signUp);
technicianRouter.post('/sign-in', technicianController.signIn);
technicianRouter.post('/forgot-password', technicianController.forgotPassword);
technicianRouter.post('/reset-password', technicianController.resetPassword);
// technician
technicianRouter.get('/profile', technicianController.profile);
technicianRouter.put('/profile-edit');
technicianRouter.post('/set-up-technician');

// bicycle

// case
technicianRouter.get('/get-all-cases');
technicianRouter.get('/get-case-by-id');
// technician

// order

// subpart

export { technicianRouter };
