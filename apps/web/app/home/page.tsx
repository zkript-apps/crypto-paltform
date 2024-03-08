import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import Home from "@/module/Home"

export const metadata: Metadata = {
  title: `Home - ${METADATA.TITLE}`,
  description: METADATA.DESCRIPTION,
}

export default function HomePage() {
  return <Home />
}
