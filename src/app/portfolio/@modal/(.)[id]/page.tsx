import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client"
import { Calendar } from "lucide-react";
import { use } from "react";
import ProjectDetailsModal from "@/components/modals/projectdetails";

import { projects } from "../../[id]/page";

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const project = projects[id]

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project niet gevonden</h1>
                    <Link href="/portfolio">
                        <Button>Terug naar portfolio</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (

        <ProjectDetailsModal title={project.title}>
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="text-sm text-accent font-medium mb-4">{project.category}</div>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{project.year}</span>
                            </div>
                            <div>
                                <span className="font-medium text-foreground">Client:</span> {project.client}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </ProjectDetailsModal>

    )

}