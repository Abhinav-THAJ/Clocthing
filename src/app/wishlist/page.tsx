import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

export default function WishlistPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto min-h-[60vh]">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">My</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Wishlist</h1>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
            <Heart className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading text-2xl font-light text-neutral-700 mb-3">Your wishlist is empty</h2>
          <p className="text-sm text-neutral-400 mb-8 max-w-xs">Save your favourite pieces here to shop later.</p>
          <Link href="/new-arrival" className="bg-neutral-900 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
            Explore Collection
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
