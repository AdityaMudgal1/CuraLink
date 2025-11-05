// app/researcher/page.tsx
"use client";

import { motion } from "framer-motion";

const collabs = [
  { id: 1, name: "Dr. R. Patel", area: "Immunotherapy", papers: 42 },
  { id: 2, name: "Dr. S. Kumar", area: "Neuro-oncology", papers: 58 },
];

export default function ResearcherPage() {
  return (
    <main className="min-h-screen py-12 bg-gradient-to-br from-purple-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative mb-8">
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-violet-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="p-8 bg-white/70 backdrop-blur rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-purple-700">Researcher Workspace</h1>
            <p className="mt-2 text-gray-600">Manage trials, import publications, and find collaborators.</p>

            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded bg-purple-600 text-white">Add Trial</button>
              <button className="px-4 py-2 rounded border">Import Publications</button>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">Potential Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collabs.map((c) => (
              <motion.div key={c.id} whileHover={{ scale: 1.02 }} className="p-5 rounded-2xl bg-white shadow">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-sm text-gray-500">{c.area}</p>
                  </div>
                  <div className="text-sm text-gray-500">{c.papers} pubs</div>
                </div>
                <p className="mt-3 text-sm text-gray-600">Recent work on combining AI with clinical outcomes.</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-2 rounded bg-indigo-600 text-white">Connect</button>
                  <button className="px-3 py-2 rounded border">Save</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white shadow">
              <h4 className="font-semibold">AI for Clinical Trial Matching</h4>
              <p className="text-sm text-gray-500">Short auto-generated summary of the paper.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow">
              <h4 className="font-semibold">Novel Immunotherapy Results</h4>
              <p className="text-sm text-gray-500">Short auto-generated summary of the paper.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow">More papers — connect ORCID for full import.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
