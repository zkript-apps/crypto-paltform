
import React from "react"
import ModalContainer from "./ModalContainer"
import Image from "next/image"
interface AddUserProps {
  isOpen: boolean
  onClose: () => void
}

const TransferDetailsModal = ({
  isOpen: showModal,
  onClose: hideModal,
}: AddUserProps) => {
 
  return (
    <ModalContainer
        size="custom"
        title="Transfer Details"
        onClose={hideModal}
        isOpen={showModal}
      >
           
           <div className="flex-col mx-10">
            <h1 className="mt-3 font-bold text-lg">Recipient</h1>
            <div className="flex-col mt-2 font-semibold">
                <div className="grid grid-cols-2">
                    <p>Bank</p>
                    <p>Savings Bank</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>IBAN</p>
                    <p>DE83 3245 000</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>BIC</p>
                    <p>WELA</p>
                </div>
                <div className="grid grid-cols-2">
                    <p>Amount</p>
                    <p>100.00</p>
                </div>
            <p className="my-2">Verwendungszweck 65b1e53304d85</p>

            <Image
            src={"/qrcodePlaceholder.png"} 
            alt={"QR Code"}
            width={200}
            height={200}
            className="w-full h-auto px-10 py-2"
            />
            </div>
   
  
   
     
           
          
          <div className="h-[.02rem] bg-gray-300 my-5">
          </div>

          <div className="lg:flex-col pb-5 gap-x-2 text-end ">
        
              <button
              onClick={hideModal}
                type="button"
                className="text-[1rem] shadow-lg rounded-md ml-2 bg-[#dc0bb4] w-auto py-2 px-3 font-normal text-white hover:bg-indigo-900 overflow-hidden group">
                Close
              </button>
          </div>
          </div>

      </ModalContainer>
  )
}

export default TransferDetailsModal