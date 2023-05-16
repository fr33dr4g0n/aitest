"use client";

import Image from "next/image";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarForCaterers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-900/5">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a className="items-center space-x-2 md:flex group transition duration-1000 ease-in-out" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="fill-slate-700 h-8 w-8 group-hover:fill-indigo-500 group-hover:rounded-lg"
              width="32"
              height="32"
            >
              <path
                d="M26 2H4c-1.103 0-2 .897-2 2v22c0 1.103.897 2 2 2h22c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 19c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2v-.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v.5zm0-5.048V18.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2.548A3.957 3.957 0 0 1 7 12.5c0-2.206 1.794-4 4-4 .262 0 .53.032.815.097C12.57 7.59 13.735 7 15 7s2.43.59 3.185 1.597c.284-.065.553-.097.815-.097 2.206 0 4 1.794 4 4a3.957 3.957 0 0 1-2 3.452z"
                className="color303c42 svgShape"
              />
            </svg>
            <span className="hidden font-bold text-sm sm:inline-block group-hover:text-indigo-600">
              Catering Comparison
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">          
        <SignedOut>
        <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900">
            How it works  
        </a>
          <a href="#benefits" className="text-sm font-semibold leading-6 text-gray-900">
           Benefits
          </a>
          <a href="#testimonials" className="text-sm font-semibold leading-6 text-gray-900">
            Testimonials
          </a>
          </SignedOut>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end text-sm font-semibold leading-6 text-gray-900">
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <div className="gap-x-12">
              <SignUpButton />
              <SignInButton className="pl-4" />
            </div>
          </SignedOut>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              className="fill-indigo-600 h-8 w-8 group-hover:rounded-full"
              width="32"
              height="32"
            >
              <path
                d="M26 2H4c-1.103 0-2 .897-2 2v22c0 1.103.897 2 2 2h22c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-5 19c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2v-.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v.5zm0-5.048V18.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2.548A3.957 3.957 0 0 1 7 12.5c0-2.206 1.794-4 4-4 .262 0 .53.032.815.097C12.57 7.59 13.735 7 15 7s2.43.59 3.185 1.597c.284-.065.553-.097.815-.097 2.206 0 4 1.794 4 4a3.957 3.957 0 0 1-2 3.452z"
                className="color303c42 svgShape"
              />
            </svg>
            <span className="hidden font-bold text-sm sm:inline-block group-hover:text-indigo-600">
              Catering Comparison
            </span>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
