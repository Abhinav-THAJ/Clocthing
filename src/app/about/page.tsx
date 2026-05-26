import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-0 overflow-hidden">
        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-end bg-neutral-900">
          <Image src="/images/hero_banner.png" alt="About Clothing" fill className="object-cover opacity-60" sizes="100vw" priority />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-white leading-tight">About<br />Clothing</h1>
          </div>
        </section>

        {/* Story */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">Who We Are</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-neutral-900 mb-8 leading-snug">
              Celebrating the art of Indian textiles
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 mb-6">
              Clothing was born from a deep reverence for India&apos;s rich textile traditions. Founded in 2020, we work directly with master artisans across Varanasi, Kanchipuram, and Lucknow to bring you handcrafted pieces that tell a story.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 mb-8">
              Every saree, every kurta, every jewellery piece in our collection is a testament to centuries of craftsmanship — lovingly made by hand, one thread at a time.
            </p>
            <Link href="/new-arrival" className="inline-block border-b border-neutral-700 text-sm font-medium text-neutral-700 pb-1 hover:border-neutral-400 transition-colors">
              Explore Our Collection →
            </Link>
          </div>
          <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden">
            <Image src="/images/fabric_silk.png" alt="Clothing Artisan" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </section>

        {/* Values */}
        <section className="bg-neutral-900 text-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 text-center">Our Values</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-center mb-16 md:mb-24">What we stand for</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Authentic Craftsmanship", desc: "Every piece is handmade by skilled artisans using techniques passed down through generations." },
                { title: "Sustainable Luxury", desc: "We use natural fibres and ethical production methods to create fashion that respects both people and planet." },
                { title: "Timeless Design", desc: "We design for longevity — pieces that transcend trends and become part of your story." },
              ].map((v) => (
                <div key={v.title} className="border-t border-white/10 pt-8">
                  <h3 className="font-heading text-xl font-light text-white mb-4">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 md:py-32 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-neutral-900 mb-8">Have questions?</h2>
          <Link href="/contact" className="inline-block bg-neutral-900 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
            Contact Us
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
