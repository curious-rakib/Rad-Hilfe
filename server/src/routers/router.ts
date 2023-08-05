import { Router } from 'express';
const router = Router();

import { cyclistRouter } from './private/cyclist.router';
import { technicianRouter } from './private/technician.router';

router.use('/cyclist', cyclistRouter);
router.use('/technician', technicianRouter);

export { router };
