import * as motion from "motion/react-client"
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { scaleIn } from "@/lib/animations";

export default function Cta() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DCEEBA]/30 w-full">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div {...scaleIn}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                        Klaar voor een nieuwe website?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                        Laten we samen jouw project bespreken. Vrijblijvend en zonder verplichtingen.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="group">
                            Vraag een offerte aan
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}