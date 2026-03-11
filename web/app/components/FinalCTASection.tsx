export default function FinalCTASection() {
  return (
    <section className="px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-8 py-16 shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-sm">
        <h2 className="mb-6 text-4xl font-semibold md:text-5xl">
          Ready to modernize your bar inventory?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
          Join bars using Bar-IQ to save time, reduce shrinkage,
          and simplify inventory management.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-lg font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]">
            Book a Demo
          </button>

          <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
