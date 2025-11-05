🩺 CuraLink — AI-Powered Clinical Research Connector
🔗 Live Demo

🌐 Deployed App: https://cura-link-adcp.vercel.app/

🎥 Demo Video: https://www.loom.com/share/afb3822e828b4df995808fb2a819f28d

🚀 Project Overview

CuraLink is an AI-driven platform that connects patients, researchers, and medical experts by simplifying the discovery of clinical trials, research papers, and expert insights — all in one place.

The goal is to make medical research discovery simple, accessible, and intelligent.

🧠 Key Features

✅ AI-Powered Summaries — Summarizes complex medical research or trial data into easy-to-understand insights using OpenAI GPT models.
✅ Clinical Trial Search — Search and filter real clinical trials using disease names or keywords.
✅ Publication Explorer — Discover relevant medical publications to stay informed.
✅ Favorites System — Save and manage your favorite trials or research articles.
✅ Responsive UI — Built with TailwindCSS for a clean and modern experience.

🧩 Tech Stack
Layer	Technologies Used
Frontend	Next.js (React), TailwindCSS, TypeScript
Backend	Next.js API Routes + OpenAI API
AI Model	GPT-4o-mini for fast summarization
Database (optional)	MongoDB / Local state (depending on feature version)
Deployment	Vercel
⚙️ How It Works

Search: User searches for a medical term, disease, or keyword.

Fetch: The app fetches trials or research data (mock or live API).

Summarize: OpenAI GPT-4o-mini generates short, clear summaries.

Save: User can mark trials as favorites for quick access.

📸 Screenshots (Optional)

Add UI screenshots here if you want to make the repo look more appealing.

🧑‍💻 Setup Instructions
# Clone the repository
git clone https://github.com/AdityaMudgal1/CuraLink.git
cd CuraLink

# Install dependencies
npm install

# Create a .env.local file in root directory
# and add your OpenAI API key
OPENAI_API_KEY=your_api_key_here

# Run locally
npm run dev

🏁 Future Improvements

Integration with real-time clinical trial APIs (NIH/WHO)

User login for personalized recommendations

Chat-based query assistant for research guidance
