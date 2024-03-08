"use client";
import YoutubeIFrame from "@/common/components/YoutubeIFrame";
import Image from "next/image";
export default function Home() {

  const videoId = "wDchsz8nmbo";

  return (
    <><style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <div className="lg:mx-auto flex-grow mb-auto items-center justify-between">

        <div className='grid mb-auto bg-black w-full h-auto justify-center items-center'>

          <div className='grid ml-10 -gap-x-20 lg:grid-cols-2 grid-cols-1 bg-black w-full h-auto justify-center'>
            <h1 className="lg:w-[30rem] lg:ml-36 mt-20 text-white lg:text-[6rem] md:text-[35px] sm:text-[25px] font-bold font-sans leading-[8rem] sm:ml-10">The future with #42</h1>
            <div className="lg:m-20 lg:w-[35rem] lg:pb-10 pb-16 md:w-[50rem] md:h-auto sm:w-[25rem] mr-5 text-white text-[5rem]">
              <YoutubeIFrame videoId={videoId} title={""} />
              <div className="flex lg:items-start lg:justify-start py-5 items-center justify-center">
              <button
                type="button"
                className="relative rounded-md bg-primary-500 px-6 py-5 text-sm font-bold text-white shadow-sm hover:bg-primary-700 overflow-hidden group">
                YOU CAN BUY TOKENS HERE
              </button>
              </div>
            </div>
            
          </div>

        </div>
        <div className='grid mb-auto w-full h-auto justify-center items-center'>
        <div className="lg:flex grid w-auto lg:grid-cols-2 grid-cols-1 lg:ml-44 h-auto justify-center mx-auto">
            <div className="border-primary-500 border lg:h-auto lg:w-[39rem] lg:mb-[12rem] lg:-ml-[5.5rem] lg:-mt-[12rem] lg:mx-0 mx-[4rem] bg-white flex items-center"> {/* Updated this line */}
              <div className="lg:ml-16 lg:py-[0.5rem] my-[5rem] lg:mr-40 text-justify lg:w-[25rem] lg:mx-10 mx-5 h-auto">
                <h1 className="font-bold lg:text-[3rem] text-[1.5rem] h-auto">Lorem Ipsum</h1>
                <p className="mt-5 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p className="mt-5 text-md">Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="mt-5 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  
              </div>
            </div>
            <div className="items-end lg:ml-5 pb-[12rem] sm:mx-10 sm:mt-5 flex">
              <Image
                src="/homepage_image.png"
                alt="Your Company"
                width={600}
                height={600}
                className="mx-auto h-auto w-auto" />
            </div>
          </div>
        </div>
        <div className="bg-black -mt-28">
          <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
            <div className="flex-col ml-20 mt-16 mx-auto">
              <h1 className=" text-primary-500 font-bold text-sm">SERVICES</h1>
              <h1 className=" text-white lg:text-[50px] font-bold font-sans pb-32 text-[30px]">News from the scene...</h1>
            </div>


          </div>
        </div>
        <div className="bg-dark-950">
          <div className="mx-auto max-w-7xl px-6 sm:pt-24 lg:px-8 lg:py-20 items-center justify-center">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16 justify-center items-center lg:mx-20 md:mx-20 mx-10 text-justify">
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>
              <div className="bg-white w-auto h-auto rounded-lg">
                <div className="m-5">
                  <h1 className="text-md">Lorem ipsum dolor sit amet</h1>
                  <p className="text-sm font-light mt-2">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  <a className="text-primary-500 text-sm font-bold">read more</a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div></>
  );
};