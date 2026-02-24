"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import SplitType from "split-type";

// Register once at module scope so plugins are available globally
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimationLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  // Store tween references so replay buttons can call .restart() on demand
  const charTweenRef = useRef<gsap.core.Tween | null>(null);
  const lineTweenRef = useRef<gsap.core.Tween | null>(null);
  const wordTweenRef = useRef<gsap.core.Tween | null>(null);
  const vantaDotsRef = useRef<HTMLDivElement>(null);
  const vantaNetRef = useRef<HTMLDivElement>(null);

  // Vanta.js needs to be initialized after mount since it manipulates the DOM directly.
  // Dynamic import avoids SSR issues — Three.js and Vanta both need `window`.
  useEffect(() => {
    const effects: { destroy: () => void }[] = [];

    const initVanta = async () => {
      // CRITICAL: Set window.THREE BEFORE importing any Vanta modules.
      // Each Vanta effect captures `let p = window.THREE` at module load
      // time — if window.THREE isn't set yet, p is undefined and the
      // effect silently falls back to a solid backgroundColor.
      const THREE = await import("three");
      (window as unknown as Record<string, unknown>).THREE = THREE;

      // Import all Vanta modules AFTER window.THREE is set
      const [{ default: DOTS }, { default: NET }] = await Promise.all([
        import("vanta/dist/vanta.dots.min"),
        import("vanta/dist/vanta.net.min"),
      ]);

      // ── Dots ────────────────────────────────────────────
      // Dots has no "speed" option — its animation speed is tied to
      // spacing (larger = fewer dots = calmer feel).
      if (vantaDotsRef.current) {
        effects.push(
          DOTS({
            el: vantaDotsRef.current,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x2563eb,
            color2: 0x1e3a5f,
            backgroundColor: 0x000000,
            showLines: false,
            spacing: 35,
            size: 3,
            speed: 0.2,
          }),
        );
      }

      // ── Net ─────────────────────────────────────────────
      if (vantaNetRef.current) {
        effects.push(
          NET({
            el: vantaNetRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3b82f6,
            backgroundColor: 0x0a0a0a,
            points: 6,
            maxDistance: 22,
            spacing: 18,
          }),
        );
      }
    };

    initVanta();

    return () => {
      effects.forEach((e) => e.destroy());
    };
  }, []);

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
      // ── Scroll-scrub rotation (Boxes) ────────────────────────────
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

      // ── Typography animation (text splitting) ────────────────────
      // SplitType breaks a text node into individual <span> elements so GSAP
      // has something to target per character, word, or line.
      // Without splitting, you can only animate the whole text block at once.

      // Demo 1: Char stagger — animates every character independently.
      // `types: "chars,words"` splits into both; we animate .chars.
      // stagger staggers the start time of each char's tween by 0.03s.
      const charSplit = new SplitType(".typo-chars", { types: "chars,words" });
      // once: true kills the ScrollTrigger after the first fire so it won't
      // interfere when the replay button calls .restart() later.
      charTweenRef.current = gsap.from(charSplit.chars!, {
        y: 50,
        opacity: 0,
        stagger: 0.03, // each char starts 30ms after the previous
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: ".typo-chars", start: "top 85%", once: true },
      });

      // Demo 2: Line mask reveal — the classic "curtain" effect.
      // SplitType wraps each visual line in its own div.
      // We insert an overflow:hidden div around each line (the "mask").
      // Animating the line from y:"100%" makes it slide up from below the mask —
      // text appears to emerge from beneath a surface rather than just fading in.
      const lineSplit = new SplitType(".typo-lines", { types: "lines" });
      lineSplit.lines?.forEach((line) => {
        const mask = document.createElement("div");
        mask.style.overflow = "hidden";
        line.parentNode!.insertBefore(mask, line);
        mask.appendChild(line);
      });
      lineTweenRef.current = gsap.from(lineSplit.lines!, {
        y: "100%", // start fully below the overflow:hidden mask
        duration: 0.75,
        stagger: 0.12, // each line starts 120ms after the previous
        ease: "power4.out",
        scrollTrigger: { trigger: ".typo-lines", start: "top 85%", once: true },
      });

      // Demo 3: Word stagger with back.out — a "juicy" middle ground.
      // Splitting by words is less granular than chars but more dynamic than lines.
      // back.out adds a slight overshoot, making each word feel weighted on arrival.
      const wordSplit = new SplitType(".typo-words", { types: "words" });
      wordTweenRef.current = gsap.from(wordSplit.words!, {
        y: 30,
        opacity: 0,
        stagger: 0.07,
        duration: 0.5,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".typo-words", start: "top 85%", once: true },
      });

      // ── Stacked cards hover reveal ────────────────────────────────
      // Cards 2 and 3 sit behind card 1 with a small peek offset so the
      // user can see the stack before interacting.
      // The CONTAINER is the mouseenter/mouseleave trigger — not card 1.
      // This means moving from card 1 to the spread cards doesn't collapse
      // the stack, because the mouse never leaves the container boundary.
      const cards = gsap.utils.toArray<HTMLElement>(".card-stack");
      const stackContainer = gsap.utils.toArray<HTMLElement>(
        ".card-stack-container",
      )[0];

      // Initial peek: cards 2 and 3 shift slightly right/down to reveal their edges
      gsap.set(cards[1], { x: 8, y: 6 });
      gsap.set(cards[2], { x: 16, y: 12 });

      const gap = 24; // gap-6 = 24px

      stackContainer.addEventListener("mouseenter", () => {
        const w = cards[0].offsetWidth; // measure at call time for accuracy
        gsap.to(cards[1], {
          x: w + gap,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(cards[2], {
          x: (w + gap) * 2,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          delay: 0.05, // slight cascade so cards fan out sequentially
          overwrite: "auto",
        });
      });

      stackContainer.addEventListener("mouseleave", () => {
        // Collapse back to the peek state
        gsap.to(cards[1], {
          x: 8,
          y: 6,
          duration: 0.4,
          ease: "power2.inOut",
          overwrite: "auto",
        });
        gsap.to(cards[2], {
          x: 16,
          y: 12,
          duration: 0.4,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });

      // ── Hover lift with easing (Circles) ─────────────────────────
      // Easing controls how a value accelerates and decelerates over time.
      // All circles move the same distance (y: -20px) — only the ease differs,
      // which is why hover easing is one of the best ways to feel the difference.
      //
      // Each circle reads its ease from a data attribute so the GSAP logic stays
      // generic — the "personality" of each circle lives in the JSX, not here.
      //
      // overwrite: "auto" — if a new tween starts before the previous one
      // finishes (e.g. fast mouse flick in/out), GSAP resolves the conflict
      // instead of stacking two animations fighting over the same property.
      gsap.utils.toArray<HTMLElement>(".hover-circle").forEach((circle) => {
        const easeIn = circle.dataset.easeIn ?? "power2.out";
        const easeOut = circle.dataset.easeOut ?? "power2.inOut";

        circle.addEventListener("mouseenter", () => {
          gsap.to(circle, {
            y: -20,
            duration: 0.35,
            ease: easeIn,
            overwrite: "auto",
          });
        });
        circle.addEventListener("mouseleave", () => {
          gsap.to(circle, {
            y: 0,
            duration: 0.55,
            ease: easeOut,
            overwrite: "auto",
          });
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
        </section>

        {/* ── Animated Gradient Background ─────────────────── */}
        {/*
          Pure CSS animated gradient — no JS needed.
          Uses @keyframes to continuously shift a large background-size
          gradient across the section. The background is 400% wide so
          there's enough "canvas" for the position to travel smoothly.
          The animation loops infinitely with ease-in-out for organic motion.
        */}
        <section className="gradient-bg relative -mx-8 mb-16 flex min-h-[60vh] items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Animated Gradient
            </h2>
            <p className="mt-4 max-w-md text-lg text-blue-200/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi vel consectetur interdum, nisl nunc
              egestas nunc, vitae tincidunt nisl nunc euismod nunc.
            </p>
          </div>
        </section>

        {/* Inline style tag for the gradient animation keyframes */}
        <style>{`
          .gradient-bg {
            background: linear-gradient(
              -45deg,
              #000000,
              #001233,
              #001845,
              #002855,
              #023e7d,
              #001233,
              #000000,
              #002855
            );
            background-size: 400% 400%;
            animation: gradientShift 12s ease-in-out infinite;
          }

          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 25%;
            }
            50% {
              background-position: 100% 50%;
            }
            75% {
              background-position: 0% 75%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>

        {/* ── Vanta.js Backgrounds ─────────────────────────── */}
        {/*
          Vanta.js renders Three.js WebGL scenes into ref'd divs.
          Dynamic imports avoid SSR crashes (Three.js needs window/document).
          All effects are destroyed on unmount to prevent memory leaks.
        */}

        {/* Dots — floating dots with mouse interaction */}
        <section
          ref={vantaDotsRef}
          className="relative -mx-8 mb-16 flex min-h-[60vh] items-center justify-center"
        >
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Vanta.js Dots
            </h2>
          </div>
        </section>

        {/* Net — connected node network */}
        <section
          ref={vantaNetRef}
          className="relative -mx-8 mb-16 flex min-h-[60vh] items-center justify-center"
        >
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Vanta.js Net
            </h2>
            <p className="mt-4 max-w-md text-lg text-blue-200/80">
              Connected nodes forming a living network. Lines appear between
              nearby points as they drift.
            </p>
          </div>
        </section>

        {/* ── Circles — Hover Easing ───────────────────────── */}
        {/*
          All four circles animate the same property (y: -20px) with the same
          duration — the ONLY difference is the ease curve. Hover each one to
          feel how the curve changes the "personality" of the motion:

          power2.out  — starts fast, decelerates smoothly. The go-to for most UI.
          elastic.out — overshoots and oscillates like a spring. Playful, bouncy.
          back.out    — slightly overshoots before settling. Feels "juicy" / weighty.
          expo.out    — extremely sharp start, then coasts very gradually to a stop.
        */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Circles — Hover Easing
          </p>
          <div className="flex flex-wrap gap-10">
            {[
              {
                color: "bg-violet-500",
                easeIn: "power2.out",
                easeOut: "power2.inOut",
                label: "power2.out",
              },
              {
                color: "bg-teal-500",
                easeIn: "elastic.out(1,0.3)",
                easeOut: "power2.out",
                label: "elastic.out",
              },
              {
                color: "bg-orange-400",
                easeIn: "back.out(1.7)",
                easeOut: "power2.out",
                label: "back.out",
              },
              {
                color: "bg-pink-500",
                easeIn: "expo.out",
                easeOut: "power2.out",
                label: "expo.out",
              },
            ].map(({ color, easeIn, easeOut, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                {/*
                  hover-circle     — GSAP selector target (scoped to containerRef)
                  data-ease-in/out — read by the useGSAP listener; decouples the
                                     "which ease" decision from the animation logic
                  cursor-pointer   — signals interactivity to the user
                */}
                <div
                  className={`hover-circle h-24 w-24 cursor-pointer rounded-full ${color}`}
                  data-ease-in={easeIn}
                  data-ease-out={easeOut}
                />
                <span className="font-mono text-xs text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cards ────────────────────────────────────────── */}
        {/*
          All three cards are absolutely positioned at the same spot — stacked.
          z-index order: Card 1 (top) → Card 2 → Card 3 (bottom).
          Cards 2 and 3 start with a small x/y peek so the user sees the stack.
          Hovering the container fans the cards out; leaving collapses them back.
          The container is the trigger (not card 1) so moving between spread
          cards doesn't accidentally collapse the animation.
        */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Cards
          </p>
          {/*
            card-stack-container — GSAP mouseenter/mouseleave target
            h-44 — reserves space in the normal flow for the absolutely
                    positioned cards (they'd otherwise collapse to 0 height)
            cursor-pointer — visual hint that this area is interactive
          */}
          <div className="card-stack-container relative h-44 cursor-pointer">
            {[
              { title: "Card One", color: "border-indigo-200", z: 3 },
              { title: "Card Two", color: "border-rose-200", z: 2 },
              { title: "Card Three", color: "border-emerald-200", z: 1 },
            ].map(({ title, color, z }) => (
              <div
                key={title}
                style={{ zIndex: z }}
                className={`card-stack absolute w-64 rounded-xl border-2 ${color} bg-white p-6 shadow-sm`}
              >
                <h3 className="mb-2 text-lg font-semibold text-zinc-800">
                  {title}
                </h3>
                <p className="text-sm text-zinc-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ante ipsum primis in faucibus.
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

        {/* ── Sticky Positioning ───────────────────────────────────── */}
        {/*
          How position: sticky works:
          1. The element scrolls normally — just like position: relative
          2. Once it reaches the threshold you set (e.g. top: 32px from the viewport top),
             it "sticks" in place — just like position: fixed
          3. BUT it only sticks while its PARENT container is still visible on screen.
             When the parent exits the viewport, the sticky element is dragged along with it.
          4. GOTCHA: any ancestor with overflow: hidden / auto / scroll BREAKS sticky!
             Keep the path from the sticky element to the scroll container overflow-free.
        */}
        <section className="mb-56">
          {/* ── Demo 1: Sticky sidebar ─────────────────────────── */}
          <p className="mb-3 text-sm font-semibold text-zinc-700">
            Demo 1 — Sticky sidebar
          </p>
          {/*
            Two-column layout. Left column uses sticky; right column is plain content.
            The left panel scrolls normally, then sticks at top-8 (32px from viewport top),
            and stays there until THIS <section> element scrolls off screen.
          */}
          <div className="mb-20 flex gap-8">
            {/* Left: sticky panel */}
            <div className="w-44 flex-shrink-0">
              {/*
                `sticky`  — enables sticky positioning
                `top-8`   — sticks when the element is 32px from the top of the viewport.
                            Without a top/bottom/left/right value, sticky does nothing!
              */}
              <div className="sticky top-8 rounded-xl bg-violet-500 p-5 text-white shadow-lg">
                <span className="mb-2 block font-mono text-xs text-violet-200">
                  sticky top-8
                </span>
                <p className="text-sm font-semibold leading-snug">
                  I scroll normally, then pin 32px from the top.
                </p>
                <p className="mt-2 text-xs text-violet-200">
                  Keep scrolling — I stay here while my parent section is on
                  screen!
                </p>
              </div>
            </div>

            {/* Right: plain tall content — no special CSS needed */}
            <div className="flex-1 space-y-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-zinc-800">
                    Item {i + 1}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia curae.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Typography Animation ─────────────────────────── */}
        {/*
          Text splitting = wrapping each char / word / line in its own <span>
          so GSAP (or any animation library) can target them individually.
          SplitType does the DOM surgery; GSAP drives the motion.

          Three granularity levels to compare:
            chars — maximum drama, best for short headings (2–5 words)
            lines — elegant and fast to read; great for hero sections
            words — middle ground; natural rhythm for body-sized text
        */}
        <section className="mb-56">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Typography Animation
          </p>

          {/* Demo 1: Char stagger ───────────────────────────────── */}
          {/*
            SplitType wraps every character in a <span class="char">.
            GSAP then staggers each span: char 0 starts at t=0, char 1 at t=0.03s,
            char 2 at t=0.06s … The visual result is a cascade of letters.
            Works best on short, bold headings — long paragraphs have too many chars.
          */}
          <div className="mb-20">
            <div className="mb-3 flex items-center gap-4">
              <p className="font-mono text-xs text-zinc-400">
                types: &quot;chars&quot; · stagger: 0.03s · power3.out
              </p>
              <button
                onClick={() => charTweenRef.current?.restart()}
                className="rounded bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-800"
              >
                ↺ Replay
              </button>
            </div>
            <h2 className="typo-chars text-5xl font-bold leading-tight text-zinc-900">
              Every letter
              <br />
              is its own span.
            </h2>
          </div>

          {/* Demo 2: Line mask reveal ───────────────────────────── */}
          {/*
            SplitType wraps each visual line in a <div class="line">.
            We then insert an overflow:hidden wrapper around every .line div —
            this is the "mask". The line starts at y:100% (fully below the mask)
            and slides up to y:0. Because the mask hides anything below its edge,
            the text looks like it's emerging from beneath a surface.
            This is the most elegant reveal for large hero headings.
          */}
          <div className="mb-20">
            <div className="mb-3 flex items-center gap-4">
              <p className="font-mono text-xs text-zinc-400">
                types: &quot;lines&quot; · overflow:hidden mask · y: 100%→0 ·
                power4.out
              </p>
              <button
                onClick={() => lineTweenRef.current?.restart()}
                className="rounded bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-800"
              >
                ↺ Replay
              </button>
            </div>
            <h2 className="typo-lines text-5xl font-bold leading-tight text-zinc-900">
              Lines emerge
              <br />
              from beneath
              <br />
              the surface.
            </h2>
          </div>

          {/* Demo 3: Word stagger ───────────────────────────────── */}
          {/*
            Splitting by words is less granular than chars, which makes it
            readable and natural for longer phrases. back.out adds a slight
            overshoot so each word "lands" with a satisfying weight.
          */}
          <div>
            <div className="mb-3 flex items-center gap-4">
              <p className="font-mono text-xs text-zinc-400">
                types: &quot;words&quot; · stagger: 0.07s · back.out(1.4)
              </p>
              <button
                onClick={() => wordTweenRef.current?.restart()}
                className="rounded bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-800"
              >
                ↺ Replay
              </button>
            </div>
            <p className="typo-words max-w-xl text-3xl font-medium leading-snug text-zinc-700">
              Words cascade in one by one with ease.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
