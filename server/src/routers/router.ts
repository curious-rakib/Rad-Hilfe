import { Router } from 'express';
const router = Router();

import { authenticator } from '../middlewares/authenticator';
import { authorizer } from '../middlewares/authorizer';

import * as accountController from '../controllers/account/user.controller';

// *account controllers*
router.post('/sign-up', accountController.signUp);
router.post('/sign-in', accountController.signIn);
router.post('/forgot-password', accountController.forgotPassword);
router.post('/reset-password', accountController.resetPassword);

router.use(authenticator, authorizer);
router.get('/sign-out', accountController.signOut);
router.get('/profile', accountController.profile);

export { router };
