"use client";
import { useState } from "react";

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mt-8">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search trials, researchers..."
        className="w-full px-5 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl shadow-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {loading && (
        <div className="absolute right-4 top-3 text-indigo-500 animate-pulse">
          🤖 Finding trials...
        </div>
      )}
    </form>
  );
}
