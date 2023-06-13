'use client'

import { useUser } from '@clerk/nextjs';

const DisplayPostalCode = () => {
  const { user } = useUser();

  const postalCode = user?.unsafeMetadata?.postalCode || 'Not set';

  return <div>{postalCode as string}</div>;

};

export default DisplayPostalCode;
