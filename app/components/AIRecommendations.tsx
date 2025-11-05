"use client";
import { motion } from "framer-motion";

export default function AIRecommendations() {
  const recommendations = [
    {
      title: "Diabetes Clinical Trial A21",
      desc: "Recruiting in Delhi NCR — ideal for Type 2 patients.",
    },
    {
      title: "Heart Health Study H2025",
      desc: "Cardiac research looking for participants aged 25-45.",
    },
    {
      title: "Sleep Study Zeta",
      desc: "Analyzing sleep pattern response to AI therapy.",
    },
  ];

  return (
    <div className="mt-12 w-full max-w-3xl text-center">
      <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
        💡 Cura AI suggests 3 new trials for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {recommendations.map((rec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md backdrop-blur-xl"
          >
            <h3 className="font-semibold mb-2">{rec.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{rec.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
