"use client"

import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader,
    DialogDescription
} from "../ui/dialog";


export default function ProjectDetailsModal({ children, title }: { children: React.ReactNode, title: string }) {
    const router = useRouter()

    const handleOpenChange = () => {
        router.back()
    }

    return (
        <Dialog open onOpenChange={handleOpenChange}>
            <DialogContent className="w-full md:max-w-3xl md:h-[90vh] overflow-y-hidden">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Project details van {title}
                    </DialogDescription>
                </DialogHeader>

                {children}
            </DialogContent>
        </Dialog>
    )
}