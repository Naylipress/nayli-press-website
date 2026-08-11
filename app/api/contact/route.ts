import { NextResponse } from "next/server";

import { contactConfig } from "@/lib/contact-config";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please check your message and try again" },
      { status: 400 },
    );
  }

  if (cleanText(payload.company)) {
    return NextResponse.json({ message: "Message received" });
  }

  const name = cleanText(payload.name);
  const email = cleanText(payload.email);
  const message = cleanText(payload.message);

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    message.length < contactConfig.minimumMessageLength ||
    message.length > contactConfig.maximumMessageLength
  ) {
    return NextResponse.json(
      { message: "Please complete each field correctly" },
      { status: 400 },
    );
  }

  if (
    contactConfig.provider !== "formspree" ||
    !contactConfig.formspreeEndpoint.startsWith("https://formspree.io/")
  ) {
    return NextResponse.json(
      {
        message: `Online message delivery is not connected yet. Please email ${contactConfig.recipientEmail}`,
      },
      { status: 503 },
    );
  }

  try {
    const providerResponse = await fetch(contactConfig.formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
      cache: "no-store",
    });

    if (!providerResponse.ok) {
      return NextResponse.json(
        {
          message: `Your message could not be sent. Please email ${contactConfig.recipientEmail}`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thank you — your message has been sent",
    });
  } catch {
    return NextResponse.json(
      {
        message: `Your message could not be sent. Please email ${contactConfig.recipientEmail}`,
      },
      { status: 502 },
    );
  }
}
