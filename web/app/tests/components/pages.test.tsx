import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

// Mock next/link to render a plain anchor
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

import PricingPage from "@/app/pricing/page";
import FAQPage from "@/app/faq/page";

afterEach(() => cleanup());

describe("Pricing Page", () => {
  it("renders the heading", () => {
    render(<PricingPage />);
    expect(
      screen.getByRole("heading", {
        name: "From concept to launch — all in one place.",
      }),
    ).toBeInTheDocument();
  });

  it("has a link back to home", () => {
    render(<PricingPage />);
    const link = screen.getByRole("link", { name: /Back to Home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});

describe("FAQ Page", () => {
  it("renders the heading", () => {
    render(<FAQPage />);
    expect(
      screen.getByRole("heading", {
        name: /Advice and answers from the Liqr Vision team/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders FAQ questions as interactive buttons", () => {
    render(<FAQPage />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("How long does inventory usually take?").length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("displays the first FAQ answer by default", () => {
    render(<FAQPage />);
    expect(
      screen.getAllByText(/Most bar teams can complete a session/).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders the search input", () => {
    render(<FAQPage />);
    expect(
      screen.getByPlaceholderText(/Search for questions/i),
    ).toBeInTheDocument();
  });

  it("renders a Contact Us link in the bottom banner", () => {
    render(<FAQPage />);
    const link = screen.getByRole("link", { name: /Contact Us/i });
    expect(link).toHaveAttribute("href", "/contact");
  });
});
