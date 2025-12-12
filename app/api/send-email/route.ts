import { createTransport } from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, content } = body;

    if (!email || !content) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    // Lista odbiorców
    const targets = ["pecet3107@gmail.com", "g.pacewicz@gmail.com"];
    // Konfiguracja transportu Nodemailer (SMTP Gmail)
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Wysyłanie
    await transporter.sendMail({
      from: email,
      to: targets,
      subject: "New message from pecet.it",
      text: content,
      html: `
        <p>${content}</p>
        <div>
            <i>${email}</i>
        </div>
        `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
    });
  }
}
