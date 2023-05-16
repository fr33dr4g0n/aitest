export const dynamic = 'force-dynamic'

import { PrismaClient } from "@prisma/client";
import NavbarForCaterers from "@/app/components/NavbarForCaterers";
import Footer from "@/app/components/Footer";
import QuoteTwo from "@/app/components/QuoteTwo";
import { currentUser } from "@clerk/nextjs";
import AreaCodeSelector from "@/app/components/AreaCodeSelector";
const prisma = new PrismaClient();

async function getData() {
  const user = await currentUser()
  const selectedPostCodes = user?.unsafeMetadata?.selectedPostCodes || [];

  const res = await prisma.formData.findMany({
    where: {
      areaCode: {
        in: selectedPostCodes.map((postCodeObj) => postCodeObj.code),
      },
    },
  });

  return res;
}

export default async function Dashboard() {
  const quotes = await getData();

  return (
    <>
      <NavbarForCaterers /> 
      <div className="py-16">
  
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Quote requests</h1>
            <p className="mt-2 text-sm text-gray-500">
            Filter quote requests by area code
            </p>
            <div className="w-2/5">
        <AreaCodeSelector />
      </div>
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
<div className="py-16"></div>
      <Footer />
    </>
  );
}
