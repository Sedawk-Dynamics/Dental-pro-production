import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, service, date, time } = body

    const serviceMap: Record<string, string> = {
      cleaning: "Teeth Cleaning",
      whitening: "Teeth Whitening",
      implants: "Dental Implants",
      braces: "Braces & Aligners",
      rootcanal: "Root Canal",
      cosmetic: "Cosmetic Dentistry",
      checkup: "General Checkup",
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"Dental Pro Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: "🦷 New Appointment Booking",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #16a34a;">New Appointment Request</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}

          <p><strong>Service:</strong> ${serviceMap[service] || service}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>

          <hr style="margin: 20px 0;" />

          <p style="font-size: 14px; color: #555;">
            This lead was generated from your Dental Pro website.
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return Response.json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    return Response.json({ success: false }, { status: 500 })
  }
}