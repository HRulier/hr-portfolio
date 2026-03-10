import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationEmailProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

export const ContactNotificationEmail = ({
  senderName,
  senderEmail,
  message,
}: ContactNotificationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Nouveau message de {senderName}</Preview>
      <Container style={container}>
        <Section style={box}>
          <Text style={heading}>
            HUGO RULIER<span style={tonic}>.DEV</span>
          </Text>
          <Hr style={hr} />
          <Text style={label}>// Nouveau message reçu</Text>
          <Text style={meta}>
            <span style={metaKey}>De :</span> {senderName}
          </Text>
          <Text style={meta}>
            <span style={metaKey}>Email :</span> {senderEmail}
          </Text>
          <Hr style={hr} />
          <Text style={label}>// Message</Text>
          <Text style={messageBody}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Reçu depuis le formulaire de contact de hrulier.dev
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactNotificationEmail;

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

const heading = {
  color: "#1a1a1a",
  fontSize: "28px",
  fontWeight: "bold" as const,
  fontFamily: '"Courier New",Courier,monospace',
  margin: "24px 0 0",
};

const tonic = {
  color: "#212be8",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const label = {
  color: "#8898aa",
  fontSize: "12px",
  margin: "0 0 8px",
};

const meta = {
  color: "#1a1a1a",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "4px 0",
};

const metaKey = {
  fontWeight: "bold" as const,
  color: "#525f7f",
};

const messageBody = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "26px",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
