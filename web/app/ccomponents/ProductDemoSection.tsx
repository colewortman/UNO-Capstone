export default function ProductDemoSection() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 text-4xl font-semibold">
          See Bar-IQ in action
        </h2>

        <p className="mb-12 text-lg text-white/70">
          Watch how Bar-IQ turns slow inventory counts into a fast,
          guided workflow.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10">
          <div className="aspect-video w-full bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="BarIQ Demo"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
