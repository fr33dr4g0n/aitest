import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Timeago from "@/app/components/Timeago";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

function formatDateAndTime(dateString: any) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}


export default function QuoteTwo(props: any) {
  const formattedDateAndTime = formatDateAndTime(props.dateOfEvent);

  return (
    <>
      <div className="overflow-hidden bg-white border border-gray-200 sm:rounded-lg mb-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {props.firstName} {props.lastName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            <Timeago date={props.dateSubmitted} />
          </p>
        </div>
        <div className="border-t border-slate-200">
          <dl>
            <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Number of guests
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {props.numberOfGuests}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Event date & time
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {formattedDateAndTime}
              </dd>
            </div>
            <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Event address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {props.addressLine1}, {props.city}, {props.state},{" "}
                {props.zipCode}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Budget estimate
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                ${props.estimatedBudget.toLocaleString()}
              </dd>
            </div>

            <div className="bg-slate-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Event comments and specifics
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {props.eventDetails}
              </dd>
            </div>
            <div className="bg-white px-4 py-8 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Contact Information
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">                
                  <div className="sm:grid sm:grid-cols-3">
                    <div className="">
                      <div className="">
                        <EnvelopeIcon
                          className="mr-3 h-5 text-slate-400 inline-block align-middle "
                          aria-hidden="true"
                        />
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-slate-100 w-full h-6 text-slate-100 rounded animate-pulse inline-block align-middle">
                                Email address will show here
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Unlock to view email address</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <PhoneIcon
                          className="mr-3 h-5 text-slate-400 inline-block align-middle "
                          aria-hidden="true"
                        />
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <div className="bg-slate-100 w-full h-6 text-slate-100 rounded animate-pulse inline-block align-middle">
                                Phone number will show here
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Unlock to view phone number</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="inline-block align-middle">
                      <button className="w-full rounded bg-slate-800 h-6 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-600">
                        Unlock
                      </button>
                    </div>
                </div>
              </dd>
            </div>
          </dl>

        </div>
      </div>
    </>
  );
}
