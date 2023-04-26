'use client'

import { useUser } from '@clerk/nextjs';

const DisplayPostalCode = () => {
  const { user } = useUser();

  const postalCode = user.unsafeMetadata?.postalCode || 'Not set';

  return (
      postalCode
  );
};

export default DisplayPostalCode;
