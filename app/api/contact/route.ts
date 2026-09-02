import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message, company } = body;

    // Required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    // Honeypot — bots ke liye
    if (company?.trim()) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully.",
      });
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Contact form is not configured correctly.",
        },
        { status: 500 }
      );
    }

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: "Bay Area Hardwood <onboarding@resend.dev>",

      // ABHI TESTING KE LIYE YAHAN APNI EMAIL LAGAO
      to: ["abeerbhai102030@gmail.com"],

      subject: "New Contact Form Submission - Bay Area Hardwood",

      // Customer ke email par Reply karne ke liye
      replyTo: email,

      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong while sending the message.",
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data?.id);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending the message.",
      },
      { status: 500 }
    );
  }
}