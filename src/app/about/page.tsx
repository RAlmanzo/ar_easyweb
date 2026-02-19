import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Over Mij</h1>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Hallo! Ik ben een freelance web developer gespecialiseerd in het bouwen van moderne,
                                    gebruiksvriendelijke websites voor kleine en middelgrote ondernemingen.
                                </p>
                                <p>
                                    Met meer dan 5 jaar ervaring in webontwikkeling help ik bedrijven met een professionele online
                                    aanwezigheid. Of je nu een simpele landingspagina nodig hebt of een complexe website met een
                                    contentbeheersysteem, ik denk graag met je mee.
                                </p>
                                <p>
                                    Mijn focus ligt op snelheid, gebruiksvriendelijkheid en schaalbaarheid. Ik werk met de nieuwste
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
                            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                                <img
                                    src="/profile-picture.png"
                                    alt="Developer portret"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}