"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Search } from "lucide-react";

const trials = [
  {
    id: 1,
    title: "Lung Cancer Immunotherapy Trial",
    phase: "Phase II - Recruiting",
    location: "New Delhi, India",
    summary: "Evaluating a novel immune checkpoint inhibitor for NSCLC.",
  },
  {
    id: 2,
    title: "Breast Cancer Vaccine Study",
    phase: "Phase I - Recruiting",
    location: "London, UK",
    summary: "A first-in-human mRNA vaccine for early-stage breast carcinoma.",
  },
  {
    id: 3,
    title: "AI-assisted Early Tumor Detection Study",
    phase: "Phase III - Active",
    location: "Boston, USA",
    summary: "Combining AI imaging analytics with CT scans for precision diagnostics.",
  },
];

export default function TrialsPage() {
  const [selected, setSelected] = useState<any>(null);
  const [query, setQuery] = useState("");

  const filteredTrials = trials.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Clinical Trials
      </h1>

      {/* 🔍 AI Trial Finder (Search bar) */}
      <div className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 mb-8 w-full md:w-1/2">
        <Search className="text-green-600 mr-3" />
        <input
          type="text"
          placeholder="Ask AI to find trials (e.g. ‘lung cancer in India’)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none bg-transparent"
        />
      </div>

      {/* 🧪 Trial Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTrials.length ? (
          filteredTrials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-semibold text-lg text-green-700">{t.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {t.phase} • {t.location}
              </p>
              <p className="mt-3 text-gray-600 text-sm">{t.summary}</p>
              <button
                onClick={() => setSelected(t)}
                className="mt-4 text-green-600 font-medium hover:underline"
              >
                View Details →
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-sm col-span-full">
            No matching trials found. Try another keyword.
          </p>
        )}
      </div>

      {/* 🪟 Trial Modal */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-2xl p-6 max-w-md mx-4 shadow-lg">
            <Dialog.Title className="font-bold text-xl text-green-700">
              {selected?.title}
            </Dialog.Title>
            <p className="mt-3 text-gray-700">{selected?.summary}</p>
            <p className="text-sm text-gray-500 mt-1">
              📍 {selected?.location}
            </p>
            <p className="text-sm text-gray-500">{selected?.phase}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </main>
  );
}
