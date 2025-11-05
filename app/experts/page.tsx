"use client";
export default function ExpertsPage() {
  const experts = [
    { name: "Dr. A. Sharma", field: "Neuro-oncology", pubs: 120 },
    { name: "Prof. L. Mehta", field: "Immunotherapy", pubs: 80 },
    { name: "Dr. K. Patel", field: "Radiology", pubs: 56 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-pink-700">Experts</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {experts.map((e) => (
          <div key={e.name} className="p-5 bg-white rounded-2xl shadow">
            <h2 className="font-semibold">{e.name}</h2>
            <p className="text-sm text-gray-500">
              {e.field} • {e.pubs} Publications
            </p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-2 bg-green-600 text-white rounded">
                Follow
              </button>
              <button className="px-3 py-2 border rounded hover:bg-gray-50">
                Request Meeting
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
