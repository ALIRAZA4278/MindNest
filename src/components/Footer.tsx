import Link from "next/link";
import { Shield, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Mind<span className="text-teal-400">Bridge</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Anonymous, safe, and professional mental health support. Connect with
              certified therapists without revealing your identity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm hover:text-teal-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-sm hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><Link href="/therapists" className="text-sm hover:text-teal-400 transition-colors">Find a Therapist</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-teal-400 transition-colors">Pricing</Link></li>
              <li><Link href="/resources" className="text-sm hover:text-teal-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Data Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} MindNest. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for mental health awareness
          </p>
        </div>
      </div>

      {/* Crisis Banner */}
      <div className="bg-teal-700 text-center py-3 px-4">
        <p className="text-sm text-teal-50">
          If you&apos;re in crisis, please call the{" "}
          <a href="tel:988" className="font-semibold underline">
            988 Suicide &amp; Crisis Lifeline
          </a>{" "}
          or text HOME to 741741.
        </p>
      </div>
    </footer>
  );
}
