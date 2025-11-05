"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // ✅ Toast import

const trials = [
  {
    id: 1,
    title: "Lung Cancer Immunotherapy Trial",
    phase: "Recruiting",
    location: "New Delhi, India",
    summary: "A Phase II trial testing novel immunotherapy.",
  },
  {
    id: 2,
    title: "Glioma Radiation Study",
    phase: "Completed",
    location: "Boston, USA",
    summary: "Targeted radiation methods improving accuracy.",
  },
  {
    id: 3,
    title: "Breast Cancer Vaccine Trial",
    phase: "Recruiting",
    location: "London, UK",
    summary: "A Phase I vaccine targeting early-stage breast cancer.",
  },
];

export default function PatientPage() {
  const [savedTrials, setSavedTrials] = useState<number[]>([]);

  const handleContact = (title: string) => {
    toast.success(`Contact request sent for "${title}" ✅`);
  };

  const handleSave = (id: number, title: string) => {
    setSavedTrials((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((t) => t !== id)
        : [...prev, id];

      toast.success(
        prev.includes(id)
          ? `Removed "${title}" from saved trials ❌`
          : `Saved "${title}" successfully 💾`
      );

      return updated;
    });
  };

  const handleFollow = (name: string) => {
    toast.success(`You are now following ${name} 👨‍⚕️`);
  };

  const handleMeeting = (name: string) => {
    toast.success(`Meeting request sent to ${name} 📅`);
  };

  return (
    <main className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* 🌟 Hero Section */}
        <div className="relative overflow-hidden mb-8">
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="p-8 bg-white/70 backdrop-blur rounded-2xl shadow">
            <h1 className="text-3xl font-bold text-green-700">
              Find Clinical Trials & Experts
            </h1>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Tell us about your condition and get personalized recommendations
              for trials, publications, and experts.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                className="flex-1 rounded-lg border px-4 py-3"
                placeholder="Search trials, conditions, or experts (e.g., 'glioma immunotherapy')"
              />
              <button
                className="px-4 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                onClick={() =>
                  toast("🔍 Search feature coming soon!", {
                    icon: "🧠",
                  })
                }
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* 🧪 Trials Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Recommended Trials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trials.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl bg-white shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{t.title}</h3>
                    <p className="text-sm text-gray-500">
                      {t.location} • {t.phase}
                    </p>
                  </div>
                  <button
                    className="text-sm bg-green-50 text-green-700 px-3 py-1 rounded hover:bg-green-100 transition"
                    onClick={() =>
                      toast(`📄 Showing details for "${t.title}"`, {
                        icon: "ℹ️",
                      })
                    }
                  >
                    Details
                  </button>
                </div>

                <p className="mt-3 text-sm text-gray-600">{t.summary}</p>

                <div className="mt-4 flex gap-2">
                  <button
                    className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                    onClick={() => handleContact(t.title)}
                  >
                    Contact Trial
                  </button>
                  <button
                    className={`px-3 py-2 rounded border transition ${
                      savedTrials.includes(t.id)
                        ? "bg-green-100 border-green-600 text-green-700"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => handleSave(t.id, t.title)}
                  >
                    {savedTrials.includes(t.id) ? "Saved ✓" : "Save"}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 👨‍⚕️ Experts Section */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Recommended Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Dr. A. Sharma", field: "Neuro-oncology", pubs: 120 },
              { name: "Prof. L. Mehta", field: "Immunotherapy", pubs: 80 },
            ].map((exp) => (
              <div key={exp.name} className="p-4 rounded-2xl bg-white shadow">
                <h4 className="font-semibold">{exp.name}</h4>
                <p className="text-sm text-gray-500">
                  {exp.field} • {exp.pubs} publications
                </p>
                <div className="mt-3 flex gap-2">
                  <button
                    className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
                    onClick={() => handleFollow(exp.name)}
                  >
                    Follow
                  </button>
                  <button
                    className="px-3 py-2 rounded border hover:bg-gray-50 transition"
                    onClick={() => handleMeeting(exp.name)}
                  >
                    Request Meeting
                  </button>
                </div>
              </div>
            ))}
            <div className="p-4 rounded-2xl bg-white shadow flex items-center justify-center text-sm text-gray-500">
              More experts coming soon — nudge them to join.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
