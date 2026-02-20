import * as motion from "motion/react-client"
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { scaleIn } from "@/lib/animations";

interface CtaProps {
    content: {
        title: string;
        description: string;
        buttonText: string;
    };
}

export default function Cta({ content }: CtaProps) {
    const { title, description, buttonText } = content;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(45deg,#999_5%,#fff_18%,#ccc_30%,#ddd_50%,#ccc_70%,#fff_80%,#999_95%)] w-full">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div {...scaleIn}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                        {title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                        {description}
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="group">
                            {buttonText}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}