import { Request, Response } from 'express';

const addSubpart = async (req: Request, res: Response) => {
  try {
    const allSubpart = req.body;
  } catch (error) {
    console.log(error);
  }
};

export { addSubpart };
