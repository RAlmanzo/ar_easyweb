import { ArrowRight } from "lucide-react";
import Link from "next/link"
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                    Moderne websites voor KMO's
                </h1>
                <p className="text-lg sm:text-xl text-foreground mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
                    Ik bouw snelle, veilige en schaalbare websites – van eenvoudige marketingwebsites tot headless
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
            </div>
        </section >
    );
}