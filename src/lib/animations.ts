import { MotionProps } from "motion/react"

export const fadeInUp: MotionProps = {
    initial: { opacity: 0, y: 150 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
}

export const fadeInLeft: MotionProps = {
    initial: { opacity: 0, x: -150 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
}

export const fadeInRight: MotionProps = {
    initial: { opacity: 0, x: 150 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
}

export const scaleIn: MotionProps = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 3, ease: [0.22, 1, 0.36, 1] },
}

export const bounce: MotionProps = {
    initial: { opacity: 0, y: -420 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 }, // trigger als helft in view
    transition: {
        type: "spring",
        stiffness: 250, // hard naar beneden
        damping: 12,    // kleine bounces
        mass: 2,        // diepte val
    },
}

export const bounceShadow: MotionProps = {
    initial: { scale: 0.5, opacity: 0 },
    whileInView: {
        scale: [0.5, 1.1, 0.9, 1],
        opacity: [0, 0.5, 0.2, 0.25],
    },
    viewport: { once: true, amount: 0.5 },
    transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
    },
}