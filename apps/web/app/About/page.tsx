
import { Metadata } from "next";
import { METADATA } from "@/common/constants";
import About from "@/module/About";

export const metadata: Metadata = {
  title: `About - ${METADATA.TITLE}`,
  description: METADATA.DESCRIPTION,
};

export default function AboutPage() {
  return <About/>;
}
