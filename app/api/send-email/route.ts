import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { from, message } = await req.json();

    if (!from || !message) {
      return new Response(null, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kontakt ze strony" <${process.env.SMTP_USER}>`,
      to: "pecet3107@gmail.com",
      replyTo: from,
      subject: "Nowa wiadomość z formularza",
      text: message,
      html: `<p>${message}</p>`,
    });

    return new Response(null, { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(null, { status: 500 });
  }
}
