import React from "react";
import PurchaseOrderForm from "../PurchaseOrderForm";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ModalWrapper from "./ModalWrapper";

interface PurchaseOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  id?: string
}

const PurchaseOrderModal = ({
  isOpen,
  onClose,
  id
}: PurchaseOrderModalProps) => {
  if (!isOpen) return null;
  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <ModalWrapper>
          <PurchaseOrderForm onClose={onClose} id={id} />
        </ModalWrapper>
      </Dialog>
    </Transition.Root>
    </>
    
    
  );
};

export default PurchaseOrderModal;
