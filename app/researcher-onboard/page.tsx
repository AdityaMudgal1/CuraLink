"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResearcherOnboard() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", institution: "", field: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("researcher", JSON.stringify(form));
    router.push("/researcher-dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Researcher Onboarding</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Institution"
          value={form.institution}
          onChange={(e) => setForm({ ...form, institution: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Research Field"
          value={form.field}
          onChange={(e) => setForm({ ...form, field: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Continue to Dashboard
        </button>
      </form>
    </div>
  );
}
