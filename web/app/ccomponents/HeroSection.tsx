export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-300">
          Battery-free RFID inventory intelligence
        </p>

        <h1 className="mb-6 text-5xl font-semibold leading-tight md:text-7xl">
          Take bar inventory in minutes, not hours.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75 md:text-xl">
          Bar-IQ helps bars track inventory faster, reduce shrinkage, and manage stock easily.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-8 py-4 text-lg font-medium text-white shadow-[0_0_35px_rgba(59,130,246,0.35)] transition hover:scale-[1.02]">
            Start Inventory
          </button>

          <button className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
            See Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
