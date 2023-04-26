"use client";

import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [timeOfEvent, setTimeOfEvent] = useState("");
  const [eventStyle, setEventStyle] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/saveData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        organization,
        title,
        phone,
        email,
        dateOfEvent,
        timeOfEvent,
        eventStyle,
        numberOfGuests: parseInt(numberOfGuests),
        estimatedBudget: parseInt(estimatedBudget),
        addressLine1,
        addressLine2,
        city,
        state,
        zipCode,
        eventDetails,
      }),
    });

    if (response.ok) {
      setFirstName("");
      setLastName("");
      setOrganization("");
      setTitle("");
      setPhone("");
      setEmail("");
      setDateOfEvent("");
      setTimeOfEvent("");
      setEventStyle("");
      setNumberOfGuests("");
      setEstimatedBudget("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setState("");
      setZipCode("");
      setEventDetails("");
    }
  };

  return (
    <>
      <div className="mx-auto max-w-2xl text-center px-6 py-24 sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Request Quotes
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Fill in the form below to get quotes from local catering companies
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto overflow-hidden rounded-lg ring-1 ring-slate-900/5 p-6 lg:p-10 bg-white"
      >
        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">
          Contact Information
        </h2>
        <div className="flex mb-6">
          <div className="w-1/2 pr-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              First
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Last
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900  w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>
        <div className="border-b border-gray-900/10 pb-6 mb-8"></div>
        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">
          Event Information
        </h2>
        <div className="mb-6">
          <label
            htmlFor="dateOfEvent"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Date and Time of Event
          </label>
          <input
            id="dateOfEvent"
            type="datetime-local"
            value={dateOfEvent}
            onChange={(e) => setDateOfEvent(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="eventStyle"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Event Style
          </label>
          <select
            id="eventStyle"
            value={eventStyle}
            onChange={(e) => setEventStyle(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          >
            <option value="">Select event style</option>
            <option value="Plated meal">Plated meal</option>
            <option value="Buffet style">Buffet style</option>
            <option value="Cocktail/​Hors d'oeuvres">
              Cocktail/​Hors d'oeuvres
            </option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="numberOfGuests"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Estimated Number of Guests
          </label>
          <input
            id="numberOfGuests"
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="estimatedBudget"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            What is your estimated budget?
          </label>
          <input
            id="estimatedBudget"
            type="number"
            value={estimatedBudget}
            onChange={(e) => setEstimatedBudget(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="eventDetails"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Event Details
          </label>
          <textarea
            id="eventDetails"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            className="flex h-24 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500 h-24"
          ></textarea>
        </div>
        <div className="border-b border-gray-900/10 pb-6 mb-8"></div>

        <h2 className="text-base font-semibold leading-7 text-gray-900 mb-4">
          Event Address
        </h2>
        <div className="mb-6">
          <label
            htmlFor="addressLine1"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Street Address
          </label>
          <input
            id="addressLine1"
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
          />
        </div>

        <div className="flex mb-6">
          <div className="w-1/3 pr-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
          </div>
          <div className="w-1/3 pr-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              State / Province
            </label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
          </div>
          <div className="w-1/3">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium leading-6 text-gray-900 mb-2"
            >
              Zip / Postal Code
            </label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex h-10 rounded-md border border-slate-300 bg-white py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 w-full hover:ring-slate-300 hover:ring-1 ease-in-out duration-500"
            />
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-6 mb-8"></div>
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Request Quotes
        </button>
        <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
        Absolutely free with zero commitments or obligations
                      </p>
      </form>
    </>
  );
}
