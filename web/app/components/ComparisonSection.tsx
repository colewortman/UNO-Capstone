/**
 * @file ComparisonSection.tsx
 * @description Comparisons between Liqr Vision and competitors.
 * Mirrors the FeatureHighlights layout with the heading and list flipped.
 */

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const competitors = [
  {
    title: "Liqr Vision",
    description:
      "A smarter, faster way to run inventory — built for high-volume bars that need accuracy without the time drain.",
  },
  {
    title: "Legacy systems",
    description:
      "Manual workflows and outdated tools slow operations down and introduce costly human error.",
  },
  {
    title: "Spreadsheets",
    description:
      "Fragmented data, inconsistent reporting, and time-consuming reconciliation after every count.",
  },
  {
    title: "Manual counting",
    description:
      "Hours of labor for a snapshot that's already stale — no real-time visibility into stock.",
  },
];

export default function Comparisons() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="text-white">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Heading — appears above the list on small screens (centered),
            and on the right on lg+ (right-aligned). */}
        <div className="text-center lg:order-2 lg:text-right">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300">
            Comparisons
          </p>

          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl lg:ml-auto lg:mr-0">
            See how Liqr Vision stacks up.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-white/60 lg:ml-auto lg:mr-0">
            Compare modern AI-powered inventory with the legacy tools most bars
            still rely on today.
          </p>
        </div>

        {/* List — left column on lg+ (reversed from FeatureHighlights) */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm sm:p-6 lg:order-1">
          <div className="divide-y divide-white/10">
            {competitors.map((item, index) => {
              const isSelected = index === selectedIndex;

              return (
                <motion.button
                  key={item.title}
                  type="button"
                  layout
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className="group grid w-full cursor-pointer gap-3 py-5 text-left sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <span
                    className={[
                      "text-sm font-medium transition",
                      isSelected
                        ? "text-blue-300"
                        : "text-white/25 group-hover:text-blue-300/70",
                    ].join(" ")}
                  >
                    0{index + 1}
                  </span>

                  <motion.div layout="position">
                    <h3
                      className={[
                        "text-xl font-semibold tracking-tight transition md:text-2xl",
                        isSelected
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/70",
                      ].join(" ")}
                    >
                      {item.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          key="description"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: { duration: 0.25, ease: "easeOut" },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
