"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { FeatureCarousel } from "./ui/feature-carousel";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [showSolution, setShowSolution] = useState(false);
  const lenis = useLenis();

  // Snap the page so the chosen carousel sits fully revealed in the pin range.
  // problem → start of pin (progress 0); solution → end of pin (progress 1).
  // Lenis.scrollTo interrupts any in-flight smooth scroll so the new tween
  // starts immediately on click instead of queuing behind existing momentum.
  const scrollToCarousel = (target: "problem" | "solution") => {
    if (isMobile) return;
    const st = scrollTriggerRef.current;
    if (!st || !lenis) return;
    const targetScroll = target === "problem" ? st.start : st.end;
    lenis.scrollTo(targetScroll, { duration: 0.8, force: true });
  };

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
        ".ps-mobile-problem .fc-blue-panel",
        ".ps-mobile-problem .fc-image-panel",
        ".ps-mobile-solution .fc-blue-panel",
        ".ps-mobile-solution .fc-image-panel",
      ]) as HTMLElement[];
      animated.forEach((el) => gsap.set(el, { clearProps: "all" }));

      // Mobile: solution stays static underneath. If starting on the solution
      // view, set the problem carousel to its split-apart state.
      if (isMobile) {
        if (showSolution) {
          gsap.set(".ps-mobile-problem .fc-blue-panel", { yPercent: -100 });
          gsap.set(".ps-mobile-problem .fc-image-panel", { yPercent: 100 });
        }
        return;
      }

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

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".ps-section",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.8,
          },
        });

        scrollTriggerRef.current = tl.scrollTrigger ?? null;

        // --- Problem carousel out ---

        // Problem blue panel (with header) slides out to the left
        tl.to(".ps-problem .fc-blue-panel", {
          xPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
        });

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

        // --- Solution carousel in ---

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

        // Solution blue panel (with header) slides in from the right
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

        // Ensure ScrollTrigger recalculates layout
        ScrollTrigger.refresh();
      });

      return () => cancelAnimationFrame(rafId);
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  const toggleMobileCarousel = () => {
    const toSolution = !showSolution;
    setShowSolution(toSolution);

    // Only the problem carousel animates — solution sits static underneath.
    // Toggling on splits the problem apart to reveal the solution; toggling
    // off brings the problem back together to cover the solution.
    const bluePanel = ".ps-mobile-problem .fc-blue-panel";
    const imagePanel = ".ps-mobile-problem .fc-image-panel";

    gsap.to(bluePanel, {
      yPercent: toSolution ? -100 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
    gsap.to(imagePanel, {
      yPercent: toSolution ? 100 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <div ref={sectionRef}>
      {/* Mobile: single carousel with toggle button, horizontal slide animation */}
      <div className={isMobile ? "" : "hidden"}>
        <div className="mb-6 flex items-center justify-center gap-3">
          {/* Invisible spacer mirrors the button so the header stays centered */}
          <div className="h-9 w-9" aria-hidden="true" />
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {showSolution ? "The Solution" : "The Problem"}
          </h2>
          <button
            type="button"
            onClick={toggleMobileCarousel}
            aria-label={showSolution ? "Show The Problem" : "Show The Solution"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/20 text-foreground transition-colors hover:bg-foreground/10 cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                showSolution && "rotate-180",
              )}
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="relative mx-auto h-[420px] w-full overflow-hidden md:aspect-[16/9] md:h-auto">
          {/* Solution sits static underneath; paused when covered to save work */}
          <div className="ps-mobile-solution absolute inset-0 z-10">
            <FeatureCarousel inverted paused={!showSolution} />
          </div>
          {/* Problem renders on top and is the only carousel that animates.
              Force the image panel fully opaque so the solution beneath
              doesn't bleed through the default 30% tint. When split apart to
              reveal the solution, disable pointer events so clicks fall
              through to the solution's chips underneath. */}
          <div
            className={cn(
              "ps-mobile-problem absolute inset-0 z-20 [&_.fc-image-panel]:bg-secondary",
              showSolution && "pointer-events-none",
            )}
          >
            <FeatureCarousel paused={showSolution} />
          </div>
        </div>
      </div>

      {/* Desktop: GSAP pinned scroll animation */}
      <section className={isMobile ? "hidden" : "ps-section relative flex h-screen items-center justify-center overflow-hidden"}>
        {/* Carousel row — centered in section with fixed aspect ratio */}
        <div className="relative flex w-full justify-center">
          <div className="relative w-full aspect-[16/9]">
            {/* Problem carousel — normal layout (blue left, images right) */}
            <div className="ps-problem absolute inset-0">
              <FeatureCarousel
                title="The Problem"
                onChipClick={() => scrollToCarousel("problem")}
              />
            </div>

            {/* Solution carousel — inverted layout (images left, blue right) */}
            <div className="ps-solution absolute inset-0">
              <FeatureCarousel
                title="The Solution"
                inverted
                onChipClick={() => scrollToCarousel("solution")}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
