import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import ROICalculator from "@/app/components/ROICalculator";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

const advanceMetricTimer = () => {
  act(() => {
    vi.advanceTimersByTime(150);
  });
};

describe("ROICalculator", () => {
  it("renders the default ROI metrics from the initial formula values", () => {
    render(<ROICalculator />);

    expect(screen.getByRole("heading", { name: "ROI Calculator" })).toBeInTheDocument();
    expect(screen.getAllByText("Current Pour Cost").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$2,400").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("$100").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$1,920").length).toBeGreaterThan(0);
    expect(screen.getAllByText("113%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$1,072").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Based on the Starter plan at $79/mo."),
    ).toBeInTheDocument();
  });

  it("automatically selects the matching pricing tier when annual sales change", () => {
    vi.useFakeTimers();
    render(<ROICalculator />);

    const sliders = screen.getAllByRole("slider");
    fireEvent.change(sliders[0], { target: { value: "800000" } });
    advanceMetricTimer();

    expect(screen.getByRole("button", { name: "Professional" })).toHaveClass("border-white", "bg-white", "text-black");
    expect(screen.getByText("Professional tier selected")).toBeInTheDocument();
    expect(screen.getAllByText("$192,000").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$8,000").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$6,332").length).toBeGreaterThan(0);
    expect(screen.getAllByText("176%").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Based on the Professional plan at $299/mo."),
    ).toBeInTheDocument();
  });

  it("recalculates savings and ROI when inputs and tier selection change", () => {
    vi.useFakeTimers();
    render(<ROICalculator />);

    const sliders = screen.getAllByRole("slider");
    fireEvent.change(sliders[1], { target: { value: "30" } });
    fireEvent.change(sliders[2], { target: { value: "4" } });
    fireEvent.change(sliders[3], { target: { value: "10" } });
    fireEvent.change(sliders[4], { target: { value: "30" } });
    fireEvent.click(screen.getByRole("button", { name: "Essential" }));
    advanceMetricTimer();

    expect(screen.getAllByText("$3,000").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$400").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$3,600").length).toBeGreaterThan(0);
    expect(screen.getAllByText("124%").length).toBeGreaterThan(0);
    expect(screen.getAllByText("$2,212").length).toBeGreaterThan(0);
    expect(
      screen.getByText("Projected pour cost improvement from 30.0% to 26.0%."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Based on the Essential plan at $149/mo."),
    ).toBeInTheDocument();
  });
});