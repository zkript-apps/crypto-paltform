"use client"
import Image from "next/image"

const navigation = {

    company: [
      { name: 'Placeholder', href: '#' },
      { name: 'Placeholder', href: '#' },
      { name: 'Placeholder', href: '#' },
   
    ],
    legal: [
      { name: 'sample@contact', href: '#' },
      { name: 'sample@contacty', href: '#' },
      { name: '123456789', href: '#' },
    ],
    
  }
  
  export default function Footer() {
    return (
      <footer className=" bg-[#08042c]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-4 md:grid-cols-2 xl:gap-8">
            <div className="">
            <Image
              src="/logo.png"
              alt="Your Company"
              width={100}
              height={100}
              className="m-7 h-24 w-auto"
            />
               
            </div>
           <div></div>
            
            
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">PURSUE</h3>
                  <ul role="list" className="mt-6 space-y-1">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
            </div>
              <div className="md:grid md:grid-cols-2 md:gap-20">
                
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">CONTACT</h3>
                  <ul role="list" className="mt-6 space-y-1">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
         
          
        </div>
        <div className="bg-zinc-700">
        <div className="mx-auto max-w-7xl h-[55px] text-white grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 justify-center items-center text-center text-sm">
            <a>Change privacy settings</a>
            <a>History of privacy settings</a>
            <a>Revoke consent</a>
            <a>reset Password</a>
          </div>
          </div>
        <div className="w-full h-4 bg-slate-900"></div>
      </footer>
    )
  }