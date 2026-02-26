import About from "@/components/sections/about";
import Cta from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import { Code, Users, Zap } from "lucide-react";
import { getProfessionalSchema, getWebPageSchema } from "@/lib/metadata";
import Script from "next/script";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata(
  "AR EasyWeb | Webdesigner in West-Vlaanderen", // title
  "Webdesigner in West-Vlaanderen. Snelle, SEO-geoptimaliseerde websites voor KMO’s in regio Alveringem en Veurne.", // description
  "/", // path
  "/og-image.png" // optionele OG image
);

export default function Home() {
  const ctaContent = {
    title: "Klaar voor een nieuwe website?",
    description: "Laten we samen jouw project bespreken. Vrijblijvend en zonder verplichtingen.",
    buttonText: "Vraag een offerte aan",
  }

  const aboutContent = {
    title: "Over mij",
    description: "Ik ben een freelance webdeveloper die zich richt op het bouwen van moderne, gebruiksvriendelijke websites voor kleine ondernemingen.",
  }

  const aboutCardItems = [

    {
      icon: <Zap className="h-6 w-6" />,
      title: "Snel",
      description: "Geoptimaliseerd voor snelheid en prestaties. Jouw bezoekers wachten niet.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Schaalbaar",
      description: "Gebouwd met moderne technologieën die meegroeien met jouw business.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Gebruiksvriendelijk",
      description: "Intuïtieve interfaces die jouw bezoekers en klanten begrijpen.",
    },
  ]

  return (
    <>
      {/* JSON-LD WebPage schema voor SEO en rich results */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getWebPageSchema(
              "AR EasyWeb | Webdesigner in West-Vlaanderen",
              "Webdesigner in West-Vlaanderen. Snelle, SEO-geoptimaliseerde websites voor KMO’s in regio Alveringem en Veurne.",
              "/"
            )
          ),
        }}
        strategy="beforeInteractive" // belangrijk voor SEO
      />

      <Script
        id="professional-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getProfessionalSchema()),
        }}
        strategy="beforeInteractive"
      />
      <div className="flex min-h-screen items-center justify-center">
        <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 bg-foreground">
          <Hero />
          <About aboutContent={aboutContent} cardItems={aboutCardItems} />
          <Services />
          <Cta content={ctaContent} />
          <FAQ />
        </main>
      </div>
    </>
  );
}
