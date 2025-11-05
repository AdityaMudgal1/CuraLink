"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/Button";

const mockTrials = [
  { id: 1, title: "Lung Cancer Immunotherapy Phase II", status: "Recruiting", location: "USA" },
  { id: 2, title: "Glioma Gene Therapy Study", status: "Completed", location: "India" },
  { id: 3, title: "Heart Failure Medication Trial", status: "Recruiting", location: "Germany" },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [phase, setPhase] = useState("All");

  const filteredTrials = mockTrials.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (phase === "All" || t.status === phase)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-brand">Clinical Trials</h1>

      {/* Search + Filter */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search trials..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        >
          <option>All</option>
          <option>Recruiting</option>
          <option>Completed</option>
        </select>
      </div>

      {/* Display Filtered Trials */}
      <div className="grid gap-3">
        {filteredTrials.map((trial) => (
          <div key={trial.id} className="p-4 border rounded-lg bg-white shadow-sm">
            <h2 className="font-semibold">{trial.title}</h2>
            <p>Status: {trial.status}</p>
            <p>Location: {trial.location}</p>
            <Button
              onClick={() => alert("Contacting trial administrator...")}
              className="mt-2"
            >
              Contact
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
