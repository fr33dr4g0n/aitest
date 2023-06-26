import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function AboveFoldTwo() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7x py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10  lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">
                 Catering company
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Apply to join here
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-[3.2rem]">
              Catering Comparison
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Complete just one form and get several personalized proposals to
              compare, securing the perfect caterer for your occasion.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/request-quote"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Request quotes
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-14 flex items-left justify-left divide-x divider-slate-900/5 ">
              <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-4 text-gray-500">
                <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  100% Free to use
                </span>
              </span>
              <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-4 text-gray-500">
                <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Zero obligations
                </span>
              </span>
              <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-4 text-gray-500">
                <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Save time
                </span>
              </span>
              <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-4 text-gray-500">
                <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Trusted caterers
                </span>
              </span>
            </div>
          </div>

          <div className="lg:flex-shrink-0 lg:flex-grow">
            <img
              src="/chef-serving-food.svg"
              className="mx-auto w-[39rem] max-w-full drop-shadow-xl -mt-20"
            />
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}
