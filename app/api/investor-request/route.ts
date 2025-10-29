import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

// Initialize Resend client
const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  console.log("[SERVER][API] Investor Request: Received POST request.")

  // Log client initialization
  console.log("[SERVER][API] Investor Request: Resend client initialized.")
  console.log("[SERVER][API] Investor Request: Supabase server client initialized.")

  if (!resendApiKey) {
    console.error("[API] Investor Request: RESEND_API_KEY is not set.")
    return NextResponse.json({ error: "Server configuration error: Resend API key missing." }, { status: 500 })
  }

  try {
    const body = await req.json()
    console.log("[SERVER][API] Investor Request: Parsed request body:", body)

    const {
      name, // This will now be present in the body due to the client-side change
      full_name,
      email,
      organization,
      role_title,
      investment_focus,
      typical_ticket_size,
      additional_information,
    } = body

    // Get IP address and User Agent
    const ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "N/A"
    const user_agent = req.headers.get("user-agent") || "N/A"

    // Insert data into Supabase
    console.log("[SERVER][API] Investor Request: Attempting to insert into database using Supabase...")
    const { data, error: dbError } = await supabase.from("investor_requests").insert([
      {
        name, // Ensure 'name' column is populated
        full_name,
        email,
        organization,
        role: role_title, // Map role_title to 'role' column
        investment_focus,
        ticket_size: typical_ticket_size, // Map typical_ticket_size to 'ticket_size' column
        message: additional_information, // Map additional_information to 'message' column
        ip_address,
        user_agent,
        source: "investor_cta", // Static source identifier
      },
    ])

    if (dbError) {
      console.error(
        "[SERVER][API] Investor Request: Error inserting data into database with Supabase:",
        dbError.message,
      )
      console.error("[SERVER][API] Investor Request: Raw Supabase database error object:", dbError)
      return NextResponse.json({ error: `Database error: ${dbError.message}` }, { status: 500 })
    }

    console.log("[SERVER][API] Investor Request: Data successfully inserted into database:", data)

    // Send confirmation email to the investor
    console.log("[SERVER][API] Investor Request: Attempting to send confirmation email to investor...")
    const { data: investorEmailData, error: investorEmailError } = await resend.emails.send({
      from: "EPℇC Corvux <hello@epec-corvux.com>",
      to: [email],
      subject: "Thank You for Your Investor Inquiry - EPℇC Corvux 📊",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Investor Inquiry Confirmation - EPℇC Corvux</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: white !important; margin: 0; padding: 0; background-color: #000000 !important;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000000 !important;">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background: #1a1a1a !important; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #0F1114 !important; color: white !important; padding: 40px 30px; text-align: center;">
              <img src="https://epec-corvux.com/images/corvux-logo-white.png" alt="EPℇC Corvux Logo" width="50" height="50" style="display: block; margin: 0 auto 16px auto; max-width: 50px; height: auto;" />
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px; color: white !important;">EPℇC Corvux</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; color: white !important;">Maritime ESG Compliance Platform</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px; background: #1a1a1a !important;">
              <h2 style="color: white !important; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Thank You for Your Investment Inquiry! 💼</h2>
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">Dear <strong>${full_name}</strong>,</p>
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">Thank you for your interest in EPℇC Corvux and for your investor inquiry. We have received your request and appreciate you considering us for your investment portfolio.</p>
              
              <!-- Investment Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #2a2a2a !important; border-radius: 8px; margin: 24px 0;">
                <tr>
                  <td style="padding: 32px 24px;">
                    <h3 style="color: white !important; margin: 0 0 24px 0; font-size: 18px; font-weight: 600;">What Happens Next?</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">📊 Our team will prepare and send you our pitch deck within 24 hours</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">📈 You'll receive detailed financial projections and market analysis</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">🎯 We'll schedule a follow-up call to discuss investment opportunities</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">🚀 Learn about our traction in the maritime compliance sector</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">EPℇC Corvux is revolutionizing maritime environmental compliance by centralizing MRV, ETS, DCS, and FuelEU Maritime regulations into a single, streamlined platform. We're positioned to capture significant market share in this rapidly growing sector.</p>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background: white !important; border: 2px solid white; border-radius: 8px; padding: 16px 32px;">
                          <a href="https://epec-corvux.com" style="color: #000000 !important; text-decoration: none; font-weight: 700; font-size: 16px;">Learn More About Our Platform</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">If you have any urgent questions or would like to expedite the process, please don't hesitate to reply to this email.</p>
              <p style="margin: 0; color: white !important; font-size: 16px;"><strong>Best regards,<br>The EPℇC Corvux Team</strong></p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; text-align: center; color: #cccccc !important; background: #2a2a2a !important; border-top: 1px solid #444444;">
              <p style="margin: 4px 0; font-size: 13px;"><strong style="color: white !important;">EPℇC Corvux</strong> - Streamlining Maritime Environmental Compliance</p>
              <p style="margin: 16px 0; font-size: 13px;">
                <a href="https://epec-corvux.com" style="color: #cccccc !important; text-decoration: none; margin: 0 12px;">Website</a>
                <a href="mailto:hello@epec-corvux.com" style="color: #cccccc !important; text-decoration: none; margin: 0 12px;">Contact</a>
              </p>
              <p style="margin: 4px 0; font-size: 13px;">© 2025 EPℇC Corvux. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    })

    if (investorEmailError) {
      console.error("[SERVER][API] Investor Request: Error sending investor confirmation email:", investorEmailError)
      // Continue processing even if email fails, as DB insert was successful
    } else {
      console.log("[SERVER][API] Investor Request: Investor confirmation email sent successfully:", investorEmailData)
    }

    // Send notification email to your team
    console.log("[SERVER][API] Investor Request: Attempting to send notification email to team...")
    const { data: teamEmailData, error: teamEmailError } = await resend.emails.send({
      from: "EPℇC Corvux Website <noreply@epec-corvux.com>",
      to: ["hello@epec-corvux.com"], // Replace with your team's email
      subject: `New Investor Inquiry from ${full_name} (${organization})`,
      html: `
        <p>A new investor inquiry has been submitted via the website:</p>
        <ul>
          <li><strong>Full Name:</strong> ${full_name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Organization:</strong> ${organization}</li>
          <li><strong>Role/Title:</strong> ${role_title}</li>
          <li><strong>Investment Focus:</strong> ${investment_focus || "N/A"}</li>
          <li><strong>Typical Ticket Size:</strong> ${typical_ticket_size || "N/A"}</li>
          <li><strong>Additional Information:</strong> ${additional_information || "N/A"}</li>
          <li><strong>IP Address:</strong> ${ip_address}</li>
          <li><strong>User Agent:</strong> ${user_agent}</li>
        </ul>
        <p>Please follow up with them promptly.</p>
      `,
    })

    if (teamEmailError) {
      console.error("[SERVER][API] Investor Request: Error sending team notification email:", teamEmailError)
      // Continue processing even if email fails
    } else {
      console.log("[SERVER][API] Investor Request: Team notification email sent successfully:", teamEmailData)
    }

    return NextResponse.json({ message: "Investor request submitted successfully!" }, { status: 200 })
  } catch (error: any) {
    console.error("[SERVER][API] Investor Request: Unexpected error:", error)
    return NextResponse.json({ error: error.message || "An unexpected error occurred." }, { status: 500 })
  }
}
