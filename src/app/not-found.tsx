import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center py-24">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-4">Page Not Found</p>
        <h1 className="font-heading text-[12rem] md:text-[18rem] font-light text-neutral-100 leading-none select-none">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-4xl font-light text-neutral-900 mb-6 -mt-8 md:-mt-12">
          This page doesn&apos;t exist
        </h2>
        <p className="text-sm text-neutral-500 max-w-sm mb-10">
          The page you&apos;re looking for may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="bg-neutral-900 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
            Back to Home
          </Link>
          <Link href="/new-arrival" className="border border-neutral-300 text-neutral-700 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:border-neutral-700 transition-colors">
            Shop Now
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
