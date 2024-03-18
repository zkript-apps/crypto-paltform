import DataProtection from "@/module/Legal/DataProtection"
import { Metadata } from "next"
import { METADATA } from "@/common/constants"

export const metadata: Metadata = {
    title: `Datenschutz - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const DataProtectionPage = () => {
    return <DataProtection />
}

export default DataProtectionPage