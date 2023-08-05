import { Request, Response } from 'express';
import { addAllSubpart, getSubpartHealth } from '../../models/subpart/subpart.query';

const addSubpart = async (req: Request, res: Response) => {
  try {
    const allSubpart = req.body;
    await addAllSubpart(allSubpart);

    res.status(200).send('All subparts added.');
  } catch (error) {
    console.log(error);
  }
};

const subpartHealth = async (req: Request, res: Response) => {
  try {
    const { subpartId } = req.body;

    const subpart = await getSubpartHealth(subpartId);

    res.status(200).send(subpart);
  } catch (error) {
    console.log(error);
  }
};

const maintenanceLog = async (req: Request, res: Response) => {
  try {
    const { subpartId } = req.body;

    res.status(200).send('All subparts added.');
  } catch (error) {
    console.log(error);
  }
};

export { addSubpart, subpartHealth, maintenanceLog };
