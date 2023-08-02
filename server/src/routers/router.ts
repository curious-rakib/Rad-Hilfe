import { Router } from 'express';
const router = Router();

import { cyclistRouter } from './private/cyclist.router';
import { technicianRouter } from './private/technician.router';

import * as accountController from '../controllers/account/user.controller';
// *account controllers*
router.post('/sign-up', accountController.signUp);
router.post('/sign-in', accountController.signIn);
router.post('/forgot-password', accountController.forgotPassword);
router.post('/reset-password', accountController.resetPassword);

router.use(cyclistRouter);
router.use(technicianRouter);

export { router };
