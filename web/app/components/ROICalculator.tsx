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
  const [showResults, setShowResults] = useState(false);

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
  }, [annualSales, pourCostPercentage, hoursCountingBottles, hourlyWage, expectPourImprov, selectedTier]);

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
    "h-3 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-white touch-none md:h-3";

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

  const summaryRows = resultRows.slice(0, 3);
  const highlightRows = resultRows.slice(3);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <div className="space-y-4 sm:space-y-8">
        <div className="space-y-2 text-center sm:space-y-3">
          <h2 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl">
            ROI Calculator
          </h2>
          <p className="text-sm text-white/65 sm:text-base md:text-lg">
            Enter the inputs and see how BarIQ changes your annual results.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {/* ── INPUT PANEL ── */}
          <div className={`rounded-2xl border border-white/10 bg-black px-4 py-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:px-8 sm:py-8 ${showResults ? "hidden xl:block" : ""}`}>
            <div className="mb-4 flex items-start justify-between gap-4 sm:mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45 sm:text-sm">
                  Your current process
                </p>
                <h3 className="mt-1 text-lg font-semibold sm:mt-2 sm:text-2xl">
                  Auto-matched to pricing tier
                </h3>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-1.5 overflow-x-auto sm:mb-8 sm:gap-2">
              {tiers.map((tier, idx) => (
                <button
                  key={tier.name}
                  type="button"
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition sm:px-4 sm:py-2 sm:text-sm ${
                    idx === selectedTier
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedTier(idx)}
                >
                  {tier.name}
                </button>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-7">
              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <label className="text-xs font-medium text-white/70 sm:text-sm">
                    Annual Liquor Sales
                  </label>
                  <span className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
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
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <label className="text-xs font-medium text-white/70 sm:text-sm">
                    Current Pour Cost
                  </label>
                  <span className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
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
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <label className="text-xs font-medium text-white/70 sm:text-sm">
                    Expected Pour Cost Improvement
                  </label>
                  <span className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
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
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <label className="text-xs font-medium text-white/70 sm:text-sm">
                    Monthly Hours Counting Bottles
                  </label>
                  <span className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
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
              </div>

              <div className="space-y-1.5 sm:space-y-3">
                <div className="flex items-end justify-between gap-2">
                  <label className="text-xs font-medium text-white/70 sm:text-sm">
                    Average Hourly Wage
                  </label>
                  <span className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
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
              </div>
            </div>

            {/* Mobile: Calculate button */}
            <button
              type="button"
              onClick={() => {
                setDisplayMetrics(buildMetrics());
                setShowResults(true);
              }}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:brightness-110 sm:mt-8 sm:rounded-2xl sm:py-4 xl:hidden"
            >
              Calculate ROI
            </button>
          </div>

          {/* ── RESULTS PANEL ── */}
          <div className={`rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 px-4 py-5 text-white shadow-[0_30px_80px_rgba(37,99,235,0.45)] sm:rounded-[28px] sm:px-8 sm:py-8 ${showResults ? "" : "hidden xl:block"}`}>
            <div className="mb-4 flex items-start justify-between gap-3 sm:mb-8 sm:gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-blue-100/70 sm:text-sm">
                  ROI calculation results
                </p>
                <h3 className="mt-1 text-lg font-semibold sm:mt-2 sm:text-2xl md:text-3xl">
                  What BarIQ could return each year
                </h3>
              </div>
              <div className="hidden shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80 sm:block">
                {tiers[selectedTier].name} tier selected
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-5">
              {summaryRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-white/15 bg-white/8 px-3 py-2.5 backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-4"
                >
                  <div className="flex items-center justify-between gap-3 sm:items-start sm:gap-4">
                    <div className="min-w-0 space-y-0.5 sm:space-y-1">
                      <p className="text-xs font-medium text-blue-100/85 sm:text-sm">
                        {row.label}
                      </p>
                      <p className="hidden text-xs leading-5 text-blue-100/65 sm:block">
                        {row.detail}
                      </p>
                    </div>
                    <p className={`shrink-0 text-xl font-semibold text-white sm:text-2xl md:text-3xl ${valueFadeClass}`}>
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-1 sm:gap-4 md:grid-cols-2">
              {highlightRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-sm sm:rounded-2xl sm:px-5 sm:py-4"
                >
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs font-medium text-blue-100/90 sm:text-sm">
                      {row.label}
                    </p>
                    <p className={`text-xl font-semibold text-white sm:text-3xl ${valueFadeClass}`}>
                      {row.value}
                    </p>
                    <p className="hidden text-xs leading-5 text-blue-100/65 sm:block">
                      {row.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Edit Inputs button */}
            <button
              type="button"
              onClick={() => setShowResults(false)}
              className="mt-3 w-full rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:mt-6 sm:rounded-2xl sm:py-4 xl:hidden"
            >
              Edit Inputs
            </button>

            <div className="mt-2.5 sm:mt-4 xl:mt-6">
              <Link
                href="/pricing"
                className="inline-flex w-full items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85 sm:rounded-2xl sm:py-4"
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
