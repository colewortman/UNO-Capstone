/**
 * Pure-function versions of the ROI Calculator business logic.
 * Mirrors the formulas in ROICalculator.tsx exactly so they can be unit-tested
 * without importing the React component.
 */

export type ResultMetrics = {
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

export const PRICING_TIERS = [
  { name: 'Starter',      monthly: 79   },
  { name: 'Essential',    monthly: 149  },
  { name: 'Professional', monthly: 299  },
  { name: 'Advanced',     monthly: 599  },
  { name: 'Top Shelf',    monthly: 1199 },
];

/** Mirrors getTierIndexFromSales() in ROICalculator.tsx */
export function getTierIndexFromSales(sales: number): number {
  if (sales < 250_000)   return 0;
  if (sales < 750_000)   return 1;
  if (sales < 2_000_000) return 2;
  if (sales < 5_000_000) return 3;
  return 4;
}

/** Mirrors buildMetrics() in ROICalculator.tsx */
export function buildMetrics(
  annualSales: number,
  pourCostPercentage: number,
  hoursCountingBottles: number,
  hourlyWage: number,
  expectPourImprov: number,
  selectedTier: number,
): ResultMetrics {
  const currentPourCostDollars      = annualSales * (pourCostPercentage / 100);
  const projectedPourCostPercentage = Math.max(0, pourCostPercentage - expectPourImprov);
  const annualRevenueBoosted        = annualSales * (expectPourImprov / 100);
  const annualCost                  = PRICING_TIERS[selectedTier].monthly * 12;
  const laborSavings                = hoursCountingBottles * hourlyWage * 12;
  const annualSavingsBeforeSubscription = annualRevenueBoosted + laborSavings;
  const netAnnualSavings            = annualSavingsBeforeSubscription - annualCost;
  const roi                         = (netAnnualSavings / annualCost) * 100;
  const paybackPeriodMonths         = netAnnualSavings > 0
    ? annualCost / (netAnnualSavings / 12)
    : null;
  const paybackPeriodDays           = paybackPeriodMonths !== null
    ? paybackPeriodMonths * 30.4
    : null;

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
}
