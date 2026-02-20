"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

// Register once at module scope so plugins are available globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimationLab() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Bridge: tell ScrollTrigger to recalculate on every Lenis scroll tick.
  // Without this, ScrollTrigger reads stale scroll positions because Lenis
  // intercepts native scroll events and replaces them with its own loop.
  useLenis(() => {
    ScrollTrigger.update();
  });

  // useGSAP is React's friendly wrapper around useLayoutEffect for GSAP.
  // { scope: containerRef } means:
  //   - GSAP selectors like ".anim-box" are scoped to this container
  //   - All animations created here are automatically killed on unmount
  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".anim-box").forEach((box) => {
        gsap.to(box, {
          rotation: 360,
          ease: "none", // linear is essential for scrub — easing fights the scroll
          scrollTrigger: {
            trigger: box,
            start: "top bottom", // animation starts when box's top edge hits viewport bottom
            end: "bottom top", // animation ends when box's bottom edge leaves viewport top
            scrub: 1, // ties progress to scroll; "1" = 1s lag for smoothness
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-zinc-50 px-8 py-24 font-sans"
    >
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-800"
        >
          ← Back to Home
        </Link>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="mt-10 mb-16">
          <h1 className="text-6xl font-bold tracking-tight text-zinc-900">
            Animation Lab
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi vel consectetur interdum, nisl nunc
            egestas nunc, vitae tincidunt nisl nunc euismod nunc.
          </p>
        </section>

        {/* ── Circles ──────────────────────────────────────── */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Circles
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="h-24 w-24 rounded-full bg-violet-500" />
            <div className="h-24 w-24 rounded-full bg-teal-500" />
            <div className="h-24 w-24 rounded-full bg-orange-400" />
            <div className="h-24 w-24 rounded-full bg-pink-500" />
          </div>
        </section>

        {/* ── Cards ────────────────────────────────────────── */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Cards
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Card One", color: "border-indigo-200" },
              { title: "Card Two", color: "border-rose-200" },
              { title: "Card Three", color: "border-emerald-200" },
            ].map(({ title, color }) => (
              <div
                key={title}
                className={`rounded-xl border-2 ${color} bg-white p-6 shadow-sm`}
              >
                <h3 className="mb-2 text-lg font-semibold text-zinc-800">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia curae.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Boxes ────────────────────────────────────────── */}
        {/* anim-box class is the GSAP selector target */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Boxes
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="anim-box h-24 w-24 rounded-md bg-indigo-500" />
            <div className="anim-box h-24 w-24 rounded-md bg-rose-500" />
            <div className="anim-box h-24 w-24 rounded-md bg-emerald-500" />
            <div className="anim-box h-24 w-24 rounded-md bg-amber-400" />
            <div className="anim-box h-24 w-48 rounded-md bg-zinc-700" />
          </div>
        </section>

        {/* ── Typography ───────────────────────────────────── */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Typography
          </p>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-zinc-900">Heading One</h1>
            <h2 className="text-3xl font-semibold text-zinc-800">
              Heading Two
            </h2>
            <h3 className="text-xl font-medium text-zinc-700">Heading Three</h3>
            <p className="max-w-prose text-base text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="max-w-prose text-sm font-light text-zinc-500">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </section>

        {/* ── Mixed Grid ───────────────────────────────────── */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Mixed Grid
          </p>
          <div className="grid grid-cols-4 gap-4 items-center">
            <div className="h-20 w-20 rounded-md bg-indigo-400" />
            <div className="col-span-2 text-zinc-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames.
            </div>
            <div className="h-20 w-20 rounded-full bg-rose-400 justify-self-end" />

            <div className="col-span-2 text-zinc-600 text-sm leading-relaxed">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin vel ante a orci tempus eleifend.
            </div>
            <div className="h-20 w-20 rounded-md bg-emerald-400" />
            <div className="h-20 w-20 rounded-full bg-amber-400 justify-self-end" />
          </div>
        </section>
      </div>
    </div>
  );
}
