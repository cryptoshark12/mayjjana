import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const form = await req.formData();

  const type = String(form.get("type") ?? "Message");
  const name = String(form.get("name") ?? "");
  const phone = String(form.get("phone") ?? "");
  const date = String(form.get("date") ?? "");
  const time = String(form.get("time") ?? "");
  const guests = String(form.get("guests") ?? "");
  const message = String(form.get("message") ?? "");

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;

  await transporter.sendMail({
    from: `Mayjjana Website <${process.env.SMTP_USER}>`,
    to,
    subject: `${type}: ${name}`,
    text:
      `Type: ${type}
` +
      `Name: ${name}
` +
      `Phone: ${phone}
` +
      (date ? `Date: ${date}
` : "") +
      (time ? `Time: ${time}
` : "") +
      (guests ? `Guests: ${guests}
` : "") +
      `
Message:
${message}`,
  });

  // Redirect back to reservations with a "sent" flag (works even if user posted from another page)
  return NextResponse.redirect(new URL("/reservations?sent=1", req.url));
}
