"use client";

export default function MyAccount() {
  return (
    <>
      <style jsx global>{`
        body {
          overflow-x: hidden;
        }
      `}</style>
      <div className="lg:mx-auto mb-auto items-center justify-between">
        
        <div className='grid py-10 bg-slate-900 w-full lg:h-auto  h-auto justify-center items-center text-center '>
        <div className="lg:mx-0 mx-10">
          <h1 className="mt-20 text-white lg:text-[6rem] md:text-[35px] sm:text-[25px] font-semibold font-sans">Mein Konto</h1>

          <div className="bg-white w-full lg:w-auto h-auto py-5 rounded-2xl mt-20 border-[#dc0bb4] border justify-center items-center flex">
            <div className="m-5">
              <button
                type="button"
                className="text-[1.6rem] relative shadow-lg rounded-md bg-[#dc0bb4] px-5 py-5 text-sm font-normal text-white hover:bg-indigo-900 overflow-hidden group">
                Wallet Registrieren
              </button>
            </div>
          </div>

          <div className="bg-white w-full lg:w-[100rem] h-auto py-8 rounded-2xl mt-5 border-[#dc0bb4] border justify-center items-center flex">
           
          </div>

          <div className="bg-white flex-col w-full lg:w-[100rem] h-auto py-10 rounded-2xl mt-5 border-[#dc0bb4] border justify-center items-center flex">
            <h1 className="underline text-[2rem] font-extrabold">Wallet Übersicht:</h1>
            <h1 className="text-md font-normal mt-10">Nicht in der Wallet eingeloggt.</h1>
            <h1 className="text-md font-normal mt-8">Balance Stck: 0 x Preis: 1.3340 € = Wert: 0.00 €</h1>
            <div className="grid grid-cols-3 gap-5 text-md font-normal mt-5">
            <h1>Investition: 0.00 €</h1>
            <h1>ØPreis: 0.0000 €</h1>
            <h1 className="font-bold text-blue-600">Wertveränderung: 0 %</h1>
            </div>
           
          </div>
          <div className="bg-white flex-col w-full lg:w-[100rem] font-semibold h-auto py-10 rounded-2xl mt-5 border-[#dc0bb4] border text-start flex">
            <div className="mx-10">
              <h1 className=" text-[2.3rem] font-extrabold">Kl gehört die Zukunft</h1>
              <p className="text-lg mt-5 leading-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus neque sed blandit viverra. Donec finibus 
              in arcu non molestie. Ut euismod turpis at ex condimentum, quis fringilla turpis lobortis. 
              Nullam vitae turpis ut neque cursus faucibus. Fusce dictum molestie interdum. Duis viverra 
              semper sem, at tincidunt est congue ut. Integer felis neque, efficitur at neque egestas, euismod 
              volutpat nisl. Proin nec viverra quam. Proin sollicitudin, erat nec porta suscipit, neque nisl
               convallis orci, in efficitur dui neque sit amet dui. Vestibulum accumsan pretium libero, at 
               volutpat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
               cubilia curae. Quelle: <span className="text-[#dc0bb4]">www.statista.com</span></p>
               <h1 className=" text-[2.3rem] font-extrabold my-5">Künstliche Intelligenz</h1>
              <p className="text-lg mt-5 leading-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus neque sed blandit viverra. Donec finibus 
              in arcu non molestie. Ut euismod turpis at ex condimentum, quis fringilla turpis lobortis. 
              Nullam vitae turpis ut neque cursus faucibus. Fusce dictum molestie interdum. Duis viverra 
              semper sem, at tincidunt est congue ut. Integer felis neque, efficitur at neque egestas, euismod 
              volutpat nisl. Proin nec viverra quam. Proin sollicitudin, erat nec porta suscipit, neque nisl
               convallis orci, in efficitur dui neque sit amet dui. Vestibulum accumsan pretium libero, at 
               volutpat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
               cubilia curae. Quelle: <span className="text-[#dc0bb4]">www.statista.com</span></p>
               
            </div>
           
           
          </div>
          <div className="bg-white flex-col w-full lg:w-[100rem] font-semibold h-auto py-10 rounded-2xl mt-5 border-[#dc0bb4] border text-start flex">
            <div className="mx-10">
              <h1 className=" text-[2.3rem] font-extrabold">Widerrufsrecht</h1>
              <p className="text-lg mt-5 leading-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus neque sed blandit viverra. Donec finibus 
              in arcu non molestie. Ut euismod turpis at ex condimentum, quis fringilla turpis lobortis. 
              Nullam vitae turpis ut neque cursus faucibus. Fusce dictum molestie interdum. Duis viverra 
              semper sem, at tincidunt est congue ut. Integer felis neque, efficitur at neque egestas, euismod 
              volutpat nisl. Proin nec viverra quam. Proin sollicitudin, erat nec porta suscipit, neque nisl
               convallis orci, in efficitur dui neque sit amet dui. Vestibulum accumsan pretium libero, at 
               volutpat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
               cubilia curae;</p>
               <div className="my-5 underline">
               <p className="mt-10">Widerruf per Post an:</p>
               <p className="mt-20">Widerruf per E-Mail an:</p>
               <p className="mt-10">Widerruf per FAX an:</p>             
               </div>
               <p className="text-lg mt-10 leading-24">Duis pulvinar vel metus eget fringilla. Suspendisse non eros eros. Integer ipsum dolor, consequat vitae ante non, viverra elementum quam. Vestibulum laoreet posuere lacus, ac rutrum tellus tincidunt vel. Phasellus id enim quam. Morbi sagittis felis ut risus pulvinar volutpat. Maecenas scelerisque leo non est tristique, sit amet consequat lectus tempus.</p>
               <h1 className="text-[1.2rem] font-extrabold my-5">Folgen des Widerrufs</h1>
               <p className="text-lg mt-5 leading-24">Morbi fringilla mi et volutpat ultrices. Morbi posuere, eros aliquet suscipit sollicitudin, orci ipsum tristique nulla, fringilla faucibus ex ligula a risus. In ac massa ut orci consequat ultrices. Donec efficitur vulputate odio in consequat. Fusce in enim nulla. Proin molestie odio ac eleifend sodales. Fusce vitae fermentum lacus. Integer et pellentesque metus, id semper mi.</p>
               <p className="text-lg mt-10 leading-24">Donec pretium auctor gravida. Quisque eget velit sapien. Morbi sed efficitur augue. Morbi sit amet mauris malesuada, gravida odio id, commodo libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse aliquet molestie leo, eget fermentum quam tincidunt vitae. Vivamus eu feugiat mi. Etiam malesuada in urna ac fringilla. Donec eu magna consequat eros ornare condimentum. Sed tempor ultricies leo, et porta metus vestibulum a. </p>
               <h1 className="text-[1.2rem] font-extrabold my-5">Ende der Widerrufsbelehrung</h1>
               <div className="w-full h-1 bg-[#dc0bb4] my-10"></div>
               <h1 className="text-[2rem]  my-5">Disclaimer</h1>
               <p className="text-lg mt-5 leading-24">LIn hac habitasse platea dictumst. Cras blandit ipsum at pharetra convallis. Nullam tempus lorem id massa mollis volutpat. Vestibulum id dapibus ante. Curabitur scelerisque tellus dolor, efficitur vulputate nisi aliquet ullamcorper. Etiam et eleifend nulla. Nulla eu dolor sem. Aenean interdum venenatis turpis sit amet ornare. Pellentesque vel magna consequat nunc ullamcorper volutpat.</p>
               <p className="text-lg mt-5 leading-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus neque sed blandit viverra. Donec finibus 
              in arcu non molestie. Ut euismod turpis at ex condimentum, quis fringilla turpis lobortis. 
              Nullam vitae turpis ut neque cursus faucibus. Fusce dictum molestie interdum. Duis viverra 
              semper sem, at tincidunt est congue ut. Integer felis neque, efficitur at neque egestas, euismod 
              volutpat nisl. Proin nec viverra quam. Proin sollicitudin, erat nec porta suscipit, neque nisl
               convallis orci, in efficitur dui neque sit amet dui. Vestibulum accumsan pretium libero, at 
               volutpat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
               cubilia curae;</p>
            </div>
           
           
          </div>

        </div>

        <div className='grid mb-auto w-full h-auto justify-center items-center'>
    
        </div>

        

        

      
      </div>
      </div>
    </>
  );
};  