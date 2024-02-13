import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>New message from your portfolio site</Preview>
        <Body className="bg-purple-300 text-black">
          <Container>
            <Section className="bg-purple-400 borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                {`You received the following message from Katerin's portfolio:`}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The email of the sender is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
