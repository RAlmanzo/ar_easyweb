import { fadeInUp } from "@/lib/animations"
import * as motion from "motion/react-client"
import Carousel from "@/components/ui/carousel"
import Cta from "@/components/sections/cta"
import Script from "next/script"
import { getMetadata, getWebPageSchema } from "@/lib/metadata"

export const metadata = getMetadata(
    "Portfolio - AR EasyWeb | Webdesigner in West-Vlaanderen",
    "Bekijk mijn recente webdesign en development projecten voor KMO’s in West-Vlaanderen. Van moderne websites tot CMS-oplossingen.",
    "/portfolio",
    "/og-portfolioimage.png"
);

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: "Foodtruck Delights",
            description: "Moderne website met online bestellingssysteem voor verhuring Foodtruck.",
            image: "/me.jpeg",
            tags: ["Next.js", "Tailwind CSS", "Responsive"],
        },
        {
            id: 2,
            title: "Bakkerij De Korenbloem",
            description: "Professionele website met CMS voor een ambachtelijke bakkerij, inclusief bestelformulier.",
            image: "/me.jpeg",
            tags: ["Next.js", "Sanity CMS", "SEO"],
        },
        {
            id: 3,
            title: "Coaching & Therapie",
            description: "Kalme, professionele website met blog voor een therapeutische praktijk.",
            image: "/me.jpeg",
            tags: ["React", "Contentful", "Blog"],
        },
        {
            id: 4,
            title: "AR Dream Paints",
            description: "Dynamische landingspagina voor een tech startup met focus op binnen en buiten decoratie.",
            image: "/me.jpeg",
            tags: ["Next.js", "Framer Motion", "CTA Optimization"],
        },
        {
            id: 5,
            title: "Dak en Gevel Reiniging",
            description: "Visueel aantrekkelijke website voor een bedrijf dat dak- en gevelreiniging uitvoert.",
            image: "/me.jpeg",
            tags: ["Next.js", "Tailwind CSS", "Reservations"],
        },
        {
            id: 6,
            title: "Coaching & Therapie",
            description: "Kalme, professionele website met blog voor een therapeutische praktijk.",
            image: "/me.jpeg",
            tags: ["Next.js", "Strapi", "Member Portal"],
        },
    ]

    const ctaContent = {
        title: "Laten we jouw project bespreken",
        description: "Elk project is uniek. Neem contact op voor een gepersonaliseerde offerte.",
        buttonText: "Start je project"
    }

    return (
        <>
            <Script
                id="portfolio-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        getWebPageSchema(
                            "Portfolio - AR EasyWeb | Webdesigner in West-Vlaanderen",
                            "Bekijk mijn recente webdesign en development projecten voor KMO’s in West-Vlaanderen. Van moderne websites tot CMS-oplossingen.",
                            "/portfolio"
                        )
                    ),
                }}
                strategy="beforeInteractive"
            />
            <div className="min-h-screen overflow-hidden">
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Portfolio</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Een selectie van recente projecten waar ik trots op ben. Van kleine bedrijfswebsites tot complexe
                                CMS-oplossingen.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <Carousel projects={projects} />
                <Cta content={ctaContent} />
            </div>
        </>
    )
}