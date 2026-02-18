import * as motion from "motion/react-client"
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";

export default function Services() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16 max-w-3xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4 text-balance">Diensten</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                        Van concept tot lancering. Ik begeleid je door het hele proces.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
                    <motion.div {...fadeInLeft}>
                        <Card className="h-full border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Frontend Websites</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Perfect voor landingspagina&apos;s, portfolio&apos;s, en kleine bedrijfswebsites. Snelle laadtijden, moderne
                                    uitstraling.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {["Responsief design", "SEO-vriendelijk", "Moderne animaties", "Optimale prestaties"].map(
                                        (item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#32CD32]" />
                                                <span>{item}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <Link href="/diensten#frontend">
                                    <Button variant="outline" className="group bg-transparent">
                                        Meer info
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div {...fadeInRight}>
                        <Card className="h-full border-border shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Headless CMS Websites</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Websites met een gebruiksvriendelijk beheersysteem. Perfect als je regelmatig content wil aanpassen.
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {["Eenvoudig beheer", "Schaalbare architectuur", "API-first aanpak", "Future-proof"].map(
                                        (item, index) => (
                                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#32CD32]" />
                                                <span>{item}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                                <Link href="/diensten#cms">
                                    <Button variant="outline" className="group bg-transparent">
                                        Meer info
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}