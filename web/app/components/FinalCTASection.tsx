/**
 * @file FinalCTASection.tsx
 */

"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  fadeUpContainer,
  fadeUpItem,
  fadeUpItemSlow,
} from "@/lib/animations";
import { LiquidMetalButton } from "./ui/liquid-metal-button";

export default function FinalCTASection() {
  const router = useRouter();

  return (
    <div className="text-white">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* LEFT SIDE */}
        <motion.div
          className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left"
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUpItem}
            style={{ willChange: "transform, opacity, filter" }}
            className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Inventory complete.
            <br />
            Revenue recovered.
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            style={{ willChange: "transform, opacity, filter" }}
            className="mt-6 text-lg leading-relaxed text-white/50 sm:text-xl"
          >
            Faster counts, fewer losses, more revenue.
          </motion.p>

          <motion.div
            variants={fadeUpItemSlow}
            style={{ willChange: "transform, opacity, filter" }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#"
              className="inline-flex h-[46px] items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-8 text-sm font-medium text-white shadow-[0_0_42px_rgba(59,130,246,0.32)] transition hover:scale-[1.02]"
            >
              Book a Demo
            </a>

            <LiquidMetalButton
              label="See Pricing"
              onClick={() => router.push("/pricing")}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — fixed aspect ratio so the phone + side cards
            layout is preserved across all viewports. */}
        <div className="relative flex justify-center">
          <div className="relative aspect-[760/560] w-full max-w-[760px]">
            {/* SUBTLE GLOW */}
            <div className="absolute left-1/2 top-[42%] -z-10 h-[75%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
            <div className="absolute left-1/2 top-[42%] -z-10 h-[57%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[120px]" />
            <div className="absolute left-1/2 top-[48%] -z-10 h-[46%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/25 blur-[120px]" />

            {/* TOP-LEFT CARD — Consumption */}
            <div className="absolute left-[5%] top-[28%] z-20 flex aspect-[148/138] w-[20%] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-2 shadow-[0_0_32px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:px-3 md:rounded-[28px] md:px-4">
              <div className="flex aspect-square w-[40%] items-center justify-center rounded-full bg-white/[0.07] text-base sm:text-xl md:text-3xl">
                🍾
              </div>
              <p className="mt-2 text-center text-[7px] font-semibold leading-tight text-white sm:mt-3 sm:text-[9px] md:mt-4 md:text-xs">
                Consumption
              </p>
              <p className="text-center text-[7px] font-semibold text-white/40 sm:text-[9px] md:text-xs">
                8.2 Bottles
              </p>
            </div>

            {/* BOTTOM-LEFT CARD — Streak */}
            <div className="absolute left-[5%] top-[55%] z-20 flex aspect-[148/138] w-[20%] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-2 shadow-[0_0_32px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:px-3 md:rounded-[28px] md:px-4">
              <div className="flex aspect-square w-[40%] items-center justify-center rounded-full bg-white/[0.07] text-base sm:text-xl md:text-3xl">
                🔥
              </div>
              <p className="mt-2 text-center text-[7px] font-semibold leading-tight text-white sm:mt-3 sm:text-[9px] md:mt-4 md:text-xs">
                New Streak!
              </p>
              <p className="text-center text-[7px] font-semibold text-white/40 sm:text-[9px] md:text-xs">
                12 days in a row
              </p>
            </div>

            {/* TOP-RIGHT CARD — Recovered */}
            <div className="absolute right-[5%] top-[28%] z-20 flex aspect-[148/138] w-[20%] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-2 shadow-[0_0_32px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:px-3 md:rounded-[28px] md:px-4">
              <div className="flex aspect-square w-[40%] items-center justify-center rounded-full bg-white/[0.07] text-base sm:text-xl md:text-3xl">
                🏅
              </div>
              <p className="mt-2 text-center text-[10px] font-semibold leading-none text-white sm:mt-3 sm:text-sm md:mt-4 md:text-xl">
                $1,285
              </p>
              <p className="text-center text-[7px] font-semibold text-white/40 sm:text-[9px] md:text-xs">
                Recovered
              </p>
            </div>

            {/* BOTTOM-RIGHT CARD — Low Stock */}
            <div className="absolute right-[5%] top-[55%] z-20 flex aspect-[148/138] w-[20%] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black px-2 shadow-[0_0_32px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:px-3 md:rounded-[28px] md:px-4">
              <div className="flex aspect-square w-[40%] items-center justify-center rounded-full bg-white/[0.07] text-base sm:text-xl md:text-3xl">
                ⚠️
              </div>
              <p className="mt-2 text-center text-[8px] font-semibold leading-tight text-white sm:mt-3 sm:text-[10px] md:mt-4 md:text-sm">
                Low Stock
              </p>
              <div className="mt-1 w-fit rounded-full bg-orange-500/12 px-1.5 py-0.5 text-[6px] font-semibold text-orange-500/80 sm:px-2 sm:py-0.5 sm:text-[8px] md:mt-2 md:px-3 md:py-1 md:text-[10px]">
                Alert
              </div>
            </div>

            {/* PHONE — always centered absolutely */}
            <div className="absolute left-1/2 top-1/2 z-10 aspect-[245/500] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border-[3px] border-black bg-black shadow-[0_0_80px_rgba(0,0,0,0.7)] sm:rounded-3xl sm:border-[5px] md:rounded-[2.9rem] md:border-[7px]">
              <div className="relative h-full w-full rounded-[0.9rem] border border-white/10 bg-black px-2 py-2 sm:rounded-2xl sm:px-3 sm:py-4 md:rounded-[2.35rem] md:px-5 md:py-6">
                <div className="mx-auto flex aspect-square w-[22%] items-center justify-center rounded-full bg-green-500/15 shadow-[0_0_22px_rgba(34,197,94,0.25)]">
                  <div className="flex aspect-square w-[64%] items-center justify-center rounded-full bg-green-500 text-[7px] font-black text-black sm:text-xs md:text-sm">
                    ✓
                  </div>
                </div>

                <div className="mt-2 text-center sm:mt-4 md:mt-7">
                  <p className="text-[10px] font-semibold leading-none text-white sm:text-sm md:text-xl">
                    Inventory
                  </p>
                  <p className="mt-1 text-[8px] font-semibold leading-none text-white/40 sm:text-xs md:mt-1.5 md:text-base">
                    Insights
                  </p>
                </div>

                <div className="mt-3 space-y-1.5 sm:mt-6 sm:space-y-2 md:mt-10 md:space-y-3">
                  <div className="rounded-md border border-white/10 bg-white/[0.045] px-1.5 py-1 shadow-[inset_2px_0_0_rgba(34,197,94,0.8)] sm:rounded-xl sm:px-2.5 sm:py-2 sm:shadow-[inset_3px_0_0_rgba(34,197,94,0.8)] md:rounded-2xl md:px-4 md:py-3">
                    <p className="text-[5px] font-semibold text-white/30 sm:text-[7px] md:text-[9px]">
                      Speed Baseline
                    </p>
                    <p className="mt-0.5 text-[8px] font-semibold leading-none text-white sm:text-sm md:mt-1 md:text-lg">
                      +149%
                    </p>
                  </div>

                  <div className="rounded-md border border-white/10 bg-white/[0.045] px-1.5 py-1 shadow-[inset_2px_0_0_rgba(96,165,250,0.8)] sm:rounded-xl sm:px-2.5 sm:py-2 sm:shadow-[inset_3px_0_0_rgba(96,165,250,0.8)] md:rounded-2xl md:px-4 md:py-3">
                    <p className="text-[5px] font-semibold text-white/30 sm:text-[7px] md:text-[9px]">
                      Total Value
                    </p>
                    <p className="mt-0.5 text-[8px] font-semibold leading-none text-white sm:text-sm md:mt-1 md:text-lg">
                      $22,694
                    </p>
                  </div>

                  <div className="rounded-md border border-white/10 bg-white/[0.045] px-1.5 py-1 shadow-[inset_2px_0_0_rgba(129,140,248,0.8)] sm:rounded-xl sm:px-2.5 sm:py-2 sm:shadow-[inset_3px_0_0_rgba(129,140,248,0.8)] md:rounded-2xl md:px-4 md:py-3">
                    <p className="text-[5px] font-semibold text-white/30 sm:text-[7px] md:text-[9px]">
                      Variance Score
                    </p>
                    <p className="mt-0.5 text-[8px] font-semibold leading-none text-white sm:text-sm md:mt-1 md:text-lg">
                      Low{" "}
                      <span className="text-[6px] font-semibold text-blue-400/80 sm:text-[10px] md:text-xs">
                        0.42%
                      </span>
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-white/45 sm:bottom-3 sm:w-12 md:bottom-5 md:h-1 md:w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
