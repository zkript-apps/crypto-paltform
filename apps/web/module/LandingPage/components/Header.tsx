"use client"

import { useState, useEffect, Fragment } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import { ChevronDown } from "lucide-react"

const navigation = [
  { name: "HOME", href: "/home" },
  { name: "AGI", href: "/about" },
  { name: "MY ACCOUNT", href: "/my-account" },
  { name: "LEGAL", href: "" },
]

const navigationLegal = [
  { name: "IMPRINT", href: "" },
  { name: "DATA PROTECTION", href: "" },
  { name: "OUT OF COURT DISPUTE RESOLUTION", href: "" },
  { name: "DISCLAIMER", href: "" },
  { name: "RIGHT OF WITHDRAWAL", href: "" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(navigation[0])
  const [scrolling, setScrolling] = useState(false)

  const handleNavigationClick = (item: any) => {
    setMobileMenuOpen(false)
    setActiveNavItem(item)
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = 1;
  //     const shouldScroll = window.scrollY > scrollThreshold;

  //     if (shouldScroll !== scrolling) {
  //       setScrolling(shouldScroll);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolling]);

  return (
    <header
      className={`z-10  bg-white sticky h-auto top-0 ${scrolling ? "" : ""}`}
    >
      <nav
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Global"
      >
        <Link href="/" className={`flex ml-16 items-center justify-center text-[3rem]`}>
          AGI
        </Link>
        <div className="flex lg:hidden py-6">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-7 w-7 mr-16 text-primary-500"
              aria-hidden="true"
            />
          </button>
        </div>
        <div
          className={"hidden lg:flex lg:gap-x-12 justify-center items-center"}
        >
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <div className={`${item.name === "LEGAL" ? "group" : ""} py-5`}>
                <button
                  onClick={() => handleNavigationClick(item)}
                  className={`${
                    activeNavItem === item
                      ? " text-primary-300"
                      : " text-gray-500"
                  } text-md font-bold leading-6 flex`}
                >
                  {item.name}
                  {item.name === "LEGAL" && <ChevronDown />}
                </button>
                <div className="invisible absolute z-50 flex w-52 justify-center flex-col my-5 bg-white text-gray-800 shadow-xl group-hover:visible">
                  <div className="h-1 bg-primary-500"></div>
                  <div className={"grid grid-rows my-2 mx-3"}>
                    {navigationLegal.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <button
                          onClick={() => handleNavigationClick(item)}
                          className={`${
                            activeNavItem === item
                              ? " text-primary-300"
                              : "hover:bg-gray-100 text-gray-500"
                          } text-sm font-bold leading-6 py-1 w-full text-start`}
                        >
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Link
            href="#"
            className="mr-24 text-md font-bold leading-6 text-gray-500"
          >
            LOG IN
          </Link>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Company</span>
              <h1>AGI</h1>
            </a>
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
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="space-y-2 py-6">
                {navigationLegal.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
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
  )
}
