/**
 * @file FinalCTASection.tsx
 * @description Minimal final CTA section showing a completed inventory state
 * with key performance outcomes. Designed to be clean, simple, and conversion-focused.
 */

export default function FinalCTASection() {
  return (
    <div className="relative">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
        
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            Inventory complete.
            <br />
            Revenue recovered.
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Finish counts faster, spot issues instantly, and capture more revenue between sessions.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#"
              className="rounded-full bg-white text-black px-6 py-3 font-medium transition hover:opacity-90"
            >
              Book a Demo
            </a>

            <a
              href="#pricing"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white/80 hover:border-white/40"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PHONE + FLOATING STATS) */}
        <div className="relative flex justify-center">

          {/* FLOATING METRICS */}
          <div className="absolute -left-6 top-12 hidden md:block text-sm text-white/70">
            <p>Session</p>
            <p className="text-white text-lg font-medium">15m 9s</p>
          </div>

          <div className="absolute -right-6 top-20 hidden md:block text-sm text-white/70">
            <p>Speed</p>
            <p className="text-green-400 text-lg font-medium">+42%</p>
          </div>

          <div className="absolute -left-4 bottom-16 hidden md:block text-sm text-white/70">
            <p>Recovered</p>
            <p className="text-white text-lg font-medium">$1,240</p>
          </div>

          {/* PHONE */}
          <div className="h-[540px] w-[270px] rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3">
            <div className="h-full w-full rounded-[2rem] bg-black border border-white/10 p-6 flex flex-col">
              
              <div className="text-xs text-white/50 mb-6">
                Bar-IQ • Completed
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center">
                <p className="text-sm text-white/80">
                  Inventory completed
                </p>
              </div>

              <div className="mt-8">
                <p className="text-2xl font-semibold">
                  Session summary
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Duration</span>
                  <span className="text-white">15m 9s</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span>Top brands</span>
                  <span className="text-white">Tracked</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span>Recovered</span>
                  <span className="text-white">$1,240</span>
                </div>

                <div className="flex justify-between text-white/70">
                  <span>Speed</span>
                  <span className="text-green-400">+42%</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
