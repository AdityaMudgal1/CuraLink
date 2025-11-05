"use client";

import { useState, useEffect } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    } else {
      // Dummy data for now
      setFavorites([
        {
          id: 1,
          title: "Diabetes Clinical Trial 2025",
          description: "A study testing a new oral drug for Type 2 Diabetes.",
        },
        {
          id: 2,
          title: "Hypertension Treatment Study",
          description:
            "Exploring treatment combinations for high blood pressure patients.",
        },
        {
          id: 3,
          title: "Cancer Immunotherapy Research",
          description:
            "Analyzing patient responses to new immunotherapy techniques.",
        },
      ]);
    }
  }, []);

  // Remove favorite item
  const removeFavorite = (id: number) => {
    const updated = favorites.filter((f) => f.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          ❤️ Your Favorite Trials
        </h1>

        {favorites.length === 0 ? (
          <p className="text-gray-600 text-center">No favorites saved yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="p-6 border rounded-xl hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  {fav.title}
                </h2>
                <p className="text-gray-600 mt-2">{fav.description}</p>
                <button
                  onClick={() => removeFavorite(fav.id)}
                  className="mt-4 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
