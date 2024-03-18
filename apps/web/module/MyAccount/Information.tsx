import useGetExchangeRate from "@/common/hooks/useGetExchangeRate"
import useSessionStore from "@/common/store/useSessionStore"
import useTorusStore from "@/common/store/useTorusStore"
import {
  AtSign,
  CandlestickChart,
  CoinsIcon,
  Landmark,
  User2Icon,
  Wallet,
} from "lucide-react"
import React, { useEffect } from "react"
import Web3 from "web3"

const Information = () => {
  const torus = useTorusStore((state) => state.torus);
  const { data } = useGetExchangeRate();
  const { email, walletId, role } = useSessionStore((state) => state);
  let balance = 0;
  useEffect(() => {
    const init = async () => {
      try {
        const web3 = new Web3(torus?.provider as any)

        // Get user's Ethereum public address
        const address = (await web3.eth.getAccounts())[0]

        // Get user's balance in ether
        const bal = web3.utils.fromWei(
          await web3.eth.getBalance(address as string), // Balance is in wei
          "ether"
        )
        balance = Number(bal)
      } catch (error) {
        balance = 0;
      }
    }
    init()
  }, [torus])

  const information = [
    {
      title: "Email",
      value: email ? email : "-",
      icon: AtSign,
    },
    {
      title: "Wallet-ID",
      value: walletId ? walletId : "-",
      icon: Wallet,
    },
    {
      title: "Investition",
      value: `${balance} €`,
      icon: Landmark,
    },
    {
      title: "Preis",
      value: data?.rate ? `${data?.rate} €` : "0.00 €",
      icon: CoinsIcon,
    },
    {
      title: "Wertänderung",
      value: "0%",
      icon: CandlestickChart,
    },
  ]
  return (
    <div className="bg-white text-left pt-5 rounded-2xl">
      <div className="sm:flex-auto px-5">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          Wallet-Übersicht
        </h1>
        <p className="text-sm font-semibold text-gray-600">
          Benutzer-, Wallet- und Münzinformationen zum Anzeigen.
        </p>
      </div>
      <div className="w-full mt-4 flex flex-col gap-2">
        {role === "Admin" && (
          <div
            className="flex items-center gap-x-4 p-2 px-5 bg-green-100 hover:cursor-default"
          >
            <div>
              <User2Icon />
            </div>
            <div className="flex flex-col">
              <div className="font-medium">Administrator</div>
              <div className="text-sm text-gray-600 break-all">Sie sind als Administrator angemeldet</div>
            </div>
          </div>
        )}
        {information.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="flex items-center gap-x-4 p-2 px-5 hover:bg-gray-100 hover:cursor-default"
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
        <div className="text-xs font-normal bg-gray-100 rounded-b-2xl p-5">
          Balance stck: {balance} x Preis: {data?.rate ? data?.rate : 0.00} € = Wert: {balance * (data?.rate ? data?.rate : 0.00)} €
        </div>
      </div>
    </div>
  )
}

export default Information
