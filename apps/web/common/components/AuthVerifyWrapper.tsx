"use client"
import React, { useEffect } from "react"
import useSessionStore from "../store/useSessionStore"
import useTorusStore from "../store/useTorusStore"
import useGetUserByEmail from "../hooks/user/useGetUserByEmail"

type Props = {
  children: React.ReactNode
}

const AuthVerifyWrapper = ({ children }: Props) => {
  const torusUser = useTorusStore((state) => state.user);
  const sessionEmail = useSessionStore((state) => state.email);
  const setSession = useSessionStore((state) => state.setSession);
  const { data } = useGetUserByEmail();
  useEffect(() => {
    if(!sessionEmail && data) {
      setSession({ email: data.item.email, walletId: data.item.walletId, role: data.item.userType })
    } 
  }, [torusUser, data])
  
  return (
    <>
      {children}
    </>
  )
}
export default AuthVerifyWrapper
