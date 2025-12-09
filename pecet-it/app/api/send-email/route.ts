import { WorkerMailer } from "worker-mailer";

export const runtime = "edge";

const emailList = ["pecet3107@gmail.com", "g.pacewicz@gmail.com"];

export async function POST(req: Request) {
  try {
    const { from, message } = (await req.json()) as {
      from: string;
      message: string;
    };

    if (!from || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const mailer = await WorkerMailer.connect({
      credentials: {
        username: process.env.SMTP_USER!,
        password: process.env.SMTP_PASS!,
      },
      authType: "plain",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
    });

    for (const toEmail of emailList) {
      await mailer.send({
        from: { name: "pecet.it", email: process.env.SMTP_USER! },
        to: { name: "", email: toEmail },
        reply: from,
        subject: "Question regarding pecet.it web solutions",
        text: message,
        html: `<p>${message}</p>`,
      });
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
