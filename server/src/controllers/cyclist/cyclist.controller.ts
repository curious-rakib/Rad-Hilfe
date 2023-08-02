import { Request, Response } from 'express';
const setUpAddress = async (req: Request, res: Response) => {
  try {
    const { homeAddress, workAddress } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

export { setUpAddress };
