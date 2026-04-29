"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="MindNest"
              width={130}
              height={48}
              className="h-10 w-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(87%) saturate(484%) hue-rotate(139deg) brightness(91%) contrast(90%)" }}
            />
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
