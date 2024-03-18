"use client"
import React, { useEffect } from "react"
import Torus from "@toruslabs/torus-embed"
import useTorusStore from "../store/useTorusStore"

type Props = {
  children: React.ReactNode
}

const TorusWrapper = ({ children }: Props) => {
  const setTorus = useTorusStore((state) => state.setTorus);
  const torus = useTorusStore((state) => state.torus);
  const setUser = useTorusStore((state) => state.setUser);
  const user = useTorusStore((state) => state.user);
  useEffect(() => {
    const init = async () => {
      const torus = new Torus()
      await torus.init({
        whiteLabel: {
          theme: {
            isDark: false,
            colors: {}
          }, logoDark: "", logoLight: "", defaultLanguage: "de"
        },
      })
      torus.hideTorusButton();
      setTorus(torus)
    }
    init()
  }, [])
  useEffect(() => {
    const init = async () => {
      if (torus && torus.isLoggedIn) {
        const torusUser = await torus?.getUserInfo("");
        if (!user && torusUser) {
          if (torusUser) {
            setUser(torusUser)
          }
        }
      }
    }
    init();
  }, [torus])
  return (
    <>
      {children}
    </>
  )
}
export default TorusWrapper
