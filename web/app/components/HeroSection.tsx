"use client";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28 md:px-10 lg:px-16 lg:pb-20 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(33,91,255,0.22),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-[radial-gradient(circle_at_center,rgba(13,66,255,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* LEFT */}
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs">
              Camera-based mobile app
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.2rem]">
              Take bar
              <br />
              inventory in
              <br />
              minutes, not
              <br />
              hours.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Faster counts. Less shrinkage. Cleaner visibility for bar
              managers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="/download"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#3b82f6] px-8 text-base font-medium text-white transition hover:opacity-95"
              >
                Download App
              </a>

              <a
                href="/demo"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/15 bg-transparent px-8 text-base font-medium text-white transition hover:bg-white/[0.03]"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="h-[420px] w-[220px] rounded-[2.7rem] border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] shadow-[0_0_80px_rgba(14,53,178,0.18)] sm:h-[500px] sm:w-[260px] lg:h-[560px] lg:w-[300px]" />
            </div>

            {/* Right-side copy + buttons */}
            <div className="w-full max-w-md text-center lg:max-w-sm lg:text-left">
              <p className="mx-auto max-w-sm text-base leading-8 text-white/60 sm:text-lg lg:mx-0">
                Bottle-level visibility for faster counts, cleaner reporting,
                and less manual inventory work.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="/pricing"
                  className="inline-flex min-h-[60px] w-full items-center justify-center rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,0.96),rgba(7,14,28,0.96))] px-6 text-lg font-medium text-white shadow-[0_0_30px_rgba(23,72,255,0.08)] transition hover:border-white/15 hover:bg-white/[0.03]"
                >
                  See Pricing
                </a>

                <a
                  href="/testimonials"
                  className="inline-flex min-h-[60px] w-full items-center justify-center rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,0.96),rgba(7,14,28,0.96))] px-6 text-lg font-medium text-white shadow-[0_0_30px_rgba(23,72,255,0.08)] transition hover:border-white/15 hover:bg-white/[0.03]"
                >
                  See Testimonials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
