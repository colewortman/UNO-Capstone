/**
 * @file FinalCTASection.tsx
 */

"use client";

export default function FinalCTASection() {
  return (
    <div className="text-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Inventory complete.
            <br />
            Revenue recovered.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/50 sm:text-xl">
            Faster counts, fewer losses, more revenue.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-8 py-4 text-base font-medium text-white shadow-[0_0_42px_rgba(59,130,246,0.32)] transition hover:scale-[1.02]"
            >
              Book a Demo
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-8 py-4 text-base font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="relative h-[560px] w-full max-w-[720px]">
            {/* soft glow */}
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[100px]" />

            {/* LEFT FLOATING CARDS */}
            <div className="absolute left-0 top-[22%] z-20 hidden h-[150px] w-[160px] rounded-[28px] border border-white/10 bg-black px-5 py-5 shadow-[0_0_35px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.08] text-4xl">
                🍾
              </div>
              <p className="mt-4 text-center text-sm font-semibold leading-tight text-white">
                Consumption
              </p>
              <p className="text-center text-sm font-semibold text-white/45">
                8.2 Bottles
              </p>
            </div>

            <div className="absolute left-2 top-[57%] z-20 hidden h-[150px] w-[160px] rounded-[28px] border border-white/10 bg-black px-5 py-5 shadow-[0_0_35px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.08] text-4xl">
                🔥
              </div>
              <p className="mt-4 text-center text-sm font-semibold leading-tight text-white">
                New Streak!
              </p>
              <p className="text-center text-sm font-semibold text-white/45">
                12 days in a row
              </p>
            </div>

            {/* RIGHT FLOATING CARDS */}
            <div className="absolute right-0 top-[22%] z-20 hidden h-[150px] w-[160px] rounded-[28px] border border-white/10 bg-black px-5 py-5 shadow-[0_0_35px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.08] text-4xl">
                🏅
              </div>
              <p className="mt-4 text-center text-2xl font-semibold leading-none text-white">
                $1,285
              </p>
              <p className="text-center text-sm font-semibold text-white/45">
                Recovered
              </p>
            </div>

            <div className="absolute right-2 top-[57%] z-20 hidden h-[150px] w-[160px] rounded-[28px] border border-white/10 bg-black px-5 py-5 shadow-[0_0_35px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.08] text-4xl">
                ⚠️
              </div>
              <p className="mt-4 text-center text-base font-semibold leading-tight text-white">
                Low Stock
              </p>
              <div className="mx-auto mt-2 w-fit rounded-full bg-orange-500/15 px-3 py-1 text-xs font-semibold text-orange-500">
                Alert
              </div>
            </div>

            {/* PHONE */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[530px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-[3.2rem] border border-white/10 bg-black px-6 py-7 shadow-[0_0_80px_rgba(0,0,0,0.7)] sm:w-[300px]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 shadow-[0_0_28px_rgba(34,197,94,0.35)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-xl font-black text-black">
                  ✓
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-2xl font-semibold leading-none text-white">
                  Inventory
                </p>
                <p className="mt-2 text-xl font-semibold leading-none text-white/45">
                  Insights
                </p>
              </div>

              <div className="mt-12 space-y-3">
                <div className="rounded-2xl border border-white/10 border-l-green-400 bg-white/[0.055] px-5 py-4 shadow-[inset_4px_0_0_rgba(34,197,94,0.95)]">
                  <p className="text-[10px] font-semibold text-white/35">
                    Speed Baseline
                  </p>
                  <p className="mt-1 text-2xl font-semibold leading-none text-white">
                    +149%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 border-l-blue-400 bg-white/[0.055] px-5 py-4 shadow-[inset_4px_0_0_rgba(96,165,250,0.95)]">
                  <p className="text-[10px] font-semibold text-white/35">
                    Total Value
                  </p>
                  <p className="mt-1 text-2xl font-semibold leading-none text-white">
                    $22,694
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 border-l-indigo-400 bg-white/[0.055] px-5 py-4 shadow-[inset_4px_0_0_rgba(129,140,248,0.95)]">
                  <p className="text-[10px] font-semibold text-white/35">
                    Variance Score
                  </p>
                  <p className="mt-1 text-2xl font-semibold leading-none text-white">
                    Low{" "}
                    <span className="text-sm font-semibold text-blue-400">
                      0.42%
                    </span>
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/50" />
            </div>

            {/* MOBILE CARDS */}
            <div className="absolute bottom-0 left-1/2 grid w-full max-w-[340px] -translate-x-1/2 grid-cols-2 gap-3 md:hidden">
              <div className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-center">
                <p className="text-2xl">🍾</p>
                <p className="mt-1 text-sm font-semibold">8.2 Bottles</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black px-4 py-4 text-center">
                <p className="text-2xl">🏅</p>
                <p className="mt-1 text-sm font-semibold">$1,285</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
