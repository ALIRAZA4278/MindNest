"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  ArrowLeft,
  BookOpen,
  Wind,
  Heart,
  Brain,
  Moon,
  Search,
  ArrowRight,
  Clock,
  Play,
  ExternalLink,
  Phone,
} from "lucide-react";

type Category = "all" | "anxiety" | "depression" | "self-care" | "mindfulness" | "sleep";

const categories: { value: Category; label: string; icon: typeof BookOpen }[] = [
  { value: "all", label: "All Resources", icon: BookOpen },
  { value: "anxiety", label: "Anxiety", icon: Wind },
  { value: "depression", label: "Depression", icon: Heart },
  { value: "mindfulness", label: "Mindfulness", icon: Brain },
  { value: "self-care", label: "Self-Care", icon: Heart },
  { value: "sleep", label: "Sleep", icon: Moon },
];

const resources = [
  {
    id: 1,
    title: "Understanding Anxiety: What Your Body is Trying to Tell You",
    category: "anxiety" as Category,
    type: "Article",
    readTime: "5 min read",
    description: "Learn how anxiety manifests in the body and mind, and why it's actually a protective response that can become overwhelming.",
    tags: ["Anxiety", "Education", "Body"],
    color: "from-blue-400 to-blue-600",
    icon: Wind,
  },
  {
    id: 2,
    title: "Box Breathing: A 4-Minute Technique for Immediate Calm",
    category: "anxiety" as Category,
    type: "Exercise",
    readTime: "4 min",
    description: "Used by Navy SEALs and therapists alike, box breathing can interrupt anxiety spirals within minutes. Follow along with this guided exercise.",
    tags: ["Breathing", "Anxiety", "Quick Relief"],
    color: "from-teal-400 to-teal-600",
    icon: Wind,
  },
  {
    id: 3,
    title: "Breaking the Depression Cycle: Small Steps That Actually Work",
    category: "depression" as Category,
    type: "Guide",
    readTime: "8 min read",
    description: "When depression makes everything feel impossible, starting small is not weakness — it's strategy. This guide walks through practical micro-actions.",
    tags: ["Depression", "Action", "Recovery"],
    color: "from-purple-400 to-purple-600",
    icon: Heart,
  },
  {
    id: 4,
    title: "5-Minute Body Scan Meditation",
    category: "mindfulness" as Category,
    type: "Exercise",
    readTime: "5 min",
    description: "A quick body scan to release tension and reconnect with yourself. No experience with meditation required — just find a comfortable position.",
    tags: ["Mindfulness", "Meditation", "Relaxation"],
    color: "from-green-400 to-green-600",
    icon: Brain,
  },
  {
    id: 5,
    title: "The Science of Self-Compassion: Why Being Kind to Yourself Matters",
    category: "self-care" as Category,
    type: "Article",
    readTime: "6 min read",
    description: "Research shows self-compassion is more effective than self-criticism for motivation and mental health. Here's how to practice it.",
    tags: ["Self-Compassion", "Science", "Self-Care"],
    color: "from-pink-400 to-pink-600",
    icon: Heart,
  },
  {
    id: 6,
    title: "Sleep Hygiene: A Practical Checklist for Better Rest",
    category: "sleep" as Category,
    type: "Guide",
    readTime: "7 min read",
    description: "Poor sleep and mental health create a feedback loop. This actionable checklist covers environment, routines, and habits that improve sleep quality.",
    tags: ["Sleep", "Routine", "Wellness"],
    color: "from-indigo-400 to-indigo-600",
    icon: Moon,
  },
  {
    id: 7,
    title: "Journaling Prompts for Emotional Processing",
    category: "self-care" as Category,
    type: "Exercise",
    readTime: "10 min",
    description: "30 guided prompts to help you process difficult emotions, identify patterns, and develop insight about your inner world.",
    tags: ["Journaling", "Emotions", "Self-Discovery"],
    color: "from-orange-400 to-orange-600",
    icon: BookOpen,
  },
  {
    id: 8,
    title: "Recognizing Signs of Depression in Yourself and Others",
    category: "depression" as Category,
    type: "Article",
    readTime: "5 min read",
    description: "Depression often doesn't look like sadness. Learn to recognize the subtle signs, including in people who seem 'high-functioning.'",
    tags: ["Depression", "Awareness", "Support"],
    color: "from-violet-400 to-violet-600",
    icon: Heart,
  },
  {
    id: 9,
    title: "Progressive Muscle Relaxation for Anxiety & Stress",
    category: "anxiety" as Category,
    type: "Exercise",
    readTime: "12 min",
    description: "A systematic technique that tenses and releases muscle groups to reduce physical tension — one of the most evidence-backed anxiety interventions.",
    tags: ["Anxiety", "Body", "Relaxation"],
    color: "from-cyan-400 to-cyan-600",
    icon: Wind,
  },
];

const typeColors: Record<string, string> = {
  Article: "bg-blue-50 text-blue-600",
  Exercise: "bg-teal-50 text-teal-600",
  Guide: "bg-purple-50 text-purple-600",
};

const crisisResources = [
  { name: "988 Suicide & Crisis Lifeline", action: "Call or text 988", href: "tel:988" },
  { name: "Crisis Text Line", action: "Text HOME to 741741", href: "sms:741741" },
  { name: "NAMI Helpline", action: "1-800-950-NAMI", href: "tel:18009506264" },
  { name: "SAMHSA Helpline", action: "1-800-662-4357", href: "tel:18006624357" },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-lg font-semibold text-slate-800">Resource Library</h1>
                <p className="text-xs text-slate-400">{filtered.length} resources available</p>
              </div>
            </div>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-teal-600 to-purple-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-teal-200" />
              <span className="text-teal-200 text-sm font-medium">Curated for You</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Your Mental Wellness Library
            </h2>
            <p className="text-teal-100 text-sm leading-relaxed max-w-xl">
              Evidence-based articles, guided exercises, and practical guides — all
              reviewed by our licensed therapists. Use between sessions to support
              your progress.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, exercises, guides..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.value
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-teal-300"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured Exercise */}
        {activeCategory === "all" && !searchQuery && (
          <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-8 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-64 h-40 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shrink-0">
              <Wind className="w-16 h-16 text-white/80" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold bg-teal-50 text-teal-600 px-3 py-1 rounded-full">
                  Featured Exercise
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  4 min
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Box Breathing: A 4-Minute Technique for Immediate Calm
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Used by Navy SEALs and therapists alike, box breathing can interrupt anxiety
                spirals within minutes. Try it now — no equipment, no experience needed.
              </p>
              <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                <Play className="w-4 h-4 fill-white" />
                Start Exercise
              </button>
            </div>
          </div>
        )}

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map((resource) => (
            <div
              key={resource.id}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-100 transition-all group cursor-pointer flex flex-col"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-4`}>
                <resource.icon className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[resource.type]}`}>
                  {resource.type}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {resource.readTime}
                </span>
              </div>

              <h3 className="font-semibold text-slate-800 leading-snug mb-2 group-hover:text-teal-600 transition-colors flex-1">
                {resource.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {resource.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors mt-auto">
                {resource.type === "Exercise" ? (
                  <>
                    <Play className="w-4 h-4" />
                    Start Exercise
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4" />
                    Read {resource.type}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Crisis Resources */}
        <div className="bg-red-50 rounded-2xl border border-red-100 p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="font-bold text-red-800">Crisis & Emergency Resources</h2>
              <p className="text-sm text-red-600">If you&apos;re in immediate distress, please reach out now.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {crisisResources.map((r) => (
              <a
                key={r.name}
                href={r.href}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-red-100 hover:border-red-300 transition-colors group"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                  <p className="text-xs text-red-600 mt-0.5">{r.action}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-red-300 group-hover:text-red-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
