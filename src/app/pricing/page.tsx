"use client";

import Link from "next/link";
import {
  Shield,
  Check,
  X,
  Zap,
  Building,
  Star,
  ArrowRight,
  MessageCircle,
  Phone,
  Lock,
  Users,
  BarChart2,
  Headphones,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with anonymous therapy at no cost.",
    color: "border-slate-200",
    badge: null,
    buttonStyle: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
    buttonText: "Get Started Free",
    href: "/signup",
    features: [
      { label: "2 chat sessions per month", included: true },
      { label: "Anonymous alias & profile", included: true },
      { label: "Access to resource library", included: true },
      { label: "Crisis support links", included: true },
      { label: "Browse therapist profiles", included: true },
      { label: "Voice call sessions", included: false },
      { label: "Unlimited chat sessions", included: false },
      { label: "Priority therapist matching", included: false },
      { label: "Mood analytics & reports", included: false },
      { label: "Session recordings (text)", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    description: "Full access to everything MindNest offers.",
    color: "border-teal-500 ring-2 ring-teal-500/20",
    badge: "Most Popular",
    buttonStyle: "bg-teal-600 hover:bg-teal-700 text-white",
    buttonText: "Start Premium",
    href: "/signup?plan=premium",
    features: [
      { label: "Unlimited chat sessions", included: true },
      { label: "Anonymous alias & profile", included: true },
      { label: "Access to resource library", included: true },
      { label: "Crisis support links", included: true },
      { label: "Browse therapist profiles", included: true },
      { label: "Voice call sessions", included: true },
      { label: "Priority therapist matching", included: true },
      { label: "Mood analytics & reports", included: true },
      { label: "Session recordings (text)", included: true },
      { label: "24/7 on-demand support", included: true },
    ],
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "contact us",
    description: "For universities, workplaces & mental health organizations.",
    color: "border-purple-200",
    badge: null,
    buttonStyle: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
    buttonText: "Contact Sales",
    href: "mailto:partnerships@mindbridge.app",
    features: [
      { label: "Everything in Premium", included: true },
      { label: "Bulk user accounts", included: true },
      { label: "Admin analytics dashboard", included: true },
      { label: "Custom branding options", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "HIPAA BAA agreement", included: true },
      { label: "SSO / SAML integration", included: true },
      { label: "Custom session limits", included: true },
      { label: "Employee wellness reports", included: true },
      { label: "On-site training & onboarding", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Is my identity really anonymous?",
    a: "Yes. We never ask for your real name, email, or phone number. You sign up with an alias, and our zero-knowledge architecture means even we don't know who you are.",
  },
  {
    q: "Can I cancel my Premium plan anytime?",
    a: "Absolutely. No contracts, no cancellation fees. You can downgrade to Free at any time from your profile settings.",
  },
  {
    q: "What happens to my chat history if I cancel?",
    a: "Your anonymized session transcripts remain accessible for 30 days after cancellation, then are permanently deleted in line with our privacy policy.",
  },
  {
    q: "Are the therapists really licensed?",
    a: "Every therapist on MindNest undergoes credential verification — including license number, board certifications, and background checks — before they can accept sessions.",
  },
  {
    q: "How does the Institutional plan work?",
    a: "We partner with universities, employers, and organizations to provide subsidized or fully covered access for their members. Pricing is based on number of users and feature requirements.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-800">
                Mind<span className="text-teal-600">Bridge</span>
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
            <Lock className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">No identity required for any plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-slate-500 leading-relaxed">
            Start free, upgrade when you&apos;re ready. Every plan keeps your identity
            completely anonymous.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-teal-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    {plan.name === "Free" && <Zap className="w-5 h-5 text-slate-400" />}
                    {plan.name === "Premium" && <Headphones className="w-5 h-5 text-teal-600" />}
                    {plan.name === "Institutional" && <Building className="w-5 h-5 text-purple-600" />}
                    <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                  </div>
                  <div className="flex items-end gap-1 my-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      {f.included ? (
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-teal-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-slate-400" />
                        </div>
                      )}
                      <span className={`text-sm ${f.included ? "text-slate-700" : "text-slate-400"}`}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold transition-all ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Every Plan Includes
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "100% Anonymous", desc: "No real identity ever required" },
              { icon: Lock, title: "End-to-End Encrypted", desc: "256-bit AES, zero-knowledge" },
              { icon: Users, title: "Licensed Therapists", desc: "Verified credentials only" },
              { icon: BarChart2, title: "Mood Tracking", desc: "Daily check-ins & history" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session types comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Session Types
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Chat Sessions</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Text-based therapy at your own pace. Messages are encrypted in real-time.
                Available on Free (2/month) and unlimited on Premium.
              </p>
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Free & Premium
              </span>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 rounded-2xl bg-purple-500 flex items-center justify-center mb-5">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Voice Call Sessions</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Encrypted voice sessions with identity anonymization. Voice is processed
                to remove identifying characteristics. Premium only.
              </p>
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                Premium Only
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-slate-100 p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-purple-700">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-teal-100">
            No credit card required. No identity revealed. Just support.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
