import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, occasion, date, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Photography Website <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL as string,
      subject: `New Booking Inquiry: ${occasion} on ${date} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Occasion: ${occasion}
Event Date: ${date}
Message: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
