import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, company, interest, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, or message).' },
        { status: 400 }
      );
    }

    // Technical note for developers & partners:
    // This is the clean integration junction. To forward inquiries to an inbox:
    // e.g. using Resend:
    // await resend.emails.send({ from: 'onboarding@resend.dev', to: siteConfig.contactEmail, ... })
    console.log('[WAYS IN ADVISORY] New Inbound Inquiry:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      company: company || 'Not specified',
      interest: interest || 'General',
      messageLength: message.length,
    });

    return NextResponse.json({
      success: true,
      status: 'received',
      notice: 'Advisory inquiry logged. Ready for email delivery provider connection.',
      data: {
        name,
        email,
        company,
        interest,
      },
    });
  } catch (error) {
    console.error('[WAYS IN ADVISORY] Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
