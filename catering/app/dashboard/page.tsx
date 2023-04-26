import { PrismaClient } from "@prisma/client";
import NavbarForCaterers from "@/app/components/NavbarForCaterers";
import Footer from "@/app/components/Footer";
import QuoteTwo from "@/app/components/QuoteTwo";
import { useUser } from "@clerk/nextjs";
import ZipCodeSelector from "@/app/components/ZipCodeSelector";
const prisma = new PrismaClient();

async function getData() {
  const res = await prisma.formData.findMany();

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Dashboard() {
  const quotes = await getData();

  return (
    <>
      <NavbarForCaterers />
      <div className="w-64">
        <ZipCodeSelector />
      </div>

      {quotes.map((quote) => (
        <QuoteTwo
          key={quote.firstName + quote.timeOfEvent}
          firstName={quote.firstName}
          lastName={quote.lastName}
          organization={quote.organization}
          title={quote.title}
          phone={quote.phone}
          email={quote.email}
          dateOfEvent={quote.dateOfEvent}
          timeOfEvent={quote.timeOfEvent}
          eventStyle={quote.eventStyle}
          numberOfGuests={quote.numberOfGuests}
          estimatedBudget={quote.estimatedBudget}
          addressLine1={quote.addressLine1}
          addressLine2={quote.addressLine2}
          city={quote.city}
          state={quote.state}
          zipCode={quote.zipCode}
          eventDetails={quote.eventDetails}
          dateSubmitted={quote.dateSubmitted}
        />
      ))}

      <Footer />
    </>
  );
}
