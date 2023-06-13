'use client'

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import DisplayPostalCode from '@/app/components/DisplayPostalCode';


const UpdatePostalCode = () => {
  const [postalCode, setPostalCode] = useState('');
  const { user } = useUser();

  const updateMetadata = async (postalCode) => {
    if (user) {
      try {
        const response = await user.update({
          unsafeMetadata: { postalCode: postalCode },
        });
        if (response) {
          console.log('res', response);
        }
      } catch (err) {
        console.error('error', err);
      }
    } else {
      console.error('User is undefined or null');
    }
  };
  
  const handleChange = (event) => {
    setPostalCode(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateMetadata(postalCode);
  };
  
  return (
    <>
    <div className="mb-14">
    <h2 className="text-base font-semibold leading-7 text-gray-900">Service areas</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
         <DisplayPostalCode />
          </p>    <form onSubmit={handleSubmit}>
      <div className="sm:col-span-2">
        <div className="mt-2">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            placeholder="Enter your service area postal codes"
            value={postalCode}
            onChange={handleChange}
            className="flex h-10 w-72 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
        </div>
      </div>
      <div className="mt-6 flex justify-start">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
        
    </>

  );
};

export default UpdatePostalCode;
