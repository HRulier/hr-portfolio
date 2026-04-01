import { Resend } from "resend";
import ContactConfirmationEmail from "../../../../react-email/emails/contact-confirmation";
import ContactNotificationEmail from "../../../../react-email/emails/contact-notification";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
  const { success } = rateLimit(ip, 5, 60 * 60 * 1000); // 5 req/heure

  if (!success) {
    return Response.json(
      { error: "Too Many Requests" },
      {
        status: 429,
        headers: { "X-RateLimit-Remaining": "0" },
      },
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Champs manquants" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Format d'email invalide" },
        { status: 400 },
      );
    }

    const resend = new Resend(process.env.RESEND_APIKEY);

    console.log(process.env.RESEND_APIKEY);
    console.log(process.env.EMAIL_TO);
    console.log(process.env.NOREPLY);

    const [{ error: confirmationError }, { error: notificationError }] =
      await Promise.all([
        resend.emails.send({
          from: `Portfolio <${process.env.NOREPLY}>`,
          to: email,
          subject: "Votre message a bien été reçu",
          react: ContactConfirmationEmail({ senderName: name }),
        }),
        resend.emails.send({
          from: `Portfolio <${process.env.NOREPLY}>`,
          to: `${process.env.EMAIL_TO}`,
          subject: `Nouveau message de ${name}`,
          react: ContactNotificationEmail({
            senderName: name,
            senderEmail: email,
            message,
          }),
        }),
      ]);

    if (notificationError) {
      console.error("Notification email failed:", notificationError);
      return Response.json({ error: "Erreur d'envoi" }, { status: 500 });
    }

    if (confirmationError) {
      console.error("Confirmation email failed:", confirmationError);
    }

    return new Response(null, { status: 204 });
  } catch (reason) {
    console.error(reason);
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}
