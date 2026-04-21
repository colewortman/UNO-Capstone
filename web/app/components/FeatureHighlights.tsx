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
      <div className="mb-6 max-w-2xl md:mb-10 [@media(max-height:880px)]:mb-4 md:[@media(max-height:880px)]:mb-6">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-300 [@media(max-height:880px)]:mb-2">
          Feature Highlights
        </p>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl [@media(max-height:880px)]:text-3xl md:[@media(max-height:880px)]:text-4xl">
          Built for faster counts and better visibility.
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/60 [@media(max-height:880px)]:mt-3 [@media(max-height:880px)]:text-base [@media(max-height:880px)]:leading-6">
          Bar-IQ keeps inventory simple and fast for the people running the bar.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-5 ...">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-4 transition hover:border-white/20 hover:bg-white/5 sm:rounded-[1.75rem] sm:p-6 [@media(max-height:880px)]:p-3 sm:[@media(max-height:880px)]:p-4"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-sm text-blue-300 sm:mb-6 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-lg [@media(max-height:880px)]:mb-2 [@media(max-height:880px)]:h-8 [@media(max-height:880px)]:w-8 sm:[@media(max-height:880px)]:mb-3 sm:[@media(max-height:880px)]:h-10 sm:[@media(max-height:880px)]:w-10">
              {feature.icon}
            </div>

            <h3 className="text-base font-medium tracking-tight sm:text-xl [@media(max-height:880px)]:text-sm sm:[@media(max-height:880px)]:text-base">
              {feature.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-white/55 sm:mt-3 sm:text-sm sm:leading-7 md:text-base [@media(max-height:880px)]:mt-1 [@media(max-height:880px)]:leading-4 sm:[@media(max-height:880px)]:mt-2 sm:[@media(max-height:880px)]:text-xs sm:[@media(max-height:880px)]:leading-5 md:[@media(max-height:880px)]:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
