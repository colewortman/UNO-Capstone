"use client";

import React, { useState, useEffect } from "react";

type ResultMetrics = {
  currentPourCostDollars: number;
  annualRevenueBoosted: number;
  annualCost: number;
  annualCostReduction: number;
  roi: number;
  annualSavings: number;
};

export default function ROICalculator() {
  const [annualSales, setAnnualSales] = useState(10000);
  const [pourCostPercentage, setPourCostPercentage] = useState(24);
  // monthly bottle-counting hours, converted to annual when needed
  const [hoursCountingBottles, setHoursCountingBottles] = useState(8);
  const [hourlyWage, setHourlyWage] = useState(20);

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
    const annualRevenueBoosted = currentPourCostDollars * POUR_COST_REDUCTION;
    const annualCost = tiers[selectedTier].monthly * 12;
    const laborSavings = hoursCountingBottles * hourlyWage * 12; // monthly hours to annual - included in calculations but not displayed
    const annualCostReduction =
      annualRevenueBoosted - annualCost + laborSavings;
    const roi = ((annualCostReduction - annualCost) / annualCost) * 100;
    const annualSavings = annualRevenueBoosted - annualCost + laborSavings;

    return {
      currentPourCostDollars,
      annualRevenueBoosted,
      annualCost,
      annualCostReduction,
      roi,
      annualSavings,
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

  /*const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };*/

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
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <p className="text-sm font-semibold text-blue-700 mb-2">
                  Annual Revenue Boost
                </p>
                <p
                  className={`text-4xl font-bold text-blue-600 ${valueFadeClass}`}
                >
                  {formatCurrency(displayMetrics.annualRevenueBoosted)}
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  from reducing pour costs
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

              {/* Annual Labor Savings - commented out */}
              {/* <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <p className="text-sm font-semibold text-purple-700 mb-2">Annual Labor Savings</p>
            <p className="text-4xl font-bold text-purple-600">{formatCurrency(laborSavings)}</p>
            <p className="text-xs text-purple-600 mt-2">from automated counting</p>
          </div> */}

              {/* Annual Revenue Reduction (Cost Reduction) */}
              <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <p className="text-sm font-semibold text-green-700 mb-2">
                  Annual Net Savings
                </p>
                <p
                  className={`text-4xl font-bold text-green-600 ${valueFadeClass}`}
                >
                  {formatCurrency(displayMetrics.annualCostReduction)}
                </p>
                <p className="text-xs text-green-600 mt-2">
                  total annual reduction
                </p>
              </div>

              {/* ROI */}
              <div className="bg-linear-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 w-full relative md:-translate-x-1 ml-32 pl-12 border border-emerald-200">
                <p className="text-sm font-semibold text-emerald-700 mb-2">
                  Return on Investment
                </p>
                <p
                  className={`text-4xl font-bold text-emerald-600 ${valueFadeClass}`}
                >
                  {displayMetrics.roi.toFixed(0)}%
                </p>
                <p className="text-xs text-emerald-600 mt-2">annual ROI</p>
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center space-y-4">
              <p className="text-lg font-semibold">
                Total Annual Savings w/ subscription
              </p>
              <p className={`text-5xl font-bold ${valueFadeClass}`}>
                {formatCurrency(displayMetrics.annualSavings)}
              </p>
              <p className="text-blue-100">
                Using the {tiers[selectedTier].name} plan ($
                {tiers[selectedTier].monthly}/mo), you'll save{" "}
                {formatCurrency(displayMetrics.annualSavings)} per year by
                reducing pour costs and labor hours.
              </p>
            </div>

            {/* Payback Period - commented out */}
            {/* {annualCostReduction > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="text-center text-gray-700">
              <span className="font-semibold">Payback Period: </span>
              <span className="text-xl font-bold text-blue-600">
                {(liqurVisionAnnualCost / annualCostReduction * 12).toFixed(1)} months
              </span>
            </p>
          </div>
        )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
