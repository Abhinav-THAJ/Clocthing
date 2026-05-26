"use client";

import { useState } from "react";
import { ShoppingBag, Heart, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function AddToCartForm({
  product,
}: {
  product: { id: number; name: string; price: string; image: string; category: string };
}) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const needsSize = product.category !== "Jewellery";

  const handleAddToCart = () => {
    if (needsSize && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addItem({
      id: `${product.id}-${selectedSize || "OS"}`,
      productId: String(product.id),
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize || "OS",
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* Size Selector */}
      {needsSize && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-medium tracking-widest uppercase text-neutral-700">
              Select Size
            </span>
            <button className="text-xs text-neutral-400 underline underline-offset-2 hover:text-neutral-700">
              Size Guide
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-10 border text-xs font-medium transition-all ${
                  selectedSize === size
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 text-neutral-700 hover:border-neutral-900"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3 mb-8">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 transition-colors ${
            added
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-neutral-900 text-white hover:bg-neutral-700"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" /> Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" /> Add to Cart
            </>
          )}
        </button>
        <button className="w-full border border-neutral-200 py-4 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-3 text-neutral-700 hover:border-neutral-700 transition-colors">
          <Heart className="w-4 h-4" />
          Add to Wishlist
        </button>
      </div>
    </>
  );
}
