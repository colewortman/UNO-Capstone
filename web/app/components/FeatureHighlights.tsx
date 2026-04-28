"use client";

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
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-blue-400/10 bg-black px-5 py-8 shadow-[0_0_80px_rgba(37,99,235,0.12)] sm:px-8 md:px-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.16),transparent_36%)]" />

      <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300">
            Feature Highlights
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Built for faster counts and better visibility.
          </h2>

          <p className="mt-4 max-w-lg text-base leading-7 text-white/60">
            Bar-IQ keeps inventory simple and fast for the people running the
            bar.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm sm:p-6">
          <div className="divide-y divide-white/10">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <h3
                    className={[
                      "text-xl font-semibold tracking-tight transition md:text-2xl",
                      index === 0
                        ? "text-white"
                        : "text-white/35 group-hover:text-white/70",
                    ].join(" ")}
                  >
                    {feature.title}
                  </h3>

                  {index === 0 && (
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
                      {feature.description}
                    </p>
                  )}
                </div>

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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
