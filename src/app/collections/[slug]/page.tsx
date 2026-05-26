import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

const COLLECTIONS: Record<string, {
  name: string; description: string; products: { id: number; name: string; price: string; image: string }[];
}> = {
  jewellery: { name: "Jewellery", description: "Handcrafted pieces rooted in Indian jewellery traditions.", products: [{ id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", image: "/images/collection_jewellery.png" }, { id: 5, name: "Gold Plated Bangles", price: "₹8,500", image: "/images/collection_jewellery.png" }, { id: 12, name: "Diamond Polki Earrings", price: "₹62,000", image: "/images/collection_jewellery.png" }, { id: 13, name: "Ruby Antique Necklace", price: "₹88,000", image: "/images/collection_jewellery.png" }] },
  kurtis: { name: "Kurtis", description: "Effortlessly elegant kurtis for every occasion.", products: [{ id: 3, name: "Ivory Embroidered Kurti", price: "₹12,000", image: "/images/collection_kurtis.png" }, { id: 7, name: "Champagne Linen Kurti", price: "₹9,800", image: "/images/collection_kurtis.png" }] },
  sarees: { name: "Sarees", description: "Timeless drapes from India's finest weaving traditions.", products: [{ id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", image: "/images/collection_sarees.png" }, { id: 4, name: "Emerald Silk Saree", price: "₹21,000", image: "/images/collection_sarees.png" }, { id: 8, name: "Deep Red Banarasi Saree", price: "₹32,000", image: "/images/collection_sarees.png" }, { id: 9, name: "Pearl White Chiffon Saree", price: "₹14,500", image: "/images/collection_sarees.png" }, { id: 10, name: "Golden Zari Silk Saree", price: "₹28,000", image: "/images/collection_sarees.png" }, { id: 11, name: "Dusty Rose Organza Saree", price: "₹16,500", image: "/images/collection_sarees.png" }] },
  skirts: { name: "Skirts & Tops", description: "Contemporary Indian separates with a modern edge.", products: [{ id: 3, name: "Ivory Embroidered Kurti", price: "₹12,000", image: "/images/collection_kurtis.png" }, { id: 7, name: "Champagne Linen Kurti", price: "₹9,800", image: "/images/collection_kurtis.png" }] },
  salwars: { name: "Salwar Suits", description: "Complete ensembles crafted for festive grace.", products: [{ id: 6, name: "Rose Salwar Suit", price: "₹24,500", image: "/images/collection_salwars.png" }] },
  fabrics: { name: "Shop by Fabric", description: "Find your perfect drape by the fabric that speaks to you.", products: [{ id: 1, name: "Pure Silk Saree", price: "₹18,500", image: "/images/fabric_silk.png" }, { id: 3, name: "Cotton Kurti", price: "₹12,000", image: "/images/fabric_cotton.png" }, { id: 7, name: "Linen Kurti", price: "₹9,800", image: "/images/fabric_linen.png" }, { id: 8, name: "Banarasi Velvet Saree", price: "₹32,000", image: "/images/fabric_velvet.png" }] },
  festive: { name: "Festive Fusion", description: "Special collections for life's most cherished moments.", products: [{ id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", image: "/images/collection_sarees.png" }, { id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", image: "/images/collection_jewellery.png" }, { id: 8, name: "Deep Red Banarasi Saree", price: "₹32,000", image: "/images/collection_sarees.png" }, { id: 6, name: "Rose Salwar Suit", price: "₹24,500", image: "/images/collection_salwars.png" }] },
};

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = COLLECTIONS[slug];
  if (!collection) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Collection</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">{collection.name}</h1>
          {collection.description && (
            <p className="text-sm text-neutral-500 mt-4 max-w-lg">{collection.description}</p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {collection.products.map((product, i) => (<ProductCard key={product.id} product={product} priority={i < 4} />))}
        </div>
      </main>
      <Footer />
    </>
  );
}
