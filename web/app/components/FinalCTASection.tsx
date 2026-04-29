/**
 * @file FinalCTASection.tsx
 */

"use client";

const statCards = [
  {
    icon: "🍾",
    title: "Consumption",
    value: "8.2 Bottles",
  },
  {
    icon: "🔥",
    title: "New Streak!",
    value: "12 days in a row",
  },
  {
    icon: "🏅",
    title: "Recovered",
    value: "$1,285",
  },
  {
    icon: "⚠️",
    title: "Low Stock",
    value: "Alert",
  },
];

export default function FinalCTASection() {
  return (
    <div className="text-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
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
          <div className="relative w-full max-w-[760px] pb-4 md:h-[560px] md:pb-0">
            {/* SUBTLE GLOW */}
            <div className="absolute left-1/2 top-[42%] -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
            <div className="absolute left-1/2 top-[42%] -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[120px]" />
            <div className="absolute left-1/2 top-[48%] -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

            {/* DESKTOP FLOATING CARDS */}
            <div className="absolute left-[5%] top-[28%] z-20 hidden h-[138px] w-[148px] rounded-[28px] border border-white/10 bg-black px-4 py-4 shadow-[0_0_32px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-3xl">
                🍾
              </div>
              <p className="mt-4 text-center text-xs font-semibold leading-tight text-white">
                Consumption
              </p>
              <p className="text-center text-xs font-semibold text-white/40">
                8.2 Bottles
              </p>
            </div>

            <div className="absolute left-[5%] top-[55%] z-20 hidden h-[138px] w-[148px] rounded-[28px] border border-white/10 bg-black px-4 py-4 shadow-[0_0_32px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-3xl">
                🔥
              </div>
              <p className="mt-4 text-center text-xs font-semibold leading-tight text-white">
                New Streak!
              </p>
              <p className="text-center text-xs font-semibold text-white/40">
                12 days in a row
              </p>
            </div>

            <div className="absolute right-[5%] top-[28%] z-20 hidden h-[138px] w-[148px] rounded-[28px] border border-white/10 bg-black px-4 py-4 shadow-[0_0_32px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-3xl">
                🏅
              </div>
              <p className="mt-4 text-center text-xl font-semibold leading-none text-white">
                $1,285
              </p>
              <p className="text-center text-xs font-semibold text-white/40">
                Recovered
              </p>
            </div>

            <div className="absolute right-[5%] top-[55%] z-20 hidden h-[138px] w-[148px] rounded-[28px] border border-white/10 bg-black px-4 py-4 shadow-[0_0_32px_rgba(0,0,0,0.45)] md:block">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.07] text-3xl">
                ⚠️
              </div>
              <p className="mt-4 text-center text-sm font-semibold leading-tight text-white">
                Low Stock
              </p>
              <div className="mx-auto mt-2 w-fit rounded-full bg-orange-500/12 px-3 py-1 text-[10px] font-semibold text-orange-500/80">
                Alert
              </div>
            </div>

            {/* PHONE */}
            <div className="relative left-1/2 z-10 h-[500px] w-[245px] -translate-x-1/2 rounded-[2.9rem] border-[7px] border-black bg-black shadow-[0_0_80px_rgba(0,0,0,0.7)] md:absolute md:top-1/2 md:-translate-y-1/2">
              <div className="h-full w-full rounded-[2.35rem] border border-white/10 bg-black px-5 py-6">
                <div className="mx-auto mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-green-500/15 shadow-[0_0_22px_rgba(34,197,94,0.25)]">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-sm font-black text-black">
                    ✓
                  </div>
                </div>

                <div className="mt-7 text-center">
                  <p className="text-xl font-semibold leading-none text-white">
                    Inventory
                  </p>
                  <p className="mt-1.5 text-base font-semibold leading-none text-white/40">
                    Insights
                  </p>
                </div>

                <div className="mt-10 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[inset_3px_0_0_rgba(34,197,94,0.8)]">
                    <p className="text-[9px] font-semibold text-white/30">
                      Speed Baseline
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-none text-white">
                      +149%
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[inset_3px_0_0_rgba(96,165,250,0.8)]">
                    <p className="text-[9px] font-semibold text-white/30">
                      Total Value
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-none text-white">
                      $22,694
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[inset_3px_0_0_rgba(129,140,248,0.8)]">
                    <p className="text-[9px] font-semibold text-white/30">
                      Variance Score
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-none text-white">
                      Low{" "}
                      <span className="text-xs font-semibold text-blue-400/80">
                        0.42%
                      </span>
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/45" />
              </div>
            </div>

            {/* MOBILE CARDS UNDER PHONE */}
            <div className="relative z-20 mx-auto mt-6 grid w-full max-w-[340px] grid-cols-2 gap-3 md:hidden">
              {statCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[22px] border border-white/10 bg-black px-4 py-4 text-center shadow-[0_0_28px_rgba(0,0,0,0.35)]"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.07] text-2xl">
                    {card.icon}
                  </div>

                  <p className="mt-3 text-xs font-semibold text-white">
                    {card.title}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white/40">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
