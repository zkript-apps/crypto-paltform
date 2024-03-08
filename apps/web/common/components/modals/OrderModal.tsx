
import React from "react"
import ModalContainer from "./ModalContainer"
interface AddUserProps {
  isOpen: boolean
  onClose: () => void
}

const OrderModal = ({
  isOpen: showModal,
  onClose: hideModal,
}: AddUserProps) => {
 
  return (
    <ModalContainer
        size="sm"
        title="Order"
        onClose={hideModal}
        isOpen={showModal}
      >
           
           <div className="flex-col mx-10">
           <div className="mt-2">
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
      Salesperson:
      </label>
      <div className="">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
          placeholder=""
          aria-describedby="email-description"
        />
      </div>
     
    </div>
    <div className="mt-2">
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
      Choose the number of tokens:
      </label>
      <div>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
          placeholder=""
          aria-describedby="email-description"
        />
      </div>
     
    </div>
    <div className="mt-2">
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
     Current price per token (€):
      </label>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
          placeholder=""
          aria-describedby="email-description"
        />
      </div>
     
    </div>
    <div className="mt-2">
      <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
      Total amount to pay (€):
      </label>
      <div className="">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
          placeholder=""
          aria-describedby="email-description"
        />
      </div>
     
    </div>
   
        <div className="relative flex items-start mt-10">
          <div className="flex h-6 items-center">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
            />
          </div>
          <div className="ml-2 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              Accept general terms and conditions.
            </label>{' '}
            <span id="comments-description" className="text-gray-500">
              <span className="sr-only">New comments </span>
            </span>
          </div>
        </div>
           
          
          <div className="h-[.02rem] bg-gray-300 my-5">
          </div>

          <div className="lg:flex-col pb-5 gap-x-2 text-end ">
            <button
                onClick={hideModal}
                type="button"
                className="text-[1rem] shadow-lg rounded-md  bg-primary-500 py-2 px-3 font-normal text-white hover:bg-primary-700">
                Cancel
              </button>
              <button
                type="button"
                className="text-[1rem] shadow-lg rounded-md ml-2 bg-primary-500  py-2 px-3 font-normal text-white hover:bg-primary-700">
                Reset
              </button>
              <button
                type="button"
                className="text-[1rem] shadow-lg rounded-md ml-2 bg-primary-500 w-auto py-2 px-3 font-normal text-white hover:bg-primary-700 overflow-hidden group">
                Binding order
              </button>
          </div>
          </div>

      </ModalContainer>
  )
}

export default OrderModal