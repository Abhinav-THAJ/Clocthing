"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Simple price parsing to calculate total
  const subtotal = items.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^0-9]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-[60vh]">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Shopping</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
              <ShoppingBag className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
            </div>
            <h2 className="font-heading text-2xl font-light text-neutral-700 mb-3">Your cart is empty</h2>
            <p className="text-sm text-neutral-400 mb-8 max-w-xs">Add pieces you love to your bag and they will appear here.</p>
            <Link href="/new-arrival" className="bg-neutral-900 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="border-b border-neutral-200 pb-4 mb-6 hidden md:grid grid-cols-12 text-xs tracking-[0.2em] uppercase text-neutral-500">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-neutral-100 pb-6">
                    <div className="col-span-1 md:col-span-6 flex gap-4">
                      <div className="relative w-20 md:w-24 aspect-[3/4] bg-neutral-100 shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <Link href={`/product/${item.productId}`} className="font-heading text-lg font-light text-neutral-900 hover:text-neutral-500 transition-colors mb-1">
                          {item.name}
                        </Link>
                        {item.size !== "OS" && (
                          <p className="text-xs text-neutral-500 mb-2">Size: {item.size}</p>
                        )}
                        <p className="text-sm font-medium text-neutral-700 md:hidden mb-4">{item.price}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-neutral-400 hover:text-neutral-900 flex items-center gap-1 w-fit transition-colors"
                        >
                          <X className="w-3 h-3" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-1 md:col-span-3 flex justify-start md:justify-center">
                      <div className="flex items-center border border-neutral-200 h-10 w-24">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-1/3 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-1/3 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-1/3 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-3 text-right">
                      <p className="text-sm font-medium text-neutral-900">
                        ₹{(Number(item.price.replace(/[^0-9]/g, "")) * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 md:p-8">
                <h2 className="font-heading text-xl font-light text-neutral-900 mb-6">Order Summary</h2>
                <div className="flex flex-col gap-4 text-sm mb-6 border-b border-neutral-200 pb-6">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm font-medium text-neutral-900 tracking-widest uppercase">Total</span>
                  <span className="text-xl font-medium text-neutral-900">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <button className="w-full bg-neutral-900 text-white py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
