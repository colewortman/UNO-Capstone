/**
 * @file HeroSection.tsx
 * @description Responsive hero section for the Bar-IQ landing page.
 */

export default function HeroSection() {
  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,300px)] lg:gap-12">
      {/* left side — text + CTA */}
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-300">
          Camera-based mobile app
        </p>

        <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Take bar inventory in minutes, not hours.
        </h1>

        {/* mobile/tablet-only phone placeholder, sits between header and tagline.
            Height is viewport-relative so it yields when vertical space is tight. */}
        <div className="mt-6 flex justify-center lg:hidden">
          <div className="h-[min(34svh,20rem)] aspect-[5/8] rounded-[2rem] border border-white/10 bg-white/3 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:rounded-[2.5rem]" />
        </div>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-10 lg:justify-start">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01] sm:px-8 sm:py-4 sm:text-base"
          >
            Download App
          </a>

          <a
            href="#"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5 sm:px-8 sm:py-4 sm:text-base"
          >
            Watch Demo
          </a>
        </div>
      </div>

      {/* center — phone placeholder (desktop only) */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <div className="lg:h-96 lg:w-56 lg:rounded-[3rem] border border-white/10 bg-white/3 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm xl:h-[28rem] xl:w-64" />
      </div>

      {/* right side — supporting copy & actions (desktop only) */}
      <div className="hidden flex-col justify-center gap-5 lg:flex lg:max-w-[300px]">
        <div className="mx-auto max-w-[260px] text-center text-sm leading-7 text-white/55 xl:text-base">
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:text-lg">
            See Pricing
          </button>

          <a
            href="#testimonials"
            className="w-full whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:text-lg"
          >
            See Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
