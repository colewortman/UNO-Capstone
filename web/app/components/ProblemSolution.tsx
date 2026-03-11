"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Line mask reveal — same technique as animation-lab Demo 2
      const lineSplit = new SplitType(".ps-text", { types: "lines" });

      lineSplit.lines?.forEach((line) => {
        const mask = document.createElement("div");
        mask.style.overflow = "hidden";
        line.parentNode!.insertBefore(mask, line);
        mask.appendChild(line);
      });

      gsap.from(lineSplit.lines!, {
        y: "100%",
        duration: 0.75,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ps-text",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="py-24 px-8">
      <div className="mx-auto flex max-w-7xl">
        {/* Left side — Problem */}
        <div className="w-1/2 pr-12">
          <h2 className="ps-text text-5xl font-bold leading-tight">
            Inventory is too slow
          </h2>
          <p className="ps-text mt-8 text-xl leading-relaxed">
            Counting takes hours, spreadsheets take longer, insights come weeks
            later. Manual inventory isn't just frustrating, it's expensive. You
            don't need more reports. You need faster truth.
          </p>
          <p className="ps-text mt-8 text-xl leading-relaxed">
            You don't need more reports. You need faster truth.
          </p>
        </div>

        {/* Right side — Solution */}
        <div className="w-1/2">
          <h2 className="ps-text text-5xl font-bold leading-tight">
            Inventory at the speed of light
          </h2>
          <p className="ps-text mt-8 text-xl leading-relaxed">
            Liqr Vision turns your smartphone into the fastest inventory system
            in hospitality.
          </p>
          <p className="ps-text mt-8 text-xl leading-relaxed">
            Scan a bottle, your dashboard updates in real time. What used to
            take hours now takes minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
