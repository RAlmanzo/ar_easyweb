import Cta from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInLeft, fadeInUp, scaleIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";
import Aboutsection from "@/components/sections/about";

export default function About() {
    const tools = [
        "Next.js",
        "React",
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Sanity Headless CMS",
        "Vercel",
        ".NET Backend",
    ]

    const aboutContent = {
        title: "Mijn Aanpak",
        description: "Heldere communicatie en kwaliteit staan voorop",
    }

    const approaches = [
        {
            title: "Persoonlijke aanpak",
            description:
                "Als freelancer werk je direct met mij. Geen tussenpersonen, heldere communicatie en snelle beslissingen.",
        },
        {
            title: "Moderne technologieën",
            description:
                "Ik werk met de nieuwste tools en frameworks om toekomstbestendige websites te bouwen die schaalbaar zijn.",
        },
        {
            title: "Transparante prijzen",
            description:
                "Duidelijke offertes zonder verborgen kosten. Je weet precies waar je aan toe bent voordat we starten.",
        },
    ]

    const ctaContent = {
        title: "Laten we kennismaken",
        description: "Benieuwd wat ik voor jouw bedrijf kan betekenen? Neem vrijblijvend contact op.",
        buttonText: "Plan een gesprek",
    }

    return (
        <div className="min-h-screen overflow-x-hidden">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h1 {...fadeInUp} className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Over Mij</motion.h1>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <motion.p {...fadeInLeft}
                                    transition={{
                                        ...fadeInLeft.transition,
                                        delay: 0.3,
                                    }} >
                                    Hallo! Ik ben een freelance web developer gespecialiseerd in het bouwen van <strong>moderne,
                                        gebruiksvriendelijke websites</strong> voor kleine en middelgrote ondernemingen.
                                </motion.p>
                                <motion.p {...fadeInLeft}
                                    transition={{
                                        ...fadeInLeft.transition,
                                        delay: 0.6,
                                    }}>
                                    Ik help bedrijven bij het creëren van een <strong>professionele online aanwezigheid</strong>.
                                    Of je nu een eenvoudige landingspagina nodig hebt of een uitgebreide website
                                    met een contentmanagementsysteem, ik denk graag met je mee en zorg dat het resultaat past bij jouw doelen.
                                </motion.p>
                                <motion.p {...fadeInLeft}
                                    transition={{
                                        ...fadeInLeft.transition,
                                        delay: 0.9,
                                    }}>
                                    Mijn focus ligt op <strong>snelheid, gebruiksvriendelijkheid en schaalbaarheid</strong>. Ik werk met de nieuwste
                                    technologieën om websites te bouwen die niet alleen mooi zijn, maar ook presteren.
                                </motion.p>
                            </div>

                            <motion.div {...fadeInLeft}
                                transition={{
                                    ...fadeInLeft.transition,
                                    delay: 1.2,
                                }}
                                className="mt-8">
                                <Link href="/contact">
                                    <Button size="lg" className="group">
                                        Laten we samenwerken
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div {...scaleIn} className="flex justify-center items-center aspect-square rounded-lg overflow-hidden bg-transparent">
                            <Image
                                src="/profile-picture.png"
                                alt="Developer Almanzo Rosseel portret"
                                width={600}
                                height={600}
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <motion.div {...scaleIn} className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Tools</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                            Technologieën waar ik dagelijks mee werk
                        </p>
                    </div>
                    <Card className="border-border shadow-sm h-full">
                        <CardContent className="flex justify-center items-center">
                            <div className="flex gap-3 flex-wrap justify-center">
                                {tools.map((tool, index) => (
                                    <span key={index} className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>

            <Aboutsection aboutContent={aboutContent} cardItems={approaches} />

            <Cta content={ctaContent} />
        </div>
    );
}