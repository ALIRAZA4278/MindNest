"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              Mind<span className="text-teal-600">Bridge</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">
              Testimonials
            </a>
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-teal-600 transition-colors">
              Pricing
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors px-4 py-2"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition-colors px-5 py-2.5 rounded-full"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-600 hover:text-teal-600"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          <a href="#features" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-teal-600 py-2">
            Features
          </a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-teal-600 py-2">
            How It Works
          </a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-teal-600 py-2">
            Testimonials
          </a>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block text-sm text-slate-600 hover:text-teal-600 py-2">
            Pricing
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link href="/login" className="text-sm text-center font-medium text-slate-700 py-2.5 rounded-full border border-slate-200">
              Log In
            </Link>
            <Link href="/signup" className="text-sm text-center font-medium text-white bg-teal-600 py-2.5 rounded-full">
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
