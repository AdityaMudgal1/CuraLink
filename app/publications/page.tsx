"use client";
export default function PublicationsPage() {
  const pubs = [
    {
      title: "AI in Oncology Research",
      author: "Dr. A. Sharma",
      journal: "Nature Medicine",
      year: 2024,
    },
    {
      title: "Radiomics for Early Cancer Detection",
      author: "Prof. L. Mehta",
      journal: "Lancet Oncology",
      year: 2023,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Publications</h1>
      <div className="grid gap-4">
        {pubs.map((p, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-500">
              {p.author} — {p.journal} ({p.year})
            </p>
            <button className="mt-3 text-blue-600 hover:underline">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
