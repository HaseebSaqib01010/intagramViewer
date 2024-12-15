import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: any) {
  const resend = new Resend("re_EwJucmZN_6KCy12icdSRTMV9nxWQQWZ2s");
  try {
    const reqData = await req.json();
    console.log("reqData: ", reqData);
    const { from, to, name, subject, message } = reqData;

    if (!from || !to || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject,
      html: `
        <p><strong>From:</strong> ${from}</p>
        <br />
        <p><strong>Name:</strong> ${name}</p>
        <br />
        <p><strong>Subject:</strong> ${subject}</p>
        <br />
        <p><strong>Message:</strong> ${message}</p>
        <br />
      `,
    });

    console.log("data: ", data);

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
