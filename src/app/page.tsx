import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-slate-950">
      <Navbar />
      <Hero />
      <SelectedWork />
      <About />
      <Footer />
    </main>
  );
}