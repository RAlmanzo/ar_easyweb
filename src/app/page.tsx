import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#eaf3e5]">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-transparent sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
