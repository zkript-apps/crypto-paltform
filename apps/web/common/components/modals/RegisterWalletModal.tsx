import React from "react"
import ModalContainer from "./ModalContainer"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"
import { IoLogoDiscord } from "react-icons/io5"
import Dropdown from "../Dropdown"
interface AddUserProps {
  isOpen: boolean
  onClose: () => void
}

const RegisterWalletModal = ({
  isOpen: showModal,
  onClose: hideModal,
}: AddUserProps) => {
  return (
    <ModalContainer
      size="sm"
      title="Register"
      onClose={hideModal}
      isOpen={showModal}
    >
      <div className="mx-10 mt-5">
        <h1 className="text-gray-900 text-xl font-semibold">
          Your blockchain wallet in one click
        </h1>
      </div>
      <div className="grid grid-rows-2 mx-10">
        <button
          type="button"
          className="mt-10 inline-flex items-center gap-x-2 rounded-md border border-gray-300 px-3.5 py-5 justify-center  text-lg font-semibold text-gray-500  hover:text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          <FaGoogle className="-ml-5 h-8 w-8 mr-2" aria-hidden="true" />
          Continue with Google
        </button>
        <div className="pt-3 grid grid-cols-3 gap-x-3 py-6">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md border border-gray-300 px-3.5 justify-center  text-lg font-semibold text-gray-500  hover:text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <FaFacebook className="h-10 w-10" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md border border-gray-300 px-3.5 justify-center  text-lg font-semibold text-gray-500  hover:text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <FaTwitter className="h-10 w-10" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md border border-gray-300 px-3.5  justify-center  text-lg font-semibold text-gray-500  hover:text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <IoLogoDiscord className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="mx-10 h-[.02rem] bg-gray-300 my-1"></div>
      <p className="bg-white text-center px-1 mx-[45%]  text-gray-500 -mt-5 text-lg font-semibold">
        or
      </p>

      <div className="grid grid-rows-2 mx-10">
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="block lg:text-lg w-full px-5 rounded-md border-0 py-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
            placeholder="you@example.com"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <EnvelopeIcon
              className="h-8 w-8 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-3 inline-flex items-center gap-x-2 rounded-md border border-gray-300 px-3.5 py-5 justify-center  text-lg font-semibold text-gray-500  hover:text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Continue with Email
        </button>
        <Dropdown />
        <div className="grid grid-rows-2">
          <div className="flex-col">
            <h1 className="font-bold text-md">Notice:</h1>
            <p className="text-sm text-gray-900 my-2">
              Web3Auth does not store any data related to your social logins.
            </p>
          </div>
          <div className="grid grid-cols-2 leading-5 mb-5 text-indigo-950">
            <div>
              <p>Terms of Use | Data protection-</p>
              <p>Regulations</p>
              <p className=" italic">Version 4.1.2</p>
            </div>
            <div className="text-end flex-col">
              <p>Self-custody-</p>
              <p>Login through</p>
              <p className="font-bold">W web3auth</p>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}

export default RegisterWalletModal
