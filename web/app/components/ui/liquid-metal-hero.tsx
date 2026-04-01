"use client";

import { LiquidMetal } from "@paper-design/shaders-react";
import logoSrc from "@/public/lv-logo-icon.svg";

export default function LiquidMetalLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <LiquidMetal
      className={`[&>canvas]:!z-0 ${className}`}
      style={{ width: "100%", height: "100%" }}
      image={logoSrc.src}
      speed={1}
      scale={0.6}
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
  );
}
