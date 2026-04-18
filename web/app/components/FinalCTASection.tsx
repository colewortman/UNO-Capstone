/**
 * @file FinalCTASection.tsx
 * @description Responsive final CTA section with a sleek, minimal layout,
 * subtle glass metric cards, and a centered phone composition.
 */

"use client";

export default function FinalCTASection() {
  return (
    <div className="text-white">
      <div className="grid items-center gap-10 [@media(max-height:880px)]:gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
            {/* LEFT SIDE */}
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl [@media(max-height:880px)]:text-3xl lg:[@media(max-height:880px)]:text-4xl">
                Inventory complete.
                <br />
                Revenue recovered.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/60 [@media(max-height:880px)]:mt-3 [@media(max-height:880px)]:text-base">
                Faster counts, fewer losses, more revenue.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 [@media(max-height:880px)]:mt-5 lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01] sm:px-7 sm:py-4 sm:text-base"
                >
                  Book a Demo
                </a>

                <a
                  href="#pricing"
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/[0.05] sm:px-7 sm:py-4 sm:text-base"
                >
                  See Pricing
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[620px]">
                {/* Desktop / Tablet */}
                <div className="relative hidden min-h-[460px] md:block md:[@media(max-height:880px)]:min-h-[360px]">
                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

                  {/* Left stat cards */}
                  <div className="absolute left-0 top-1/2 z-10 flex -translate-y-1/2 -translate-x-[18%] flex-col gap-4 sm:-translate-x-[22%] lg:-translate-x-[28%]">
                    <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                      <p className="text-sm text-white/50">Session</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        15m 9s
                      </p>
                    </div>

                    <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 opacity-85 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                      <p className="text-sm text-white/50">Recovered</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                        $1,240
                      </p>
                    </div>
                  </div>

                  {/* Right stat cards */}
                  <div className="absolute right-0 top-1/2 z-10 flex -translate-y-1/2 translate-x-[18%] flex-col gap-4 sm:translate-x-[22%] lg:translate-x-[28%]">
                    <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                      <p className="text-sm text-white/50">Speed</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-green-400">
                        +42%
                      </p>
                    </div>

                    <div className="w-[140px] rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4 opacity-85 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                      <p className="text-sm text-white/50">Variance</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-blue-300">
                        Low
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="absolute left-1/2 top-1/2 h-[420px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[2.3rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_80px_rgba(59,130,246,0.08)] md:[@media(max-height:880px)]:h-[340px] md:[@media(max-height:880px)]:w-[170px]">
                    <div className="flex h-full w-full flex-col rounded-[1.85rem] border border-white/10 bg-black p-5">
                      <div className="text-xs text-white/50">Bar-IQ • Completed</div>

                      <div className="mt-5">
                        <p className="text-xl font-semibold tracking-tight text-white">
                          Session
                          <br />
                          summary
                        </p>
                      </div>

                      <div className="mt-5 space-y-3 text-sm">
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
                  <div className="relative mx-auto flex w-full max-w-[320px] flex-col items-center">
                    <div className="absolute left-1/2 top-[38%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[85px]" />

                    <div className="relative h-[500px] w-[250px] rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_60px_rgba(59,130,246,0.08)] [@media(max-height:880px)]:h-[380px] [@media(max-height:880px)]:w-[200px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
