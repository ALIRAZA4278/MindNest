"use client";

import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Send,
  Phone,
  MoreVertical,
  Shield,
  Paperclip,
  Smile,
  EyeOff,
  Lock,
  Info,
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "therapist";
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Welcome to your safe space. I'm here to listen and support you. Everything shared here is confidential and encrypted.",
    sender: "therapist",
    time: "4:00 PM",
  },
  {
    id: 2,
    text: "Before we begin, I want you to know that there's no judgment here. You can share at your own pace.",
    sender: "therapist",
    time: "4:00 PM",
  },
  {
    id: 3,
    text: "Thank you. I've been feeling really overwhelmed lately with work and personal life.",
    sender: "user",
    time: "4:01 PM",
  },
  {
    id: 4,
    text: "I hear you. It sounds like you're carrying a lot right now. Can you tell me more about what's been weighing on you the most?",
    sender: "therapist",
    time: "4:02 PM",
  },
];

const therapistResponses = [
  "That makes a lot of sense. It's completely valid to feel that way. What do you think triggered these feelings?",
  "Thank you for sharing that with me. It takes courage to open up. Let's explore this together — what does this look like in your daily life?",
  "I understand. Many people experience similar feelings. Let's work on some coping strategies that might help you manage this better.",
  "That's a really important insight. How do you usually cope when you feel this way?",
  "I appreciate you being so open. Let's take a moment to acknowledge your strength in seeking help. What would you like to focus on today?",
  "It sounds like there's a pattern here. Would you be open to trying a mindfulness exercise that could help in moments like these?",
];

export default function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const userMessage: Message = {
      id: messages.length + 1,
      text: input.trim(),
      sender: "user",
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate therapist typing and response
    setTimeout(() => {
      const response =
        therapistResponses[Math.floor(Math.random() * therapistResponses.length)];
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: response,
          sender: "therapist",
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }),
        },
      ]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Chat Header */}
      <div className="bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
            <span className="text-sm font-bold text-white">SK</span>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-800">Dr. Sarah K.</h2>
            <p className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              Online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/call/${id}`}
            className="p-2.5 text-slate-400 hover:text-purple-500 hover:bg-purple-50 rounded-xl transition-colors"
            title="Switch to voice call"
          >
            <Phone className="w-5 h-5" />
          </Link>
          <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Security Banner */}
      <div className="bg-teal-50 border-b border-teal-100 px-4 py-2 flex items-center justify-center gap-2 shrink-0">
        <Lock className="w-3.5 h-3.5 text-teal-600" />
        <span className="text-xs text-teal-700 font-medium">
          End-to-end encrypted &middot; Your identity is hidden
        </span>
        <EyeOff className="w-3.5 h-3.5 text-teal-600" />
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {/* Session Start Notice */}
        <div className="flex justify-center mb-4">
          <div className="bg-white border border-slate-100 rounded-full px-4 py-1.5 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400">Session started &middot; Today</span>
          </div>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] sm:max-w-[70%] ${
                msg.sender === "user" ? "order-2" : ""
              }`}
            >
              {msg.sender === "therapist" && (
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">SK</span>
                  </div>
                  <span className="text-xs text-slate-400">Dr. Sarah K.</span>
                </div>
              )}
              <div
                className={`px-4 py-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-teal-600 text-white rounded-tr-sm"
                    : "bg-white text-slate-700 border border-slate-100 rounded-tl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
              <p
                className={`text-[10px] text-slate-400 mt-1 ${
                  msg.sender === "user" ? "text-right" : ""
                }`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white">SK</span>
                </div>
                <span className="text-xs text-slate-400">Dr. Sarah K.</span>
              </div>
              <div className="bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-slate-100 px-4 py-3 shrink-0">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button className="p-2.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="p-3 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
