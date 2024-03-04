"use client";
import Image from "next/image";
export default function About() {

  return (
    <div className="lg:mx-auto flex-grow mb-auto items-center justify-between">
    
      <div className='grid mb-auto bg-slate-900 w-full lg:h-[50rem] h-auto justify-center items-center'>
        
        <div className='grid  -gap-x-20 lg:grid-cols-2 sm:grid-cols-1 bg-slate-900 w-full lg:h-[40rem] h-auto justify-center'>
          <div className="flex-col">
          <h1 className="lg:size-[33rem] lg:ml-40 mt-20 text-white lg:text-[6rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans leading-[8rem] sm:ml-10">The #42
            and the bot</h1>
          <p className="lg:size-[33rem] lg:ml-40 text-white lg:text-[2rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans sm:ml-10 lg:-mt-[18rem]">Because #21 is only half the story!</p>
          </div>  
          <div className="m-28 text-white text-[5rem]">
          <Image
              src="/about_image.jpg"
              alt="Your Company"
              width={380}
              height={380}
              className="mx-auto h-auto w-auto"
            />
            <button
              type="button"
              className="rounded-md bg-[#dc0bb4] px-3.5 py-5 text-sm font-bold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              YOU CAN BUY TOKENS HERE
            </button>
          </div>
        </div>
     
      </div>
      <div className='grid mb-auto w-full h-auto justify-center items-center'>
      <div className="lg:flex grid lg:w-[100rem] lg:grid-cols-2 grid-cols-1 lg:m-0 h-auto justify-center mx-auto">
          <div className="border-[#dc0bb4] border lg:h-[42rem] lg:ml-[16rem] lg:-mt-[11.8rem] lg:mx-0 mx-[4.8em] bg-white flex items-center"> {/* Updated this line */}
            <div className="lg:ml-16 my-24 lg:mr-40 text-justify lg:w-[25rem] mx-10 h-auto">
              <h1 className="font-bold lg:text-[3rem] text-[1.5rem]">Lorem Ipsum</h1>
              <p className="mt-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className="mt-5 text-sm">Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="mt-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="lg:-ml-[25.5rem] lg:-mt-2.5 flex-auto">
            <Image
              src="/homepage_image.png"
              alt="Your Company"
              width={2000}
              height={2000}
              className="mx-auto h-[45rem] w-auto"
            />
          </div>
        </div>
        </div>
        <div className="bg-black mt-12">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
      <div className="flex-col ml-20 mt-16 mx-auto">
      <h1 className=" text-[#dc0bb4] font-bold text-sm">TYPES AND FUNCTIONS</h1>
      <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px]">What is a bot?</h1>
      </div>


      </div>
      </div>
      <div className="bg-[#08042c]">
      <div className="mx-auto max-w-7xl px-6 sm:pt-24 lg:px-8 lg:pt-20 items-center justify-center">
      
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
      <div className="flex-col ml-20 mt-16 mx-auto">
      <h1 className=" text-[#dc0bb4] font-bold text-sm">TYPES AND FUNCTIONS</h1>
      <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px]">What is Artificial Intelligence (AI)?</h1>
      </div>

    
      </div>
      <div className="justify-center items-center flex mt-20">
      <div  className="justify-center items-center text-white lg:text-[50px] font-bold font-sans text-[30px]">Video here...</div>
      </div>
      

      </div>  

      </div>
    </div>
  );
};