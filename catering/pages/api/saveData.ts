import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const {
      firstName,
      lastName,
      organization,
      title,
      phone,
      email,
      dateOfEvent,
      timeOfEvent,
      eventStyle,
      numberOfGuests,
      estimatedBudget,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      eventDetails,
    } = req.body;

    try {
      const formData = await prisma.formData.create({
        data: {
          firstName,
          lastName,
          organization,
          title,
          phone,
          email,
          dateOfEvent,
          timeOfEvent,
          eventStyle,
          numberOfGuests,
          estimatedBudget,
          addressLine1,
          addressLine2,
          city,
          state,
          zipCode,
          eventDetails,
        },
      });

      res.status(200).json(formData);
    } catch (error) {
      console.error('Error:', error); // Add this line to log the error
      res.status(500).json({ error: 'Error saving data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
