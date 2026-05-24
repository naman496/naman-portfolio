import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Naman Jain — Product Analyst Portfolio",
  description:
    "Early-career Product Analyst focused on operational transformation, workflow-driven systems, and stakeholder-led product delivery.",
  openGraph: {
    title: "Naman Jain — Product Analyst Portfolio",
    description:
      "Early-career Product Analyst focused on operational transformation, workflow-driven systems, and stakeholder-led product delivery.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] text-slate-950">
      <Navbar />
      <Hero />
      <SelectedWork />
      <HowIWork />
      <About />
      <Footer />
    </main>
  );
}