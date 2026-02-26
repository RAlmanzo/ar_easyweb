import { fadeInUp } from "@/lib/animations"
import * as motion from "motion/react-client"
import AnimatedFAQAccordion from "../ui/animated-faq-accordion"
import Script from "next/script"
import { getFAQSchema } from "@/lib/metadata"

export default function FAQ() {
    type FAQItem = {
        value: string
        question: string
        answer: string
    }

    const faqs: FAQItem[] = [
        {
            value: "pricing",
            question: "Hoeveel kost een website laten maken?",
            answer:
                "De prijs hangt af van de complexiteit en functionaliteiten van je website. Een eenvoudige one-page website start vanaf een ander budget dan een uitgebreide website met CMS. Ik werk altijd met een duidelijke offerte vooraf zodat je precies weet wat je kunt verwachten. Neem gerust contact op voor een vrijblijvend gesprek.",
        },
        {
            value: "timeline",
            question: "Hoe lang duurt het om een website te bouwen?",
            answer:
                "Een eenvoudige website is doorgaans klaar binnen 2 tot 4 weken. Een uitgebreidere website met CMS-functionaliteit vraagt gemiddeld 4 tot 8 weken. De exacte doorlooptijd hangt af van de omvang van het project en hoe snel feedback en content worden aangeleverd.",
        },
        {
            value: "headless-cms",
            question: "Wat is een headless CMS en heb ik dat nodig?",
            answer:
                "Een headless CMS is een beheersysteem waarmee je zelf teksten, afbeeldingen en pagina's kunt aanpassen zonder technische kennis. Het is ideaal als je regelmatig content wil updaten, zoals blogartikelen, nieuwsberichten of producten. Als je website vooral statisch is en zelden verandert, volstaat een eenvoudige frontend website.",
        },
        {
            value: "self-edit",
            question: "Kan ik zelf mijn website aanpassen na oplevering?",
            answer:
                "Absoluut! Bij websites met een CMS kun je zelf eenvoudig teksten, afbeeldingen en pagina's wijzigen via een gebruiksvriendelijk dashboard. Ik voorzie ook een korte opleiding zodat je vlot aan de slag kunt. Voor technische aanpassingen kun je altijd bij mij terecht.",
        },
        {
            value: "mobile-friendly",
            question: "Is mijn website mobielvriendelijk?",
            answer:
                "Ja, elke website die ik bouw is volledig responsief. Dit betekent dat je website er perfect uitziet op smartphones, tablets en desktops. Dit is niet alleen belangrijk voor je bezoekers, maar ook voor je positie in Google zoekresultaten.",
        },
        {
            value: "hosting",
            question: "Zorgen jullie ook voor hosting en domeinnaam?",
            answer:
                "Ik adviseer je graag over de beste hosting-oplossing voor jouw website. Ik werk met snelle en betrouwbare hostingplatformen zoals Vercel. De domeinnaam kun je zelf registreren of ik kan je hierbij begeleiden.",
        },
        {
            value: "maintenance",
            question: "Wat als ik na de oplevering nog aanpassingen wil?",
            answer:
                "Na oplevering bied ik een ondersteuningsperiode aan waarin kleine aanpassingen inbegrepen zijn. Daarna kun je kiezen voor een onderhoudscontract of aanpassingen op uurbasis laten uitvoeren. Ik blijf beschikbaar voor al je vragen en updates.",
        },
        {
            value: "google",
            question: "Wordt mijn website ook vindbaar in Google?",
            answer:
                "Elke website wordt gebouwd met SEO-basisoptimalisatie: snelle laadtijden, correcte structuur, meta-tags, alt-teksten voor afbeeldingen en een sitemap. Dit zorgt voor een goede basis om gevonden te worden in zoekmachines.",
        },
        {
            value: "seo",
            question: "Wat is SEO?",
            answer:
                "SEO staat voor Search Engine Optimization, oftewel zoekmachineoptimalisatie. Het is het proces waarbij je website zo wordt ingericht dat deze hoger scoort in de organische (gratis) zoekresultaten van zoekmachines zoals Google. Dit omvat technische optimalisatie (snelheid, structuur, mobiele weergave), het gebruik van relevante zoekwoorden in je content, en het opbouwen van autoriteit. Hoe beter je SEO, hoe meer bezoekers je website gratis vindt via zoekmachines.",
        },
        {
            value: "geo",
            question: "Wat is GEO?",
            answer: "GEO staat voor Generative Engine Optimization. Het is het proces waarbij je content zo optimaliseert dat AI-systemen zoals ChatGPT, Google AI of andere generatieve zoekmachines je antwoorden kunnen begrijpen, verwerken en direct citeren in hun reacties. Dit omvat duidelijke en feitelijke content, een logische structuur, correcte bronvermelding, en het gebruik van schema markup zodat AI je content beter kan interpreteren en aanbevelen."
        },
    ]

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(getFAQSchema(faqs)), // direct de faqs gebruiken
                }}
                strategy="afterInteractive"
            />
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4 text-balance">
                            Veelgestelde vragen
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Antwoorden op de meest voorkomende vragen over mijn diensten.
                        </p>
                    </motion.div>

                    <AnimatedFAQAccordion faqs={faqs} />
                </div>
            </section>
        </>
    );
}