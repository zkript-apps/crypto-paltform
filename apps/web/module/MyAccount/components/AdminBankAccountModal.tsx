import React from "react"
import PurchaseOrderForm from "../PurchaseOrderForm"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import ModalWrapper from "./ModalWrapper"
import AdminBankAccount from "../AdminBankAccount"

interface AdminBankAccountModalProps {
  isOpen: boolean
  onClose: () => void
  id?: string
}

const AdminBankAccountModal = ({
  isOpen,
  onClose,
  id,
}: AdminBankAccountModalProps) => {
  if (!isOpen) return null
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <ModalWrapper>
            <AdminBankAccount onClose={onClose} />
          </ModalWrapper>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default AdminBankAccountModal
