/**
 * @file HeroSection.tsx
 * @description Responsive hero section for the Bar-IQ landing page.
 */

export default function HeroSection() {
  return (
    <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,260px)] lg:gap-10 xl:gap-12">
      {/* left side — text + CTA */}
      <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-lg lg:text-left">
        <p className="mb-5 text-xs uppercase tracking-[0.32em] text-blue-300 sm:text-sm">
          Battery-free RFID inventory intelligence
        </p>

        <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
          Take bar inventory in minutes, not hours.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:max-w-lg">
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-7 py-4 text-base font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
          >
            Download App
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white/90 transition hover:border-white/40 hover:bg-white/5"
          >
            Watch Demo
          </a>
        </div>
      </div>

      {/* center — phone placeholder */}
      <div className="order-2 flex items-center justify-center lg:order-none">
        <div className="h-[420px] w-[220px] rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(59,130,246,0.08)] backdrop-blur-sm sm:h-[500px] sm:w-[250px] md:h-[560px] md:w-[280px] xl:h-[620px] xl:w-[320px]" />
      </div>

      {/* right side — supporting copy & actions */}
      <div className="mx-auto flex w-full max-w-sm flex-col justify-center gap-5 py-2 text-center sm:gap-6 lg:mx-0 lg:max-w-xs lg:py-8 lg:text-left">
        <div className="mx-auto max-w-sm text-sm leading-7 text-white/55 lg:mx-0 lg:max-w-[13rem]">
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:px-8 sm:text-lg">
            See Pricing
          </button>

          <a
            href="#testimonials"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:px-8 sm:text-lg"
          >
            See Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
