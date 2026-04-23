"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Shield,
  Eye,
  EyeOff,
  ArrowRight,
  Shuffle,
  Check,
  Sparkles,
} from "lucide-react";

const randomAliases = [
  "CalmRiver23",
  "StarGazer88",
  "SilentWave42",
  "MoonWalker17",
  "PeacefulOwl56",
  "BrightSky99",
  "GentleBreeze31",
  "QuietStorm77",
];

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ alias: "", password: "", confirm: "" });
  const [agreed, setAgreed] = useState(false);

  const generateAlias = () => {
    const random = randomAliases[Math.floor(Math.random() * randomAliases.length)];
    setForm({ ...form, alias: random });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Visual */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-purple-700 to-teal-600 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative text-center text-white max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Begin Your Healing Journey</h2>
          <p className="mt-4 text-purple-100 leading-relaxed">
            Join thousands of people who have found courage to seek help
            anonymously. No judgment, no stigma, just support.
          </p>

          <div className="mt-10 space-y-4 text-left">
            {[
              "No personal information required",
              "Choose your own anonymous alias",
              "Free sessions included",
              "Cancel anytime, no questions asked",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-purple-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">
              Mind<span className="text-teal-600">Bridge</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold text-slate-900">Create your space</h1>
          <p className="mt-2 text-slate-500">
            Set up an anonymous profile and start connecting with therapists.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Alias */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Choose an Anonymous Alias
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={form.alias}
                  onChange={(e) => setForm({ ...form, alias: e.target.value })}
                  placeholder="e.g. StarGazer42"
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={generateAlias}
                  className="px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                  title="Generate random alias"
                >
                  <Shuffle className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1.5 text-xs text-slate-400">
                This is how therapists will know you. No real name needed.
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Min 8 characters"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all pr-12"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                required
                minLength={8}
              />
            </div>

            {/* What brings you here */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                What brings you here? <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                <option value="">Select a reason...</option>
                <option value="anxiety">Anxiety & Stress</option>
                <option value="depression">Depression</option>
                <option value="relationships">Relationship Issues</option>
                <option value="grief">Grief & Loss</option>
                <option value="work">Work-Life Balance</option>
                <option value="self-esteem">Self-Esteem</option>
                <option value="other">Other / Prefer not to say</option>
              </select>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                required
              />
              <span className="text-sm text-slate-500">
                I agree to the{" "}
                <a href="#" className="text-teal-600 hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>.
                I understand my identity will remain anonymous.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-200"
            >
              Create Anonymous Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-600 hover:text-teal-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
