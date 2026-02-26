import { ArrowRight } from "lucide-react";
import Link from "next/link"
import { Button } from "../ui/button";
import LogoText from "../svg/logo-text";
import * as motion from "motion/react-client"
import { bounce, bounceShadow, scaleIn } from "@/lib/animations";

export default function Hero() {
    return (
        <div className="min-h-screen">
            <section className="pt-2 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pb-12">
                    <div className="flex flex-col items-center relative">
                        <motion.div {...bounce} >
                            <video
                                src="/ar_easyweb_logo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-72 md:w-96 h-auto rounded-lg"
                                preload="metadata"
                                aria-hidden="true"
                            >Je browser ondersteunt dit videoformaat niet.</video>
                        </motion.div>

                        <motion.div {...bounceShadow}
                            className="mt-2 mb-2 w-65 h-2 bg-lime-400 rounded-full blur-sm"
                        />
                    </div>

                    <h1 className="flex items-center font-extrabold text-4xl md:text-6xl text-foreground">
                        <LogoText className="text-[#32CD32]/70" />
                    </h1>
                </div>

                <motion.div {...scaleIn} className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
                        Moderne websites voor KMO&apos;s
                    </h2>
                    <p className="text-lg sm:text-xl text-background mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
                        Ik bouw snelle, veilige en schaalbare websites van eenvoudige marketingwebsites tot headless
                        CMS-oplossingen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Project bespreken
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button size="lg" variant="outline">
                                Bekijk mijn werk
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section >
        </div>
    );
}