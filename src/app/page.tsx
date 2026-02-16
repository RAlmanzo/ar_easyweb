import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-[#eaf3e5]">
        <Hero />
        <About />
      </main>
    </div>
  );
}
