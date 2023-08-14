import { Router, Request, Response } from 'express';
const router = Router();

import { generator } from '../middlewares/generator';
import { cyclistRouter } from './private/cyclist.router';
import { technicianRouter } from './private/technician.router';

router.use(generator);
router.use('/cyclist', cyclistRouter);
router.use('/technician', technicianRouter);

router.use('*', (req: Request, res: Response) => res.status(404).send('Error, Not Found!'));

export { router };
