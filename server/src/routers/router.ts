import { Router } from 'express';
const router = Router();

import { cyclistRouter } from './private/cyclist.router';
import { technicianRouter } from './private/technician.router';

router.use(cyclistRouter);
router.use(technicianRouter);

export { router };
