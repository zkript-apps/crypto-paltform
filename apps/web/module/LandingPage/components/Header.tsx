"use client"

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link';

const navigation = [
  { name: 'HOME', href: '/Home' },
  { name: 'AGI', href: '/About' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(navigation[0])
  const [scrolling, setScrolling] = useState(false);

  const handleNavigationClick = (item: any) => {
    setMobileMenuOpen(false);
    setActiveNavItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-10  bg-white sticky top-0 ${scrolling ? 'small-header' : ''}`}>
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Global">
        <a href="#" className={`flex m-2.5 ml-16 items-center justify-center`}>
        <Image
          src="/logo.png"
          alt="Company"
          width={100}
          height={100}
          className="mx-auto h-auto w-auto rounded-lg"
          style={{
            width: scrolling ? '62px' : '150px',
            height: scrolling ? '38px' : '95px',
            transition: 'width 0.4s ease, height 0.4s ease',
          }}
        />
       
          
        </a>
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
        <div className={'hidden lg:flex lg:gap-x-12 justify-center items-center'}>
          {navigation.map((item) => (
           <Link key={item.name} href={item.href}>
           <button
             onClick={() => handleNavigationClick(item) } 
             className={`${
               activeNavItem === item ? ' text-[#df33e7] ' : ' text-gray-500'
             } text-sm font-normal leading-6`}
           >
             {item.name}
           </button>
         </Link>
          ))}   
          
          <a href="#" className="mr-24 text-sm font-normal leading-6 text-gray-500">
            LOG IN
          </a>

          
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Company</span>
              <Image
              src="/logo.png"
              alt="Your Company"
              width={100}
              height={100}
              className="mx-auto h-10 w-auto"
            />
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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