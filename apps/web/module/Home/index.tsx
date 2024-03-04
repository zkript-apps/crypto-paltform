"use client";
import Image from "next/image";
export default function Home() {

  return (
    <div className="lg:mx-auto h-auto items-center justify-center">
      <div className='grid bg-slate-900 w-full h-[40rem] justify-center items-center'>

      <div className='grid -gap-x-20 lg:grid-cols-2 sm:grid-cols-1 bg-slate-900 w-full h-[40rem] justify-center'> 
      <h1 className="lg:size-[33rem] lg:ml-40 mt-20 text-white lg:text-[6rem] md:text-[30px] md:ml-5 sm:text-[30px] font-bold font-sans leading-[8rem]">The future with #42</h1>
      <div className="m-28 text-white text-[5rem]"> 
        <div >(video here...)</div>
        <button
        type="button"
        className=" rounded-md bg-[#dc0bb4] px-3.5 py-5 text-sm font-bold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        YOU CAN BUY TOKENS HERE
      </button>
      
      </div>
      </div>
      <div className="flex lg:grid-cols-2 grid-cols-1 lg:m-0 mx-12">
      <div className="border-[#dc0bb4] border h-auto lg:ml-40 lg:-mt-[11.8rem] bg-white flex">
      <div className="flex-auto lg:ml-16 my-24 lg:mr-40 text-justify w-[25rem] h-0">
        <h1 className="font-bold text-[3rem]">Lorem Ipsum</h1>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. </p>
         <p className="mt-5">Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
         voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      
      </div>
      <div className="block ">
      <Image
              src="/homepage_image.png"
              alt="Your Company"
              width={2000}
              height={2000}
              className="mx-auto h-[50rem] w-auto"
            />
      </div>
      </div>
      </div>
     
      </div>
  );
};
