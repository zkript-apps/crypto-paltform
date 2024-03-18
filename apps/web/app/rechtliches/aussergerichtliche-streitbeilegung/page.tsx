import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import DisputeResolution from "@/module/Legal/DisputeResolution"

export const metadata: Metadata = {
    title: `Aussergerichtliche streitbeilegung - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const DisputePage = () => {
    return <DisputeResolution />
}

export default DisputePage