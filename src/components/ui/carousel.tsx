"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"

type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
}

interface CarouselProps {
    projects: Project[]
}

export default function Carousel({ projects }: CarouselProps) {
    const totalItems = projects.length
    const angle = 360 / totalItems
    const [rotation, setRotation] = useState(0)

    const next = () => setRotation((prev) => prev - angle)
    const prev = () => setRotation((prev) => prev + angle)

    return (
        <div className="mx-auto relative w-full max-w-225 py-20 pb-75 bg-muted/30">
            <section
                className="relative mx-auto w-56.25 md:w-65 h-75 md:h-95 transform-3d"
                style={{
                    transform: `perspective(1200px) rotateY(${rotation}deg)`,
                    transition: "transform 1s ease",
                }}
            >
                {projects.map((project, i) => (
                    <div
                        key={project.id}
                        className="absolute w-full h-full"
                        style={{
                            transform: `rotateY(${i * angle}deg) translateZ(clamp(250px,35vw,350px))`,
                            WebkitBoxReflect: "below 2.5px linear-gradient(transparent, transparent, rgba(3,3,3,0.5))",
                        }}
                    >
                        <Link href={`/portfolio/${project.id}`}>
                            <Card className="h-full flex flex-col overflow-hidden shadow-[0_10px_15px_rgba(255,0,0,0.5)] -xl transition-all p-1">
                                <div className="relative h-37.5 md:h-45 w-full overflow-hidden rounded-xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 35vw, 20vw"
                                        className="object-cover transition-transform duration-300 hover:scale-125"
                                    />
                                </div>

                                <CardContent className="flex flex-col flex-1 overflow-hidden">
                                    <h2 className="text-sm mb-1 underline">{project.title}</h2>
                                    <p className="text-sm flex-1 line-clamp-3">{project.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
            </section>

            <div className="flex justify-center gap-40 md:gap-100 mt-25">
                <button onClick={prev}>
                    <ArrowLeftCircle className="w-10 h-10 cursor-pointer text-[#32CD32] hover:text-[#228B22]" />
                </button>
                <button onClick={next}>
                    <ArrowRightCircle className="w-10 h-10 cursor-pointer text-[#32CD32] hover:text-[#228B22]" />
                </button>
            </div>
        </div>
    )
}