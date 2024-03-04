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
      <footer className="bottom-0  bg-[#08042c]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-4 md:grid-cols-2 xl:gap-8">
            <div className="">
            <Image
              src="/logo.png"
              alt="Your Company"
              width={100}
              height={100}
              className=" h-24 w-auto lg:ml-20 ml-10"
            />
               
            </div>
           <div></div>
            
            
            <div className="grid grid-cols-2 gap-8 xl:col-span-2 lg:ml-20 ml-10 mt-5">
            <div>
                  <h3 className="text-sm font-extrabold leading-6 text-[#dc0bb4]">PURSUE</h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-md font-bold leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
            </div>
              <div className="md:grid md:grid-cols-2 md:gap-20">
                
                <div>
                  <h3 className="text-sm font-extrabold leading-6 text-[#dc0bb4]">CONTACT</h3>
                  <ul role="list" className="mt-4 space-y-1">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-md font-bold leading-6 text-gray-300 hover:text-white">
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
        <div className="bg-zinc-700 h-auto">
        <div className="mx-auto max-w-7xl text-center text-sm ">
          <div className="h-[3rem] text-white grid lg:grid-cols-7 justify-center items-center md:grid-cols-4 grid-cols-2 ml-24">
            <a>Change privacy settings</a>
            <a>History of privacy settings</a>
            <a>Revoke consent</a>
            <a>reset Password</a>
          </div>
           
          </div>
          </div>
        <div className="w-full h-4 bg-slate-900"></div>
      </footer>
    )
  }