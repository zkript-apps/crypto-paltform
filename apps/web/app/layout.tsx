import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "@/app/globals.css"
import QueryClientWrapper from "@/common/components/QueryClientWrapper"
import GlobalModalWrapper from "@/common/components/GlobalModalWrapper"
import { Toaster } from "react-hot-toast"
import React from "react"
import { APP_NAME } from "@repo/constants"
import Header from "@/module/LandingPage/components/Header"
import Footer from "@/common/components/layout/footer"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: APP_NAME,
  description: `Generated by ${APP_NAME}`,
}

export default async function RootLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <link rel="icon" type="image/x-icon" href={LOGO_SINGLE_IMAGE} /> */}
      <body className={nunito.className}>
        <Toaster />
        <QueryClientWrapper>
          <GlobalModalWrapper>
            <Header/>
            <div className="min-h-screen">{children}</div>
            <Footer/>
          </GlobalModalWrapper>
        </QueryClientWrapper>
      </body>
    </html>
  )
}
