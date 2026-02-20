import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as motion from "motion/react-client"
import Link from "next/link";

type serviceFeatures = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

interface ServiceCardProps {
    id: string;
    leftAnimation: React.ComponentProps<typeof motion.div>;
    rightAnimation: React.ComponentProps<typeof motion.div>;
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    features: serviceFeatures[];
    benefitsTitle: string;
    benefits: string[];
    reverse: boolean;
}

export default function ServiceCard({ id, leftAnimation, rightAnimation, title, firstParagraph, secondParagraph, features, benefitsTitle, benefits, reverse }: ServiceCardProps) {
    return (
        <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(45deg,#999_5%,#fff_18%,#ccc_30%,#ddd_50%,#ccc_70%,#fff_80%,#999_95%)] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div {...(reverse ? rightAnimation : leftAnimation)} className={reverse ? "lg:order-2" : ""}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">{title}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{firstParagraph}</p>
                        <p className="text-muted-foreground mb-8 leading-relaxed">{secondParagraph}</p>

                        <div className="space-y-4 mb-8">
                            <h3 className="text-xl font-semibold text-foreground">{benefitsTitle}:</h3>
                            <ul className="space-y-3">
                                {benefits.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#32CD32]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Vraag offerte aan
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div {...(reverse ? leftAnimation : rightAnimation)} className={`space-y-6 ${reverse ? "lg:order-1" : ""}`}>
                        {features.map((card, index) => (
                            <Card key={index} className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                            {card.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-2">
                                                {card.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}