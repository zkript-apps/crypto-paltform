"use client";
import Image from "next/image";
import YoutubeIFrame from "@/common/components/YoutubeIFrame";


export default function About() {

  const videoId = "0oRVLf16CMU";

  return (
    <><style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style><div className="lg:mx-auto flex-grow mb-auto items-center justify-between">

        <div className='grid mb-auto bg-black w-full lg:h-[50rem] h-auto justify-center items-center'>

          <div className='grid  -gap-x-20 sm:pb-10 lg:grid-cols-2 sm:grid-cols-1 bg-black w-full lg:h-[40rem] h-auto justify-center'>
            <div className="flex-col">
              <h1 className="lg:size-[33rem] lg:ml-32 text-white lg:text-[6rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans leading-[7rem] sm:ml-10">The #42
                and the bot</h1>
              <p className="lg:size-[33rem] lg:ml-[8rem] text-white lg:text-[2rem] md:text-[35px] md:ml-5 sm:text-[25px] font-bold font-sans sm:ml-10 lg:-mt-[19rem]">Because #21 is only half the story!</p>
            </div>
            <div className="mx-10 ml-40 text-white text-[5rem] ">
              <Image
                src="/about_image.jpg"
                alt="Your Company"
                width={350}
                height={100}
                className="mx-auto h-auto w-auto" />
              <button
                type="button"
                className="relative rounded-md bg-primary-500 px-6 py-5 text-sm  font-bold text-white shadow-sm hover:bg-primary-700 overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    YOU CAN BUY TOKENS HERE
                  </div>
                  {/* <div className="opacity-0 ml-2 text-[]transition-opacity duration-300 group-hover:opacity-100">
      &gt;
    </div> */}
                </div>
              </button>
            </div>
          </div>

        </div>
        <div className="grid mb-auto w-full h-auto justify-center items-center">
          <div className="lg:flex w-auto grid-cols-1 lg:m-0 h-auto justify-center mx-auto">
            <div className="border-primary-500 border lg:h-auto lg:w-[39rem] lg:mb-[16rem] lg:ml-24 lg:-mt-[20rem] lg:mx-0 mx-[4rem] bg-white flex items-center"> {/* Updated this line */}
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
                  <p className="mt-5 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="items-end lg:ml-5 pb-[16rem]  sm:mx-10 sm:mt-5 flex">
         
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
          <div className="lg:mx-auto mx-20 max-w-7xl pt-16 sm:pt-24 lg:px-8 lg:pt-32 items-center justify-center">
            <div className="flex-col lg:ml-16 mt-16 pb-28">
              <h1 className=" text-primary-500 font-bold text-sm">TYPES AND FUNCTIONS</h1>
              <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px] mb-32">What is a bot?</h1>

              <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 justify-center text-justify gap-10 gap-x-16">
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">WHAT IS A BOT?</h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">The word bot is derived from the English term robot . Bots are computer programs that work for a user or another program or simulate a human activity. Bots are typically used to automate certain tasks, meaning they can be performed without specific instructions from humans.
                    A company or individual can use a bot to replace and facilitate a repetitive task that would otherwise have to be performed by a human. Bots are also much faster at these tasks than humans. Although bots can perform useful functions, they can also be malicious and come in the form of malware bots.</p>
                </div>
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">WHAT IS A BOT?</h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">The word bot is derived from the English term robot . Bots are computer programs that work for a user or another program or simulate a human activity. Bots are typically used to automate certain tasks, meaning they can be performed without specific instructions from humans.
                    A company or individual can use a bot to replace and facilitate a repetitive task that would otherwise have to be performed by a human. Bots are also much faster at these tasks than humans. Although bots can perform useful functions, they can also be malicious and come in the form of malware bots.</p>
                </div>
                <div>
                  <h1 className="text-primary-500 text-lg font-extrabold">WHAT IS A BOT?</h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-5">The word bot is derived from the English term robot . Bots are computer programs that work for a user or another program or simulate a human activity. Bots are typically used to automate certain tasks, meaning they can be performed without specific instructions from humans.
                    A company or individual can use a bot to replace and facilitate a repetitive task that would otherwise have to be performed by a human. Bots are also much faster at these tasks than humans. Although bots can perform useful functions, they can also be malicious and come in the form of malware bots.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-dark-950">
          <div className="mx-auto max-w-7xl lg:px-8 items-center justify-center">

            <div className="mx-auto max-w-7xl sm:pt-24 lg:px-8 items-center justify-center">
              <div className="flex-col lg:ml-10 mx-16">
                <h1 className=" text-primary-500 font-bold text-sm">TYPES AND FUNCTIONS</h1>
                <h1 className=" text-white lg:text-[50px] font-bold font-sans text-[30px]">What is Artificial Intelligence (AI)?</h1>

                <div className="text-justify">
                  <h1 className="text-primary-500 font-extrabold pt-16 text-lg">DEFINITION OF AI?</h1>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <p className="text-white font-sans text-md leading-6 font-normal mt-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                </div>
              </div>


            </div>
            <div className="justify-center items-center flex mt-20 lg:ml-16 mx-16">
              <YoutubeIFrame videoId={videoId} title={""} />

            </div>


          </div>

        </div>
      </div></>
  );
};