"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  MessageCircle,
  Phone,
  TrendingUp,
  Bell,
  Lock,
  LogOut,
  ChevronRight,
  Zap,
  Check,
  Edit3,
  Smile,
  Meh,
  Frown,
  Clock,
  Award,
  Heart,
} from "lucide-react";

const moodHistory = [
  { date: "Apr 23", mood: "great" },
  { date: "Apr 22", mood: "good" },
  { date: "Apr 21", mood: "okay" },
  { date: "Apr 20", mood: "good" },
  { date: "Apr 19", mood: "bad" },
  { date: "Apr 18", mood: "okay" },
  { date: "Apr 17", mood: "good" },
];

const moodConfig: Record<string, { icon: typeof Smile; color: string; bg: string; label: string }> = {
  great: { icon: Smile, color: "text-green-500", bg: "bg-green-100", label: "Great" },
  good: { icon: Smile, color: "text-teal-500", bg: "bg-teal-100", label: "Good" },
  okay: { icon: Meh, color: "text-yellow-500", bg: "bg-yellow-100", label: "Okay" },
  bad: { icon: Frown, color: "text-red-500", bg: "bg-red-100", label: "Not Good" },
};

const sessionHistory = [
  { therapist: "Dr. Sarah K.", date: "Apr 23, 2026", type: "chat" as const, duration: "45 min", rating: 5 },
  { therapist: "Dr. Michael R.", date: "Apr 19, 2026", type: "voice" as const, duration: "30 min", rating: 4 },
  { therapist: "Dr. Sarah K.", date: "Apr 14, 2026", type: "chat" as const, duration: "50 min", rating: 5 },
  { therapist: "Dr. Lisa W.", date: "Apr 10, 2026", type: "voice" as const, duration: "35 min", rating: 4 },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"overview" | "sessions" | "settings">("overview");
  const [notifications, setNotifications] = useState({ session: true, mood: true, resources: false });
  const [editingAlias, setEditingAlias] = useState(false);
  const [alias, setAlias] = useState("StarGazer42");

  const isPremium = false; // simulate free plan

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="MindNest"
                  width={110}
                  height={40}
                  className="h-8 w-auto"
                  style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(87%) saturate(484%) hue-rotate(139deg) brightness(91%) contrast(90%)" }}
                />
              </Link>
            </div>
            <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-red-500 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Log Out</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                {editingAlias ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={alias}
                      onChange={(e) => setAlias(e.target.value)}
                      className="text-xl font-bold text-slate-900 border-b-2 border-teal-500 bg-transparent outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => setEditingAlias(false)}
                      className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-slate-900">{alias}</h1>
                    <button
                      onClick={() => setEditingAlias(true)}
                      className="p-1.5 text-slate-400 hover:text-teal-600 transition-colors"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                    isPremium ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  {isPremium ? "Premium" : "Free Plan"}
                </span>
                <span className="text-xs text-slate-400">Member since March 2026</span>
              </div>
            </div>
            {!isPremium && (
              <Link
                href="/pricing"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
              >
                <Zap className="w-4 h-4" />
                Upgrade to Premium
              </Link>
            )}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: MessageCircle, value: "12", label: "Chat Sessions", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Phone, value: "4", label: "Voice Calls", color: "text-purple-500", bg: "bg-purple-50" },
            { icon: Clock, value: "9h 20m", label: "Total Time", color: "text-teal-500", bg: "bg-teal-50" },
            { icon: Award, value: "7 days", label: "Current Streak", color: "text-orange-500", bg: "bg-orange-50" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-100 p-5 text-center">
              <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-lg font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="flex border-b border-slate-100">
            {(["overview", "sessions", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-teal-600 border-b-2 border-teal-600 bg-teal-50/50"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Mood History */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-teal-500" />
                    <h2 className="font-semibold text-slate-800">Recent Mood History</h2>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {moodHistory.map((entry) => {
                      const m = moodConfig[entry.mood];
                      return (
                        <div key={entry.date} className="flex flex-col items-center gap-1.5">
                          <div className={`w-11 h-11 rounded-full ${m.bg} flex items-center justify-center`}>
                            <m.icon className={`w-6 h-6 ${m.color}`} />
                          </div>
                          <span className="text-[10px] text-slate-400 text-center">{entry.date}</span>
                          <span className={`text-[10px] font-medium ${m.color}`}>{m.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Freemium Usage */}
                {!isPremium && (
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-semibold text-slate-800">Free Plan Usage</h2>
                      <Link href="/pricing" className="text-sm text-teal-600 hover:underline font-medium">
                        Upgrade
                      </Link>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-600">Chat sessions this month</span>
                          <span className="font-semibold text-slate-800">1 / 2 used</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-teal-500 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-600">Voice calls</span>
                          <span className="font-semibold text-slate-400">Premium only</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full w-0 bg-purple-500 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-teal-50 rounded-xl border border-teal-100">
                      <p className="text-sm text-teal-700 font-medium">
                        You have 1 free chat session left this month.
                      </p>
                      <p className="text-xs text-teal-600 mt-1">
                        Upgrade to Premium for unlimited sessions + voice calls.
                      </p>
                    </div>
                  </div>
                )}

                {/* Quick Links */}
                <div>
                  <h2 className="font-semibold text-slate-800 mb-4">Quick Access</h2>
                  <div className="space-y-2">
                    {[
                      { icon: MessageCircle, label: "Start a Chat Session", href: "/therapists", color: "text-blue-500" },
                      { icon: Phone, label: "Start a Voice Call", href: isPremium ? "/therapists" : "/pricing", color: "text-purple-500", locked: !isPremium },
                      { icon: TrendingUp, label: "Browse Resources", href: "/resources", color: "text-teal-500" },
                      { icon: Heart, label: "Crisis Support", href: "tel:988", color: "text-red-500" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span className="text-sm font-medium text-slate-700">{item.label}</span>
                          {item.locked && (
                            <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-medium">
                              Premium
                            </span>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SESSIONS TAB */}
            {activeTab === "sessions" && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-slate-800">Session History</h2>
                  <Link href="/therapists" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                    Book new session
                  </Link>
                </div>
                <div className="space-y-3">
                  {sessionHistory.map((session, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            session.type === "chat" ? "bg-blue-100" : "bg-purple-100"
                          }`}
                        >
                          {session.type === "chat" ? (
                            <MessageCircle className="w-5 h-5 text-blue-500" />
                          ) : (
                            <Phone className="w-5 h-5 text-purple-500" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">{session.therapist}</p>
                          <p className="text-xs text-slate-400">
                            {session.date} &middot; {session.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: session.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === "settings" && (
              <div className="space-y-8">
                {/* Notifications */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Bell className="w-5 h-5 text-slate-500" />
                    <h2 className="font-semibold text-slate-800">Notification Preferences</h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { key: "session" as const, label: "Session reminders", desc: "Get reminded 30 min before your session" },
                      { key: "mood" as const, label: "Daily mood check-in", desc: "A gentle prompt to log your mood each day" },
                      { key: "resources" as const, label: "Resource recommendations", desc: "Weekly curated articles & exercises" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50"
                      >
                        <div>
                          <p className="text-sm font-medium text-slate-700">{item.label}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                        </div>
                        <button
                          onClick={() => setNotifications((n) => ({ ...n, [item.key]: !n[item.key] }))}
                          className={`relative w-11 h-6 rounded-full transition-colors ${
                            notifications[item.key] ? "bg-teal-500" : "bg-slate-200"
                          }`}
                        >
                          <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                              notifications[item.key] ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-5 h-5 text-slate-500" />
                    <h2 className="font-semibold text-slate-800">Security</h2>
                  </div>
                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors group">
                      <div className="text-left">
                        <p className="text-sm font-medium text-slate-700">Change Password</p>
                        <p className="text-xs text-slate-400 mt-0.5">Update your account password</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white transition-colors group">
                      <div className="text-left">
                        <p className="text-sm font-medium text-slate-700">Active Sessions</p>
                        <p className="text-xs text-slate-400 mt-0.5">View & manage logged-in devices</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Plan */}
                <div>
                  <h2 className="font-semibold text-slate-800 mb-4">Your Plan</h2>
                  <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-800">{isPremium ? "Premium" : "Free Plan"}</p>
                      <p className="text-sm text-slate-500 mt-0.5">
                        {isPremium ? "Unlimited sessions & voice calls" : "2 chat sessions/month"}
                      </p>
                    </div>
                    {!isPremium && (
                      <Link
                        href="/pricing"
                        className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                      >
                        Upgrade
                      </Link>
                    )}
                  </div>
                </div>

                {/* Danger Zone */}
                <div className="border border-red-100 rounded-2xl p-6 bg-red-50/50">
                  <h2 className="font-semibold text-red-700 mb-4">Danger Zone</h2>
                  <div className="space-y-3">
                    <button className="w-full text-left p-4 rounded-xl border border-red-100 bg-white hover:bg-red-50 transition-colors">
                      <p className="text-sm font-medium text-red-600">Delete All Session Data</p>
                      <p className="text-xs text-red-400 mt-0.5">Permanently removes all chat & call history</p>
                    </button>
                    <button className="w-full text-left p-4 rounded-xl border border-red-100 bg-white hover:bg-red-50 transition-colors">
                      <p className="text-sm font-medium text-red-600">Delete Account</p>
                      <p className="text-xs text-red-400 mt-0.5">Permanently removes your anonymous account. This cannot be undone.</p>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
