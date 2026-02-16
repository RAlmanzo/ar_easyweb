import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F4F6F2]">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 bg-[#eaf3e5]">
        <Hero />
        <About />
      </main>
    </div>
  );
}
