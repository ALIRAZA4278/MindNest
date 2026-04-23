"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Search,
  Star,
  MessageCircle,
  Phone,
  Filter,
  Clock,
  Award,
  ArrowLeft,
  Globe,
  Heart,
  X,
} from "lucide-react";

const therapists = [
  {
    id: "1",
    name: "Dr. Sarah K.",
    avatar: "SK",
    specialty: "Anxiety, CBT, Stress Management",
    experience: "12 years",
    rating: 4.9,
    reviews: 234,
    languages: ["English", "Spanish"],
    available: true,
    bio: "Specializing in cognitive behavioral therapy for anxiety and stress-related disorders.",
    nextSlot: "Today, 4:00 PM",
    sessionRate: "$45/session",
    gradient: "from-teal-400 to-teal-600",
  },
  {
    id: "2",
    name: "Dr. Michael R.",
    avatar: "MR",
    specialty: "Depression, Mindfulness, Trauma",
    experience: "8 years",
    rating: 4.8,
    reviews: 189,
    languages: ["English"],
    available: true,
    bio: "Helping individuals navigate depression and trauma through mindfulness-based approaches.",
    nextSlot: "Tomorrow, 10:00 AM",
    sessionRate: "$40/session",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: "3",
    name: "Dr. Lisa W.",
    avatar: "LW",
    specialty: "Relationships, Self-Esteem, Grief",
    experience: "15 years",
    rating: 4.9,
    reviews: 312,
    languages: ["English", "French"],
    available: false,
    bio: "Expert in relationship counseling and helping individuals build self-worth and resilience.",
    nextSlot: "Apr 18, 2:00 PM",
    sessionRate: "$50/session",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    id: "4",
    name: "Dr. James T.",
    avatar: "JT",
    specialty: "PTSD, Addiction Recovery, Anger Management",
    experience: "10 years",
    rating: 4.7,
    reviews: 156,
    languages: ["English", "Arabic"],
    available: true,
    bio: "Dedicated to supporting individuals through PTSD recovery and addiction challenges.",
    nextSlot: "Today, 6:00 PM",
    sessionRate: "$42/session",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    id: "5",
    name: "Dr. Emily C.",
    avatar: "EC",
    specialty: "Youth Counseling, ADHD, Family Therapy",
    experience: "7 years",
    rating: 4.8,
    reviews: 98,
    languages: ["English", "Mandarin"],
    available: true,
    bio: "Passionate about helping young adults and families navigate challenges and strengthen bonds.",
    nextSlot: "Tomorrow, 3:00 PM",
    sessionRate: "$38/session",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    id: "6",
    name: "Dr. Robert N.",
    avatar: "RN",
    specialty: "OCD, Phobias, Sleep Disorders",
    experience: "20 years",
    rating: 5.0,
    reviews: 421,
    languages: ["English", "German"],
    available: true,
    bio: "Two decades of experience treating OCD, phobias, and sleep-related conditions.",
    nextSlot: "Today, 8:00 PM",
    sessionRate: "$55/session",
    gradient: "from-green-400 to-green-600",
  },
];

const specialties = [
  "All",
  "Anxiety",
  "Depression",
  "Relationships",
  "Trauma",
  "PTSD",
  "Grief",
  "Self-Esteem",
  "ADHD",
  "OCD",
];

export default function TherapistsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = therapists.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      t.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    return matchesSearch && matchesSpecialty;
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
                <h1 className="text-lg font-semibold text-slate-800">Find a Therapist</h1>
                <p className="text-xs text-slate-400">{filtered.length} therapists available</p>
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
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or specialty..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl border transition-colors ${
              showFilters
                ? "bg-teal-50 border-teal-200 text-teal-700"
                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            <Filter className="w-5 h-5" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>

        {/* Specialty Tags */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-slate-100 p-4 mb-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Specialty
            </p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSpecialty(s)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedSpecialty === s
                      ? "bg-teal-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Therapist Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((therapist) => (
            <Link
              key={therapist.id}
              href={`/therapists/${therapist.id}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:shadow-slate-100 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${therapist.gradient} flex items-center justify-center`}
                  >
                    <span className="text-lg font-bold text-white">{therapist.avatar}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                      {therapist.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium text-slate-700">{therapist.rating}</span>
                      <span className="text-xs text-slate-400">({therapist.reviews})</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    therapist.available
                      ? "bg-green-50 text-green-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {therapist.available ? "Available" : "Busy"}
                </span>
              </div>

              <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">
                {therapist.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {therapist.specialty.split(", ").map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {therapist.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    {therapist.languages.join(", ")}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {therapist.nextSlot}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
