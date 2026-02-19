import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Over Mij</h1>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Hallo! Ik ben een freelance web developer gespecialiseerd in het bouwen van <strong>moderne,
                                        gebruiksvriendelijke websites</strong> voor kleine en middelgrote ondernemingen.
                                </p>
                                <p>
                                    Ik help bedrijven bij het creëren van een <strong>professionele online aanwezigheid</strong>.
                                    Of je nu een eenvoudige landingspagina nodig hebt of een uitgebreide website
                                    met een contentmanagementsysteem, ik denk graag met je mee en zorg dat het resultaat past bij jouw doelen.
                                </p>
                                <p>
                                    Mijn focus ligt op <strong>snelheid, gebruiksvriendelijkheid en schaalbaarheid</strong>. Ik werk met de nieuwste
                                    technologieën om websites te bouwen die niet alleen mooi zijn, maar ook presteren.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Link href="/contact">
                                    <Button size="lg" className="group">
                                        Laten we samenwerken
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="aspect-square rounded-lg overflow-hidden bg-transparent">
                                <Image
                                    src="/profile-picture.png"
                                    alt="Developer Almanzo Rosseel portret"
                                    width={600}
                                    height={600}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <Card className="border-border shadow-sm h-full">
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-6">Tools & Technologieën</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {tools.map((tool, index) => (
                                            <span key={index} className="px-4 py-2 bg-muted rounded-lg text-sm text-foreground">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}