import { describe, it, expect } from 'vitest';
import { buildMetrics, getTierIndexFromSales, PRICING_TIERS } from './roiHelpers';

// ---------------------------------------------------------------------------
// Tier selection
// ---------------------------------------------------------------------------
describe('getTierIndexFromSales', () => {
  it('returns 0 (Starter) for sales below $250k', () => {
    expect(getTierIndexFromSales(10_000)).toBe(0);
    expect(getTierIndexFromSales(249_999)).toBe(0);
  });

  it('returns 1 (Essential) for $250k–$749,999', () => {
    expect(getTierIndexFromSales(250_000)).toBe(1);
    expect(getTierIndexFromSales(749_999)).toBe(1);
  });

  it('returns 2 (Professional) for $750k–$1,999,999', () => {
    expect(getTierIndexFromSales(750_000)).toBe(2);
    expect(getTierIndexFromSales(1_999_999)).toBe(2);
  });

  it('returns 3 (Advanced) for $2M–$4,999,999', () => {
    expect(getTierIndexFromSales(2_000_000)).toBe(3);
    expect(getTierIndexFromSales(4_999_999)).toBe(3);
  });

  it('returns 4 (Top Shelf) for $5M and above', () => {
    expect(getTierIndexFromSales(5_000_000)).toBe(4);
    expect(getTierIndexFromSales(10_000_000)).toBe(4);
  });
});

// ---------------------------------------------------------------------------
// PRICING_TIERS constant
// ---------------------------------------------------------------------------
describe('PRICING_TIERS', () => {
  it('has 5 tiers', () => {
    expect(PRICING_TIERS).toHaveLength(5);
  });

  it('prices are in ascending order', () => {
    for (let i = 0; i < PRICING_TIERS.length - 1; i++) {
      expect(PRICING_TIERS[i].monthly).toBeLessThan(PRICING_TIERS[i + 1].monthly);
    }
  });
});

// ---------------------------------------------------------------------------
// buildMetrics – core calculations
// ---------------------------------------------------------------------------
describe('buildMetrics', () => {
  // Shared baseline scenario:
  //  $100k sales | 20% pour cost | 8 hrs/mo | $20/hr | 2% improvement | Starter tier
  const base = () => buildMetrics(100_000, 20, 8, 20, 2, 0);

  it('calculates currentPourCostDollars correctly', () => {
    // 100,000 × 20% = $20,000
    expect(base().currentPourCostDollars).toBe(20_000);
  });

  it('calculates projectedPourCostPercentage correctly', () => {
    // 20% − 2% = 18%
    expect(base().projectedPourCostPercentage).toBe(18);
  });

  it('calculates annualRevenueBoosted correctly', () => {
    // 100,000 × 2% = $2,000
    expect(base().annualRevenueBoosted).toBe(2_000);
  });

  it('calculates annualCost correctly for the selected tier', () => {
    // Starter $79/mo × 12 = $948
    expect(base().annualCost).toBe(948);
  });

  it('calculates annualSavingsBeforeSubscription correctly', () => {
    // Revenue boost $2,000 + labor savings (8 × $20 × 12 = $1,920) = $3,920
    expect(base().annualSavingsBeforeSubscription).toBe(3_920);
  });

  it('calculates netAnnualSavings correctly', () => {
    // $3,920 − $948 = $2,972
    expect(base().netAnnualSavings).toBe(2_972);
  });

  it('calculates ROI correctly', () => {
    // ($2,972 / $948) × 100 ≈ 313.5%
    expect(base().roi).toBeCloseTo(313.5, 1);
  });

  it('calculates paybackPeriodMonths correctly', () => {
    // $948 / ($2,972 / 12) ≈ 3.83 months
    expect(base().paybackPeriodMonths).toBeCloseTo(3.83, 1);
  });

  it('calculates paybackPeriodDays correctly', () => {
    // 3.83 months × 30.4 ≈ 116.4 days
    const months = base().paybackPeriodMonths!;
    expect(base().paybackPeriodDays).toBeCloseTo(months * 30.4, 5);
  });

  // -------------------------------------------------------------------------
  // Edge cases
  // -------------------------------------------------------------------------
  it('returns null payback values when net savings are not positive', () => {
    // $10k sales, 1% improvement, 0 labor hours → savings too small to cover Starter cost
    const m = buildMetrics(10_000, 5, 0, 10, 1, 0);
    expect(m.netAnnualSavings).toBeLessThanOrEqual(0);
    expect(m.paybackPeriodMonths).toBeNull();
    expect(m.paybackPeriodDays).toBeNull();
  });

  it('clamps projectedPourCostPercentage to a minimum of 0%', () => {
    // improvement (10%) > current pour cost (5%) → result must not go negative
    const m = buildMetrics(50_000, 5, 0, 20, 10, 0);
    expect(m.projectedPourCostPercentage).toBe(0);
  });

  it('uses the correct tier monthly price for each tier index', () => {
    PRICING_TIERS.forEach((tier, idx) => {
      const m = buildMetrics(500_000, 20, 8, 20, 2, idx);
      expect(m.annualCost).toBe(tier.monthly * 12);
    });
  });

  it('handles zero labor hours without errors', () => {
    const m = buildMetrics(100_000, 20, 0, 0, 2, 0);
    // With no labor savings, annualSavingsBeforeSubscription equals annualRevenueBoosted
    expect(m.annualSavingsBeforeSubscription).toBe(m.annualRevenueBoosted);
  });

  it('handles minimum slider values without throwing', () => {
    expect(() => buildMetrics(10_000, 5, 0, 10, 1, 0)).not.toThrow();
  });

  it('handles maximum slider values without throwing', () => {
    expect(() => buildMetrics(10_000_000, 30, 160, 100, 6, 4)).not.toThrow();
  });
});
