import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const SPARKLE = [
  { id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", tag: "Exclusive", image: "/images/collection_jewellery.png" },
  { id: 5, name: "Gold Plated Bangles Set", price: "₹8,500", tag: "Limited", image: "/images/collection_jewellery.png" },
  { id: 12, name: "Diamond Polki Earrings", price: "₹62,000", tag: "New", image: "/images/collection_jewellery.png" },
  { id: 13, name: "Ruby Antique Necklace", price: "₹88,000", tag: "Rare", image: "/images/collection_jewellery.png" },
];

export default function SparklePage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <p className="text-xs tracking-[0.3em] uppercase text-rose-600 font-medium">Exclusive Collection</p>
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Sparkle</h1>
          <p className="text-neutral-500 mt-4 text-sm tracking-wider max-w-md mx-auto">
            Handcrafted jewellery and statement pieces for the woman who commands attention.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {SPARKLE.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
