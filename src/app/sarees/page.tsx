import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const SAREES = [
  { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", fabric: "Pure Silk", image: "/images/collection_sarees.png" },
  { id: 4, name: "Emerald Kanjeevaram Saree", price: "₹21,000", fabric: "Kanjeevaram", image: "/images/collection_sarees.png" },
  { id: 8, name: "Deep Red Banarasi Saree", price: "₹32,000", fabric: "Banarasi", image: "/images/collection_sarees.png" },
  { id: 9, name: "Pearl White Chiffon Saree", price: "₹14,500", fabric: "Chiffon", image: "/images/collection_sarees.png" },
  { id: 10, name: "Golden Zari Silk Saree", price: "₹28,000", fabric: "Pure Silk", image: "/images/collection_sarees.png" },
  { id: 11, name: "Dusty Rose Organza Saree", price: "₹16,500", fabric: "Organza", image: "/images/collection_sarees.png" },
];

export default function SareesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Timeless Drapes</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Sarees</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {SAREES.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
