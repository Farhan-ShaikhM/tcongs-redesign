"use client";

import { useEffect, useState } from "react";

export default function useMouse() {
  const [pos, setPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return pos;
} 