import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { Resend } from "resend"
import { headers } from "next/headers" // Import headers for IP and User Agent

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

// Initialize Resend client
const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  console.log("[SERVER][API] Demo Request: Received POST request.")

  if (!resendApiKey) {
    console.error("[API] Demo Request: RESEND_API_KEY is not set.")
    return NextResponse.json({ error: "Server configuration error: Resend API key missing." }, { status: 500 })
  }

  try {
    const body = await req.json()
    console.log("[SERVER][API] Demo Request: Parsed request body:", body)

    // Destructure fields from the request body
 const { full_name, email, organization, role_title, industry, company_size, message } = body

    // Get IP address and User Agent
    const ip_address = headers().get("x-forwarded-for") || headers().get("x-real-ip") || "N/A"
    const user_agent = headers().get("user-agent") || "N/A"

    // Insert data into Supabase
    console.log("[SERVER][API] Demo Request: Attempting to insert into database using Supabase...")
    const { data, error: dbError } = await supabase.from("demo_requests").insert([
      {
        name: full_name, // FIX: Map full_name from body to 'name' column in DB
        email,
        company: organization,
        role: role_title, // Maps to role column
        role_title, // Maps to role_title in DB
        industry,
        company_size,
        message, // Maps to message in DB
        ip_address,
        user_agent,
        source: "demo_cta", // Static source identifier
        // Note: 'full_name' column in DB is also present, but 'name' is the one causing the error.
        // If 'full_name' in DB is also required, you might need to map it explicitly too,
        // e.g., full_name: full_name,
      },
    ])

    if (dbError) {
      console.error("[SERVER][API] Demo Request: Error inserting data into database with Supabase:", dbError.message)
      console.error("[SERVER][API] Demo Request: Raw Supabase database error object:", dbError)
      return NextResponse.json({ error: `Database error: ${dbError.message}` }, { status: 500 })
    }

    console.log("[SERVER][API] Demo Request: Data successfully inserted into database:", data)

    // Send confirmation email to the user
    console.log("[SERVER][API] Demo Request: Attempting to send confirmation email to user...")
    const { data: userEmailData, error: userEmailError } = await resend.emails.send({
      from: "EPℇC Corvux <hello@epec-corvux.com>", // Ensure this is a verified domain in Resend
      to: [email],
      subject: "Thank You for Your Demo Request - EPℇC Corvux 🚢",
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Request Confirmation - EPℇC Corvux</title>
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
              <h2 style="color: white !important; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Thank You for Your Demo Request! 🌊</h2>
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">Dear <strong>${full_name}</strong>,</p>
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">Thank you for your interest in EPℇC Corvux and for requesting a personalized demo. We have received your inquiry and appreciate you reaching out.</p>
              
              <!-- Demo Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #2a2a2a !important; border-radius: 8px; margin: 24px 0;">
                <tr>
                  <td style="padding: 32px 24px;">
                    <h3 style="color: white !important; margin: 0 0 24px 0; font-size: 18px; font-weight: 600;">What Happens Next?</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">📅 Our team will contact you within 24 hours to schedule your demo</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">🎯 We'll customize the demo based on your specific needs and industry</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">📊 See live demonstrations of MRV, ETS, DCS, and FuelEU Maritime compliance</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: white !important; font-size: 16px;">💬 Ask questions and discuss your specific compliance challenges</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">In the meantime, feel free to explore our platform capabilities and learn more about how EPℇC Corvux can streamline your maritime environmental compliance operations.</p>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background: white !important; border: 2px solid white; border-radius: 8px; padding: 16px 32px;">
                          <a href="https://epec-corvux.com" style="color: #000000 !important; text-decoration: none; font-weight: 700; font-size: 16px;">Explore EPℇC Corvux Platform</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px 0; color: white !important; font-size: 16px;">If you have any urgent questions or need to reschedule, please don't hesitate to reply to this email.</p>
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

    if (userEmailError) {
      console.error("[SERVER][API] Demo Request: Error sending user confirmation email:", userEmailError)
      // Continue processing even if email fails, as DB insert was successful
    } else {
      console.log("[SERVER][API] Demo Request: User confirmation email sent successfully:", userEmailData)
    }

    // Send notification email to your team
    console.log("[SERVER][API] Demo Request: Attempting to send notification email to team...")
    const { data: teamEmailData, error: teamEmailError } = await resend.emails.send({
      from: "EPℇC Corvux <noreply@epec-corvux.com>", // Ensure this is a verified domain in Resend
      to: ["hello@epec-corvux.com"], // Replace with your team's email
      subject: `New Demo Request from ${full_name} (${organization})`,
      html: `
        <p>A new demo request has been submitted via the website:</p>
        <ul>
          <li><strong>Full Name:</strong> ${full_name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Organization:</strong> ${organization}</li>
          <li><strong>Role/Title:</strong> ${role_title}</li>
          <li><strong>Industry:</strong> ${industry || "N/A"}</li>
          <li><strong>Company Size:</strong> ${company_size || "N/A"}</li>
          <li><strong>Additional Information:</strong> ${message || "N/A"}</li>
          <li><strong>IP Address:</strong> ${ip_address}</li>
          <li><strong>User Agent:</strong> ${user_agent}</li>
        </ul>
        <p>Please follow up with them promptly.</p>
      `,
    })

    if (teamEmailError) {
      console.error("[SERVER][API] Demo Request: Error sending team notification email:", teamEmailError)
      // Continue processing even if email fails
    } else {
      console.log("[SERVER][API] Demo Request: Team notification email sent successfully:", teamEmailData)
    }

    return NextResponse.json({ message: "Demo request submitted successfully!" }, { status: 200 })
  } catch (error: any) {
    console.error("[SERVER][API] Demo Request: Unexpected error:", error)
    return NextResponse.json({ error: error.message || "An unexpected error occurred." }, { status: 500 })
  }
}
