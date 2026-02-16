import { fadeInUp } from "@/lib/animations";
import { Code, Users, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import * as motion from "motion/react-client"

export default function About() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DCEEBA]/30">
            <div className="max-w-6xl mx-auto">
                <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                        Professionele weboplossingen op maat
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                        Als freelance web developer help ik kleine ondernemingen met moderne, gebruiksvriendelijke websites die
                        écht werken voor hun business.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Zap className="h-6 w-6" />,
                            title: "Snel",
                            description: "Geoptimaliseerd voor snelheid en prestaties. Jouw bezoekers wachten niet.",
                        },
                        {
                            icon: <Code className="h-6 w-6" />,
                            title: "Schaalbaar",
                            description: "Gebouwd met moderne technologieën die meegroeien met jouw business.",
                        },
                        {
                            icon: <Users className="h-6 w-6" />,
                            title: "Gebruiksvriendelijk",
                            description: "Intuïtieve interfaces die jouw bezoekers en klanten begrijpen.",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 150 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="h-12 w-12 rounded-lg bg-[#32CD32] text-accent flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}