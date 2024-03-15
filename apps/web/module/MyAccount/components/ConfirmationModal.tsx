import React from "react"
import PurchaseOrderForm from "../PurchaseOrderForm"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import ModalWrapper from "./ModalWrapper"

interface ConfirmModalProps {
  isOpen: boolean
  title: string
  body: string
  onClose: () => void
  actionFunction: () => void
  isLoading: boolean
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  actionFunction,
  title,
  body,
  isLoading,
}: ConfirmModalProps) => {
  if (!isOpen) return null

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <ModalWrapper>
            <svg
              className="w-7 h-7 mx-auto text-dark1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <div className="text-center">
              <h3 className="text-lg font-bold mt-6">{title}</h3>
              <p className="mb-4 text-gray-500">
                {body}
              </p>
            </div>
            <div className="grid grid-cols-2 justify-center items-center mt-6 gap-x-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancel
              </button>
              <button
                onClick={() => actionFunction()}
                type="button"
                className="rounded-md bg-primary-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? (
                  <div
                    className="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  title
                )}
              </button>
            </div>
          </ModalWrapper>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default ConfirmationModal
