import Link from "next/link";
import HealthComponent from "../components/HealthComponent";

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Health Status</h1>
      <HealthComponent />
      <Link href="/" className="mt-4 text-blue-500 underline">
        Back to Home
      </Link>
    </div>
  );
}
