import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

const SALE_ITEMS = [
  { id: 1, name: "Midnight Blue Silk Saree", originalPrice: "₹26,000", salePrice: "₹18,500", discount: "29% OFF", image: "/images/collection_sarees.png" },
  { id: 3, name: "Ivory Embroidered Kurti", originalPrice: "₹16,500", salePrice: "₹12,000", discount: "27% OFF", image: "/images/collection_kurtis.png" },
  { id: 5, name: "Gold Plated Bangles", originalPrice: "₹12,000", salePrice: "₹8,500", discount: "29% OFF", image: "/images/collection_jewellery.png" },
  { id: 6, name: "Rose Salwar Suit", originalPrice: "₹32,000", salePrice: "₹24,500", discount: "23% OFF", image: "/images/collection_salwars.png" },
  { id: 7, name: "Champagne Linen Kurti", originalPrice: "₹14,000", salePrice: "₹9,800", discount: "30% OFF", image: "/images/collection_kurtis.png" },
  { id: 8, name: "Deep Red Banarasi Saree", originalPrice: "₹42,000", salePrice: "₹32,000", discount: "24% OFF", image: "/images/collection_sarees.png" },
];

export default function SalePage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block bg-rose-600 text-white text-xs tracking-[0.3em] uppercase px-4 py-1.5 mb-4">Limited Time</div>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Sale</h1>
          <p className="text-neutral-500 mt-4 text-sm tracking-wider">Up to 30% off on selected items</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {SALE_ITEMS.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
