"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  PhoneOff,
  Volume2,
  VolumeX,
  MessageCircle,
  Shield,
  EyeOff,
  Lock,
  Waves,
  MinimizeIcon,
} from "lucide-react";

export default function CallPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [callState, setCallState] = useState<"connecting" | "connected" | "ended">("connecting");
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOff, setIsSpeakerOff] = useState(false);
  const [duration, setDuration] = useState(0);

  // Simulate connection
  useEffect(() => {
    const timer = setTimeout(() => {
      setCallState("connected");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Call timer
  useEffect(() => {
    if (callState !== "connected") return;
    const interval = setInterval(() => {
      setDuration((d) => d + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [callState]);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const endCall = () => {
    setCallState("ended");
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-teal-400" />
          <span className="text-xs text-teal-400 font-medium">Encrypted Call</span>
        </div>
        <div className="flex items-center gap-2">
          <EyeOff className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-400">Identity Hidden</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        {/* Therapist Avatar */}
        <div className="relative mb-8">
          {/* Pulse rings for connected state */}
          {callState === "connected" && (
            <>
              <div className="absolute inset-0 w-36 h-36 -m-4 rounded-full bg-teal-500/20 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="absolute inset-0 w-36 h-36 -m-4 rounded-full bg-teal-500/10 animate-ping" style={{ animationDuration: "3s" }} />
            </>
          )}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center relative">
            <span className="text-3xl font-bold text-white">SK</span>
          </div>
          {callState === "connected" && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
              <Waves className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Therapist Name */}
        <h2 className="text-2xl font-bold text-white mb-1">Dr. Sarah K.</h2>
        <p className="text-slate-400 text-sm mb-2">Anxiety & CBT Specialist</p>

        {/* Call Status */}
        {callState === "connecting" && (
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span className="text-teal-400 font-medium">Connecting securely...</span>
          </div>
        )}

        {callState === "connected" && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono text-lg tracking-wider">
              {formatDuration(duration)}
            </span>
          </div>
        )}

        {callState === "ended" && (
          <div className="mt-4 text-center">
            <p className="text-slate-400 font-medium">Call Ended</p>
            <p className="text-slate-500 text-sm mt-1">
              Duration: {formatDuration(duration)}
            </p>
          </div>
        )}

        {/* Audio Visualization (when connected) */}
        {callState === "connected" && (
          <div className="flex items-end gap-1 mt-8 h-12">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-teal-500/60 rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100}%`,
                  minHeight: "4px",
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${0.5 + Math.random() * 1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Call Controls */}
      <div className="relative z-10 pb-12 pt-6">
        {callState !== "ended" ? (
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                isMuted
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>

            <button
              onClick={endCall}
              className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg shadow-red-500/30"
            >
              <PhoneOff className="w-7 h-7" />
            </button>

            <button
              onClick={() => setIsSpeakerOff(!isSpeakerOff)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                isSpeakerOff
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {isSpeakerOff ? (
                <VolumeX className="w-6 h-6" />
              ) : (
                <Volume2 className="w-6 h-6" />
              )}
            </button>

            <Link
              href={`/chat/${id}`}
              className="w-14 h-14 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
              title="Switch to chat"
            >
              <MessageCircle className="w-6 h-6" />
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 font-medium transition-colors"
              >
                Back to Dashboard
              </Link>
              <Link
                href={`/chat/${id}`}
                className="px-8 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
              >
                Continue via Chat
              </Link>
            </div>
          </div>
        )}

        {/* Security Footer */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <Shield className="w-4 h-4 text-slate-600" />
          <span className="text-xs text-slate-600">
            Voice anonymized &middot; No recordings stored
          </span>
        </div>
      </div>
    </div>
  );
}
