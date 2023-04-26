import { ArrowPathIcon, ClipboardDocumentCheckIcon, CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Request',
    description:'Share details, preferences, budget and let our handpicked caterers create tailored proposals for a perfect fit.',
    href: '#',
    number: 1
  },
  {
    name: 'Review',
    description:
      'Compare tailored quotes from multiple caterers, while considering reviews to make informed choices.',
    href: '#',
    number: 2
  },
  {
    name: 'Confirm',
    description:
      "When you've found the perfect caterer, secure their services and get ready to enjoy a successful event.",
    href: '#',
    number: 3
  },
]

export default function Howitworks() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 rounded-lg" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Easy & Fast</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How it works          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Eliminate event planning stress – simply fill out one form and watch multiple caterers offer their top menus, all seeking your taste buds' delight.          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="h-5 w-5 rounded-full flex items-center justify-center text-white bg-indigo-600 font-bold"> {feature.number}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>        
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>        
        </div>
      </div>
    </div>
  )
}
