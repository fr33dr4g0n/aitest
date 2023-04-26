'use client'


import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useUser } from '@clerk/clerk-react';

const postCodes = [
  { code: '10001' },
  { code: '10002' },
  { code: '10003' },
  { code: '10004' },
  // More post codes...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ZipCodeSelector() {
  const { user } = useUser();
  const [query, setQuery] = useState('');

  const filteredPostCodes =
    query === ''
      ? postCodes
      : postCodes.filter((postCode) => {
          return postCode.code.toLowerCase().includes(query.toLowerCase());
        });

  const handlePostCodeChange = async (postCode) => {
    const selectedPostCodes = user.unsafeMetadata.selectedPostCodes || [];

    const updatedSelectedPostCodes = selectedPostCodes.some(
      (selected) => selected.code === postCode.code
    )
      ? selectedPostCodes.filter((selected) => selected.code !== postCode.code)
      : [...selectedPostCodes, postCode];

    try {
      await user.update({
        unsafeMetadata: { selectedPostCodes: updatedSelectedPostCodes },
      });
    } catch (err) {
      console.error('error', err);
    }
  };

  const selectedPostCodes = user?.unsafeMetadata?.selectedPostCodes || [];

  return (
    <div className="mt-12 mb-10">
<Combobox as="div" value={null} onChange={handlePostCodeChange}>
  <Combobox.Label className="text-sm font-semibold text-slate-500 hover:text-slate-600">
                Filter quotes requests by post code
               </Combobox.Label>
  <div className="relative mt-2">
    <Combobox.Input
      className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6 hover:ring-3 hover:ring-gray-100"
      onChange={(event) => setQuery(event.target.value)}
      displayValue={(postCode) => postCode?.code}
    />
    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
    </Combobox.Button>

    {filteredPostCodes.length > 0 && (
      <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {filteredPostCodes.map((postCode) => (
          <Combobox.Option
            key={postCode.code}
            value={postCode}
            className={({ active }) =>
              classNames(
                'relative cursor-default select-none py-2 pl-3 pr-9',
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
              )
            }
          >
            {({ active, selected }) => (
              <>
                <span
                  className={classNames('block truncate', selected && 'font-semibold')}
                >
                  {postCode.code}
                </span>

                {selected && (
                  <span
                    className={classNames(
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                      active ? 'text-white' : 'text-gray-200'
                    )}
                  >
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    )}
  </div>
</Combobox>

      <div className="mt-2 mb-4">
        {selectedPostCodes.map((postCode) => (
          <span key={postCode.code} className="mr-2 bg-gray-100 rounded py-1 px-2 text-xs font-medium text-gray-500">
            {postCode.code}
          </span>
        ))}
      </div>
    </div>
  );
}
