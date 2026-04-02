"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FeatureCarousel } from "./ui/feature-carousel";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useGSAP(
    () => {
      // Skip GSAP animations on mobile — stacked layout shown via CSS instead
      if (isMobile) return;

      // Hide solution panels initially so they don't flash
      gsap.set(".ps-solution .fc-blue-panel", { xPercent: 100, opacity: 0 });
      gsap.set(".ps-solution .fc-image-panel", {
        xPercent: -60,
        opacity: 0,
        filter: "blur(12px)",
      });

      // Hide "The Solution" title initially (pushed down below the mask)
      gsap.set(".ps-title-solution-text", { yPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ps-section",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.8,
        },
      });

      // --- Title out + Problem carousel out (overlapped) ---

      // "The Problem" title slides down out of its mask
      tl.to(".ps-title-problem-text", {
        yPercent: 100,
        duration: 0.35,
        ease: "power2.in",
      });

      // Problem blue panel starts fading out alongside the title
      tl.to(
        ".ps-problem .fc-blue-panel",
        {
          xPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "<0.1",
      );

      // Problem image panel blurs and slides to the right
      tl.to(
        ".ps-problem .fc-image-panel",
        {
          xPercent: 60,
          filter: "blur(12px)",
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        },
        "<0.05",
      );

      // --- Solution carousel in + Title in (overlapped) ---

      tl.addLabel("reveal", "-=0.15");

      // Solution image panel slides in from the left
      tl.fromTo(
        ".ps-solution .fc-image-panel",
        { xPercent: -60, filter: "blur(12px)", opacity: 0 },
        {
          xPercent: 0,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "reveal",
      );

      // Solution blue panel slides in from the right
      tl.fromTo(
        ".ps-solution .fc-blue-panel",
        { xPercent: 100, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "reveal+=0.05",
      );

      // "The Solution" title slides up, starting near the end of the carousel reveal
      tl.to(
        ".ps-title-solution-text",
        {
          yPercent: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "-=0.35",
      );
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <div ref={sectionRef}>
      {/* Mobile: stacked layout without GSAP pinning */}
      <div className={isMobile ? "space-y-12 py-8" : "hidden"}>
        <div>
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            The Problem
          </h2>
          <div className="p-2 sm:p-4">
            <FeatureCarousel />
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            The Solution
          </h2>
          <div className="p-2 sm:p-4">
            <FeatureCarousel inverted />
          </div>
        </div>
      </div>

      {/* Desktop: GSAP pinned scroll animation */}
      <section className={isMobile ? "hidden" : "ps-section relative h-screen overflow-hidden"}>
        {/* Title with line-masked swap animation */}
        <div className="relative z-10 flex justify-center pt-20 md:pt-32 lg:pt-42">
          <div className="relative">
            <div className="ps-title-problem overflow-hidden">
              <h2 className="ps-title-problem-text text-center text-4xl font-semibold md:text-5xl">
                The Problem
              </h2>
            </div>
            <div className="ps-title-solution absolute inset-0 overflow-hidden">
              <h2 className="ps-title-solution-text text-center text-4xl font-semibold md:text-5xl">
                The Solution
              </h2>
            </div>
          </div>
        </div>

        {/* Problem carousel — normal layout (blue left, images right) */}
        <div className="ps-problem absolute inset-x-0 top-20 bottom-0 flex items-center justify-center p-4 md:p-8">
          <FeatureCarousel />
        </div>

        {/* Solution carousel — inverted layout (images left, blue right) */}
        <div className="ps-solution absolute inset-x-0 top-20 bottom-0 flex items-center justify-center p-4 md:p-8">
          <FeatureCarousel inverted />
        </div>
      </section>
    </div>
  );
}
