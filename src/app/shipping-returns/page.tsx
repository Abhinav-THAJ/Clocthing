import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ShippingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Policies</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-neutral-900">Shipping & Returns</h1>
        </div>
        <div className="space-y-10">
          {[
            { title: "Free Shipping", content: "We offer complimentary shipping on all orders across India, with no minimum order value required." },
            { title: "Delivery Timeline", content: "Most orders are delivered within 5–7 business days. Express delivery (2–3 days) is available in select cities for an additional charge." },
            { title: "Order Tracking", content: "Once your order ships, you'll receive an email with a tracking number. Track your package directly on our courier partner's website." },
            { title: "Returns Policy", content: "We accept returns within 7 days of delivery. Items must be in original, unworn condition with all tags attached and original packaging intact." },
            { title: "Non-Returnable Items", content: "Sale items, custom orders, and earrings (for hygiene reasons) are not eligible for return or exchange." },
            { title: "How to Return", content: "Email support@kaavyam.in with your order number and reason for return. Our team will arrange a pickup within 48 hours." },
            { title: "Refunds", content: "Once we receive and inspect your return, refunds are processed within 5–7 business days to your original payment method." },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="font-heading text-xl font-light text-neutral-900 mb-4 pb-3 border-b border-neutral-100">{s.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-600">{s.content}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
