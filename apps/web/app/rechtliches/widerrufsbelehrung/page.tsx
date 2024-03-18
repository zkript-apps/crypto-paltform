import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import CancellationPolicy from "@/module/Legal/CancellationPolicy"

export const metadata: Metadata = {
    title: `Widerrufsbelehrung - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const CancellationPage = () => {
    return <CancellationPolicy />
}

export default CancellationPage