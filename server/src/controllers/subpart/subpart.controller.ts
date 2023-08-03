import { Request, Response } from 'express';
import { addAllSubpart } from '../../models/subpart/subpart.query';

const addSubpart = async (req: Request, res: Response) => {
  try {
    const allSubpart = req.body;
    await addAllSubpart(allSubpart);

    res.status(200).send('All subparts added.');
  } catch (error) {
    console.log(error);
  }
};

export { addSubpart };
