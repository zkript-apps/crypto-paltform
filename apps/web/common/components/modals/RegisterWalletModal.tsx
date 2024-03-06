
import React from "react"
import ModalContainer from "./ModalContainer"


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
           <div className="m-5">
           <h1 className="text-gray-900 text-[1.3rem]">Your blockchain wallet in one click</h1>
           </div>
      
      </ModalContainer>
  )
}

export default RegisterWalletModal