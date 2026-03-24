"use client";

import React, { useState, useEffect } from "react";

type ResultMetrics = {
  currentPourCostDollars: number;
  annualRevenueBoosted: number;
  annualCost: number;
  annualSavingsBeforeSubscription: number;
  roi: number;
  netAnnualSavings: number;
  paybackPeriodMonths: number | null;
  projectedPourCostPercentage: number;
  paybackPeriodDays: number | null;
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
    const projectedPourCostPercentage = Math.max(0, pourCostPercentage - expectPourImprov);
    const annualRevenueBoosted = annualSales * (expectPourImprov / 100);
    const annualCost = tiers[selectedTier].monthly * 12;
    const laborSavings = hoursCountingBottles * hourlyWage * 12; // monthly hours to annual - included in calculations but not displayed
    const annualSavingsBeforeSubscription = annualRevenueBoosted + laborSavings;
    const netAnnualSavings = annualSavingsBeforeSubscription - annualCost;
    const roi = (netAnnualSavings / annualCost) * 100;
    const paybackPeriodMonths = netAnnualSavings > 0 ? annualCost / (netAnnualSavings / 12) : null;
    const paybackPeriodDays = paybackPeriodMonths !== null ? paybackPeriodMonths * 30.4 : null;

    return {
      currentPourCostDollars,
      annualRevenueBoosted,
      annualCost,
      annualSavingsBeforeSubscription,
      roi,
      netAnnualSavings,
      paybackPeriodMonths,
      projectedPourCostPercentage,
      paybackPeriodDays,
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

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };

  return (
    <div className="w-full max-w-10xl mx-auto px-8 py-8 pb-0">
      <div className="space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">ROI Calculator</h2>
          <p className="text-gray-600 text-lg">
            See how much BarIq can save your business
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Input Section */}
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8 space-y-8">
            <h6 className="text-xl font-semibold text-gray-800 text-center">
              Tiers are recommended based on annual liquor sales
            </h6>
            {/* pricing tier tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 overflow-x-auto">
              {tiers.map((tier, idx) => (
                <button
                  key={tier.name}
                  className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap shrink-0 ${
                    idx === selectedTier
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedTier(idx)}
                >
                  {tier.name} (${tier.monthly})
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {/* Annual Liquor Sales */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-gray-800">
                    Annual Liquor Sales
                  </label>
                  <span className="text-2xl font-bold text-blue-600">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$10k</span>
                  <span>$10M</span>
                </div>
              </div>

              {/* Current Pour Cost */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-gray-800">
                    Current Pour Cost
                  </label>
                  <span className="text-2xl font-bold text-red-600">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Expected Pour Cost Improvement */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-gray-800">Expected Pour Cost Improvement</label>
                  <span className="text-2xl font-bold text-orange-600">{expectPourImprov.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.1"
                  value={expectPourImprov}
                  onChange={(e) => setExpectPourImprov(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1%</span>
                  <span>6%</span>
                </div>
              </div>

              {/* Hours Counting Bottles */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-gray-800">
                    Monthly Hours Counting Bottles
                  </label>
                  <span className="text-2xl font-bold text-purple-600">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0 hrs/mo</span>
                  <span>160 hrs/mo</span>
                </div>
              </div>

              {/* Average Hourly Wage */}
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-lg font-semibold text-gray-800">
                    Average Hourly Wage
                  </label>
                  <span className="text-2xl font-bold text-green-600">
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
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$10/hr</span>
                  <span>$100/hr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="md:w-2/3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Pour Cost */}
              <div className="bg-linear-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                <p className="text-sm font-semibold text-red-700 mb-2">
                  Current Pour Cost
                </p>
                <p
                  className={`text-4xl font-bold text-red-600 ${valueFadeClass}`}
                >
                  {formatCurrency(displayMetrics.currentPourCostDollars)}
                </p>
                <p className="text-xs text-red-600 mt-2">per year in losses</p>
              </div>

          {/* Annual Revenue Boost */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <p className="text-sm font-semibold text-blue-700 mb-2">Annual Revenue Boost</p>
            <p className={`text-4xl font-bold text-blue-600 ${valueFadeClass}`}>{formatCurrency(displayMetrics.annualRevenueBoosted)}</p>
            <p className="text-xs text-blue-600 mt-2"> reducing pour costs from {pourCostPercentage.toFixed(1)}% → {displayMetrics.projectedPourCostPercentage.toFixed(1)}%
            </p>
          </div>

              {/* Liqur Vision Annual Cost */}
              <div className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
                <p className="text-sm font-semibold text-yellow-700 mb-2">
                  Annual Cost
                </p>
                <p
                  className={`text-4xl font-bold text-yellow-600 ${valueFadeClass}`}
                >
                  {formatCurrency(displayMetrics.annualCost)}
                </p>
                <p className="text-xs text-yellow-600 mt-2">
                  yearly subscription
                </p>
              </div>

          {/* Annual Savings Before Subscription */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <p className="text-sm font-semibold text-green-700 mb-2">Annual Savings Before Subscription</p>
            <p className={`text-4xl font-bold text-green-600 ${valueFadeClass}`}>{formatCurrency(displayMetrics.annualSavingsBeforeSubscription)}</p>
            <p className="text-xs text-green-600 mt-2">pour + labor savings</p>
            <p className="text-xs text-green-700 mt-2">
              Recovering {(hoursCountingBottles *12).toFixed(0)} staff hours per year ({formatCurrency(hoursCountingBottles * hourlyWage * 12)})
            </p>
          </div>

          {/* ROI */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 w-full relative md:-translate-x-1  pl-12 border border-emerald-200">
            <p className="text-sm font-semibold text-emerald-700 mb-2">Return on Investment</p>
            <p className={`text-4xl font-bold text-emerald-600 ${valueFadeClass}`}>{displayMetrics.roi.toFixed(0)}%</p>
            <p className="text-xs text-emerald-600 mt-2">
              For every $1 spent, bars recover about ${Math.max(displayMetrics.roi / 100, 0).toFixed(2)} in lost inventory.
            </p>
          </div>

          {/* Payback Period */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 border border-indigo-200">
            <p className="text-sm font-semibold text-indigo-700 mb-2">Payback Period</p>
            <p className={`text-4xl font-bold text-indigo-600 ${valueFadeClass}`}>
              {displayMetrics.paybackPeriodMonths !== null ? `${displayMetrics.paybackPeriodMonths.toFixed(1)} mo` : 'N/A'}
            </p>
            <p className="text-xs text-indigo-600 mt-2">
              {displayMetrics.paybackPeriodDays !== null ? `Payback period: ${Math.round(displayMetrics.paybackPeriodDays)} days` : 'Payback period: not available'}
            </p>
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center space-y-4">
          <p className="text-lg font-semibold">Net Annual Savings (After Subscription)</p>
          <p className={`text-5xl font-bold ${valueFadeClass}`}>{formatCurrency(displayMetrics.netAnnualSavings)}</p>
          <p className="text-blue-100">
            Using the {tiers[selectedTier].name} plan (${tiers[selectedTier].monthly}/mo), you'll net {formatCurrency(displayMetrics.netAnnualSavings)} per year after subscription costs.
          </p>
        </div>
      </div>
    </div>
  );
}