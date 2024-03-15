import React from "react";
import PurchaseOrderForm from "./PurchaseOrderForm";

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
    <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] w-full max-h-full flex bg-gray-500 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <PurchaseOrderForm onClose={onClose} id={id} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrderModal;
