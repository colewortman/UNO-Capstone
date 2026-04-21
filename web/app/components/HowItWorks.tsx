/**
 * @file HowItWorksSection.tsx
 */

"use client";

import { ScanLine, Smartphone, Upload } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Scan barcode of one or multiple bottles at a time",
    icon: ScanLine,
    iconWrap: "bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-400/15",
    image: "/images/how-it-works-step-1.jpg",
    alt: "Scanning bottle barcode",
  },
  {
    step: "Step 2",
    title: "Point phone camera at liquid level or full bottle",
    icon: Smartphone,
    iconWrap: "bg-blue-500/20 text-blue-400 ring-1 ring-blue-400/15",
    image: "/images/how-it-works-step-2.jpg",
    alt: "Phone measuring bottle level",
  },
  {
    step: "Step 3",
    title: "Export inventory count to POS (integrations coming soon)",
    icon: Upload,
    iconWrap: "bg-green-500/20 text-green-400 ring-1 ring-green-400/15",
    image: "/images/how-it-works-step-3.jpg",
    alt: "Exporting inventory count",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-24 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:text-[1.35rem]">
            Liqr Vision’s patent-pending AI Vision technology does the work.
          </p>
        </div>

        {/* Desktop */}
        <div className="relative mt-16 hidden lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-14">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                <p className="text-[2rem] font-semibold tracking-tight text-white">
                  {item.step}
                </p>

                <div className="mt-8 flex w-full items-center justify-center">
                  <div
                    className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full ${item.iconWrap} backdrop-blur-sm`}
                  >
                    <Icon className="h-9 w-9 stroke-[2.2]" />
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-[58%] top-[7.2rem] h-px w-[40%] bg-white/25 xl:w-[44%]" />
                  )}
                </div>

                <p className="mt-8 max-w-[320px] text-[1.05rem] leading-snug text-white/70 xl:text-[1.1rem]">
                  {item.title}
                </p>

                <div className="mt-10 w-full overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-[230px] w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-14 grid gap-10 lg:hidden">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-5 sm:p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <p className="text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                    {item.step}
                  </p>

                  <div
                    className={`mt-6 flex h-18 w-18 items-center justify-center rounded-full ${item.iconWrap} h-16 w-16 sm:h-18 sm:w-18`}
                  >
                    <Icon className="h-8 w-8 stroke-[2.2]" />
                  </div>

                  <p className="mt-6 max-w-[28rem] text-base leading-snug text-white/70 sm:text-lg">
                    {item.title}
                  </p>

                  <div className="mt-8 w-full overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.03]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-[220px] w-full object-cover sm:h-[260px]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
