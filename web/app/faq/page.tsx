import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <Link
          href="/"
          className="mt-4 text-lg font-medium text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
