"use client";

import { useEffect, useRef, useState } from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
// Pre-rasterized PNG (~512px tall) instead of the SVG source. The shader
// library forces SVGs to render at 4096px before its Poisson preprocess,
// which dominates the first-mount cost. A natural-size PNG bypasses that
// path and shrinks every per-pixel loop / toBlob in toProcessedLiquidMetal.
import logoSrc from "@/public/lv-logo-icon.png";

export default function LiquidMetalLogo({
  className = "",
  scale = 0.6,
}: {
  className?: string;
  scale?: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // Halt the rAF loop while offscreen. The shader stays mounted so we don't
  // pay shader-recompile / texture-reupload cost on every scroll-back.
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
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
      <LiquidMetal
        className="[&>canvas]:!z-0"
        style={{ width: "100%", height: "100%" }}
        image={logoSrc.src}
        speed={isInView ? 1 : 0}
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
    </div>
  );
}
