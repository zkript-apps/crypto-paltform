import { Metadata } from "next";
import { METADATA } from "@/common/constants";
import MyAccount from "@/module/MyAccount";

export const metadata: Metadata = {
  title: `Home - ${METADATA.TITLE}`,
  description: METADATA.DESCRIPTION,
};

export default function HomePage() {
  return <MyAccount />;
}
