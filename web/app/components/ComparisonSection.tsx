/**
 * @file ComparisonSection.tsx
 * @description Comparisons between Bar IQ and competitors.
 * Mirrors the FeatureHighlights layout with the heading and list flipped.
 */

"use client";

const competitors = [
  {
    title: "Bar IQ",
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
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-400/10 bg-black px-5 py-8 shadow-[0_0_80px_rgba(37,99,235,0.12)] sm:px-8 md:px-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_20%_75%,rgba(59,130,246,0.16),transparent_36%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* List — left column on lg+ (reversed from FeatureHighlights) */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm sm:p-6 lg:order-1">
          <div className="divide-y divide-white/10">
            {competitors.map((item, index) => (
              <div
                key={item.title}
                className="group grid gap-3 py-5 sm:grid-cols-[auto_1fr] sm:items-center"
              >
                <span
                  className={[
                    "text-sm font-medium transition",
                    index === 0
                      ? "text-blue-300"
                      : "text-white/25 group-hover:text-blue-300/70",
                  ].join(" ")}
                >
                  0{index + 1}
                </span>

                <div>
                  <h3
                    className={[
                      "text-xl font-semibold tracking-tight transition md:text-2xl",
                      index === 0
                        ? "text-white"
                        : "text-white/35 group-hover:text-white/70",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>

                  {index === 0 && (
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading — right column on lg+, right-aligned */}
        <div className="lg:order-2 lg:text-right">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300">
            Comparisons
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl lg:ml-auto">
            See how Bar IQ stacks up.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-white/60 lg:ml-auto">
            Compare modern AI-powered inventory with the legacy tools most bars
            still rely on today.
          </p>
        </div>
      </div>
    </section>
  );
}
