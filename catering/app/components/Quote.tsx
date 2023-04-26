export default function Quote(props: any) {
  const event = new Date();

  const options = {
    day: "2-digit",
    year: "2-digit",
    month: "long",
    weekday: "short",
  };

  return (
    <>
      <div
        className="ring-1 ring-slate-900/5 p-5 rounded-lg mb-8"
        key={props.firstname}
      >
        <div className="py-5 border-b border-slate-900/5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {props.firstName} {props.lastName}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Today
          </p>
        </div>
        <div className=" py-5">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Guests</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props.numberOfGuests}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Budget</dt>
              <dd className="mt-1 text-sm text-gray-900">
                ${props.estimatedBudget.toLocaleString("en")}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Date</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props.dateOfEvent}{" "}
                <span className="border-l border-slate-900/15 mx-2"></span>
                {props.timeOfEvent}{" "}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Style</dt>
              <dd className="mt-1 text-sm text-gray-900">{props.eventStyle}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props.addressLine1}, {props.city}, {props.state},{" "}
                {props.zipCode}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Comments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {props.eventDetails}
              </dd>
            </div>
            <div className="sm:col-span-2 ">
              <dt className="text-sm font-medium text-gray-500">Contact</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul role="list" className="">
                  <li className="flex items-center justify-between py-3 text-sm group">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="w-0 flex-1 truncate">Email</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span
                        className="font-medium text-slate-900 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-1000 ease-out"
                      >
                        {props.email}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-center justify-between py-3 text-sm group">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="w-0 flex-1 truncate">Phone</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <span 
                        className="font-medium text-slate-900 bg-left-bottom bg-gradient-to-r from-slate-600 to-slate-400 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-1000 ease-out"
                      >
                        {props.phone}
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
