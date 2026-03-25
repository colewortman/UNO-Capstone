/**
 * @file HeroSection.tsx
 * @description Renders the main hero section for the Bar-IQ landing page.
 * This version follows the sponsor's preferred direction: minimal, premium,
 * black/blue focused, subtle gradients, very little text, and a clean CTA layout.
 */

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-16">
      {/* subtle black / blue background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[8%] h-[320px] w-[320px] rounded-full bg-blue-500/20 blur-[130px]" />
        <div className="absolute bottom-[-8%] left-[12%] h-[260px] w-[260px] rounded-full bg-blue-400/10 blur-[120px]" />
        <div className="absolute right-[8%] bottom-[4%] h-[360px] w-[360px] rounded-full bg-blue-600/15 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* top bar */}
        <div className="mb-20 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">Bar-IQ</div>

          <a
            href="#"
            className="rounded-full border border-blue-400/30 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-blue-400/60 hover:bg-white/5"
          >
            Get Started
          </a>
        </div>

        {/* hero content */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left side */}
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-blue-300">
              Battery-free RFID inventory intelligence
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
              Take bar inventory in minutes, not hours.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              Faster counts. Less shrinkage. Cleaner visibility for bar managers.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-7 py-4 text-base font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
              >
                Download App
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5"
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* right side */}
          <div className="relative flex min-h-[540px] items-center justify-center lg:justify-end">
            {/* phone space / visual placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[460px] w-[260px] rounded-[3rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm" />
            </div>

            {/* right top supporting copy */}
            <div className="absolute right-0 top-[8%] max-w-[240px] text-sm leading-7 text-white/55">
              Bottle-level visibility for faster counts, cleaner reporting, and less manual inventory work.
            </div>

            {/* right bottom trust stat */}
            <div className="absolute bottom-[8%] right-0">
              <p className="text-5xl font-semibold text-white">50K+</p>
              <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/55">
                Trusted to support high-volume inventory workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
