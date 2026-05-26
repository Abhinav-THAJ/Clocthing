import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Legal</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-neutral-900">Terms & Conditions</h1>
          <p className="text-xs text-neutral-400 mt-4">Last updated: January 2025</p>
        </div>

        <div className="space-y-10 text-neutral-700">
          {[
            { title: "1. Acceptance of Terms", content: "By accessing and using the Kaavyam website, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website." },
            { title: "2. Products & Pricing", content: "All products are subject to availability. We reserve the right to modify prices at any time. Prices are inclusive of applicable taxes unless stated otherwise. Colour and texture may vary slightly from images shown due to screen settings and the handcrafted nature of our products." },
            { title: "3. Orders & Payment", content: "By placing an order, you confirm that you are legally capable of entering into binding contracts. We accept major credit/debit cards, UPI, and net banking. Orders are processed upon payment confirmation." },
            { title: "4. Shipping", content: "We offer free shipping on all orders within India. Standard delivery takes 5–7 business days. We are not responsible for delays caused by courier partners or circumstances beyond our control." },
            { title: "5. Returns & Exchanges", content: "We accept returns within 7 days of delivery for items in their original, unworn condition with all tags attached. Custom or sale items are not eligible for return. Please contact support@kaavyam.in to initiate a return." },
            { title: "6. Intellectual Property", content: "All content on this website — including images, text, logos, and designs — is owned by Kaavyam and may not be reproduced without written permission." },
            { title: "7. Governing Law", content: "These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Kerala, India." },
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
