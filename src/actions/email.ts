"use server"

import { formSchema } from "@/zod/Contact-form-schema";
import { Resend } from "resend"
//import { Redis } from "@upstash/redis"
//import { Ratelimit } from "@upstash/ratelimit"
//import { headers } from "next/headers"

/*const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"), // 3 aanvragen per 10 minuten
})*/

export type EmailState = {
  success?: boolean
  message?: string
  error?: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    projectType?: string[]
    budget?: string[]
    deadline?: string[]
    message?: string[]
  }
}



export async function sendEmail(prevState: EmailState, formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, message: "E-mails tijdelijk uitgeschakeld" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY!)

  const data = Object.fromEntries(formData)

  // Honeypot
  if (data.companyWebsite) {
    return { success: true, message: "Email succesvol verzonden" }
  }

  const validatedFormData = formSchema.safeParse(data)
  if (!validatedFormData.success) {
    const formFieldErrors = validatedFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        phone: formFieldErrors?.phone,
        projectType: formFieldErrors?.projectType,
        budget: formFieldErrors?.budget,
        deadline: formFieldErrors?.deadline,
        message: formFieldErrors?.message,
      },
    };
  }

  const { name, email, phone, projectType, budget, deadline, message } = validatedFormData.data

  // Rate limiting op basis van IP
  //const ip = headers().get("x-forwarded-for") ?? "anonymous"
  //const { success } = await ratelimit.limit(ip)

  /*if (!success) {
    return { error: "Te veel aanvragen. Probeer later opnieuw." }
  }*/

  try {
    await resend.emails.send({
      from: email,
      to: "ralmanzo@gmail.com",
      subject: `Nieuwe projectaanvraag van ${name}`,
      replyTo: email,
      html: `
            <div style="font-family:Arial,sans-serif;background:#f9f9f9;padding:40px;">
              <div style="max-width:600px;margin:auto;background:#ffffff;padding:30px;border-radius:12px;">
                <h2 style="margin-bottom:20px;">Nieuwe Projectaanvraag 🚀</h2>
                <p><strong>Naam:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Email:</strong> ${phone}</p>
                <p><strong>Projecttype:</strong> ${projectType}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Deadline:</strong> ${deadline}</p>
                <hr style="margin:20px 0;">
                <p><strong>Beschrijving:</strong></p>
                <p>${message}</p>
              </div>
            </div>
          `,
    })

    // Auto-reply naar klant (branded)
    await resend.emails.send({
      from: "ralmanzo@gmail.com",
      to: email,
      subject: "Bedankt voor je aanvraag 🙌",
      replyTo: "ralmanzo@gmail.com",
      html: `
            <div style="font-family:Arial,sans-serif;background:#f4f4f4;padding:40px;">
              <div style="max-width:600px;margin:auto;background:#ffffff;padding:30px;border-radius:12px;">
                <h2 style="color:#000;">Bedankt ${name}!</h2>
                <p>Ik heb je aanvraag goed ontvangen.</p>
                <p>Je kan binnen 24 uur een persoonlijk antwoord verwachten.</p>
                <p style="margin-top:30px;">Groeten,<br/><strong>Jouw Naam</strong><br/>Webdesigner</p>
              </div>
            </div>
          `,
    })

    return { success: true, message: "Email succesvol verzonden" }
  } catch {
    return { error: "Er ging iets mis bij het verzenden." }
  }
}