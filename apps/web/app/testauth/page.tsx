import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import TestAuth from "@/module/TestAuth"

export const metadata: Metadata = {
  title: `Test Auth - ${METADATA.TITLE}`,
  description: METADATA.DESCRIPTION,
}

export default function HomePage() {
  return <TestAuth />
}
