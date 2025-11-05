// app/forum/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Post = { id: number; title: string; body: string; author: string };

const initial: Post[] = [
  { id: 1, title: "How to join a clinical trial?", body: "What are the steps and eligibility?", author: "PatientA" },
  { id: 2, title: "Looking for collaborators in immunotherapy", body: "Open to data-sharing and joint grant work.", author: "ResearcherB" },
];

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>(initial);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function addPost() {
    if (!title || !body) return;
    const newPost = { id: Date.now(), title, body, author: "You" };
    setPosts([newPost, ...posts]);
    setTitle("");
    setBody("");
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-br from-orange-50 to-white">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative mb-6">
          <div className="absolute -left-24 -top-24 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="p-6 bg-white/70 backdrop-blur rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-orange-700">Community Forum</h1>
            <p className="mt-2 text-gray-600">Ask questions and share updates — researchers will reply.</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Question title" className="col-span-2 rounded-lg border px-4 py-2" />
              <button onClick={addPost} className="px-4 py-2 rounded bg-orange-600 text-white">Post</button>
            </div>

            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Describe your query..." className="mt-3 w-full rounded-lg border p-3" rows={3} />
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recent Questions</h2>
          <div className="space-y-4">
            {posts.map((p) => (
              <motion.div key={p.id} whileHover={{ scale: 1.01 }} className="p-4 bg-white rounded-2xl shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-500">By {p.author}</p>
                  </div>
                  <div className="text-sm text-gray-400">0 replies</div>
                </div>
                <p className="mt-3 text-gray-600">{p.body}</p>
                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-2 rounded bg-orange-600 text-white">Follow</button>
                  <button className="px-3 py-2 rounded border">Share</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
