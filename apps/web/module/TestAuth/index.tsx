"use client"
import React, { useState, useEffect } from "react"
import Torus from "@toruslabs/torus-embed"
import Web3 from "web3"
import useGetExchangeRate from "./hook/useGetExchangeRate"

const TestAuth = () => {
  const [torus, setTorus] = useState<Torus | null>(null)
  const { data } = useGetExchangeRate()
  useEffect(() => {
    const init = async () => {
      const torus = new Torus()
      await torus.init()
      await torus.login() // await torus.ethereum.enable()
      setTorus(torus)
    }
    init()
  }, [])

  const logout = async () => {
    await torus?.logout()
  }

  const getEthBalance = async () => {
    try {
      const web3 = new Web3(torus?.provider as any)

      // Get user's Ethereum public address
      const address = (await web3.eth.getAccounts())[0]

      // Get user's balance in ether
      const balance = web3.utils.fromWei(
        await web3.eth.getBalance(address as string), // Balance is in wei
        "ether"
      )
      return balance
    } catch (error) {
      return error as string
    }
  }

  const openTorusTransferPage = async () => {
    try {
      torus?.showWallet("transfer", { data: "test" })
    } catch (error) {
      return error as string
    }
  }

  const getEthExchangeRate = async () => {
    console.log("test", data)
  }

  const getUserInfo = async () => {
    const userInfo = await torus?.getUserInfo("")
    console.log("dsds", userInfo)
  }

  return <div onClick={() => logout()}>index</div>
}

export default TestAuth
