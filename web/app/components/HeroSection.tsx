/**
 * @file HeroSection.tsx
 * @description Responsive hero section for the Bar-IQ landing page.
 */

import Image from "next/image";
import heroImage from "@/public/hero_1.4.webp";

export default function HeroSection() {
  return (
    <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,300px)] lg:gap-12">
      {/* left side — text + CTA */}
      <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300 lg:mb-4">
          Camera-based mobile app
        </p>

        <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Bar inventory in minutes, not hours.
        </h1>

        {/* mobile/tablet phone */}
        <div className="mt-4 flex justify-center lg:hidden">
          <Image
            src={heroImage}
            alt="Bar-IQ inventory scanning interface"
            className="h-auto w-auto max-h-[min(64svh,38rem,calc(100svh_-_22rem))] [@media(min-width:380px)]:max-h-[min(66svh,40rem,calc(100svh_-_22rem))] [@media(min-width:470px)]:max-h-[min(70svh,42rem,calc(100svh_-_22rem))] [@media(max-height:700px)]:max-h-[min(60svh,32rem,calc(100svh_-_24rem))] sm:max-h-[min(72svh,48rem,calc(100svh_-_28rem))] md:max-h-[min(76svh,54rem,calc(100svh_-_28rem))]"
            priority
          />
        </div>

        <p className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 [@media(max-height:700px)]:text-sm [@media(max-height:700px)]:leading-6">
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-10 lg:justify-start [@media(max-height:700px)]:mt-5">
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

      {/* desktop phone */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src={heroImage}
          alt="Bar-IQ inventory scanning interface"
          className="h-auto w-auto lg:max-h-[28rem] xl:max-h-[32rem]"
          priority
        />
      </div>

      {/* right side */}
      <div className="hidden flex-col justify-center gap-5 lg:flex lg:max-w-[300px]">
        <div className="max-w-[260px] text-left text-sm leading-7 text-white/55 xl:text-base">
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </div>

        <a
          href="#testimonials"
          className="w-full whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10 sm:text-lg"
        >
          See Testimonials
        </a>

        <div className="flex flex-col items-start gap-3 pt-1">
          <div className="flex items-center justify-start gap-4">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="8" r="4" />
                  </svg>
                </div>
              ))}
            </div>

            <div className="text-4xl font-semibold text-white">50K+</div>
          </div>

          <p className="max-w-[240px] text-left text-sm text-white/55 xl:text-base">
            Trusted by bars and hospitality teams across multiple locations.
          </p>
        </div>
      </div>
    </div>
  );
}
