
"use client";

import { useEffect, useState } from "react";

export function Aurora() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth - 0.5) * 30,
        y: (event.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="aurora-background"
      aria-hidden="true"
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      } as React.CSSProperties}
    >
      <div className="aurora-glow aurora-glow-one" />
      <div className="aurora-glow aurora-glow-two" />
      <div className="aurora-glow aurora-glow-three" />
    </div>
  );
}
