import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message, company } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact form is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New Contact Form Submission - Bay Area Hardwood",
        from_name: name,
        name,
        email,
        phone,
        message,
        company,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error("Web3Forms error:", data);

      return NextResponse.json(
        {
          success: false,
          message:
            data.message ||
            "Something went wrong while sending the message.",
        },
        { status: 500 }
      );
    }

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