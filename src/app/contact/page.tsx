import { getMetadata } from "@/lib/metadata"
import Contact from "./contact";

export const metadata = getMetadata(
    "Contact - AR EasyWeb | Webdesigner in West-Vlaanderen",
    "Neem contact op voor een offerte of vrijblijvend gesprek. Freelance webdesigner voor KMO’s in West-Vlaanderen.",
    "/contact",
    "https://areasyweb.be/og-contactimage.png"
);

export default function ContactPage() {
    return <Contact />;
}