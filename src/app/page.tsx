"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen font-sans relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Top Bar */}
      <header
        className={`w-full flex items-center justify-between px-4 md:px-10 py-4 ${
          darkMode ? "bg-[#111]" : "bg-gray-100"
        }`}
      >
        <div className="flex items-center">
          <div
            className={`px-3 py-1 rounded flex items-center ${
              darkMode ? "bg-[#00FF41]" : "bg-black"
            }`}
          >
            <span
              className={`font-bold text-lg tracking-wider ${
                darkMode ? "text-black" : "text-[#00FF41]"
              }`}
            >
              Enquiro
            </span>
          </div>
        </div>
        <div>
          {/* Toggle Switch Icon */}
          <button
            aria-label="Toggle dark mode"
            className="relative w-10 h-6 focus:outline-none"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <span
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                darkMode ? "bg-[#00FF41]" : "bg-gray-400"
              }`}
            ></span>
            <span
              className={`absolute top-1 w-4 h-4 rounded-full transition-all duration-300 ${
                darkMode
                  ? "left-1 bg-black"
                  : "left-5 bg-white border border-gray-300"
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Background Circuit Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/enquiro-imgs/imitated_circuit_background.png"
          alt="Circuit Background"
          fill
          style={{
            objectFit: "cover",
            opacity: darkMode ? 0.5 : 0.2, // Increased opacity for better visibility
            filter: darkMode ? "brightness(1.2)" : "invert(1) brightness(1.1)",
            transition: "opacity 0.3s, filter 0.3s",
          }}
          priority
        />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col justify-center min-h-[80vh] px-4 md:px-10 pt-10 md:pt-16 max-w-4xl">
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${
            darkMode ? "" : "text-black"
          }`}
        >
          Transform<br />
          Customer Support<br />
          with{" "}
          <span className="text-[#00FF41]">AI-Powered</span>
          <br />
          Chatbots
        </h1>
        <p
          className={`text-base sm:text-lg mb-8 md:mb-10 max-w-xl ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Enquiro’s multi-tenant platform lets you deploy customized AI chatbots across your entire organization. Reduce support costs by 57% while improving customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            className="bg-[#00FF41] text-black font-bold px-8 py-3 rounded transition hover:bg-[#00e636] w-full sm:w-auto"
            onClick={() => router.push("/login")}
          >
            Get Started
          </button>
          <button
            className={`border border-gray-400 font-semibold px-8 py-3 rounded flex items-center justify-center gap-2 transition w-full sm:w-auto ${
              darkMode
                ? "text-white hover:bg-gray-900"
                : "text-black hover:bg-gray-200"
            }`}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke={darkMode ? "#fff" : "#111"}
                strokeWidth="2"
              />
              <polygon
                points="10,8 16,12 10,16"
                fill={darkMode ? "#fff" : "#111"}
              />
            </svg>
            Watch Demo
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="absolute right-0 md:right-10 top-1/2 md:top-40 z-10 flex flex-col gap-6 md:gap-10 w-full md:w-auto px-4 md:px-0 transform -translate-y-1/2 md:translate-y-0">
        <div
          className={`rounded-lg px-4 md:px-6 py-4 max-w-xs mb-4 mx-auto md:mx-0 border ${
            darkMode
              ? "border-[#00FF41] bg-black/60 text-gray-100"
              : "border-[#00FF41] bg-white/80 text-gray-800"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-base">This saved our support team hours every day!</p>
        </div>
        <div
          className={`rounded-lg px-4 md:px-6 py-4 max-w-xs mb-4 mx-auto md:mx-0 md:ml-16 border ${
            darkMode
              ? "border-[#00FF41] bg-black/60 text-gray-100"
              : "border-[#00FF41] bg-white/80 text-gray-800"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-base">Quickly customized the chatbot for my brand.</p>
        </div>
        <div
          className={`rounded-lg px-4 md:px-6 py-4 max-w-xs mx-auto md:mx-0 md:ml-32 border ${
            darkMode
              ? "border-[#00FF41] bg-black/60 text-gray-100"
              : "border-[#00FF41] bg-white/80 text-gray-800"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-1 bg-[#00FF41] rounded"></span>
          </div>
          <p className="text-base">Love how I can manage FAQs separately from the chatbot responses.</p>
        </div>
      </div>
    </main>
  );
}
