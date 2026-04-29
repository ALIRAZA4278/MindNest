"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  MessageCircle,
  Phone,
  Clock,
  Award,
  Globe,
  Calendar,
  Check,
  Heart,
  BookOpen,
  Shield,
} from "lucide-react";

const therapistData: Record<
  string,
  {
    name: string;
    avatar: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    languages: string[];
    bio: string;
    longBio: string;
    education: string[];
    approaches: string[];
    availability: { day: string; time: string }[];
    sessionRate: string;
    gradient: string;
  }
> = {
  "1": {
    name: "Dr. Sarah K.",
    avatar: "SK",
    specialty: "Anxiety, CBT, Stress Management",
    experience: "12 years",
    rating: 4.9,
    reviews: 234,
    languages: ["English", "Spanish"],
    bio: "Specializing in cognitive behavioral therapy for anxiety and stress-related disorders.",
    longBio:
      "Dr. Sarah K. is a licensed clinical psychologist with over 12 years of experience in treating anxiety disorders, stress-related conditions, and mood disorders. She utilizes evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness techniques, and exposure therapy. Her warm and empathetic approach creates a safe space for clients to explore their challenges and develop effective coping strategies.",
    education: [
      "Ph.D. Clinical Psychology - Stanford University",
      "M.A. Psychology - UCLA",
      "Certified CBT Practitioner",
    ],
    approaches: [
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Stress Reduction",
      "Exposure Therapy",
      "Solution-Focused Brief Therapy",
    ],
    availability: [
      { day: "Monday", time: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", time: "10:00 AM - 6:00 PM" },
      { day: "Friday", time: "9:00 AM - 3:00 PM" },
    ],
    sessionRate: "$45/session",
    gradient: "from-teal-400 to-teal-600",
  },
  "2": {
    name: "Dr. Michael R.",
    avatar: "MR",
    specialty: "Depression, Mindfulness, Trauma",
    experience: "8 years",
    rating: 4.8,
    reviews: 189,
    languages: ["English"],
    bio: "Helping individuals navigate depression and trauma through mindfulness-based approaches.",
    longBio:
      "Dr. Michael R. brings 8 years of dedicated experience in treating depression, trauma, and PTSD. His approach combines traditional psychotherapy with mindfulness and somatic experiencing techniques. He believes in creating a non-judgmental therapeutic relationship where clients feel truly heard and supported in their healing journey.",
    education: [
      "Psy.D. Clinical Psychology - Columbia University",
      "M.S. Counseling Psychology - NYU",
      "Certified Trauma Specialist",
    ],
    approaches: [
      "Mindfulness-Based Cognitive Therapy",
      "EMDR Therapy",
      "Psychodynamic Therapy",
      "Somatic Experiencing",
    ],
    availability: [
      { day: "Tuesday", time: "8:00 AM - 4:00 PM" },
      { day: "Thursday", time: "10:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
    ],
    sessionRate: "$40/session",
    gradient: "from-blue-400 to-blue-600",
  },
};

// Fallback for IDs not explicitly defined
const defaultTherapist = {
  name: "Dr. Therapist",
  avatar: "DT",
  specialty: "General Therapy",
  experience: "10 years",
  rating: 4.8,
  reviews: 150,
  languages: ["English"],
  bio: "Experienced therapist providing compassionate mental health support.",
  longBio:
    "An experienced and compassionate therapist dedicated to helping individuals achieve mental wellness through evidence-based therapeutic approaches.",
  education: ["Ph.D. Clinical Psychology", "Licensed Professional Counselor"],
  approaches: ["Cognitive Behavioral Therapy", "Person-Centered Therapy"],
  availability: [
    { day: "Monday", time: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", time: "10:00 AM - 4:00 PM" },
  ],
  sessionRate: "$40/session",
  gradient: "from-teal-400 to-purple-600",
};

export default function TherapistProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const therapist = therapistData[id] || defaultTherapist;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/therapists"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link href="/dashboard" className="flex items-center">
              <Image
                src="/logo.png"
                alt="MindNest"
                width={100}
                height={36}
                className="h-8 w-auto"
                style={{ filter: "brightness(0) saturate(100%) invert(47%) sepia(87%) saturate(484%) hue-rotate(139deg) brightness(91%) contrast(90%)" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-slate-100 p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div
              className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${therapist.gradient} flex items-center justify-center shrink-0`}
            >
              <span className="text-3xl font-bold text-white">{therapist.avatar}</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{therapist.name}</h1>
                  <p className="text-slate-500 mt-1">{therapist.specialty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/chat/${id}`}
                    className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Chat
                  </Link>
                  <Link
                    href={`/call/${id}`}
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Voice Call
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <strong className="text-slate-700">{therapist.rating}</strong>
                  <span>({therapist.reviews} reviews)</span>
                </span>
                <span className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-teal-500" />
                  {therapist.experience}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-blue-500" />
                  {therapist.languages.join(", ")}
                </span>
                <span className="font-semibold text-teal-600">{therapist.sessionRate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                About
              </h2>
              <p className="text-slate-600 leading-relaxed">{therapist.longBio}</p>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                Education & Credentials
              </h2>
              <ul className="space-y-3">
                {therapist.education.map((edu) => (
                  <li key={edu} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Approaches */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Therapeutic Approaches
              </h2>
              <div className="flex flex-wrap gap-2">
                {therapist.approaches.map((approach) => (
                  <span
                    key={approach}
                    className="text-sm bg-purple-50 text-purple-700 px-4 py-2 rounded-full"
                  >
                    {approach}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Availability */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-500" />
                Availability
              </h3>
              <div className="space-y-3">
                {therapist.availability.map((slot) => (
                  <div
                    key={slot.day}
                    className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0"
                  >
                    <span className="text-sm font-medium text-slate-700">{slot.day}</span>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Session CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Ready to Start?</h3>
              <p className="text-sm text-teal-100 mb-4">
                Book a session now. Your first consultation is free.
              </p>
              <Link
                href={`/chat/${id}`}
                className="block text-center bg-white text-teal-700 font-semibold py-3 rounded-xl hover:bg-teal-50 transition-colors"
              >
                Book Free Session
              </Link>
            </div>

            {/* Reviews Preview */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {[
                  {
                    text: "Incredibly supportive and understanding. Felt safe from the very first session.",
                    rating: 5,
                    user: "Anonymous #4281",
                  },
                  {
                    text: "Changed my perspective on therapy. Highly recommend!",
                    rating: 5,
                    user: "Anonymous #7832",
                  },
                ].map((review) => (
                  <div key={review.user} className="pb-4 border-b border-slate-50 last:border-0">
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                    <p className="text-xs text-slate-400 mt-2">{review.user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
