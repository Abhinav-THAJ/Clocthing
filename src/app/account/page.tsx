import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { User, Package, Heart, LogOut, ChevronRight } from "lucide-react";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 max-w-3xl mx-auto min-h-[60vh]">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">My</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-neutral-900">Account</h1>
        </div>

        {/* Not logged in state */}
        <div className="border border-neutral-200 rounded-sm p-8 md:p-12 text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-6">
            <User className="w-7 h-7 text-neutral-400" strokeWidth={1.5} />
          </div>
          <h2 className="font-heading text-2xl font-light text-neutral-700 mb-3">Welcome back</h2>
          <p className="text-sm text-neutral-400 mb-8">Sign in to view your orders, wishlist and account details.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/login" className="bg-neutral-900 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors">
              Sign In
            </Link>
            <Link href="/register" className="border border-neutral-300 text-neutral-700 px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:border-neutral-700 transition-colors">
              Create Account
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 divide-y divide-neutral-100 border border-neutral-200 rounded-sm">
          {[
            { icon: Package, label: "My Orders", href: "/account/orders" },
            { icon: Heart, label: "My Wishlist", href: "/wishlist" },
            { icon: User, label: "Profile Settings", href: "/account/settings" },
          ].map(({ icon: Icon, label, href }) => (
            <Link key={label} href={href} className="flex items-center justify-between p-5 hover:bg-neutral-50 transition-colors group">
              <div className="flex items-center gap-4">
                <Icon className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
                <span className="text-sm font-medium text-neutral-700 tracking-wider">{label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-neutral-600 transition-colors" />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
