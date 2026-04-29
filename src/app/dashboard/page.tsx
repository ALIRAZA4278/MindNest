"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  LogOut,
  Search,
  Bell,
  TrendingUp,
  Heart,
  Smile,
  Frown,
  Meh,
  ChevronRight,
  Users,
  BookOpen,
  Activity,
  Zap,
  User,
} from "lucide-react";

const upcomingSessions = [
  {
    id: 1,
    therapist: "Dr. Sarah K.",
    specialty: "Anxiety & CBT",
    date: "Today, 4:00 PM",
    type: "chat" as const,
    avatar: "SK",
  },
  {
    id: 2,
    therapist: "Dr. Michael R.",
    specialty: "Depression & Mindfulness",
    date: "Tomorrow, 10:00 AM",
    type: "voice" as const,
    avatar: "MR",
  },
];

const pastSessions = [
  {
    id: 1,
    therapist: "Dr. Sarah K.",
    date: "Apr 14, 2026",
    type: "chat" as const,
    duration: "45 min",
    rating: 5,
  },
  {
    id: 2,
    therapist: "Dr. Lisa W.",
    date: "Apr 10, 2026",
    type: "voice" as const,
    duration: "30 min",
    rating: 4,
  },
  {
    id: 3,
    therapist: "Dr. Michael R.",
    date: "Apr 7, 2026",
    type: "chat" as const,
    duration: "50 min",
    rating: 5,
  },
];

const moodData = [
  { day: "Mon", mood: "good" },
  { day: "Tue", mood: "great" },
  { day: "Wed", mood: "okay" },
  { day: "Thu", mood: "good" },
  { day: "Fri", mood: "great" },
  { day: "Sat", mood: "okay" },
  { day: "Sun", mood: "good" },
];

const moodIcons: Record<string, { icon: typeof Smile; color: string; bg: string }> = {
  great: { icon: Smile, color: "text-green-500", bg: "bg-green-100" },
  good: { icon: Smile, color: "text-teal-500", bg: "bg-teal-100" },
  okay: { icon: Meh, color: "text-yellow-500", bg: "bg-yellow-100" },
  bad: { icon: Frown, color: "text-red-500", bg: "bg-red-100" },
};

export default function DashboardPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="MindNest"
                width={120}
                height={44}
                className="h-9 w-auto"
                style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(87%) saturate(484%) hue-rotate(139deg) brightness(91%) contrast(90%)" }}
              />
            </Link>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <Link href="/profile" className="flex items-center gap-3 pl-4 border-l border-slate-200 hover:opacity-80 transition-opacity">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">S</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-slate-700">StarGazer42</p>
                  <p className="text-xs text-slate-400">Free Plan</p>
                </div>
              </Link>
              <Link
                href="/"
                className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                title="Log out"
              >
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Welcome back, StarGazer42
          </h1>
          <p className="text-slate-500 mt-1">
            How are you feeling today? Your next session is in 3 hours.
          </p>
        </div>

        {/* Free Plan Upgrade Banner */}
        <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">You&apos;re on the Free Plan</p>
              <p className="text-teal-100 text-xs mt-0.5">
                1 of 2 free chat sessions used this month. Upgrade for unlimited sessions &amp; voice calls.
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 bg-white text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-teal-50 transition-colors flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Upgrade to Premium
          </Link>
        </div>

        {/* Mood Check-in */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-8">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">
            How are you feeling right now?
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Great", value: "great", icon: Smile, color: "text-green-500", ring: "ring-green-200", bg: "bg-green-50" },
              { label: "Good", value: "good", icon: Smile, color: "text-teal-500", ring: "ring-teal-200", bg: "bg-teal-50" },
              { label: "Okay", value: "okay", icon: Meh, color: "text-yellow-500", ring: "ring-yellow-200", bg: "bg-yellow-50" },
              { label: "Not Good", value: "bad", icon: Frown, color: "text-red-500", ring: "ring-red-200", bg: "bg-red-50" },
            ].map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${
                  selectedMood === mood.value
                    ? `${mood.bg} border-transparent ring-2 ${mood.ring}`
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <mood.icon className={`w-5 h-5 ${mood.color}`} />
                <span className="text-sm font-medium text-slate-700">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions + Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link
            href="/therapists"
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-5 text-white hover:shadow-lg hover:shadow-teal-200/40 transition-all group"
          >
            <Search className="w-8 h-8 mb-3 opacity-80" />
            <p className="font-semibold">Find Therapist</p>
            <p className="text-sm text-teal-100 mt-1">Browse & connect</p>
          </Link>
          <Link
            href="/chat/1"
            className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all group"
          >
            <MessageCircle className="w-8 h-8 mb-3 text-blue-500" />
            <p className="font-semibold text-slate-800">Start Chat</p>
            <p className="text-sm text-slate-500 mt-1">Text your therapist</p>
          </Link>
          <Link
            href="/call/1"
            className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all group"
          >
            <Phone className="w-8 h-8 mb-3 text-purple-500" />
            <p className="font-semibold text-slate-800">Voice Call</p>
            <p className="text-sm text-slate-500 mt-1">Talk to a therapist</p>
          </Link>
          <Link
            href="/profile"
            className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md transition-all group"
          >
            <User className="w-8 h-8 mb-3 text-orange-500" />
            <p className="font-semibold text-slate-800">My Profile</p>
            <p className="text-sm text-slate-500 mt-1">Settings & history</p>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-slate-800">Upcoming Sessions</h2>
                <Link href="/therapists" className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1">
                  Book new <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{session.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">{session.therapist}</p>
                        <p className="text-sm text-slate-500">{session.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs text-slate-400">{session.date}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={session.type === "chat" ? `/chat/${session.id}` : `/call/${session.id}`}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        session.type === "chat"
                          ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                          : "bg-purple-50 text-purple-600 hover:bg-purple-100"
                      }`}
                    >
                      {session.type === "chat" ? (
                        <MessageCircle className="w-4 h-4" />
                      ) : (
                        <Phone className="w-4 h-4" />
                      )}
                      {session.type === "chat" ? "Join Chat" : "Join Call"}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Session History */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-5">Session History</h2>
              <div className="space-y-3">
                {pastSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          session.type === "chat" ? "bg-blue-50" : "bg-purple-50"
                        }`}
                      >
                        {session.type === "chat" ? (
                          <MessageCircle className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Phone className="w-5 h-5 text-purple-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-700">{session.therapist}</p>
                        <p className="text-xs text-slate-400">
                          {session.date} &middot; {session.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: session.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Mood */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-teal-500" />
                Weekly Mood
              </h3>
              <div className="flex justify-between">
                {moodData.map((d) => {
                  const m = moodIcons[d.mood];
                  return (
                    <div key={d.day} className="flex flex-col items-center gap-2">
                      <div className={`w-9 h-9 rounded-full ${m.bg} flex items-center justify-center`}>
                        <m.icon className={`w-5 h-5 ${m.color}`} />
                      </div>
                      <span className="text-[10px] text-slate-400 font-medium">{d.day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-500" />
                Resources for You
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Managing Anxiety at Work", tag: "Article" },
                  { title: "5-Minute Breathing Exercise", tag: "Exercise" },
                  { title: "Understanding Your Emotions", tag: "Guide" },
                ].map((resource) => (
                  <Link
                    key={resource.title}
                    href="/resources"
                    className="flex items-center justify-between py-2 group"
                  >
                    <div>
                      <p className="text-sm text-slate-700 group-hover:text-teal-600 transition-colors">
                        {resource.title}
                      </p>
                      <span className="text-xs text-slate-400">{resource.tag}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                  </Link>
                ))}
              </div>
              <Link
                href="/resources"
                className="mt-3 block text-center text-xs text-teal-600 hover:text-teal-700 font-medium"
              >
                View all resources →
              </Link>
            </div>

            {/* Crisis Help */}
            <div className="bg-red-50 rounded-2xl border border-red-100 p-6">
              <h3 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                Need Immediate Help?
              </h3>
              <p className="text-xs text-red-600 leading-relaxed">
                If you&apos;re in crisis or having suicidal thoughts, please reach out
                immediately.
              </p>
              <a
                href="tel:988"
                className="mt-3 block text-center bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
              >
                Call 988 Crisis Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
