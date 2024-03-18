import {
  AtSign,
  Banknote,
  BanknoteIcon,
  CandlestickChart,
  CoinsIcon,
  CreditCard,
  Landmark,
  SquareUser,
  User2Icon,
  Wallet,
} from "lucide-react"
import React from 'react'

interface AdminBankAccounProps {
  onClose: () => void
}

const AdminBankAccount = ({ onClose }: AdminBankAccounProps) => {
  const information = [
    {
      title: "Name des Karteninhabers",
      value: "John Doe",
      icon: SquareUser,
    },
    {
      title: "Bank Nummer",
      value: "63412334122334",
      icon: CreditCard,
    },
    {
      title: "Bank Name",
      value: `Bank of Germany`,
      icon: Landmark,
    },
  ]
  return (
    <div>
      <h2>Senden Sie das Geld für Ihre Bestellung an diese Bankverbindung.</h2>
      <div className="mt-4">
      {information.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.title}
            className="flex items-center gap-x-4 p-2 hover:bg-gray-100 hover:cursor-default"
          >
            <div>
              <Icon />
            </div>
            <div className="flex flex-col">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-600 break-all">{item.value}</div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default AdminBankAccount