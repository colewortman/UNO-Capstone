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
      <div className="mb-4 max-w-2xl md:mb-6 [@media(max-height:880px)]:mb-3 md:[@media(max-height:880px)]:mb-4">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-blue-300 [@media(max-height:880px)]:mb-1">
          Feature Highlights
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl [@media(max-height:880px)]:text-2xl md:[@media(max-height:880px)]:text-3xl">
          Built for faster counts and better visibility.
        </h2>
        <p className="mt-3 text-base leading-7 text-white/60 [@media(max-height:880px)]:mt-2 [@media(max-height:880px)]:text-sm [@media(max-height:880px)]:leading-6">
          Bar-IQ keeps inventory simple and fast for the people running the bar.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-3 transition hover:border-white/20 hover:bg-white/5 sm:rounded-[1.75rem] sm:p-4 md:p-5 [@media(max-height:880px)]:p-2 sm:[@media(max-height:880px)]:p-3"
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-xs sm:mb-3 sm:h-9 sm:w-9 sm:rounded-xl sm:text-sm md:h-10 md:w-10 [@media(max-height:880px)]:mb-1 [@media(max-height:880px)]:h-6 [@media(max-height:880px)]:w-6 sm:[@media(max-height:880px)]:h-8 sm:[@media(max-height:880px)]:w-8">
              <span className="bg-linear-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                {feature.icon}
              </span>
            </div>

            <h3 className="text-sm font-medium tracking-tight sm:text-base md:text-lg [@media(max-height:880px)]:text-xs sm:[@media(max-height:880px)]:text-sm">
              {feature.title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-white/55 sm:mt-2 sm:leading-6 md:text-sm [@media(max-height:880px)]:leading-4 sm:[@media(max-height:880px)]:text-xs sm:[@media(max-height:880px)]:leading-5">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
