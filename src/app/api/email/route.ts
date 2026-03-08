import { Resend } from "resend";
import StripeWelcomeEmail from "../../../../react-email/emails/stripe-welcome";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(process.env.RESEND_APIKEY);
    console.log(process.env.EMAIL_TO);
    const resend = new Resend(process.env.RESEND_APIKEY);

    const { email, message } = body;

    console.log(email, message);

    const { error } = await resend.emails.send({
      from: `Portfolio <${process.env.NOREPLY}>`,
      to: `${process.env.EMAIL_TO}`,
      subject: "Portfolio - Contact",
      react: StripeWelcomeEmail(),
    });

    console.log(error);

    return new Response(null, { status: 204 });
  } catch (reason) {
    console.log(reason);

    const message =
      reason instanceof Error ? reason.message : "Unexpected error";

    return new Response(message, { status: 500 });
  }
}
