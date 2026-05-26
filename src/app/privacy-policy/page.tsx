import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">Legal</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-neutral-900">Privacy Policy</h1>
          <p className="text-xs text-neutral-400 mt-4">Last updated: January 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-10 text-neutral-700">
          {[
            { title: "1. Information We Collect", content: "We collect information you provide directly, such as your name, email address, phone number, and shipping address when you create an account, place an order, or contact us. We also automatically collect certain information about your device and browsing behaviour on our website." },
            { title: "2. How We Use Your Information", content: "We use your information to process orders, send transactional emails, personalise your experience, improve our services, send promotional communications (with your consent), and comply with legal obligations." },
            { title: "3. Sharing of Information", content: "We do not sell your personal information. We share data with trusted third parties only as necessary to operate our business — including payment processors, shipping partners, and marketing platforms — all of whom are required to keep your information confidential." },
            { title: "4. Cookies", content: "We use cookies and similar tracking technologies to enhance your experience, analyse site traffic, and personalise content. You can control cookies through your browser settings." },
            { title: "5. Data Security", content: "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, or destruction." },
            { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at support@kaavyam.in." },
            { title: "7. Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at support@kaavyam.in or call +91 7994441066." },
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
