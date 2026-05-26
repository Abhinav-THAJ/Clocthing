import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import Image from "next/image";

const PRODUCTS = [
  { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", category: "Sarees", image: "/images/collection_sarees.png" },
  { id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", category: "Jewellery", image: "/images/collection_jewellery.png" },
  { id: 3, name: "Ivory Embroidered Kurti", price: "₹12,000", category: "Kurtis", image: "/images/collection_kurtis.png" },
  { id: 4, name: "Emerald Silk Saree", price: "₹21,000", category: "Sarees", image: "/images/collection_sarees.png" },
  { id: 5, name: "Gold Plated Bangles", price: "₹8,500", category: "Jewellery", image: "/images/collection_jewellery.png" },
  { id: 6, name: "Rose Salwar Suit", price: "₹24,500", category: "Salwar Suits", image: "/images/collection_salwars.png" },
  { id: 7, name: "Champagne Linen Kurti", price: "₹9,800", category: "Kurtis", image: "/images/collection_kurtis.png" },
  { id: 8, name: "Deep Red Banarasi Saree", price: "₹32,000", category: "Sarees", image: "/images/collection_sarees.png" },
];

export default function NewArrivalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Just In</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">New Arrivals</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PRODUCTS.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
