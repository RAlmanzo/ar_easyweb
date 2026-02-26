import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2, { message: "Naam moet minstens 2 tekens zijn" }),
    email: z.email({ message: "Ongeldig emailadres" }),
    phone: z
        .string()
        .optional()
        .refine(val => !val || /^[+0-9\s()\-\/]{7,20}$/.test(val), {
            message: "Voer een geldig telefoonnummer in",
        }),
    projectType: z.string().min(1, { message: "Kies een projecttype" }),
    budget: z.string().min(1, { message: "Kies een budget" }),
    deadline: z.string().min(1, { message: "Kies een deadline" }),
    message: z.string().min(10, { message: "Bericht moet minstens 10 tekens zijn" }),
    companyWebsite: z.string().optional(), // honeypot
})