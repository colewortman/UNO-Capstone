/**
 * @file FooterSection.tsx
 * @description Sleek responsive footer with a larger liquid drop,
 * soft blue gradients, and a clean glass feature panel.
 */

"use client";

import LiquidMetalLogo from "./ui/liquid-metal-hero";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-4 pb-8 pt-12 text-white sm:px-6 sm:pb-10 sm:pt-20 md:px-10 lg:px-16">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px] sm:h-[320px] sm:w-[320px] sm:blur-[120px] md:h-[420px] md:w-[420px]" />
        <div className="absolute right-[12%] top-[18%] h-[120px] w-[120px] rounded-full bg-cyan-400/8 blur-[60px] sm:h-[180px] sm:w-[180px] sm:blur-[90px]" />
        <div className="absolute left-[10%] bottom-24 h-[100px] w-[100px] rounded-full bg-blue-400/8 blur-[60px] sm:h-[160px] sm:w-[160px] sm:blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* top liquid metal logo */}
        <div className="mb-8 flex justify-center sm:mb-16 md:mb-20">
          <div className="relative h-[140px] w-[140px] sm:h-[220px] sm:w-[220px] md:h-[320px] md:w-[320px]">
            {/* outer glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[50px] sm:blur-[70px] md:blur-[90px]" />
            <LiquidMetalLogo />
          </div>
        </div>

        {/* main footer grid */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          {/* brand — full width on mobile, then normal grid placement */}
          <div className="col-span-3 max-w-sm md:col-span-1">
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Bar-IQ</h3>
            <p className="mt-2 text-xs leading-5 text-white/55 sm:mt-4 sm:text-sm sm:leading-7">
              Real-time bar inventory intelligence with faster counts, better
              visibility, and less revenue leakage between sessions.
            </p>
          </div>

          {/* product */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs">
              Product
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-white/70 sm:mt-5 sm:space-y-3 sm:text-sm">
              <li>
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
                  Platform overview
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
                  Inventory workflows
                </a>
              </li>
              <li>
                <a href="#pricing" className="inline-block py-0.5 transition hover:text-white sm:py-1">
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
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="inline-block py-0.5 transition hover:text-white sm:py-1">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* contact — sits in the brand row on md, own column on lg */}
          <div className="col-span-3 md:col-span-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/35 sm:text-xs">
              Contact
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs text-white/70 sm:mt-5 sm:flex-col sm:gap-x-0 sm:space-y-3 sm:text-sm">
              <li>
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
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
                <a href="#" className="inline-block py-0.5 transition hover:text-white sm:py-1">
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
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/35 sm:mt-10 sm:gap-4 sm:pt-6 md:flex-row md:items-center">
          <p>© 2026 Bar-IQ. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a href="#" className="inline-block py-1 transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="inline-block py-1 transition hover:text-white">
              Terms
            </a>
            <a href="#" className="inline-block py-1 transition hover:text-white">
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
