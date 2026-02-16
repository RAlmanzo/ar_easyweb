export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

export const fadeInLeft = {
    initial: { opacity: 0, x: -80 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}