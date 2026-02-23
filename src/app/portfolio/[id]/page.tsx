import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client"
import { ArrowLeft, Calendar } from "lucide-react";
import { use } from "react";
import Image from "next/image";

export const projects: Record<string, {
    title: string;
    category: string;
    year: string;
    client: string;
    services: string[];
    challenge: string;
    solution: string;
    result: string;
    image: string;
    tags: string[];
}> = {
    "1": {
        title: "Foodtruck Delights",
        category: "Headless CMS",
        year: "2024",
        client: "Foodtruck Delights",
        services: ["Web Design", "CMS Integration", "Content Strategy"],
        challenge:
            "Het foodtruckbedrijf had een verouderde website en wilde zelf artikelen en menu's kunnen publiceren zonder technische kennis.",
        solution:
            "Een professionele website gebouwd met Next.js en Sanity CMS. Het bedrijf kan nu eenvoudig content beheren, inclusief menu's, reviews en nieuwsartikelen.",
        result:
            "Meer professionele uitstraling en verhoogde online vindbaarheid. Het team publiceert nu wekelijks eigen content.",
        image: "/inca.jpg",
        tags: ["Next.js", "Sanity CMS", "SEO", "Content Management"],
    },
    "2": {
        title: "Bakkerij De Korenbloem",
        category: "Frontend Website",
        year: "2024",
        client: "Bakkerij De Korenbloem",
        services: ["Web Design", "Frontend Development", "SEO Optimization"],
        challenge:
            "De Korenbloem wilde een moderne online aanwezigheid met de mogelijkheid voor klanten om vooraf te bestellen. Het moest visueel aantrekkelijk zijn en de ambachtelijke sfeer van de bakkerij overbrengen.",
        solution:
            "Ik ontwikkelde een snelle, responsieve website met een intuïtief bestellingsformulier. Het design gebruikt warme kleuren en hoogwaardige foto's om de authentieke bakkerijervaring te benadrukken.",
        result:
            "40% toename in online bestellingen binnen de eerste 3 maanden. De website laadt razendsnel en scoort uitstekend in Google.",
        image: "/inca.jpg",
        tags: ["Next.js", "Tailwind CSS", "Responsive", "Forms"],
    },

    "3": {
        title: "Coaching & Therapie",
        category: "Headless CMS",
        year: "2023",
        client: "Lisa Peeters Coaching",
        services: ["Web Design", "CMS Setup", "Blog Integration"],
        challenge:
            "Een therapeutische praktijk zocht een kalme, professionele website met een blog om vertrouwen op te bouwen bij potentiële cliënten.",
        solution:
            "Ik creëerde een rustig design met zachte kleuren en ruime witruimte. Contentful CMS werd geïntegreerd voor eenvoudig blogbeheer.",
        result: "Significant meer aanvragen via de website. De blog trekt maandelijks honderden bezoekers.",
        image: "/inca.jpg",
        tags: ["React", "Contentful", "Blog", "Typography"],
    },
    "4": {
        title: "AR Dream Paints",
        category: "Frontend Website",
        year: "2024",
        client: "AR Dream Paints",
        services: ["Web Design", "Frontend Development", "AR Integration"],
        challenge:
            "Een tech startup wilde een dynamische landingspagina die hun innovatieve AR-producten voor binnen- en buitendecoratie effectief presenteert. De site moest visueel indrukwekkend zijn en de unieke AR-functies benadrukken.",
        solution:
            "Ik ontwierp een moderne, visueel rijke website met interactieve elementen die de AR-mogelijkheden van hun producten laten zien. Framer Motion werd gebruikt voor soepele animaties en een boeiende gebruikerservaring.",
        result: "Significant meer aanvragen via de website. De blog trekt maandelijks honderden bezoekers.",
        image: "/inca.jpg",
        tags: ["React", "Contentful", "Blog", "Typography"],
    },
    "5": {
        title: "Dak en Gevel Reiniging",
        category: "Frontend Website",
        year: "2023",
        client: "Dak en Gevel Reiniging",
        services: ["Web Design", "Frontend Development", "Responsive Design"],
        challenge:
            "Een bedrijf dat dak- en gevelreiniging uitvoert wilde een professionele website die de kwaliteit van hun diensten benadrukt en makkelijk te gebruiken is voor klanten.",
        solution:
            "Ik ontwierp een duidelijke, visueel aantrekkelijke website met een focus op de kwaliteit van de diensten. De site is volledig responsief en maakt gebruik van moderne designprincipes.",
        result: "Significant meer aanvragen via de website. Klanten zijn tevreden met de eenvoudige navigatie.",
        image: "/inca.jpg",
        tags: ["React", "Contentful", "Blog", "Typography"],
    },
    "6": {
        title: "Coaching & Therapie",
        category: "Headless CMS",
        year: "2023",
        client: "Lisa Peeters Coaching",
        services: ["Web Design", "CMS Setup", "Blog Integration"],
        challenge:
            "Een therapeutische praktijk zocht een kalme, professionele website met een blog om vertrouwen op te bouwen bij potentiële cliënten.",
        solution:
            "Ik creëerde een rustig design met zachte kleuren en ruime witruimte. Contentful CMS werd geïntegreerd voor eenvoudig blogbeheer.",
        result: "Significant meer aanvragen via de website. De blog trekt maandelijks honderden bezoekers.",
        image: "/therapy-coaching-website.jpg",
        tags: ["React", "Contentful", "Blog", "Typography"],
    },
}

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const project = projects[id]

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project niet gevonden</h1>
                    <Link href="/portfolio">
                        <Button>Terug naar portfolio</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <section className="pt-2 pb-2 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        <span>Terug naar portfolio</span>
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="text-sm text-accent font-medium mb-4">{project.category}</div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">{project.title}</h1>

                        <div className="flex flex-wrap gap-6 text-sm text-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{project.year}</span>
                            </div>
                            <div>
                                <span className="font-medium text-foreground">Client:</span> {project.client}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pb-2 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="aspect-video rounded-lg overflow-hidden shadow-lg"
                    >
                        <Image width={500} height={300} src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>
        </div>
    )

}