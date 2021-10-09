import type { NextApiRequest, NextApiResponse } from 'next';

const test = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'ok' });
  } else {
    res.status(405);
  }
};

export default test;
