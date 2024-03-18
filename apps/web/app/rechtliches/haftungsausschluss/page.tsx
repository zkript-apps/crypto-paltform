    import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import Disclaimer from "@/module/Legal/Disclaimer"

export const metadata: Metadata = {
    title: `Haftungsausschluss - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const DisclaimerPage = () => {
    return <Disclaimer />
}

export default DisclaimerPage