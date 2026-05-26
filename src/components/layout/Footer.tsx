"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2 9 2 12s.5 4.9.5 4.9c.3 1.1 1.2 2 2.3 2.3C7.5 20 12 20 12 20s4.5 0 7.2-.8c1.1-.3 2-1.2 2.3-2.3.5-1.9.5-4.9.5-4.9s-.5-3-.5-4.9c-.3-1.1-1.2-2-2.3-2.3C16.5 4 12 4 12 4s-4.5 0-7.2.8c-1.1.3-2 1.2-2.3 2.3z"/><path d="m10 15 5-3-5-3v6z"/></svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-[#E5E5E5] pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-4 flex flex-col">
            <h2 className="font-heading text-4xl tracking-widest uppercase font-light mb-8 text-white">Clothing</h2>
            <p className="text-sm tracking-wide leading-relaxed text-[#A3A3A3] max-w-sm mb-8">
              Discover the epitome of luxury fashion. Handcrafted elegance and timeless traditions woven into every piece.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <InstagramIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FacebookIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <TwitterIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-[#333333] flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <YoutubeIcon />
              </Link>
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="col-span-1 md:col-span-2 md:col-start-6 flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white font-medium mb-8">Shop</h4>
            <ul className="flex flex-col space-y-4">
              {[
                { label: 'New Arrivals', href: '/new-arrival' },
                { label: 'Sarees', href: '/sarees' },
                { label: 'Kurtis', href: '/collections/kurtis' },
                { label: 'Jewellery', href: '/collections/jewellery' },
                { label: 'Bestsellers', href: '/best-seller' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#A3A3A3] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white font-medium mb-8">Information</h4>
            <ul className="flex flex-col space-y-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-conditions' },
                { label: 'Shipping & Returns', href: '/shipping-returns' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-[#A3A3A3] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-white font-medium mb-8">Newsletter</h4>
            <p className="text-sm text-[#A3A3A3] mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-b border-[#333333] pb-2 text-sm text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit" 
                className="w-full bg-white text-black py-3 text-xs tracking-widest uppercase font-medium mt-2 hover:bg-[#E5E5E5] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} Clothing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-[#666666]">INR ₹ | India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
