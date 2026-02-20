import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      fullName,
      companyName,
      email,
      phone,
      whereSelling,
      quantity,
      product,
    } = body

    if (!fullName || !companyName || !email || !phone || !whereSelling || !quantity || !product) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const to = process.env.CONTACT_EMAIL_TO ?? process.env.WHOLESALE_EMAIL_TO ?? 'hello@topflightboost.com'

    const whereLabels: Record<string, string> = {
      retail: 'Retail store',
      online: 'Online store',
      both: 'Both retail and online',
      other: 'Other',
    }
    const productLabels: Record<string, string> = {
      boost: 'Top Flight Boost',
      gold: 'Top Flight Gold',
      both: 'Both products',
    }

    await resend.emails.send({
      from: 'Top Flight Wholesale <noreply@topflightboost.com>',
      to,
      replyTo: email,
      subject: `Wholesale Inquiry from ${companyName} (${fullName})`,
      html: `
        <h2>New Wholesale Inquiry</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Where are they selling?</strong> ${whereLabels[whereSelling] ?? whereSelling}</p>
        <p><strong>Anticipated Quantity:</strong> ${quantity}</p>
        <p><strong>Product interested in:</strong> ${productLabels[product] ?? product}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Wholesale form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}
