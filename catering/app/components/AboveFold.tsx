import Image from 'next/image'

export default function AboveFoldOne() {

    return (
<div className="relative isolate px-6 lg:px-8">
<div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-24">
  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
    <Image
      src="/chef-serving-food.svg"
      width="250"
      height="250"
      alt="chef serving food"
    />
  </div>
  <div className="text-center">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Catering Comparison
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-600">
    Complete just one form and get several personalized proposals to compare, securing the perfect caterer for your occasion.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="/request-quote"
        className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
      >
        Request Quotes
      </a>
      <a
        href="#how-it-works"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
    <div className="mt-14 flex items-center justify-center divide-x divider-slate-900/5 ">
      <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-8 text-gray-500">
        <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">100% Free to use</span>
      </span>
      <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-8 text-gray-500">
        <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Zero obligations
</span>
      </span>
      <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-8 text-gray-500">
        <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Save time</span>
      </span>
      <span className="group transition-all duration-300 ease-in-out flex items-center gap-x-3 text-xs font-semibold leading-7 px-8 text-gray-500">
        <span className="bg-left-bottom bg-gradient-to-r from-slate-900 to-slate-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Trusted caterers</span>
      </span>       
    </div>
  </div>
</div>
</div>
  )
}
