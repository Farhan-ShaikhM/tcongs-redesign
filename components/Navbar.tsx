"use client";

import Link from "next/link";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Projects", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-5">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-8 backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="group">
          <div className="leading-none">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              TCONGS<span className="text-rose-500">.</span>
            </h1>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 transition group-hover:text-white/70">
              Digital Studio
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[15px] font-medium text-white/70 transition duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#"
          className="rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/30 active:scale-95"
        >
          Start Project →
        </Link>
      </div>
    </header>
  );
}