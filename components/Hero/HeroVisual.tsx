import FloatingCard from "./FloatingCard";

export default function HeroVisual() {
  return (
    <div className="relative hidden h-[620px] w-[650px] lg:block">
      {/* Background Rings */}

      <div className="absolute left-[62%] top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <div className="absolute left-[62%] top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />

      {/* Connection Lines */}

      <div className="absolute left-[62%] top-1/2 z-0 h-px w-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-rose-500/10 to-transparent" />

      <div className="absolute left-[62%] top-1/2 z-0 h-96 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-rose-500/10 to-transparent" />

      {/* Center Orb */}

      <div className="absolute left-[62%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-[0_0_60px_rgba(244,63,94,0.45)]">
            <span className="text-2xl font-black text-white">T</span>
          </div>
        </div>
      </div>

      {/* Floating Cards */}

      <FloatingCard
        title="Web Development"
        subtitle="Modern Websites"
        icon="💻"
        className="left-8 top-24 z-20"
      />

      <FloatingCard
        title="Mobile Apps"
        subtitle="iOS & Android"
        icon="📱"
        className="right-0 top-6 z-20"
      />

      <FloatingCard
        title="AI Solutions"
        subtitle="Automation"
        icon="🤖"
        className="left-2 bottom-24 z-20"
      />

      <FloatingCard
        title="UI / UX Design"
        subtitle="Design Systems"
        icon="🎨"
        className="right-8 bottom-2 z-20"
      />
    </div>
  );
}