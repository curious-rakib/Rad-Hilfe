import { Request, Response } from 'express';

const setUpAddress = async (req: Request, res: Response) => {
  try {
    const { homeAddress, workAddress } = req.body;
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

const weatherData = async (req: Request, res: Response) => {
  try {
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error!');
  }
};

export { setUpAddress, weatherData };
