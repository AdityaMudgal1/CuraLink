"use client";

import { useState } from "react";

export default function AISummaryPage() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!inputText.trim()) return alert("Please enter some medical text.");

    setLoading(true);
    setSummary("");

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await res.json();
      setSummary(data.summary || "No summary generated.");
    } catch (err) {
      console.error(err);
      setSummary("Error summarizing text. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
        🧠 AI Medical Text Summarizer
      </h1>

      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Paste medical trial or research text here..."
        className="w-full h-40 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={handleSummarize}
        disabled={loading}
        className={`mt-4 w-full py-2 rounded-md text-white font-semibold ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Summarizing..." : "Generate Summary"}
      </button>

      {summary && (
        <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-200">
          <h2 className="font-semibold text-blue-700 mb-2">AI Summary:</h2>
          <p className="text-gray-800 whitespace-pre-line">{summary}</p>
        </div>
      )}
    </div>
  );
}
