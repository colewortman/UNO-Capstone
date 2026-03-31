/**
 * @file FooterSection.tsx
 * @description Sleek responsive footer with a larger liquid drop,
 * soft blue gradients, and a clean glass feature panel.
 */

"use client";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 pb-10 pt-20 text-white md:px-10 lg:px-16">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] md:h-[420px] md:w-[420px]" />
        <div className="absolute right-[12%] top-[18%] h-[180px] w-[180px] rounded-full bg-cyan-400/8 blur-[90px]" />
        <div className="absolute left-[10%] bottom-24 h-[160px] w-[160px] rounded-full bg-blue-400/8 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* top liquid droplet */}
        <div className="mb-16 flex justify-center md:mb-20">
          <div className="relative h-[220px] w-[220px] md:h-[320px] md:w-[320px]">
            {/* outer glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[70px] md:blur-[90px]" />

            {/* droplet blob */}
            <div className="liquid-drop absolute inset-0 rounded-[42%_58%_55%_45%/42%_40%_60%_58%] border border-white/15 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.95),rgba(255,255,255,0.22)_26%,rgba(96,165,250,0.22)_48%,rgba(15,23,42,0.85)_72%,rgba(2,6,23,0.98)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_30px_90px_rgba(59,130,246,0.18)] backdrop-blur-md">
              {/* reflective highlight */}
              <div className="absolute left-[18%] top-[14%] h-[30%] w-[48%] rotate-[-18deg] rounded-full bg-white/45 blur-2xl" />

              {/* inner blue flare */}
              <div className="absolute bottom-[14%] right-[12%] h-[34%] w-[34%] rounded-full bg-blue-400/20 blur-2xl" />

              {/* tiny orbit dot */}
              <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
            </div>
          </div>
        </div>

        {/* main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          {/* brand */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-semibold tracking-tight">Bar-IQ</h3>
            <p className="mt-4 text-sm leading-7 text-white/55">
              Real-time bar inventory intelligence with faster counts, better
              visibility, and less revenue leakage between sessions.
            </p>
          </div>

          {/* product */}
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/35">
              Product
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-white">
                  Platform overview
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Inventory workflows
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* resources */}
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/35">
              Resources
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-white">
                  Case studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/35">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-white">
                  Book a Demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bar-iq.io"
                  className="transition hover:text-white"
                >
                  hello@bar-iq.io
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom glass panel */}
        <div className="mt-14 md:mt-16">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] px-6 py-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(255,255,255,0.04)] md:px-10 md:py-8">
            <div className="grid gap-6 text-center sm:grid-cols-3 sm:text-left">
              <div>
                <p className="text-xl font-semibold tracking-tight text-white/90">
                  Faster Counts
                </p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  Move through inventory sessions with less manual effort.
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold tracking-tight text-white/90">
                  Cleaner Visibility
                </p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  Track what matters across sessions, locations, and trends.
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold tracking-tight text-white/90">
                  Lower Loss
                </p>
                <p className="mt-2 text-sm leading-6 text-white/45">
                  Surface discrepancies earlier and protect more revenue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center">
          <p>© 2026 Bar-IQ. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white">
              Terms
            </a>
            <a href="#" className="transition hover:text-white">
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
