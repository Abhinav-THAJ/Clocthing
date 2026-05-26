"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { ArrowRight, ArrowLeft, Heart } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Midnight Blue Silk Saree", price: "₹18,500", image: "/images/collection_sarees.png" },
  { id: 2, name: "Pearl Kundan Choker", price: "₹45,000", image: "/images/collection_jewellery.png" },
  { id: 3, name: "Ivory Hand-Embroidered Kurti", price: "₹12,000", image: "/images/collection_kurtis.png" },
  { id: 4, name: "Rose Gold Salwar Suit", price: "₹24,500", image: "/images/collection_salwars.png" },
  { id: 5, name: "Emerald Silk Saree", price: "₹21,000", image: "/images/collection_sarees.png" },
  { id: 6, name: "Gold Plated Bangles", price: "₹8,500", image: "/images/collection_jewellery.png" },
];

export default function BestSellers() {
  return (
    <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-[0.3em] uppercase text-foreground/60 mb-2">Most Loved</h2>
            <h3 className="font-heading text-3xl md:text-5xl text-foreground font-light">Best Sellers</h3>
          </motion.div>

          <div className="hidden md:flex gap-4">
            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
              <ArrowLeft className="w-5 h-5" strokeWidth={1} />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
              <ArrowRight className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={24}
            slidesPerView={1.2}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4.2 },
            }}
            className="!pb-12"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group flex flex-col">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] w-full bg-secondary/20 overflow-hidden mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="flex-1 bg-white text-foreground py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-white transition-colors">
                          Quick Add
                        </button>
                        <button className="w-12 h-12 bg-white text-foreground flex items-center justify-center hover:bg-foreground hover:text-white transition-colors">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col items-center text-center">
                    <Link href={`/product/${product.id}`} className="font-heading text-lg md:text-xl text-foreground font-light mb-2 hover:opacity-70 transition-opacity">
                      {product.name}
                    </Link>
                    <p className="font-sans text-sm tracking-wider text-foreground/80 font-medium">
                      {product.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
