import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client"
import { Calendar } from "lucide-react";
import ProjectDetailsModal from "@/components/modals/projectdetails";
import { projects } from "../../[id]/page";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
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
            <section className="pb-2 px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="aspect-video rounded-lg overflow-hidden shadow-lg"
                    >
                        <Image width={500} height={300} src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>

            <section className="pt-2 pb-2 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="text-sm text-accent font-medium mb-4">{project.category}</div>

                        <div className="flex flex-wrap gap-6 text-sm text-foreground mb-8">
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

            <section className="py-2 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-4">De Uitdaging</h2>
                                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-4">De Oplossing</h2>
                                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-bold text-foreground mb-4">Het Resultaat</h2>
                                <p className="text-muted-foreground leading-relaxed">{project.result}</p>
                            </motion.div>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-border shadow-sm">
                                <CardContent className="pt-6">
                                    <h3 className="text-lg font-semibold text-foreground mb-4">Diensten</h3>
                                    <ul className="space-y-2">
                                        {project.services.map((service, index) => (
                                            <li key={index} className="text-sm text-muted-foreground">
                                                • {service}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </ProjectDetailsModal>

    )

}