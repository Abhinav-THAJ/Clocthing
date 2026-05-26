import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, ZoomIn, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import AddToCartForm from "@/components/product/AddToCartForm";

const PRODUCTS: Record<string, {
  id: number; name: string; price: string; description: string;
  fabric?: string; care?: string; category: string; image: string; images: string[];
}> = {
  "1": { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", description: "A masterpiece of artisan craftsmanship — this midnight blue pure silk saree features intricate gold zari weaving along the border, embodying the timeless elegance of Indian heritage.", fabric: "Pure Silk (6.3 meters)", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png", "/images/fabric_silk.png", "/images/collection_sarees.png"] },
  "2": { id: 2, name: "Pearl Kundan Choker Set", price: "₹45,000", description: "Hand-set kundan stones in 22k gold-plated settings, adorned with freshwater pearls. A statement piece for the discerning connoisseur.", fabric: "22K Gold Plated, Kundan, Freshwater Pearls", care: "Store in velvet pouch, avoid moisture", category: "Jewellery", image: "/images/collection_jewellery.png", images: ["/images/collection_jewellery.png", "/images/collection_jewellery.png"] },
  "3": { id: 3, name: "Ivory Embroidered Kurti", price: "₹12,000", description: "Delicate thread embroidery meets premium cotton in this ivory kurti. The perfect balance of tradition and contemporary elegance.", fabric: "Pure Cotton", care: "Hand wash in cold water", category: "Kurtis", image: "/images/collection_kurtis.png", images: ["/images/collection_kurtis.png", "/images/fabric_linen.png"] },
  "4": { id: 4, name: "Emerald Silk Saree", price: "₹21,000", description: "Rich emerald green pure silk draped in tradition — features a contrast gold border and intricate pallu motifs.", fabric: "Pure Silk", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png"] },
  "5": { id: 5, name: "Gold Plated Bangles", price: "₹8,500", description: "Set of six hand-crafted gold plated bangles with filigree work, perfect for festive occasions.", fabric: "Gold Plated Brass", care: "Avoid perfumes and moisture", category: "Jewellery", image: "/images/collection_jewellery.png", images: ["/images/collection_jewellery.png"] },
  "6": { id: 6, name: "Rose Salwar Suit", price: "₹24,500", description: "A complete ensemble in dusty rose — premium fabric with resham embroidery and matching dupatta.", fabric: "Premium Georgette", care: "Dry clean only", category: "Salwar Suits", image: "/images/collection_salwars.png", images: ["/images/collection_salwars.png"] },
  "7": { id: 7, name: "Champagne Linen Kurti", price: "₹9,800", description: "Effortless luxury in breathable linen — a champagne-toned kurti perfect for all-day wear.", fabric: "Premium Linen", care: "Machine wash cold, gentle cycle", category: "Kurtis", image: "/images/collection_kurtis.png", images: ["/images/collection_kurtis.png"] },
  "8": { id: 8, name: "Deep Red Banarasi Saree", price: "₹32,000", description: "Handwoven in Varanasi by master weavers — this deep red Banarasi silk saree is a heirloom piece.", fabric: "Pure Banarasi Silk", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png"] },
  "9": { id: 9, name: "Pearl White Chiffon Saree", price: "₹14,500", description: "Sheer, lightweight chiffon in pearl white — ideal for evening events.", fabric: "Pure Chiffon", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png"] },
  "10": { id: 10, name: "Golden Zari Silk Saree", price: "₹28,000", description: "Opulent gold zari woven through pure silk creates a breathtaking festive drape.", fabric: "Pure Silk with Zari", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png"] },
  "11": { id: 11, name: "Dusty Rose Organza Saree", price: "₹16,500", description: "Dreamy organza in dusty rose with delicate floral embroidery — a romantic festive choice.", fabric: "Pure Organza", care: "Dry clean only", category: "Sarees", image: "/images/collection_sarees.png", images: ["/images/collection_sarees.png"] },
  "12": { id: 12, name: "Diamond Polki Earrings", price: "₹62,000", description: "Uncut diamond polki set in traditional jadau work — a statement of luxury.", fabric: "Gold, Uncut Diamonds", care: "Professional cleaning only", category: "Jewellery", image: "/images/collection_jewellery.png", images: ["/images/collection_jewellery.png"] },
  "13": { id: 13, name: "Ruby Antique Necklace", price: "₹88,000", description: "Antique finish gold necklace with natural ruby stones — a collector's piece.", fabric: "Gold, Natural Rubies", care: "Store in velvet pouch", category: "Jewellery", image: "/images/collection_jewellery.png", images: ["/images/collection_jewellery.png"] },
};

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS[id];
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-28 md:pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 tracking-wider">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-neutral-700 transition-colors">{product.category}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-neutral-700">{product.name}</span>
          </nav>
        </div>

        {/* Product Layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full bg-neutral-100 overflow-hidden group">
              <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-neutral-700" />
              </button>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative w-20 aspect-square bg-neutral-100 overflow-hidden cursor-pointer border border-neutral-200 hover:border-neutral-600 transition-colors">
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col lg:py-8">
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-3">{product.category}</p>
            <h1 className="font-heading text-3xl md:text-4xl font-light text-neutral-900 leading-snug mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-neutral-800 mb-6">{product.price}</p>
            <p className="text-sm leading-relaxed text-neutral-600 mb-8 border-t border-b border-neutral-100 py-6">{product.description}</p>

            <AddToCartForm product={product} />

            {/* Meta */}
            {product.fabric && (
              <div className="space-y-3 border-t border-neutral-100 pt-6">
                <div className="flex gap-4 text-sm">
                  <span className="text-neutral-400 w-24 shrink-0">Fabric</span>
                  <span className="text-neutral-700">{product.fabric}</span>
                </div>
                {product.care && (
                  <div className="flex gap-4 text-sm">
                    <span className="text-neutral-400 w-24 shrink-0">Care</span>
                    <span className="text-neutral-700">{product.care}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
