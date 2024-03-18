"use client"

import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import useTorusStore from "../store/useTorusStore"
import useAddUser from "../hooks/user/useAddUser"

const navigation = [
  { name: "HEIM", href: "/heim" },
  { name: "AGI", href: "/agi" },
  { name: "MEIN KONTO", href: "/mein-konto" },
  { name: "RECHTLICHES", href: "/rechtliches" },
]

const navigationLegal = [
  { name: "IMPRESSUM", href: "/rechtliches/impressum" },
  { name: "DATENSCHUTZ", href: "/rechtliches/datenschutz" },
  { name: "AUSSERGERICHTLICHE STREITBEILEGUNG", href: "/rechtliches/aussergerichtliche-streitbeilegung" },
  { name: "HAFTUNGSAUSSCHLUSS", href: "/rechtliches/haftungsausschluss" },
  { name: "WIDERRUFSBELEHRUNG", href: "/rechtliches/widerrufsbelehrung" },
]

export default function Header() {
  const pathname = usePathname();
  const torus = useTorusStore((state) => state.torus);
  const user = useTorusStore((state) => state.user);
  const setUser = useTorusStore((state) => state.setUser);
  const { mutate, isPending } = useAddUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState(navigation[0])

  const handleNavigationClick = (item: any) => {
    setMobileMenuOpen(false)
    setActiveNavItem(item)
  }

  const logout = async () => {
    try {
      await torus?.logout()
      setUser(null);
      window.location.href = "/";
    } catch (error) {
      window.location.href = "/";
    }
  }

  const login = async () => {
    try {
      const walletIdArr = await torus?.login();
      const user = await torus?.getUserInfo("");
      mutate({ walletId: walletIdArr ?  walletIdArr[0] as string : "", email: user ?  user.email : ""  })
      window.location.href = "/mein-konto";
    } catch (error) {
      window.location.href = "/";
    }
  }

  return (
    <header
      className={`z-10  bg-white sticky h-auto top-0`}
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
            <div key={item.name} className={`${item.name === "RECHTLICHES" ? "group" : ""} py-5`}>
              <Link href={item.href}>
                <button
                  onClick={() => handleNavigationClick(item)}
                  className={`${pathname.includes(item.href)
                      ? " text-primary-300"
                      : " text-gray-500"
                    } text-md font-bold leading-6 flex`}
                >
                  {item.name}
                  {item.name === "RECHTLICHES" && <ChevronDown />}
                </button>
              </Link>
              <div className="invisible absolute w-60 z-50 flex justify-center flex-col my-5 bg-white text-gray-800 shadow-xl group-hover:visible">
                <div className="h-1 bg-primary-500"></div>
                <div className={"grid grid-rows my-2 mx-3"}>
                  {navigationLegal.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <button
                        onClick={() => handleNavigationClick(item)}
                        className={`${pathname.includes(item.href)
                            ? " text-primary-300"
                            : "hover:bg-gray-100 text-gray-500"
                          } text-sm font-bold leading-6 py-1 px-2 w-full text-start`}
                      >
                        {item.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {!user ? (
          <button
          onClick={() => login()}
          className="mr-24 text-md font-bold leading-6 text-gray-500"
        >
          EINLOGGEN
        </button>
          ) : (
            <button
            onClick={() => logout()}
            className="mr-24 text-md font-bold leading-6 text-gray-500"
          >
            AUSLOGGEN
          </button>
          )}
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
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Company</span>
              <h1>AGI</h1>
            </Link>
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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 py-6">
                {navigationLegal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  EINLOGGEN
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}