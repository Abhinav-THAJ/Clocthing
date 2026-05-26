import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">We&apos;d love to hear from you</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light text-neutral-900">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">First Name</label>
                <input type="text" placeholder="First" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Last Name</label>
                <input type="text" placeholder="Last" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Email Address</label>
              <input type="email" placeholder="you@example.com" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Phone (Optional)</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Subject</label>
              <select className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 focus:outline-none focus:border-neutral-700 transition-colors bg-white">
                <option value="">Select a topic</option>
                <option value="order">Order Enquiry</option>
                <option value="product">Product Information</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="custom">Custom Order</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Message</label>
              <textarea rows={5} placeholder="Tell us how we can help..." className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-neutral-900 text-white py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-heading text-2xl font-light text-neutral-900 mb-8">Get in touch</h2>
              <div className="flex flex-col gap-8">
                {[
                  { icon: Phone, label: "Phone", value: "+91 7994441066", href: "tel:+917994441066" },
                  { icon: Mail, label: "Email", value: "support@kaavyam.in", href: "mailto:support@kaavyam.in" },
                  { icon: MapPin, label: "Address", value: "Kaavyam, Kerala, India", href: "#" },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 10am – 7pm IST", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-neutral-600 transition-colors">
                      <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800 transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{label}</p>
                      <p className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917994441066"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-neutral-200 p-5 hover:border-neutral-600 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.25.636 4.35 1.74 6.13L.058 24l5.974-1.567A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.71 9.71 0 01-4.978-1.37l-.357-.213-3.547.93.947-3.453-.232-.368A9.71 9.71 0 012.25 12C2.25 6.616 6.616 2.25 12 2.25S21.75 6.616 21.75 12 17.384 21.75 12 21.75z"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">Chat on WhatsApp</p>
                <p className="text-xs text-neutral-400">Usually responds within 1 hour</p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
