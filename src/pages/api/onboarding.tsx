import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

async function handlerOnboarding(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const data = req.body;
      const client = await MongoClient.connect(
        'mongodb+srv://rasheediskiludev:3AyGDY2EwpqC5C52@cluster0.jfsuqhq.mongodb.net/onboardingdb?retryWrites=true&w=majority'
      );
      const db = await client.db();
      const onboardingCollection = db.collection('onboarding');
      const result = await onboardingCollection.insertOne(data);
      client.close();
      res
        .status(201)
        .json({ message: 'User details submitted sucessfully', result });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal error', error });
  }
}

export default handlerOnboarding;
