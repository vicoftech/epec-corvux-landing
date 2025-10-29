import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { createServerSupabaseClient } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // Crear cliente de Supabase para el servidor
    const supabase = createServerSupabaseClient()

    // Guardar el lead en Supabase
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking existing user:", checkError)
    }

    // Si el usuario ya existe, actualizamos la fecha y la fuente
    if (existingUser) {
      const { error: updateError } = await supabase
        .from("waitlist")
        .update({
          updated_at: new Date().toISOString(),
          last_source: source,
          signup_count: (existingUser.signup_count || 0) + 1,
        })
        .eq("email", email)

      if (updateError) {
        console.error("Error updating existing user:", updateError)
      }
    } else {
      // Si es un nuevo usuario, lo insertamos
      const { error: insertError } = await supabase.from("waitlist").insert([
        {
          email,
          first_source: source,
          last_source: source,
          user_agent: request.headers.get("user-agent") || "Unknown",
          ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown",
          signup_count: 1,
        },
      ])

      if (insertError) {
        console.error("Error inserting new user:", insertError)
      }
    }

    console.log("New waitlist signup:", { email, source, timestamp: new Date().toISOString() })

    // Send welcome email to user
    try {
      await resend.emails.send({
        from: "EPℇC Corvux <noreply@epec-corvux.com>",
        to: [email],
        subject: "Welcome to EPℇC Corvux Waitlist! 🚢",
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to EPℇC Corvux</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #252528; margin: 0; padding: 0; background-color: #f8f9fa;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa;">
    <tr>
      <td align="center" style="padding: 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 600px;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0F1114 0%, #2a2d31 100%); color: white; padding: 40px 30px; text-align: center;">
              <img src="https://epec-corvux.com/images/corvux-logo-white.png" alt="EPℇC Corvux Logo" width="50" height="50" style="display: block; margin: 0 auto 16px auto; max-width: 50px; height: auto;" />
              <h1 style="margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px; color: #252528;">EPℇC Corvux</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px; color: #252528">Maritime ESG Compliance Platform</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px; background: white;">
              <h2 style="color: #252528; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Welcome to the Future of Maritime Compliance! 🌊</h2>
              <p style="margin: 0 0 16px 0; color: #252528; font-size: 16px;">Thank you for joining our waitlist, <strong>${email}</strong>. You're now part of an exclusive group that will get early access to EPℇC Corvux.</p>
              
              <!-- Features Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8f9fa; border-radius: 8px; margin: 24px 0;">
                <tr>
                  <td style="padding: 32px 24px;">
                    <h3 style="color: #252528; margin: 0 0 24px 0; font-size: 18px; font-weight: 600;">What's Next?</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 12px 0; color: #252528; font-size: 16px;">🚀 You'll be among the first to access our private beta</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #252528; font-size: 16px;">📊 Get exclusive insights into maritime ESG compliance</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #252528; font-size: 16px;">🔔 Receive updates on our development progress</td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; color: #252528; font-size: 16px;">⚡ Early access to new features and regulations</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 16px 0; color: #252528; font-size: 16px;">EPℇC Corvux centralizes compliance across MRV, ETS, DCS, and FuelEU Maritime regulations. Monitor emissions, validate data, and submit reports to regulators all from a single streamlined workspace.</p>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 24px 0;">
                <tr>
                  <td align="center">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background: white; border: 2px solid #0F1114; border-radius: 8px; padding: 16px 32px;">
                          <a href="https://epec-corvux.com" style="color: #0F1114; text-decoration: none; font-weight: 700; font-size: 16px;">Learn More About EPℇC Corvux</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0; color: #252528; font-size: 16px;">Have questions? Simply reply to this email and we'll get back to you quickly.</p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 30px; text-align: center; color: #6B7280; background: #f8f9fa; border-top: 1px solid #e5e7eb;">
              <p style="margin: 4px 0; font-size: 13px;"><strong style="color: #252528;">EPℇC Corvux</strong> - Streamlining Maritime Environmental Compliance</p>
              <p style="margin: 16px 0; font-size: 13px;">
                <a href="https://epec-corvux.com" style="color: #6B7280; text-decoration: none; margin: 0 12px;">Website</a>
                <a href="mailto:hello@epec-corvux.com" style="color: #6B7280; text-decoration: none; margin: 0 12px;">Contact</a>
              </p>
              <p style="margin: 4px 0; font-size: 13px;">© 2025 EPℇC Corvux. All rights reserved.</p>
              <p style="font-size: 11px; color: #9ca3af; margin-top: 16px;">
                You received this email because you signed up for our waitlist. 
                <a href="https://epec-corvux.com/unsubscribe" style="color: #9ca3af;">Unsubscribe</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      })
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't fail the request if email fails
    }

    // Notify team about new signup
    try {
      await resend.emails.send({
        from: "EPℇC Corvux <noreply@epec-corvux.com>",
        to: ["team@epec-corvux.com"], // Update with your actual team email
        subject: `🎉 New Waitlist Signup - ${email}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>New Waitlist Signup</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 500px; margin: 0 auto; padding: 20px; }
              .header { background: #0F1114; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
              .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
              .label { font-weight: 600; color: #0F1114; }
              .value { color: #4a5568; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🚢 New Waitlist Signup</h2>
              </div>
              <div class="content">
                <div class="info-row">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="info-row">
                  <div class="label">Source:</div>
                  <div class="value">${source || "Unknown"}</div>
                </div>
                <div class="info-row">
                  <div class="label">Timestamp:</div>
                  <div class="value">${new Date().toLocaleString()}</div>
                </div>
                <div class="info-row">
                  <div class="label">User Agent:</div>
                  <div class="value">${request.headers.get("user-agent") || "Unknown"}</div>
                </div>
                <div class="info-row">
                  <div class="label">Website:</div>
                  <div class="value"><a href="https://epec-corvux.com" style="color: #0F1114;">epec-corvux.com</a></div>
                </div>
              </div>
            </div>
          </body>
          </html>
        `,
      })
    } catch (notifyError) {
      console.error("Failed to notify team:", notifyError)
      // Don't fail the request if team notification fails
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined waitlist! Check your email for confirmation.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
