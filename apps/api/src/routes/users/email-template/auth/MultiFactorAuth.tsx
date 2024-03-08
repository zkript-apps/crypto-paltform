import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components"
import * as React from "react"
import {
  code,
  container,
  heading,
  hr,
  logo,
  main,
  paragraph,
  reportLink,
} from "../styles"

interface MultiFactorAuthProps {
  validationCode: string
}

export const MultiFactorAuth = ({ validationCode }: MultiFactorAuthProps) => (
  <Html>
    <Head />
    <Preview>Your multi-factor authentication code for Crypto Platform</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${process.env.WEB_URL}/logo-single.png`}
          width="42"
          height="42"
          alt="Crypto Platform"
          style={logo}
        />
        <Heading style={heading}>
          Your multi-factor authentication code for Crypto Platform
        </Heading>
        <Text style={paragraph}>
          This code will only be valid for the next 3 minutes.
        </Text>
        <code style={code}>{validationCode}</code>
        <Hr style={hr} />
        <Link href={process.env.WEB_URL} style={reportLink}>
          Crypto Platform
        </Link>
      </Container>
    </Body>
  </Html>
)

export default MultiFactorAuth
