import { cookies } from "next/headers";
import { createTransport } from "nodemailer";

export async function POST(req: Request, resp: Response) {
  try {
    const body = await req.json();
    const { email, content } = body;

    if (!email || !content) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }
    const cookieStore = await cookies();
    const lastSent = cookieStore.get("send_email_at")?.value;

    if (lastSent) {
      const last = new Date(lastSent).getTime();
      const now = Date.now();

      // 10 min = 600 000 ms
      if (now - last < 600000) {
        return new Response(JSON.stringify({ error: "Too many requests" }), {
          status: 403,
        });
      }
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

    cookieStore.set({
      name: "send_email_at",
      value: new Date().toISOString(),
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dni
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
    });
  }
}
