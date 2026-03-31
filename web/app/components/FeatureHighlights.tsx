"use client";

const features = [
  {
    title: "Fast bottle scanning",
    description: "Move through inventory sessions in minutes, not hours.",
    icon: "◌",
    featured: true,
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
      {/* header */}
      <div className="mb-14 max-w-2xl">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Built for faster counts and better visibility.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/60">
          Bar-IQ keeps inventory simple, fast, and useful for the people
          actually running the bar.
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const isFeatured = feature.featured;

          return (
            <div
              key={feature.title}
              className={`
                group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6
                transition-all duration-300
                hover:border-white/20
                ${isFeatured ? "sm:col-span-2 xl:col-span-2" : ""}
              `}
            >
              {/* subtle blue glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-[1.75rem] bg-blue-500/5 blur-[20px]" />
              </div>

              {/* icon */}
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg text-blue-300">
                {feature.icon}
              </div>

              {/* title */}
              <h3 className="relative text-xl font-medium tracking-tight">
                {feature.title}
              </h3>

              {/* description */}
              <p className="relative mt-3 text-sm leading-7 text-white/55 md:text-base">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
