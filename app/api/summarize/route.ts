import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Add this in .env.local
});

export async function POST(req: Request) {
  const { text } = await req.json();

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini", // light, fast model
    messages: [
      { role: "system", content: "Summarize medical text clearly and concisely." },
      { role: "user", content: text },
    ],
  });

  return NextResponse.json({
    summary: completion.choices[0].message.content,
  });
}
