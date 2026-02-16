import About from "@/components/sections/about";
import Cta from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F4F6F2]">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 bg-[#eaf3e5]">
        <Hero />
        <About />
        <Services />
        <Cta />
      </main>
    </div>
  );
}
