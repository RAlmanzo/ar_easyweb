import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight, CheckCircle2, Palette, Smartphone, Zap } from "lucide-react";
import * as motion from "motion/react-client"
import Link from "next/link";

export default function Services() {
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

            <section id="frontend" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInLeft}>
                            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">Frontend Websites</h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Perfect voor bedrijven die een professionele online aanwezigheid willen zonder complexe
                                backend-systemen.
                            </p>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Deze websites zijn razendsnel, veilig en optimaal geoptimaliseerd voor zoekmachines. Ideaal voor
                                landingspagina's, portfolio's, bedrijfswebsites, en productpresentaties.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-semibold text-foreground">Voordelen:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Bliksemsnelle laadtijden",
                                        "Perfecte SEO-optimalisatie",
                                        "Responsive op alle apparaten",
                                        "Moderne, aantrekkelijke designs",
                                        "Lage hostingkosten",
                                        "Hoge beveiligingsstandaard",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-lg p-6 mb-8">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Prijsindicatie</h3>
                                <p className="text-3xl font-bold text-foreground mb-2">Vanaf €1.500</p>
                                <p className="text-sm text-muted-foreground">Afhankelijk van complexiteit en aantal pagina's</p>
                            </div>

                            <Link href="/contact">
                                <Button size="lg" className="group">
                                    Vraag offerte aan
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div {...fadeInRight} className="space-y-6">
                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <Palette className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">Modern Design</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Strakke, professionele designs met subtiele animaties en interacties.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <Zap className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">Optimale Prestaties</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Gebouwd met moderne technologieën zoals React en Next.js voor maximale snelheid.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                                            <Smartphone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">Mobile-First</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Volledig responsive en geoptimaliseerd voor mobiele gebruikers.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}