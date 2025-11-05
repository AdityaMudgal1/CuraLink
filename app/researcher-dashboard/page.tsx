"use client";
import { useState } from "react";

export default function ResearcherDashboard() {
  const researcher =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("researcher") || "{}")
      : null;

  const [trials, setTrials] = useState<{ title: string; status: string }[]>([]);

  const addTrial = () => {
    const title = prompt("Enter Trial Title:");
    if (title) setTrials([...trials, { title, status: "Pending" }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">
        👨‍🔬 {researcher?.name || "Researcher"}'s Dashboard
      </h1>
      <p className="text-gray-600 mb-4">
        {researcher?.institution} | Field: {researcher?.field}
      </p>

      <button
        onClick={addTrial}
        className="bg-green-600 text-white px-4 py-2 rounded mb-4 hover:bg-green-700"
      >
        + Add Trial
      </button>

      <h2 className="text-lg font-semibold mb-2">Managed Trials</h2>
      {trials.length === 0 ? (
        <p>No trials added yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {trials.map((t, i) => (
            <li key={i}>
              {t.title} — {t.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
