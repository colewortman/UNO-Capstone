"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const features = [
  {
    title: "Fast bottle scanning",
    description: "Move through inventory sessions in minutes, not hours.",
  },
  {
    title: "Guided exception review",
    description: "Spot mismatches and resolve them before they become losses.",
  },
  {
    title: "Cleaner reporting",
    description: "Turn every session into clear, manager-friendly summaries.",
  },
  {
    title: "Revenue visibility",
    description: "Track where shrinkage and missed revenue are happening.",
  },
];

export default function FeatureHighlightsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="text-white">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300">
            Feature Highlights
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built for faster counts and better visibility.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
            Liqr Vision keeps inventory simple and fast for the people running
            the bar.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm sm:p-6">
          <div className="divide-y divide-white/10">
            {features.map((feature, index) => {
              const isSelected = index === selectedIndex;

              return (
                <motion.button
                  key={feature.title}
                  type="button"
                  layout
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedIndex(index)}
                  aria-pressed={isSelected}
                  className="group grid w-full cursor-pointer gap-3 py-5 text-left sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <motion.div layout="position">
                    <h3
                      className={[
                        "text-xl font-semibold tracking-tight transition md:text-2xl",
                        isSelected
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/70",
                      ].join(" ")}
                    >
                      {feature.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          key="description"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.25, ease: "easeOut" },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

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
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
