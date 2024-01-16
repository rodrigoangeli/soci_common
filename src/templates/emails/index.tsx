//@ts-nocheck
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Email = ({ preview, headerText, children }) => (
  <Html>
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img src={``} width="49" height="21" alt="Logo" />
          <Hr style={hr} />
          {headerText && <Text style={header}>{headerText}</Text>}
          {children}
          <Hr style={hr} />
          <Text style={footer}>Copyright @ 2024 - nome.</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const header = {
  color: "#414552",
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  letterSpacing: "-1px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
