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
      // Line mask reveal for left-side text
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

      // Pin the section, then crossfade everything out left / bartender_phone in
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ps-section",
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
        },
      });

      // Fade out left text to the left
      tl.to(".ps-left", {
        xPercent: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
      });

      // Fade out right image to the left
      tl.to(
        ".ps-image",
        {
          xPercent: -50,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "<",
      );

      // Mark the start of the fade-in sequence
      tl.addLabel("fadeIn", "<0.5");

      // Fade in solution text from the right
      tl.fromTo(
        ".ps-solution",
        { xPercent: 50, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "fadeIn",
      );

      // Fade in bartender_phone from the right
      tl.fromTo(
        ".ps-bartender_phone",
        { xPercent: 50, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "fadeIn+=0.1",
      );
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef}>
      <section className="ps-section relative h-screen overflow-hidden px-16">
        {/* Initial layout: left text + right image */}
        <div className="flex h-full w-full items-center">
          <div className="mx-auto flex w-full max-w-screen-2xl gap-32">
            {/* Left side — Problem text */}
            <div className="ps-left w-1/2 text-pretty">
              <h2 className="ps-text text-5xl font-bold leading-tight">
                Inventory is too slow
              </h2>
              <p className="ps-text mt-8 text-xl leading-relaxed">
                Counting takes hours, spreadsheets take longer, insights come
                weeks later. Manual inventory isn&apos;t just frustrating,
                it&apos;s expensive.
              </p>
              <p className="ps-text mt-8 text-xl leading-relaxed">
                You don&apos;t need more reports. You need faster truth.
              </p>
            </div>

            {/* Right side — clipboard image */}
            <div className="ps-image w-1/2 flex items-center justify-center">
              <img
                src="/UNO-Capstone/bartender_clipboard.png"
                alt="bartender_clipboard"
                className="max-h-[70vh] w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Incoming content — starts hidden, fades in from the right */}
        <div className="absolute inset-0 flex items-center px-16">
          <div className="mx-auto flex w-full max-w-screen-2xl gap-32">
            {/* Left — phone image */}
            <div className="ps-bartender_phone w-1/2 flex items-center justify-center opacity-0">
              <img
                src="/UNO-Capstone/bartender_phone.png"
                alt="bartender_phone"
                className="max-h-[70vh] w-full object-contain"
              />
            </div>

            {/* Right — solution text */}
            <div className="ps-solution w-1/2 flex flex-col justify-center opacity-0">
              <h2 className="text-5xl font-bold leading-tight">
                Inventory at the speed of light
              </h2>
              <p className="mt-8 text-xl leading-relaxed">
                Liqr Vision turns your smartphone into the fastest inventory
                system in hospitality.
              </p>
              <p className="mt-8 text-xl leading-relaxed">
                Scan a bottle, your dashboard updates in real time. What used to
                take hours now takes minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
