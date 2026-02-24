import { fadeInUp } from "@/lib/animations";
import * as motion from "motion/react-client"

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div {...fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">Neem Contact Op</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                            Klaar om je project te bespreken? Vul het formulier in of gebruik de onderstaande contactgegevens. Ik
                            reageer meestal binnen 24 uur.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}