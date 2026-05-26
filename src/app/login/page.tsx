import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-24 px-4 md:px-8 flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="w-full max-w-md bg-white border border-neutral-200 p-8 md:p-12">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">Welcome Back</p>
            <h1 className="font-heading text-3xl font-light text-neutral-900">Sign In</h1>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Email Address</label>
              <input type="email" placeholder="you@example.com" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs tracking-widest uppercase text-neutral-500 font-medium">Password</label>
                <Link href="#" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors">Forgot Password?</Link>
              </div>
              <input type="password" placeholder="••••••••" className="border border-neutral-200 px-4 py-3.5 text-sm text-neutral-700 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-700 transition-colors" />
            </div>
            <button type="submit" className="w-full bg-neutral-900 text-white py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-700 transition-colors mt-2">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-neutral-500 mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-neutral-900 font-medium hover:underline underline-offset-2">
              Create one
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
