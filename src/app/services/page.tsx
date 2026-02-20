import ServiceCard from "@/components/ui/service-card";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";
import { Palette, Smartphone, Zap } from "lucide-react";
import * as motion from "motion/react-client"

export default function Services() {
    const firstServiceContent = {
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
        ]
    };

    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
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
        </div>
    );
}