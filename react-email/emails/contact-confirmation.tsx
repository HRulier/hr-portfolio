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

interface ContactConfirmationEmailProps {
  senderName: string;
}

export const ContactConfirmationEmail = ({
  senderName,
}: ContactConfirmationEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>Votre message a bien été reçu</Preview>
      <Container style={container}>
        <Section style={box}>
          <Text style={heading}>
            HUGO RULIER<span style={tonic}>.DEV</span>
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>Bonjour {senderName},</Text>
          <Text style={paragraph}>
            Merci pour votre message. Je l'ai bien reçu et reviendrai vers vous
            dans les plus brefs délais.
          </Text>
          <Text style={paragraph}>À bientôt,</Text>
          <Text style={signature}>Hugo</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Cet email est un accusé de réception automatique, merci de ne pas y
            répondre.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmationEmail;

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

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const signature = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "bold" as const,
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
