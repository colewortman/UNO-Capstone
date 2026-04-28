/**
 * @file HowItWorksSection.tsx
 */

"use client";

import Link from "next/link";
import { ScanLine, Smartphone, Upload } from "lucide-react";

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
    iconWrap: "bg-yellow-500/20 text-yellow-400 ring-1 ring-yellow-400/20",
  },
  {
    step: "Step 2",
    title: "Measure levels",
    description:
      "Point your phone camera at the liquid level or full bottle.",
    icon: Smartphone,
    iconWrap: "bg-blue-500/20 text-blue-400 ring-1 ring-blue-400/20",
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

export default function HowItWorksSection() {
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

      {/* Cards */}
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {steps.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.step}
              className="relative rounded-[28px] border border-white/10 bg-[#121318] p-8 text-center transition hover:border-white/20"
            >
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

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          );
        })}
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
