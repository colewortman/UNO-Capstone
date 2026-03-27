"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

type ResultMetrics = {
  currentPourCostDollars: number;
  annualRevenueBoosted: number;
  annualCost: number;
  annualCostReductionWithBarIq: number;
  roi: number;
  netAnnualSavings: number;
  projectedPourCostPercentage: number;
};

export default function ROICalculator() {
  const [annualSales, setAnnualSales] = useState(10000);
  const [pourCostPercentage, setPourCostPercentage] = useState(24);
  // monthly bottle-counting hours, converted to annual when needed
  const [hoursCountingBottles, setHoursCountingBottles] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(20);
  const [expectPourImprov, setExpectPourImprov] = useState(1);

  // pricing tiers (monthly subscription)
  const tiers = [
    { name: "Starter", monthly: 79 },
    { name: "Essential", monthly: 149 },
    { name: "Professional", monthly: 299 },
    { name: "Advanced", monthly: 599 },
    { name: "Top Shelf", monthly: 1199 },
  ];
  const [selectedTier, setSelectedTier] = useState(0); // default to Starter
  const [isValueFading, setIsValueFading] = useState(false);

  // constants
  const POUR_COST_REDUCTION = 0.25; // reduces pour cost by 25%

  const getTierIndexFromSales = (sales: number) => {
    if (sales < 250000) return 0;
    if (sales < 750000) return 1;
    if (sales < 2000000) return 2;
    if (sales < 5000000) return 3;
    return 4;
  };

  // automatically pick a tier based on sales
  useEffect(() => {
    const idx = getTierIndexFromSales(annualSales);
    setSelectedTier(idx);
  }, [annualSales]);

  const buildMetrics = (): ResultMetrics => {
    const currentPourCostDollars = annualSales * (pourCostPercentage / 100);
    const projectedPourCostPercentage = Math.max(
      0,
      pourCostPercentage - expectPourImprov,
    );
    const annualRevenueBoosted = annualSales * (expectPourImprov / 100);
    const annualCost = tiers[selectedTier].monthly * 12;
    const annualCostReductionWithBarIq = hoursCountingBottles * hourlyWage * 12;
    const annualSavingsBeforeSubscription =
      annualRevenueBoosted + annualCostReductionWithBarIq;
    const netAnnualSavings = annualSavingsBeforeSubscription - annualCost;
    const roi = (netAnnualSavings / annualCost) * 100;

    return {
      currentPourCostDollars,
      annualRevenueBoosted,
      annualCost,
      annualCostReductionWithBarIq,
      roi,
      netAnnualSavings,
      projectedPourCostPercentage,
    };
  };

  const [displayMetrics, setDisplayMetrics] =
    useState<ResultMetrics>(buildMetrics());

  useEffect(() => {
    setIsValueFading(true);
    const timer = window.setTimeout(() => {
      setDisplayMetrics(buildMetrics());
      setIsValueFading(false);
    }, 130);

    return () => window.clearTimeout(timer);
  }, [
    annualSales,
    pourCostPercentage,
    hoursCountingBottles,
    hourlyWage,
    selectedTier,
  ]);

  const valueFadeClass = `transition-all duration-200 ${
    isValueFading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
  }`;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const sliderBaseClass =
    "h-3 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-white";

  const resultRows = [
    {
      label: "Current Pour Cost",
      value: formatCurrency(displayMetrics.currentPourCostDollars),
      detail: "Estimated yearly losses at your current pour cost.",
    },
    {
      label: "Pour Cost Savings with BarIQ",
      value: formatCurrency(displayMetrics.annualRevenueBoosted),
      detail: `Projected pour cost improvement from ${pourCostPercentage.toFixed(1)}% to ${displayMetrics.projectedPourCostPercentage.toFixed(1)}%.`,
    },
    {
      label: "Annual Cost Reduction with BarIQ",
      value: formatCurrency(displayMetrics.annualCostReductionWithBarIq),
      detail: "Estimated labor savings from reducing manual bottle counts.",
    },
    {
      label: "ROI Percentage",
      value: `${displayMetrics.roi.toFixed(0)}%`,
      detail: "Return after subscription costs are factored in.",
    },
    {
      label: "Annual Savings with a BarIQ Subscription",
      value: formatCurrency(displayMetrics.netAnnualSavings),
      detail: `Based on the ${tiers[selectedTier].name} plan at $${tiers[selectedTier].monthly}/mo.`,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            ROI Calculator
          </h2>
          <p className="text-base text-white/65 md:text-lg">
            Enter the inputs and see how BarIQ changes your annual results.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-white/10 bg-black px-6 py-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-8 sm:py-8">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  Your current process
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Auto-matched to pricing tier
                </h3>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2 overflow-x-auto">
              {tiers.map((tier, idx) => (
                <button
                  key={tier.name}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                    idx === selectedTier
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedTier(idx)}
                >
                  {tier.name} (${tier.monthly})
                </button>
              ))}
            </div>

            <div className="space-y-7">
              <div className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-medium text-white/70">
                    Annual Liquor Sales
                  </label>
                  <span className="text-3xl font-semibold text-white">
                    {formatCurrency(annualSales)}
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="10000000"
                  step="10000"
                  value={annualSales}
                  onChange={(e) => setAnnualSales(Number(e.target.value))}
                  className={sliderBaseClass}
                />
                <div className="flex justify-between text-xs text-white/40">
                  <span>$10k</span>
                  <span>$10M</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-medium text-white/70">
                    Current Pour Cost
                  </label>
                  <span className="text-3xl font-semibold text-white">
                    {pourCostPercentage.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="0.5"
                  value={pourCostPercentage}
                  onChange={(e) =>
                    setPourCostPercentage(Number(e.target.value))
                  }
                  className={sliderBaseClass}
                />
                <div className="flex justify-between text-xs text-white/40">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-medium text-white/70">
                    Expected Pour Cost Improvement
                  </label>
                  <span className="text-3xl font-semibold text-white">
                    {expectPourImprov.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.1"
                  value={expectPourImprov}
                  onChange={(e) => setExpectPourImprov(Number(e.target.value))}
                  className={sliderBaseClass}
                />
                <div className="flex justify-between text-xs text-white/40">
                  <span>60%</span>
                  <span>80%</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-medium text-white/70">
                    Monthly Hours Counting Bottles
                  </label>
                  <span className="text-3xl font-semibold text-white">
                    {hoursCountingBottles.toFixed(0)} hrs/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="160"
                  step="1"
                  value={hoursCountingBottles}
                  onChange={(e) =>
                    setHoursCountingBottles(Number(e.target.value))
                  }
                  className={sliderBaseClass}
                />
                <div className="flex justify-between text-xs text-white/40">
                  <span>0 hrs/mo</span>
                  <span>160 hrs/mo</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-end justify-between gap-4">
                  <label className="text-sm font-medium text-white/70">
                    Average Hourly Wage
                  </label>
                  <span className="text-3xl font-semibold text-white">
                    {formatCurrency(hourlyWage)}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className={sliderBaseClass}
                />
                <div className="flex justify-between text-xs text-white/40">
                  <span>$10/hr</span>
                  <span>$100/hr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 px-6 py-7 text-white shadow-[0_30px_80px_rgba(37,99,235,0.45)] sm:px-8 sm:py-8">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-100/70">
                  ROI calculation results
                </p>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                  What BarIQ could return each year
                </h3>
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                {tiers[selectedTier].name} tier selected
              </div>
            </div>

            <div className="space-y-5">
              {resultRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-2xl border border-white/15 bg-white/8 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-blue-100/85">
                        {row.label}
                      </p>
                      <p className="text-xs leading-5 text-blue-100/65">
                        {row.detail}
                      </p>
                    </div>
                    <p className={`text-2xl font-semibold text-white sm:text-3xl ${valueFadeClass}`}>
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/15 bg-black/20 px-5 py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-blue-100/80">
                    Annual BarIQ Subscription
                  </p>
                  <p className="mt-1 text-xs text-blue-100/60">
                    {tiers[selectedTier].name} plan billed at ${tiers[selectedTier].monthly} per month.
                  </p>
                </div>
                <p className={`text-2xl font-semibold ${valueFadeClass}`}>
                  {formatCurrency(displayMetrics.annualCost)}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/pricing"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/85"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
