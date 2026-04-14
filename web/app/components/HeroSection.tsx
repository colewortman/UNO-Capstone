"use client";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 pb-12 pt-24 text-white sm:px-6 sm:pb-16 sm:pt-28 md:px-10 lg:px-16 lg:pb-20 lg:pt-28">
      {/* subtle glow only */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(33,91,255,0.14),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[radial-gradient(circle_at_center,rgba(13,66,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-14">
          {/* LEFT */}
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs">
              CAMERA-BASED MOBILE APP
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[5.8rem]">
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

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <a
                href="/download"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01] sm:px-7 sm:py-4 sm:text-base"
              >
                Download App
              </a>

              <a
                href="/demo"
                className="inline-flex items-center rounded-full border border-white/15 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.03] sm:px-7 sm:py-4 sm:text-base"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
            {/* Phone */}
            <div className="flex justify-center">
              <div className="h-[420px] w-[220px] rounded-[2.7rem] border border-white/10 bg-transparent shadow-[0_0_80px_rgba(14,53,178,0.08)] sm:h-[500px] sm:w-[260px] lg:h-[560px] lg:w-[300px]" />
            </div>

            {/* Right copy + CTA */}
            <div className="flex w-full max-w-[320px] flex-col items-center text-center lg:max-w-[260px] lg:items-start lg:text-left">
              <p className="text-base leading-8 text-white/60 sm:text-lg">
                Bottle-level visibility for faster counts, cleaner reporting,
                and less manual inventory work.
              </p>

              <div className="mt-6 flex w-full flex-col gap-4">
                <a
                  href="/pricing"
                  className="inline-flex h-[60px] w-full items-center justify-center rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,0.72),rgba(7,14,28,0.72))] px-6 text-lg font-medium text-white shadow-[0_0_30px_rgba(23,72,255,0.08)] transition hover:border-white/15 hover:bg-white/[0.03]"
                >
                  See Pricing
                </a>

                <a
                  href="/testimonials"
                  className="inline-flex h-[60px] w-full items-center justify-center rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,35,0.72),rgba(7,14,28,0.72))] px-6 text-lg font-medium text-white shadow-[0_0_30px_rgba(23,72,255,0.08)] transition hover:border-white/15 hover:bg-white/[0.03] whitespace-nowrap"
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
