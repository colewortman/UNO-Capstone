"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";

/**
 * Pricing tiers for BarIQ subscriptions.
 *
 * These tiers mirror the ones in ROICalculator.tsx — if you update
 * pricing there, update it here too (and vice versa).
 *
 * Each tier object has:
 *   name        — Display name shown on the card
 *   monthly     — Base monthly price in USD (before any yearly discount)
 *   description — Short marketing copy shown below the tier name
 *   icon        — Inline SVG used as the tier's visual icon
 *   cta         — Call-to-action button label
 *   ctaStyle    — Tailwind classes for the CTA button (differs for recommended tier)
 *   recommended — Set true on exactly ONE tier to highlight it with a blue glow + badge
 *   features    — Bullet list of included features shown in the card
 *   prefix      — Small label above the feature list (e.g. "Basic Features:" or "Everything in X plus:")
 */
const tiers = [
  {
    name: "Starter",
    monthly: 79,
    description: "Perfect for small bars and venues just getting started with inventory control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.47 0-2.441-1.798-1.442-2.798L4.2 15.8" />
      </svg>
    ),
    cta: "Get started for free",
    ctaStyle: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    recommended: false,
    features: [
      "1 bar location",
      "Basic pour cost tracking",
      "Manual inventory entry",
      "Mobile app access",
      "Email support",
    ],
    prefix: "Basic Features:",
  },
  {
    name: "Essential",
    monthly: 149,
    description: "For growing bars that need automated tracking and deeper visibility.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    cta: "Level Up with Essential",
    ctaStyle: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    recommended: false,
    features: [
      "Everything in Starter plus:",
      "Up to 3 locations",
      "Automated inventory sync",
      "Basic analytics dashboard",
      "Live chat support",
    ],
    prefix: "Everything in Starter plus:",
  },
  {
    // This tier is highlighted as the recommended option.
    // To change the recommended tier, set recommended: false here
    // and recommended: true on the desired tier.
    name: "Professional",
    monthly: 299,
    description: "For serious operators who want full control over pour costs and labor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-blue-300">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
      </svg>
    ),
    cta: "Start with Professional",
    ctaStyle: "bg-white text-black hover:bg-white/90",
    recommended: true,
    features: [
      "Everything in Essential plus:",
      "Up to 10 locations",
      "Advanced pour analytics",
      "Staff performance tracking",
      "Custom reports",
      "Priority support",
    ],
    prefix: "Everything in Essential plus:",
  },
  {
    name: "Advanced",
    monthly: 599,
    description: "For multi-location operators who need enterprise-grade insights and integrations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    cta: "Get Advanced",
    ctaStyle: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    recommended: false,
    features: [
      "Everything in Professional plus:",
      "Up to 30 locations",
      "API access",
      "Multi-location reporting",
      "Dedicated account manager",
      "Custom integrations",
    ],
    prefix: "Everything in Professional plus:",
  },
  {
    name: "Top Shelf",
    monthly: 1199,
    description: "For large-scale hospitality groups that demand the best.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    cta: "Go Top Shelf",
    ctaStyle: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    recommended: false,
    features: [
      "Everything in Advanced plus:",
      "Unlimited locations",
      "White-glove onboarding",
      "Custom ML models",
      "24/7 dedicated support",
      "SLA guarantee",
    ],
    prefix: "Everything in Advanced plus:",
  },
];

export default function PricingPage() {
  // Tracks whether the user has selected yearly billing.
  // Yearly pricing applies a flat 20% discount over the monthly rate.
  const [isYearly, setIsYearly] = useState(false);

  // Returns the display price for a tier.
  // Yearly discount: multiply monthly by 0.8 and round to nearest dollar.
  const getPrice = (monthly: number) =>
    isYearly ? Math.round(monthly * 0.8) : monthly;

  return (
    <div className="min-h-screen bg-[#111113] text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* ── Back link ── */}
        <div className="mb-4 text-center">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* ── Page heading + subtitle ── */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            From concept to launch — all in one place.
          </h1>
          <p className="mx-auto max-w-2xl text-white/55 text-lg">
            End-to-end bar management, without the chaos. Stay aligned on pour costs
            at every stage with tools that make inventory seamless.
          </p>
        </div>

        {/* ── Billing toggle: monthly / yearly ──
            Active selection gets a white pill background.
            The yearly savings badge is always visible to encourage upgrades. */}
        <div className="mb-14 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              !isYearly
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Pay monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              isYearly
                ? "bg-white text-black"
                : "text-white/60 hover:text-white"
            }`}
          >
            Pay yearly
          </button>
          <span className="text-sm text-blue-400">Save up to 20% with yearly</span>
        </div>

        {/* ── Pricing cards grid ──
            Responsive: 1 col on mobile → 2 on sm → 3 on lg → 5 on xl (one per tier).
            Each card uses flex-col so the CTA button is always pinned to the bottom. */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
                // Recommended tier gets a blue tinted background + glow shadow
                tier.recommended
                  ? "border-blue-500/50 bg-[#1a1f2e] shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                  : "border-white/10 bg-[#18181b]"
              }`}
            >
              {/* Glowing border effect — tracks pointer position on hover */}
              <GlowingEffect disabled={false} spread={30} proximity={60} borderWidth={1.5} />

              {/* "Recommended" badge — only rendered for the highlighted tier */}
              {tier.recommended && (
                <span className="absolute right-4 top-4 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-0.5 text-xs font-medium text-blue-300">
                  Recommended
                </span>
              )}

              {/* Tier icon */}
              <div className={`mb-4 w-fit rounded-xl p-2.5 ${tier.recommended ? "bg-blue-500/15 text-blue-300" : "bg-white/8 text-white/60"}`}>
                {tier.icon}
              </div>

              {/* Tier name + short description */}
              <h2 className="mb-1.5 text-xl font-semibold">{tier.name}</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/50">{tier.description}</p>

              {/* Price display — updates when toggle switches between monthly/yearly */}
              <div className="mb-1 flex items-end gap-1">
                <span className="text-4xl font-bold">${getPrice(tier.monthly)}</span>
                <span className="mb-1 text-sm text-white/50">/month</span>
              </div>
              {/* Show annual billed amount only in yearly mode */}
              {isYearly && (
                <p className="mb-6 text-xs text-white/35">
                  Billed as ${getPrice(tier.monthly) * 12}/year
                </p>
              )}
              {/* Spacer maintains consistent layout in monthly mode */}
              {!isYearly && <div className="mb-6" />}

              {/* Divider */}
              <div className="mb-5 h-px bg-white/10" />

              {/* Feature list section label (e.g. "Basic Features:" or "Everything in X plus:") */}
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/35">
                {tier.prefix}
              </p>

              {/* Feature bullets
                  The filter removes the "Everything in X plus:" string if it was
                  accidentally included as a feature item — keeping the list clean. */}
              <ul className="mb-8 flex-1 space-y-2.5">
                {tier.features
                  .filter((f) => !f.endsWith("plus:"))
                  .map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.recommended ? "text-blue-400" : "text-white/40"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
              </ul>

              {/* CTA button — style is customised per tier via ctaStyle */}
              <button
                className={`w-full rounded-xl py-2.5 text-sm font-medium transition ${tier.ctaStyle}`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
