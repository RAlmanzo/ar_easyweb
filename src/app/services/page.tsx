import Cta from "@/components/sections/cta";
import ServiceCard from "@/components/ui/service-card";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { Code, Database, Layers, Palette, Smartphone, Zap } from "lucide-react";
import * as motion from "motion/react-client"
import Script from "next/script";
import { getWebPageSchema, getMetadata } from "@/lib/metadata";

export const metadata = getMetadata(
    "Diensten - AR EasyWeb | Webdesigner in West-Vlaanderen",
    "Mijn web diensten: Frontend websites, Headless CMS, responsive design, en SEO-optimalisatie. Snel, modern en schaalbaar.",
    "/about",
    "/og-servicesimage.png"
);

export default function Services() {
    const firstServiceContent = {
        id: "frontend",
        leftAnimation: fadeInLeft,
        rightAnimation: fadeInRight,
        title: "Frontend Websites",
        firstParagraph: "Perfect voor bedrijven die een professionele online aanwezigheid willen zonder complexe backend-systemen.",
        secondParagraph: "Deze websites zijn razendsnel, veilig en optimaal geoptimaliseerd voor zoekmachines. Ideaal voor landingspagina's, portfolio's, bedrijfswebsites, en productpresentaties.",
        features: [
            {
                icon: <Palette className="h-6 w-6 text-[#32CD32]" />,
                title: "Modern Design",
                description:
                    "Strakke, professionele designs met subtiele animaties en interacties.",
            },
            {
                icon: <Zap className="h-6 w-6 text-[#32CD32]" />,
                title: "Optimale Prestaties",
                description:
                    "Gebouwd met moderne technologieën zoals React en Next.js voor maximale snelheid.",
            },
            {
                icon: <Smartphone className="h-6 w-6 text-[#32CD32]" />,
                title: "Mobile-First",
                description:
                    "Volledig responsive en geoptimaliseerd voor mobiele gebruikers.",
            },
        ],
        benefitsTitle: "Voordelen",
        benefits: [
            "Bliksemsnelle laadtijden",
            "Perfecte SEO-optimalisatie",
            "Responsive op alle apparaten",
            "Moderne, aantrekkelijke designs",
            "Lage hostingkosten",
            "Hoge beveiligingsstandaard",
        ],
        reverse: false,
    };

    const secondServiceContent = {
        id: "cms",
        leftAnimation: fadeInLeft,
        rightAnimation: fadeInRight,
        title: "Headless CMS Websites",
        firstParagraph: "Voor bedrijven die regelmatig content willen aanpassen en volledige controle willen over hun website-inhoud.",
        secondParagraph: "Een headless CMS biedt het beste van twee werelden: de flexibiliteit en snelheid van een moderne frontend, gecombineerd met een gebruiksvriendelijk contentbeheersysteem.",
        features: [
            {
                icon: <Database className="h-6 w-6 text-[#32CD32]" />,
                title: "Content Beheer",
                description:
                    "Eenvoudig je content beheren via een intuïtieve interface. Geen technische kennis vereist.",
            },
            {
                icon: <Layers className="h-6 w-6 text-[#32CD32]" />,
                title: "Flexibele Architectuur",
                description:
                    "Schaalbare opzet die meegroeit met jouw business. Klaar voor de toekomst.",
            },
            {
                icon: <Code className="h-6 w-6 text-[#32CD32]" />,
                title: "API-First Aanpak",
                description:
                    "Integreer eenvoudig met andere tools en platformen via moderne API's.",
            },
        ],
        benefitsTitle: "Perfect voor",
        benefits: [
            "Blogs en nieuwswebsites",
            "E-commerce platformen",
            "Corporate websites met veel content",
            "Websites met meerdere beheerders",
            "Multi-channel publicatie",
        ],
        reverse: true,
    };

    const steps = [
        {
            step: "01",
            title: "Kennismaking",
            description: "We bespreken jouw wensen, doelen en budget.",
        },
        {
            step: "02",
            title: "Ontwerp",
            description: "Ik maak een design concept dat past bij jouw merk.",
        },
        {
            step: "03",
            title: "Ontwikkeling",
            description: "De website wordt gebouwd met moderne technologieën.",
        },
        {
            step: "04",
            title: "Lancering",
            description: "Je website gaat live en ik blijf beschikbaar voor support.",
        },
    ]

    const ctaContent = {
        title: "Welke oplossing past bij jou?",
        description: "Neem contact op en ik help je graag verder met advies op maat.",
        buttonText: "Plan een gesprek",
    }

    return (
        <>
            <Script
                id="services-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        getWebPageSchema(
                            "Diensten - Web Development Services",
                            "Frontend websites, CMS-oplossingen en webdevelopment services",
                            "/services"
                        )
                    ),
                }}
                strategy="afterInteractive"
            />
            <div className="min-h-screen">
                <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Diensten</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                                Van eenvoudige websites tot geavanceerde CMS-oplossingen. Ik help je met de juiste technologie voor jouw
                                project.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <ServiceCard {...firstServiceContent} />
                <ServiceCard {...secondServiceContent} />

                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                    <div className="max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Hoe werken we samen?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                                Een duidelijk proces van start tot finish
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-[#32CD32] mb-4">{step.step}</div>
                                        <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Cta content={ctaContent} />
            </div>
        </>
    );
}