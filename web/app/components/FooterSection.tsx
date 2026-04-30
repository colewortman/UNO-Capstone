/**
 * @file FooterSection.tsx
 * @description Sleek responsive footer with a larger liquid drop,
 * soft blue gradients, and a clean glass feature panel.
 */

"use client";

import dynamic from "next/dynamic";

// Lazy-load LiquidMetalLogo with no SSR to defer expensive WebGL initialization
// Provides a placeholder skeleton while loading
const LiquidMetalLogo = dynamic(() => import("./ui/liquid-metal-hero"), {
  ssr: false,
  loading: () => (
    <div className="bg-blue-500/5 rounded-full animate-pulse" style={{ width: "100%", height: "100%" }} />
  ),
});

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-4 pb-12 pt-16 text-white sm:px-6 sm:pb-16 sm:pt-20 md:px-8 lg:px-12 lg:pb-20 lg:pt-24 xl:px-16 xl:pt-32">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] md:h-[420px] md:w-[420px]" />
        <div className="absolute right-[12%] top-[18%] h-[120px] w-[120px] rounded-full bg-cyan-400/8 blur-[60px] sm:h-[180px] sm:w-[180px] sm:blur-[90px]" />
        <div className="absolute left-[10%] bottom-24 h-[100px] w-[100px] rounded-full bg-blue-400/8 blur-[60px] sm:h-[160px] sm:w-[160px] sm:blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[var(--container-content)]">
        {/* liquid metal logo — single instance with responsive sizing via CSS */}
        <div className="mb-8 flex justify-center sm:mb-12 lg:hidden">
          <div className="relative h-[140px] w-full max-w-[180px] sm:h-[160px] sm:max-w-[200px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[60px]" />
            <LiquidMetalLogo scale={1} />
          </div>
        </div>

        {/* main footer grid */}
        <div className="grid grid-cols-3 justify-items-center gap-x-3 gap-y-8 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
          {/* liquid metal logo — only shown on lg+ via CSS, not conditional rendering */}
          <div className="hidden h-full w-full items-stretch justify-center lg:flex">
            <div className="relative h-full min-h-[160px] w-full max-w-[200px]">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[60px]" />
              <LiquidMetalLogo scale={1} />
            </div>
          </div>

          {/* product */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs">
              Product
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-white/70 sm:mt-5 sm:space-y-3 sm:text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Platform overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Inventory workflows
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* resources */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs">
              Resources
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-white/70 sm:mt-5 sm:space-y-3 sm:text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Case studies
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* contact — sits in the brand row on md, own column on lg */}
          <div className="lg:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs">
              Contact
            </p>
            <ul className="mt-2 flex flex-col gap-y-1 text-xs text-white/70 sm:mt-5 sm:gap-y-0 sm:space-y-3 sm:text-sm">
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Book a Demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bar-iq.io"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  hello@bar-iq.io
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-0.5 transition hover:text-white sm:py-1"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom glass panel */}
        <div className="mt-8 sm:mt-14 md:mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-xl shadow-[0_20px_60px_rgba(255,255,255,0.04)] sm:rounded-[28px] sm:px-6 sm:py-6 md:px-10 md:py-8">
            <div className="grid grid-cols-3 gap-3 text-center sm:gap-6">
              <div>
                <p className="text-sm font-semibold tracking-tight text-white/90 sm:text-xl">
                  Faster Counts
                </p>
                <p className="mt-1 hidden text-sm leading-6 text-white/45 sm:block sm:mt-2">
                  Move through inventory sessions with less manual effort.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight text-white/90 sm:text-xl">
                  Cleaner Visibility
                </p>
                <p className="mt-1 hidden text-sm leading-6 text-white/45 sm:block sm:mt-2">
                  Track what matters across sessions, locations, and trends.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold tracking-tight text-white/90 sm:text-xl">
                  Lower Loss
                </p>
                <p className="mt-1 hidden text-sm leading-6 text-white/45 sm:block sm:mt-2">
                  Surface discrepancies earlier and protect more revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 text-center text-xs text-white/35 sm:mt-10 sm:flex-row sm:gap-4 sm:pt-6 sm:text-left">
          <p>© 2026 Bar-IQ. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
            <a
              href="#"
              className="inline-block py-1 transition hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="inline-block py-1 transition hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="inline-block py-1 transition hover:text-white"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .liquid-drop {
          animation: floatDrift 9s ease-in-out infinite;
          will-change: transform, border-radius;
        }

        @keyframes floatDrift {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            border-radius: 42% 58% 55% 45% / 42% 40% 60% 58%;
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
            border-radius: 48% 52% 47% 53% / 46% 36% 64% 54%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-drop {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}
