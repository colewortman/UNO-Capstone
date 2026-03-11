export default function ProductDemoSection() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-semibold md:text-5xl">
          See Bar-IQ in action
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-white/70">
          Watch how Bar-IQ helps teams move from slow manual counts
          to fast, guided inventory workflows.
        </p>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(59,130,246,0.12)] backdrop-blur-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Bar-IQ Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
