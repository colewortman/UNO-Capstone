/**
 * @file HeroSection.tsx
 * @description Renders the main hero content for the Bar-IQ landing page.
 * Designed to sit inside a Section wrapper that provides the full-viewport
 * background and centering.
 */

export default function HeroSection() {
  return (
    <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_auto_auto] lg:gap-12">
      {/* left side — text + CTA */}
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-blue-300">
          Battery-free RFID inventory intelligence
        </p>

        <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
          Take bar inventory in minutes, not hours.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 lg:justify-start">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-5 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01] sm:px-7 sm:py-4 sm:text-base"
          >
            Download App
          </a>

          <a
            href="#"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5 sm:px-7 sm:py-4 sm:text-base"
          >
            Watch Demo
          </a>
        </div>
      </div>

      {/* center — phone placeholder */}
      <div className="flex items-center justify-center">
        <div className="h-80 w-48 rounded-[2rem] border border-white/10 bg-white/3 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:h-96 sm:w-56 sm:rounded-[2.5rem] lg:h-115 lg:w-65 lg:rounded-[3rem]" />
      </div>

      {/* right side — supporting copy & actions (desktop only) */}
      <div className="hidden flex-col justify-center gap-6 py-8 lg:flex lg:max-w-xs">
        <div className="max-w-52 text-sm leading-7 text-white/55">
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
            See Pricing
          </button>

          <a
            href="#testimonials"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-center text-lg font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
          >
            See Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
