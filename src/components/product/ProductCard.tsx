"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price?: string;
    image: string;
    category?: string;
    fabric?: string;
    sold?: string;
    originalPrice?: string;
    salePrice?: string;
    discount?: string;
    tag?: string;
  };
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating if wrapped somehow
    e.stopPropagation();

    addItem({
      id: `${product.id}-OS`,
      productId: String(product.id),
      name: product.name,
      price: product.salePrice || product.price || "₹0",
      image: product.image,
      size: "OS",
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden mb-4">
        {/* Badges */}
        {product.discount && (
          <div className="absolute top-3 right-3 z-10 bg-rose-600 text-white text-[9px] tracking-widest uppercase px-2 py-1 font-semibold">
            {product.discount}
          </div>
        )}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10 border border-neutral-200 bg-white text-neutral-600 text-[9px] tracking-widest uppercase px-2 py-1">
            {product.tag}
          </div>
        )}

        <Link href={`/product/${product.id}`} className="absolute inset-0 z-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={priority}
          />
        </Link>
        
        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 flex gap-2 z-10">
          <button
            onClick={handleQuickAdd}
            className={cn(
              "flex-1 py-3 text-xs tracking-widest uppercase font-medium transition-colors flex items-center justify-center gap-2",
              added ? "bg-green-600 text-white" : "bg-[#111111] text-white hover:bg-neutral-800"
            )}
          >
            {added ? (
              <><Check className="w-4 h-4" /> Added</>
            ) : (
              "Quick Add"
            )}
          </button>
          <button className="bg-white text-neutral-900 w-12 h-[42px] flex items-center justify-center hover:bg-neutral-100 transition-colors shrink-0 border border-neutral-200/50">
            <Heart className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <Link href={`/product/${product.id}`} className="flex flex-col">
        {product.sold && (
          <p className="text-xs tracking-widest uppercase text-rose-500 mb-1">{product.sold}</p>
        )}
        {(product.category || product.fabric) && !product.sold && (
          <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">
            {product.category || product.fabric}
          </p>
        )}
        <h3 className="font-heading text-base md:text-lg font-light text-neutral-800 mb-1">
          {product.name}
        </h3>
        
        {product.originalPrice ? (
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-rose-600">{product.salePrice}</p>
            <p className="text-xs text-neutral-400 line-through">{product.originalPrice}</p>
          </div>
        ) : (
          <p className="text-sm font-medium text-neutral-700">{product.price}</p>
        )}
      </Link>
    </div>
  );
}
