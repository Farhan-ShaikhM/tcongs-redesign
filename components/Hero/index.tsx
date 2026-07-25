"use client";

import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import CursorBlob from "../CursorBlob";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-visible bg-black pt-28">
         <CursorBlob />

      {/* Background Glow */}
      <div className="absolute left-[-200px] top-40 h-[500px] w-[500px] rounded-full bg-rose-500/20 blur-[180px]" />
      <div className="absolute right-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute bottom-[-200px] left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <HeroBadge />
          {/* <TestMotion /> */}
          <HeroContent />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}