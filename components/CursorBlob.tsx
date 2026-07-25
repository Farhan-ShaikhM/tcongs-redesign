"use client";

import useMouse from "@/hooks/useMouse";

export default function CursorBlob() {
  const { x, y } = useMouse();

  return (
    <>
      {/* Large ambient glow */}
      <div
        className="pointer-events-none fixed z-0 h-80 w-80 rounded-full"
        style={{
          left: x - 160,
          top: y - 160,
          background:
            "radial-gradient(circle, rgba(255,0,98,0.10) 0%, rgba(168,85,247,0.08) 40%, rgba(59,130,246,0.05) 70%, transparent 100%)",
          filter: "blur(70px)",
        }}
      />

      {/* Main glow */}
      <div
        className="pointer-events-none fixed z-0 h-44 w-44 rounded-full"
        style={{
          left: x - 88,
          top: y - 88,
          background:
            "radial-gradient(circle, rgba(255,0,98,0.18) 0%, rgba(255,0,98,0.08) 60%, transparent 100%)",
          filter: "blur(35px)",
        }}
      />

      {/* Bright center */}
      <div
        className="pointer-events-none fixed z-0 h-14 w-14 rounded-full"
        style={{
          left: x - 28,
          top: y - 28,
          background: "rgba(255, 45, 120, 0.35)",
          filter: "blur(12px)",
        }}
      />
    </>
  );
}