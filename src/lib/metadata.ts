import { Metadata } from "next";

type Project = {
    title: string,
    challenge: string,
    solution: string,
    image: string,
}

export const BASE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
    name: "AR EasyWeb - Webdesigner",
    description:
        "Webdesigner in West-Vlaanderen voor KMO’s. Snelle, gebruiksvriendelijke websites op maat.",
    url: BASE_URL,
    ogImage: `${BASE_URL}/og-image.png`,
    locale: "nl_BE",
    type: "website",
    businessName: "AR EasyWeb",
    businessType: "Web Development",
};

export const baseMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    applicationName: "AR EasyWeb",
    category: "Web Development",
    title: {
        default: "AR EasyWeb | Webdesigner in West-Vlaanderen voor KMO’s",
        template: "%s | AR EasyWeb",
    },
    description:
        "Webdesigner in West-Vlaanderen. Ik bouw snelle, professionele, SEO-geoptimaliseerde websites voor KMO’s in regio Alveringem en Veurne en omstreken.",
    keywords: [
        "webdeveloper",
        "freelance",
        "website bouwen",
        "web development",
        "next.js",
        "react",
        "responsive design",
        "SEO optimalisatie",
        "website laten maken",
    ],
    authors: [{ name: "Almanzo Rosseel" }],
    creator: "AR EasyWeb",
    openGraph: {
        type: "website",
        locale: "nl_BE",
        url: BASE_URL,
        siteName: "AR EasyWeb",
        title: "AR EasyWeb | Webdesigner in West-Vlaanderen",
        description:
            "Webdesigner in West-Vlaanderen. Professionele websites op maat voor KMO’s.",
        images: [
            {
                url: `${BASE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "AR EasyWeb - Webdesigner West-Vlaanderen",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AR EasyWeb | Webdesigner in West-Vlaanderen",
        description: "Professionele websites voor KMO’s in West-Vlaanderen",
        images: [`${BASE_URL}/og-image.png`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    //manifest: "/manifest.json",
};

export const getMetadata = (
    title: string,
    description: string,
    path: string,
    ogImage?: string
): Metadata => {
    const fullUrl = `${BASE_URL}${path}`;

    return {
        title,
        description,
        keywords: undefined,
        openGraph: {
            type: "website",
            locale: "nl_BE",
            url: fullUrl,
            siteName: "AR EasyWeb",
            title,
            description,
            images: [
                {
                    url: ogImage ? `${BASE_URL}${ogImage}` : `${BASE_URL}/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                ogImage ? `${BASE_URL}${ogImage}` : `${BASE_URL}/og-image.png`,
            ],
        },

        alternates: {
            canonical: fullUrl,
        },
    };
};

export const getProjectMetadata = (
    project: Project,
    id: string
): Metadata => {
    const fullUrl = `${BASE_URL}/portfolio/${id}`;

    return {
        title: `${project.title} - Portfolio`,
        description: `${project.title}: ${project.challenge.substring(0, 120)}...`,
        alternates: {
            canonical: fullUrl,
        },
        openGraph: {
            title: `${project.title} - Portfolio`,
            description: project.solution,
            url: fullUrl,
            type: "article",
            images: [
                {
                    url: project.image.startsWith("http")
                        ? project.image
                        : `${BASE_URL}${project.image}`,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
};

// Structured Data (JSON-LD) helpers
export const getOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AR EasyWeb",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
        "Freelance webdeveloper gespecialiseerd in moderne websites voor kleine ondernemingen",
    sameAs: [
        "https://linkedin.com/company/areasyweb",
        "https://github.com/areasyweb",
    ],
    contactPoint: {
        "@type": "ContactPoint",
        availableLanguage: ["nl", "en", "fr"],
        contactType: "Sales",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Alveringem",
        addressRegion: "West-Vlaanderen",
        addressCountry: "BE",
    },
});

export const getProfessionalSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AR EasyWeb",
    image: `${BASE_URL}/logo.png`,
    description:
        "Webdesigner in West-Vlaanderen gespecialiseerd in websites voor KMO’s",
    url: BASE_URL,
    telephone: "+32...",
    priceRange: "€€",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Alveringem",
        addressRegion: "West-Vlaanderen",
        addressCountry: "BE",
    },
    areaServed: {
        "@type": "AdministrativeArea",
        name: "West-Vlaanderen",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "jouw_lat",
        longitude: "jouw_long",
    },
    serviceType: ["Webdesign", "Web Development", "CMS Development"],
});

export const getBreadcrumbSchema = (
    items: { name: string; path: string }[]
) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
    })),
});

export const getFAQSchema = (
    faqs: {
        question: string;
        answer: string;
    }[]
) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
});

export const getServiceSchema = (
    name: string,
    description: string,
    image: string
) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    image: `${BASE_URL}${image}`,
    provider: {
        "@type": "LocalBusiness",
        name: "AR EasyWeb",
        url: BASE_URL,
    },
});

export const getWebPageSchema = (
    title: string,
    description: string,
    path: string,
    datePublished?: string,
    dateModified?: string
) => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${BASE_URL}${path}`,
    isPartOf: {
        "@type": "WebSite",
        name: "AR EasyWeb",
        url: BASE_URL,
    },
    publisher: {
        "@type": "Organization",
        name: "AR EasyWeb",
        logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/logo.png`,
        },
    },
    datePublished,
    dateModified: dateModified || datePublished,
});