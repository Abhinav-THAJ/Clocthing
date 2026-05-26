import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import Marquee from "@/components/home/Marquee";
import BentoGrid from "@/components/home/BentoGrid";
import BestSellers from "@/components/home/BestSellers";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <Marquee />
      <FeaturedCollections />
      <BentoGrid />
      <BestSellers />
      <Footer />
    </main>
  );
}
