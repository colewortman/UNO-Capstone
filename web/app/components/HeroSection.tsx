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
      <div className="max-w-lg">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-blue-300">
          Battery-free RFID inventory intelligence
        </p>

        <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-6xl xl:text-7xl">
          Take bar inventory in minutes, not hours.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-7 py-4 text-base font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
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

      {/* center — phone placeholder */}
      <div className="flex items-center justify-center">
        <div className="h-115 w-65 rounded-[3rem] border border-white/10 bg-white/3 shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm" />
      </div>

      {/* right side — supporting copy & stat */}
      <div className="flex flex-col justify-between self-stretch py-8">
        <div className="max-w-52 text-sm leading-7 text-white/55">
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </div>

        <div className="mt-auto">
          <p className="text-5xl font-semibold text-white">50K+</p>
          <p className="mt-2 max-w-55 text-sm leading-6 text-white/55">
            Trusted to support high-volume inventory workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
