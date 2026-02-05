import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import HealthComponent from "../../components/HealthComponent";
import "@testing-library/jest-dom/vitest";

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("HealthComponent", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should render health status when API returns OK", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ status: "OK" }),
    });

    render(await HealthComponent());
    const statusElement = screen.getByText("Status: OK");
    expect(statusElement).toBeInTheDocument();
  });

  it("should throw error when API request fails", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    });

    await expect(HealthComponent()).rejects.toThrow(
      "Failed to fetch health status",
    );
  });
});
