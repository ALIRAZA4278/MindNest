"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  MessageCircle,
  Phone,
  Lock,
  UserCheck,
  Clock,
  Star,
  ArrowRight,
  Heart,
  Eye,
  EyeOff,
  Sparkles,
  Users,
  Award,
  Headphones,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-purple-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">100% Anonymous & Secure</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Your Safe Space for{" "}
                <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Connect anonymously with certified therapists through secure chat or
                voice calls. No judgment. No identity reveal. Just the support you
                deserve.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-teal-200"
                >
                  Start Free Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-teal-300 text-slate-700 font-semibold px-8 py-4 rounded-full transition-all"
                >
                  How It Works
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-teal-600" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-teal-600" />
                  <span>Licensed therapists</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>24/7 available</span>
                </div>
              </div>
            </div>

            {/* Right - Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Main Card */}
                <div className="w-80 bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-8 border border-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Dr. Anonymous</p>
                      <p className="text-sm text-green-500 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        Online now
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-slate-700">
                        Welcome! This is a safe space. How are you feeling today?
                      </p>
                    </div>
                    <div className="bg-teal-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] ml-auto">
                      <p className="text-sm text-white">
                        I&apos;ve been feeling anxious lately...
                      </p>
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm text-slate-700">
                        I hear you. Let&apos;s talk about what&apos;s been triggering that.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 bg-slate-50 rounded-full px-4 py-3">
                    <EyeOff className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Your identity is hidden...</span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">Encrypted</p>
                    <p className="text-[10px] text-slate-400">256-bit AES</p>
                  </div>
                </div>

                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">50k+ Users</p>
                    <p className="text-[10px] text-slate-400">Trust MindBridge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Active Users", icon: Users },
              { value: "500+", label: "Licensed Therapists", icon: Award },
              { value: "98%", label: "Satisfaction Rate", icon: Star },
              { value: "24/7", label: "Availability", icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="w-6 h-6 text-teal-500 mb-2" />
                <p className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              Features
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Everything You Need for Your Mental Wellness
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our platform is built with your safety and comfort in mind. Every feature
              is designed to make therapy accessible and stigma-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: EyeOff,
                title: "Complete Anonymity",
                desc: "No personal information required. Use a random alias and connect without revealing your real identity.",
                color: "from-teal-500 to-teal-600",
              },
              {
                icon: MessageCircle,
                title: "Secure Chat",
                desc: "Text-based therapy sessions with end-to-end encryption. Express yourself at your own pace.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Phone,
                title: "Voice Sessions",
                desc: "When typing isn't enough, connect via voice with your therapist. Voice is anonymized for extra privacy.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: UserCheck,
                title: "Certified Therapists",
                desc: "All therapists are licensed, verified professionals with years of experience in mental health.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Lock,
                title: "Bank-Level Security",
                desc: "256-bit AES encryption, HIPAA compliant, zero-knowledge architecture. Your data stays yours.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Clock,
                title: "Available 24/7",
                desc: "Mental health doesn't follow a schedule. Connect with a therapist anytime, day or night.",
                color: "from-pink-500 to-pink-600",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:shadow-slate-100 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Start Your Journey in 3 Simple Steps
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Getting help has never been easier. No complicated sign-ups, no identity
              verification, no judgment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create Anonymous Profile",
                desc: "Choose an alias and set your preferences. No real name, email verification, or phone number needed.",
                icon: Eye,
              },
              {
                step: "02",
                title: "Match with a Therapist",
                desc: "Browse therapists by specialty, language, and availability. Find the perfect match for your needs.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Start Your Session",
                desc: "Connect via secure chat or voice call. Begin your healing journey in a completely safe environment.",
                icon: Heart,
              },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-300 to-transparent" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-teal-50 to-purple-50 border-2 border-teal-100 flex items-center justify-center mx-auto">
                      <item.icon className="w-10 h-10 text-teal-600" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Stories of Hope & Healing
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Real experiences from our anonymous community members who found the
              courage to seek help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I was afraid to talk to anyone about my anxiety. MindBridge gave me a safe space where I didn't have to pretend. My therapist truly understood me.",
                alias: "Anonymous User #4821",
                detail: "Anxiety & Stress",
                rating: 5,
              },
              {
                text: "Being able to stay anonymous removed all the barriers I had about therapy. I've been using it for 6 months and my life has genuinely changed.",
                alias: "Anonymous User #7293",
                detail: "Depression Recovery",
                rating: 5,
              },
              {
                text: "The voice sessions feel so personal yet safe. I can be vulnerable without worrying about stigma. This platform is a game-changer for mental health.",
                alias: "Anonymous User #1056",
                detail: "Work-Life Balance",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.alias}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      {testimonial.alias}
                    </p>
                    <p className="text-xs text-slate-400">{testimonial.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            You Deserve to Be Heard
          </h2>
          <p className="mt-4 text-lg text-teal-100 leading-relaxed">
            Take the first step toward better mental health. Your anonymity is our
            promise. Your wellness is our mission.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-semibold px-8 py-4 rounded-full hover:bg-teal-50 transition-colors"
            >
              Start Your Free Session
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/therapists"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Therapists
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
