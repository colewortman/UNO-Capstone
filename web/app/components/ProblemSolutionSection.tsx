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
      // Kill any lingering ScrollTriggers from previous runs
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Clear all inline GSAP transforms so elements start fresh
      const animated = gsap.utils.toArray([
        ".ps-problem .fc-blue-panel",
        ".ps-problem .fc-image-panel",
        ".ps-solution .fc-blue-panel",
        ".ps-solution .fc-image-panel",
        ".ps-title-problem-text",
        ".ps-title-solution-text",
      ]) as HTMLElement[];
      animated.forEach((el) => gsap.set(el, { clearProps: "all" }));

      // Skip GSAP animations on mobile — stacked layout shown via CSS instead
      if (isMobile) return;

      // Wait one frame so the desktop section is visible and measurable
      const rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;

        // Hide solution panels initially so they don't flash
        gsap.set(".ps-solution .fc-blue-panel", {
          xPercent: 100,
          opacity: 0,
        });
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

        // Ensure ScrollTrigger recalculates layout
        ScrollTrigger.refresh();
      });

      return () => cancelAnimationFrame(rafId);
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <div ref={sectionRef}>
      {/* Mobile: stacked layout without GSAP pinning */}
      <div className={isMobile ? "space-y-12 px-4 py-8" : "hidden"}>
        <div>
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            The Problem
          </h2>
          <div className="mx-auto h-[420px] w-full max-w-5xl sm:aspect-[16/9] sm:h-auto">
            <FeatureCarousel />
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-center text-3xl font-semibold sm:text-4xl">
            The Solution
          </h2>
          <div className="mx-auto h-[420px] w-full max-w-5xl sm:aspect-[16/9] sm:h-auto">
            <FeatureCarousel inverted />
          </div>
        </div>
      </div>

      {/* Desktop: GSAP pinned scroll animation */}
      <section className={isMobile ? "hidden" : "ps-section relative flex h-screen flex-col overflow-hidden"}>
        {/* Top spacer — contains the title, centered between section top and carousel */}
        <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center pt-16">
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

        {/* Carousel row — centered in section with fixed aspect ratio */}
        <div className="relative flex w-full justify-center px-4 md:px-6 lg:px-8">
          <div className="relative w-full max-w-6xl aspect-[16/9]">
            {/* Problem carousel — normal layout (blue left, images right) */}
            <div className="ps-problem absolute inset-0">
              <FeatureCarousel />
            </div>

            {/* Solution carousel — inverted layout (images left, blue right) */}
            <div className="ps-solution absolute inset-0">
              <FeatureCarousel inverted />
            </div>
          </div>
        </div>

        {/* Bottom spacer — equal to top spacer so carousel stays vertically centered */}
        <div className="min-h-0 flex-1" aria-hidden="true" />
      </section>
    </div>
  );
}
