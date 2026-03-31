/**
 * @file FinalCTASection.tsx
 * @description Responsive final CTA section with a sleek, minimal layout,
 * subtle glass metric cards, and a centered phone composition.
 */

export default function FinalCTASection() {
  return (
    <div className="relative">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* LEFT SIDE */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Inventory complete.
            <br />
            Revenue recovered.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Finish counts faster, spot issues instantly, and capture more
            revenue between sessions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-7 py-4 text-base font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
            >
              Book a Demo
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 text-base font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.05]"
            >
              See Pricing
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[620px]">
            {/* Desktop / tablet composition */}
            <div className="relative hidden min-h-[620px] md:block">
              {/* Soft glow */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

              {/* Left stat cards */}
              <div className="absolute left-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4 lg:left-2">
                <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm text-white/50">Session</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    15m 9s
                  </p>
                </div>

                <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm text-white/50">Recovered</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    $1,240
                  </p>
                </div>
              </div>

              {/* Right stat cards */}
              <div className="absolute right-6 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-4 lg:right-2">
                <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-right backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm text-white/50">Speed</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-green-400">
                    +42%
                  </p>
                </div>

                <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-right backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <p className="text-sm text-white/50">Variance</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-blue-300">
                    Low
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="absolute left-1/2 top-1/2 h-[540px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[2.7rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_80px_rgba(59,130,246,0.08)]">
                <div className="flex h-full w-full flex-col rounded-[2.15rem] border border-white/10 bg-black p-6">
                  <div className="text-xs text-white/50">Bar-IQ • Completed</div>

                  <div className="mt-7">
                    <p className="text-2xl font-semibold tracking-tight text-white">
                      Session
                      <br />
                      summary
                    </p>
                  </div>

                  <div className="mt-7 space-y-4 text-sm">
                    <div className="flex items-center justify-between text-white/65">
                      <span>Duration</span>
                      <span className="text-white">15m 9s</span>
                    </div>

                    <div className="flex items-center justify-between text-white/65">
                      <span>Top brands</span>
                      <span className="text-white">Tracked</span>
                    </div>

                    <div className="flex items-center justify-between text-white/65">
                      <span>Recovered</span>
                      <span className="text-white">$1,240</span>
                    </div>

                    <div className="flex items-center justify-between text-white/65">
                      <span>Speed</span>
                      <span className="text-green-400">+42%</span>
                    </div>

                    <div className="flex items-center justify-between text-white/65">
                      <span>Variance</span>
                      <span className="text-blue-300">Low</span>
                    </div>
                  </div>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm">
                    <p className="text-sm text-white/80">Inventory completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden">
              <div className="relative mx-auto h-[520px] w-[260px]">
                <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[90px]" />

                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(59,130,246,0.08)]">
                  <div className="flex h-full w-full flex-col rounded-[2rem] border border-white/10 bg-black p-5">
                    <div className="text-xs text-white/50">Bar-IQ • Completed</div>

                    <div className="mt-6">
                      <p className="text-2xl font-semibold tracking-tight text-white">
                        Session
                        <br />
                        summary
                      </p>
                    </div>

                    <div className="mt-6 space-y-4 text-sm">
                      <div className="flex items-center justify-between text-white/65">
                        <span>Duration</span>
                        <span className="text-white">15m 9s</span>
                      </div>

                      <div className="flex items-center justify-between text-white/65">
                        <span>Top brands</span>
                        <span className="text-white">Tracked</span>
                      </div>

                      <div className="flex items-center justify-between text-white/65">
                        <span>Recovered</span>
                        <span className="text-white">$1,240</span>
                      </div>

                      <div className="flex items-center justify-between text-white/65">
                        <span>Speed</span>
                        <span className="text-green-400">+42%</span>
                      </div>

                      <div className="flex items-center justify-between text-white/65">
                        <span>Variance</span>
                        <span className="text-blue-300">Low</span>
                      </div>
                    </div>

                    <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center backdrop-blur-sm">
                      <p className="text-sm text-white/80">Inventory completed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile stats below phone */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-sm text-white/50">Session</p>
                  <p className="mt-1 text-lg font-semibold text-white">15m 9s</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-sm text-white/50">Speed</p>
                  <p className="mt-1 text-lg font-semibold text-green-400">
                    +42%
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-sm text-white/50">Recovered</p>
                  <p className="mt-1 text-lg font-semibold text-white">$1,240</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="text-sm text-white/50">Variance</p>
                  <p className="mt-1 text-lg font-semibold text-blue-300">Low</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
