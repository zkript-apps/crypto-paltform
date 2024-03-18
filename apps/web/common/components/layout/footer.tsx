"use client"

import Link from "next/link"

const navigation = {
  company: [
    { name: "Platzhalter", href: "#" },
    { name: "Platzhalter", href: "#" },
    { name: "Platzhalter", href: "#" },
  ],
  legal: [
    { name: "probe@kontakt.com", href: "#" },
    { name: "probe@kontakt.com", href: "#" },
    { name: "123456789", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bottom-0 bg-[#130c21]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-4 md:grid-cols-2 xl:gap-8">
          <div className="">
            {/* <Image
              src="/logo.png"
              alt="Your Company"
              width={100}
              height={100}
              className=" h-24 w-auto lg:ml-20 ml-10"
            /> */}
            <div className=" h-24 w-auto text-[5rem] lg:ml-20 ml-10 text-white">
              AGI
            </div>
          </div>
          <div></div>

          <div className="grid grid-cols-2 gap-8 xl:col-span-2 lg:ml-20 ml-10 mt-5">
            <div>
              <h3 className="text-sm font-extrabold leading-6 text-celestial-blue">
              VERFOLGEN
              </h3>
              <ul role="list" className="mt-4 space-y-1">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-md font-bold leading-6 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-20">
              <div>
                <h3 className="text-sm font-extrabold leading-6 text-celestial-blue">
                KONTAKT
                </h3>
                <ul role="list" className="mt-4 space-y-1">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-md font-bold leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-tekhelet h-auto">
        <div className="mx-auto max-w-7xl text-center text-sm">
          <div className="h-[3rem] text-white grid lg:flex justify-center lg:justify-start items-center md:grid-cols-4 grid-cols-2 lg:ml-24 lg:space-x-12">
            <Link href="#">Datenschutzeinstellungen ändern</Link>
            <Link href="#">Verlauf der Datenschutzeinstellungen</Link>
            <Link href="#">Einwilligung widerrufen</Link>
            <Link href="#">Passwort zurücksetzen</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
