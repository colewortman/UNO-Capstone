/**
 * @file HowItWorksSection.tsx
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ScanLine, Smartphone, Upload } from "lucide-react";

type Step = {
  step: string;
  title: string;
  description: string;
  icon: typeof ScanLine;
  iconWrap: string;
};

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Scan bottles",
    description:
      "Scan the barcode of one or multiple bottles at a time.",
    icon: ScanLine,
    iconWrap: "bg-white/10 text-white/80 ring-1 ring-white/20",
  },
  {
    step: "Step 2",
    title: "Measure levels",
    description:
      "Point your phone camera at the liquid level or full bottle.",
    icon: Smartphone,
    iconWrap: "bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/30",
  },
  {
    step: "Step 3",
    title: "Export to POS",
    description:
      "Export your inventory count directly to your POS system.",
    icon: Upload,
    iconWrap: "bg-green-500/20 text-green-400 ring-1 ring-green-400/20",
  },
];

function StepCard({ item }: { item: Step }) {
  const Icon = item.icon;

  return (
    <div className="group relative rounded-[28px] border border-white/10 bg-[#121318] p-8 text-center transition hover:border-white/20 lg:h-[280px] lg:overflow-hidden">
      {/* Top content — vertically nudged down on lg+, slides up on hover */}
      <div className="lg:translate-y-7 lg:transition-transform lg:duration-500 lg:ease-out lg:group-hover:translate-y-0">
        {/* Icon */}
        <div
          className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconWrap}`}
        >
          <Icon className="h-8 w-8 stroke-[2.2]" />
        </div>

        {/* Step */}
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
          {item.step}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-xl font-semibold text-white">
          {item.title}
        </h3>
      </div>

      {/* Description — inline on mobile, no animation */}
      <p className="mt-3 text-sm leading-relaxed text-white/60 lg:hidden">
        {item.description}
      </p>

      {/* Description — lg+ pinned to bottom, slides up from below on hover */}
      <p className="hidden text-sm leading-relaxed text-white/60 lg:absolute lg:inset-x-8 lg:bottom-8 lg:block lg:translate-y-10 lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        {item.description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const goToStep = (idx: number) =>
    setActiveStep(((idx % steps.length) + steps.length) % steps.length);
  const nextStep = () => goToStep(activeStep + 1);
  const prevStep = () => goToStep(activeStep - 1);

  return (
    <section className="text-white">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-blue-300">
          How It Works
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Get Started in 3 Easy Steps
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          Liqr Vision’s patent-pending AI Vision technology makes inventory
          control simple, fast, and accurate.
        </p>
      </div>

      {/* Mobile / tablet carousel — single card with arrows + dots */}
      <div className="mt-14 lg:hidden">
        <div className="mx-auto max-w-md">
          <StepCard item={steps[activeStep]} />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevStep}
            aria-label="Previous step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to step ${idx + 1}`}
                onClick={() => goToStep(idx)}
                className={`h-2 w-2 rounded-full transition cursor-pointer ${
                  activeStep === idx ? "scale-125 bg-white" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextStep}
            aria-label="Next step"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Desktop grid (lg+) */}
      <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
        {steps.map((item) => (
          <StepCard key={item.step} item={item} />
        ))}
      </div>

      {/* Centered CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/integration"
          className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20 hover:text-blue-200"
        >
          Learn More →
        </Link>
      </div>
    </section>
  );
}
