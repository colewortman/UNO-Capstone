/**
 * @file HowItWorksSection.tsx
 */

"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ScanLine, Smartphone, Upload } from "lucide-react";
import barScanImage from "@/public/barscanblog.jpg";
import bottleScanImage from "@/public/bottle_scan.png";
import phoneNotificationImage from "@/public/phone_notification.png";

type Step = {
  step: string;
  title: string;
  description: string;
  icon: typeof ScanLine;
  iconWrap: string;
  cardAccent: string;
  image: StaticImageData;
  alt: string;
  recommended?: boolean;
  link?: { href: string; label: string };
};

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Scan",
    description: "Scan the barcode of one or multiple bottles at a time.",
    icon: ScanLine,
    iconWrap: "bg-yellow-500/15 text-yellow-300",
    cardAccent: "hover:border-yellow-400/40 hover:shadow-yellow-500/10",
    image: barScanImage,
    alt: "Scanning bottle barcode",
  },
  {
    step: "Step 2",
    title: "Measure",
    description: "Point your phone camera at the liquid level or full bottle.",
    icon: Smartphone,
    iconWrap: "bg-blue-500/15 text-blue-300",
    cardAccent: "hover:border-blue-400/40 hover:shadow-blue-500/10",
    image: bottleScanImage,
    alt: "Phone measuring bottle level",
  },
  {
    step: "Step 3",
    title: "Export",
    description: "Export your inventory count directly to your POS.",
    icon: Upload,
    iconWrap: "bg-green-500/15 text-green-300",
    cardAccent:
      "border-blue-400/45 bg-blue-950/30 hover:border-blue-300/60 hover:shadow-blue-500/15",
    image: phoneNotificationImage,
    alt: "Exporting inventory count",
    recommended: true,
    link: { href: "/integration", label: "Learn More" },
  },
];

export default function HowItWorksSection() {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Get Started in 3 Easy Steps
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
          Liqr Vision’s patent-pending AI Vision technology makes inventory
          control simple, fast, and accurate.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {steps.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.step}
              className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[#121318] p-6 shadow-2xl shadow-black/20 transition duration-300 ${item.cardAccent}`}
            >
              {item.recommended && (
                <div className="absolute right-6 top-6 rounded-full bg-blue-500/20 px-4 py-1 text-sm font-semibold text-blue-200 ring-1 ring-blue-300/20">
                  Recommended
                </div>
              )}

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconWrap}`}
              >
                <Icon className="h-7 w-7 stroke-[2.2]" />
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/35">
                  {item.step}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-[3.5rem] text-base leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="h-[220px] w-full object-cover"
                />
              </div>

              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
                >
                  {item.link.label} <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
