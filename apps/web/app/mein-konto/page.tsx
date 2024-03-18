import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import MyAccount from "@/module/MyAccount"

export const metadata: Metadata = {
  title: `Mein Konto - ${METADATA.TITLE}`,
  description: METADATA.DESCRIPTION,
}

export default function HomePage() {
  return <MyAccount />
}
