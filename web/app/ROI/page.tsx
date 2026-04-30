import ROICalculator from "../components/ROICalculator";
import FooterSection from "../components/FooterSection";

function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative flex w-full items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:min-h-[calc(100svh-4rem)] lg:items-start lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-[var(--container-content)]">
        {children}
      </div>
    </section>
  );
}

export default function ROIPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Section
        id="roi-calculator"
        className="scroll-mt-20 sm:[@media(max-height:800px)]:py-10 lg:[@media(max-height:800px)]:py-12"
      >
        <ROICalculator />
      </Section>

      <FooterSection />
    </main>
  );
}
