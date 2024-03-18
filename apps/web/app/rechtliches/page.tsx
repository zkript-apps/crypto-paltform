import { Metadata } from "next"
import { METADATA } from "@/common/constants"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: `Rechtliches - ${METADATA.TITLE}`,
    description: METADATA.DESCRIPTION,
}

const CancellationPage = () => {
    redirect("/rechtliches/impressum");
    return <></>
}

export default CancellationPage