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
      <div className="mb-8 max-w-2xl md:mb-14">
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

      <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-4 transition hover:border-white/20 hover:bg-white/5 sm:rounded-[1.75rem] sm:p-6"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-sm text-blue-300 sm:mb-6 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-lg">
              {feature.icon}
            </div>

            <h3 className="text-base font-medium tracking-tight sm:text-xl">
              {feature.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/55 sm:mt-3 sm:text-sm sm:leading-7 md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
