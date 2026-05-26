import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const BEST_SELLERS = [
  { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", sold: "1.2k sold", image: "/images/collection_sarees.png" },
  { id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", sold: "980 sold", image: "/images/collection_jewellery.png" },
  { id: 3, name: "Ivory Embroidered Kurti", price: "₹12,000", sold: "2.1k sold", image: "/images/collection_kurtis.png" },
  { id: 6, name: "Rose Salwar Suit", price: "₹24,500", sold: "760 sold", image: "/images/collection_salwars.png" },
  { id: 4, name: "Emerald Silk Saree", price: "₹21,000", sold: "640 sold", image: "/images/collection_sarees.png" },
  { id: 5, name: "Gold Plated Bangles", price: "₹8,500", sold: "1.8k sold", image: "/images/collection_jewellery.png" },
];

export default function BestSellerPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Most Loved</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Best Sellers</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {BEST_SELLERS.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
