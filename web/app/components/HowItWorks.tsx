/**
 * @file HowItWorksSection.tsx
 */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ScanLine, Smartphone, Upload } from "lucide-react";
import barScanImage from "@/public/barscanblog.jpg";
import bottleScanImage from "@/public/bottle_scan.png";
import phoneNotificationImage from "@/public/phone_notification.png";

const STEP_DURATION_MS = 5000;
const RING_RADIUS = 48;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const steps = [
  {
    step: "Step 1",
    title: "Scan barcode of one or multiple bottles at a time",
    icon: ScanLine,
    iconWrap: "bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-400/15",
    image: barScanImage,
    alt: "Scanning bottle barcode",
  },
  {
    step: "Step 2",
    title: "Point phone camera at liquid level or full bottle",
    icon: Smartphone,
    iconWrap: "bg-blue-500/20 text-blue-400 ring-1 ring-blue-400/15",
    image: bottleScanImage,
    alt: "Phone measuring bottle level",
  },
  {
    step: "Step 3",
    title: "Export inventory count to POS (integrations coming soon)",
    icon: Upload,
    iconWrap: "bg-green-500/20 text-green-400 ring-1 ring-green-400/15",
    image: phoneNotificationImage,
    alt: "Exporting inventory count",
  },
];

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, STEP_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  const activeStep = steps[activeIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="text-white">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-blue-300 [@media(max-height:880px)]:mb-1">
          How It Works
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl [@media(max-height:880px)]:text-xl sm:[@media(max-height:880px)]:text-3xl">
          Inventory in three simple steps.
        </h2>

        <p className="mx-auto mt-3 hidden max-w-2xl text-base leading-relaxed text-white/60 sm:mt-4 sm:block sm:text-lg [@media(max-height:880px)]:hidden">
          Liqr Vision’s patent-pending AI Vision technology does the work.
        </p>
      </div>

      {/* Desktop */}
      <div className="relative mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-10 xl:gap-14">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isActive = idx === activeIndex;
          const isComplete = idx < activeIndex;

          return (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center"
            >
              <p className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                {item.step}
              </p>

              <div className="mt-6 flex w-full items-center justify-center">
                <div className="relative">
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${item.iconWrap} backdrop-blur-sm lg:h-20 lg:w-20`}
                  >
                    <Icon className="h-8 w-8 stroke-[2.2] lg:h-9 lg:w-9" />
                  </div>

                  <svg
                    key={activeIndex}
                    className="absolute -inset-1.5 -rotate-90"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r={RING_RADIUS}
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={RING_CIRCUMFERENCE}
                      strokeDashoffset={
                        isComplete ? 0 : RING_CIRCUMFERENCE
                      }
                      style={
                        isActive
                          ? {
                              ["--ring-circumference" as string]:
                                RING_CIRCUMFERENCE,
                              animation: `draw-ring ${STEP_DURATION_MS}ms linear forwards`,
                            }
                          : undefined
                      }
                    />
                  </svg>
                </div>
              </div>

              <p className="mt-6 max-w-[320px] text-base leading-snug text-white/70 xl:text-lg">
                {item.title}
              </p>

              <div className="mt-8 w-full overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="h-[230px] w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile / Tablet — single card, auto-cycles every 5s */}
      <div className="mt-8 sm:mt-12 lg:hidden [@media(max-height:880px)]:mt-5">
        <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-4 sm:p-6 [@media(max-height:880px)]:p-3">
          <div className="flex flex-col items-center text-center">
            <p className="text-xl font-semibold tracking-tight text-white sm:text-3xl [@media(max-height:880px)]:text-lg">
              {activeStep.step}
            </p>

            <div className="relative mt-4 h-16 w-16 sm:mt-6 sm:h-24 sm:w-24 [@media(max-height:880px)]:mt-3 [@media(max-height:880px)]:h-14 [@media(max-height:880px)]:w-14">
              <div
                className={`absolute inset-1.5 flex items-center justify-center rounded-full ${activeStep.iconWrap}`}
              >
                <ActiveIcon className="h-6 w-6 stroke-[2.2] sm:h-9 sm:w-9 [@media(max-height:880px)]:h-5 [@media(max-height:880px)]:w-5" />
              </div>

              <svg
                key={activeIndex}
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_CIRCUMFERENCE}
                  style={{
                    ["--ring-circumference" as string]: RING_CIRCUMFERENCE,
                    animation: `draw-ring ${STEP_DURATION_MS}ms linear forwards`,
                  }}
                />
              </svg>
            </div>

            <p className="mt-4 max-w-[28rem] text-sm leading-snug text-white/70 sm:mt-6 sm:text-lg [@media(max-height:880px)]:mt-3 [@media(max-height:880px)]:text-xs [@media(max-height:880px)]:leading-5">
              {activeStep.title}
            </p>

            <div className="mx-auto mt-5 w-full max-w-[380px] overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.03] sm:mt-8 sm:max-w-[440px] [@media(max-height:880px)]:mt-3 [@media(max-height:880px)]:max-w-[220px]">
              <Image
                src={activeStep.image}
                alt={activeStep.alt}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
