import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.formData.create({
    data: {
      id: 'ck1abcd1234',
      firstName: 'John',
      lastName: 'Doe',
      phone: '555-123-4567',
      email: 'john.doe@example.com',
      dateOfEvent: new Date('2023-05-20T19:00:00'),
      eventStyle: 'Buffet',
      numberOfGuests: 75,
      estimatedBudget: 5000,
      addressLine1: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      eventDetails: 'We are hosting a graduation party with a mix of Italian and Mexican dishes. Please include vegetarian and gluten-free options.',
      dateSubmitted: new Date('2023-04-11T10:00:00'),
    },
  });

  await prisma.formData.create({
    data: {
      id: 'ck2efgh5678',
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '555-987-6543',
      email: 'jane.smith@example.com',
      dateOfEvent: new Date('2023-06-15T18:00:00'),
      eventStyle: 'Plated Dinner',
      numberOfGuests: 50,
      estimatedBudget: 3000,
      addressLine1: '456 Oak Lane',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      eventDetails: 'We are celebrating a milestone anniversary and would like a gourmet three-course dinner, including appetizers and dessert.',
      dateSubmitted: new Date('2023-04-12T14:00:00'),
    },
  });

  await prisma.formData.create({
    data: {
      id: 'ck3ijkl9101',
      firstName: 'Alice',
      lastName: 'Johnson',
      phone: '555-246-1357',
      email: 'alice.johnson@example.com',
      dateOfEvent: new Date('2023-07-10T12:00:00'),
      eventStyle: 'Cocktail Reception',
      numberOfGuests: 100,
      estimatedBudget: 7000,
      addressLine1: '789 Elm Street',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      eventDetails: 'We are hosting a corporate event with a variety of hors d\'oeuvres, finger foods, and a selection of cocktails and mocktails.',
      dateSubmitted: new Date('2023-04-14T09:00:00'),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
