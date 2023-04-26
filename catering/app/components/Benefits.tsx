const faqs = [
    {
      id: 1,
      question: "Free to Use",
      answer:
        "Enjoy a comprehensive and top-notch service without spending a dime – 100% free to use.",
    },
    {
      id: 1,
      question: "No Obligations",
      answer:
        "Explore multiple quotes without any commitment, using Catering Comparison doesn't obligate you to purchase.",
    },
    {
        id: 2,
        question: "Time-saving convenience",
        answer:
          " Say goodbye to endless searching and let the caterers come to you!",
      },
      {
        id: 3,
        question: "Tailored to your needs",
        answer:
          "Receive customized quotes that cater to your unique event, preferences, and budget.",
      },
      {
        id: 4,
        question: "  Trusted caterers",
        answer:
          "Rest easy knowing we've handpicked and verified the best catering companies for your selection.",
      },
  ]
  
  export default function Benefits() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Benefits of using Catering Comparison</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  