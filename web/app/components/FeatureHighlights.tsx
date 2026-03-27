"use client";

const features = [
  {
    title: "Fast bottle scanning",
    description: "Move through inventory sessions in minutes, not hours.",
    icon: "◌",
  },
  {
    title: "Guided exception review",
    description: "Spot mismatches and resolve them before they become losses.",
    icon: "△",
  },
  {
    title: "Cleaner reporting",
    description: "Turn every session into clear, manager-friendly summaries.",
    icon: "□",
  },
  {
    title: "Revenue visibility",
    description: "Track where shrinkage and missed revenue are happening.",
    icon: "✦",
  },
  {
    title: "Multi-location ready",
    description: "Support teams working across different bars or venues.",
    icon: "◇",
  },
  {
    title: "Faster decisions",
    description: "Give managers the signals they need right after each count.",
    icon: "→",
  },
];

export default function FeatureHighlightsSection() {
  return (
    <div>
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-300">
          Feature Highlights
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Built for faster counts and better visibility.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/60">
          Bar-IQ keeps inventory simple, fast, and useful for the people
          actually running the bar.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6 transition hover:border-white/20 hover:bg-white/5"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-lg text-blue-300">
              {feature.icon}
            </div>

            <h3 className="text-xl font-medium tracking-tight">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/55 md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
