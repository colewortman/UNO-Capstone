"use client";

import { useEffect, useRef, useState } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import logoSrc from "@/public/lv-logo-icon.svg";

export default function LiquidMetalLogo({
  className = "",
  scale = 0.6,
}: {
  className?: string;
  scale?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Allow unmounting when out of view to free GPU memory
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      // No rootMargin: only mount when element is actually in view to avoid triggering
      // expensive WebGL shader initialization during scroll
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: "100%", height: "100%" }}
    >
      {isInView && (
        <LiquidMetal
          className="[&>canvas]:!z-0"
          style={{ width: "100%", height: "100%" }}
          image={logoSrc.src}
          speed={1}
          scale={scale}
          colorBack="rgba(0,0,0,0)"
          colorTint="#ffffff"
          softness={0.1}
          repetition={2}
          shiftRed={0.3}
          shiftBlue={0.3}
          distortion={0.07}
          contour={0.4}
          angle={70}
        />
      )}
    </div>
  );
}
