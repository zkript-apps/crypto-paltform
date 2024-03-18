import Imprint from "@/module/Legal/Imprint"
import { Metadata } from "next"
import { METADATA } from "@/common/constants"

export const metadata: Metadata = {
    title: `Impressum - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const ImprintPage = () => {
    return <Imprint />
}

export default ImprintPage