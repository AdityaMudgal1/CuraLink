"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const removeFavorite = (title: string) => {
    const updated = favorites.filter((f) => f.title !== title);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          ⭐ Your Saved Items
        </h1>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-20">
            <p className="text-lg font-medium">
              You haven’t saved any trials or publications yet.
            </p>
            <p className="text-sm mt-1">
              Go explore and click “Save” to add favorites!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {item.type || "General"}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {item.summary?.slice(0, 100) || ""}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => removeFavorite(item.title)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      View →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
