import { HealthResponse } from "../lib/types";

async function getHealth(): Promise<HealthResponse> {
  const apiUrl = process.env.API_URL || "http://localhost:3001";
  const res = await fetch(`${apiUrl}/health`, {
    cache: "no-store", // Always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch health status");
  }

  return res.json();
}

export default async function HealthComponent() {
  const health = await getHealth();

  return (
    <div>
      <h2>Health Status</h2>
      <p>Status: {health.status}</p>
    </div>
  );
}
