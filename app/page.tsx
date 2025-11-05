"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "./components/Particles";
import AISearch from "./components/AISearch";
import AIRecommendations from "./components/AIRecommendations";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 bg-[length:400%_400%] animate-gradient">
      {/* Floating glowing blur orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Animated floating particles */}
      <Particles />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          CuraLink
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Bridging{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Patients</span>,{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Researchers</span>, and{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Health Experts</span> — making
          discovery of clinical trials and research effortless.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/patient">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl transition dark:from-blue-500 dark:to-indigo-500"
            >
              👩‍⚕️ I’m a Patient
            </motion.button>
          </Link>

          <Link href="/researcher">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-2xl border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950/30 transition"
            >
              🧠 I’m a Researcher
            </motion.button>
          </Link>

          <Link href="/forum">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/60 transition"
            >
              💬 Community Forum
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl z-10"
      >
        {[
          {
            title: "Find Clinical Trials",
            desc: "Search and connect to ongoing trials personalized to your condition.",
            icon: "🔍",
          },
          {
            title: "Collaborate Globally",
            desc: "Connect researchers across the world to share knowledge and impact lives.",
            icon: "🌎",
          },
          {
            title: "AI-Powered Matching",
            desc: "Smart AI recommendations for trials, publications, and collaborators.",
            icon: "🤖",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-md border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* AI Search + Recommendations */}
      <div className="mt-20 z-10 w-full flex flex-col items-center">
        <AISearch />
        <AIRecommendations />
      </div>

      {/* Footer */}
      <footer className="mt-24 text-sm text-gray-500 dark:text-gray-400 z-10">
        © 2025 <span className="text-indigo-600 dark:text-indigo-400 font-semibold">CuraLink</span> | Made with 💜 for the
        Hackathon
      </footer>
    </main>
  );
}
