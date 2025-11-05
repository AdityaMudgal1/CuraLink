"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const navItem = (href: string, label: string, color: string) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition-all duration-150 ${
        path === href
          ? `${color} font-semibold`
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-lg text-blue-600">
            CuraLink
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {navItem("/patient", "Patient", "bg-blue-100 text-blue-700")}
            {navItem("/trials", "Trials", "bg-green-100 text-green-700")}
            {navItem("/publications", "Publications", "bg-sky-100 text-sky-700")}
            {navItem("/experts", "Experts", "bg-pink-100 text-pink-700")}
            {navItem("/forum", "Forum", "bg-yellow-100 text-yellow-700")}
            {navItem("/favorites", "Favorites", "bg-indigo-100 text-indigo-700")}
            {navItem("/researcher", "Researcher", "bg-purple-100 text-purple-700")}
            {navItem("/ai-summary", "AI Summary", "bg-teal-100 text-teal-700")}


            <Link
              href="#"
              className="ml-2 px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90"
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
