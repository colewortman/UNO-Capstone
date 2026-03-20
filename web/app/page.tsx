import ProblemSolutionSection from "./components/ProblemSolutionSection";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";
import ProductDemoSection from "./components/ProductDemoSection";
import FinalCTASection from "./components/FinalCTASection";
import SocialProofSection from "./components/SocialProofSection";
import HowItWorksSection from "./components/HowItWorksSection";

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
    <section id={id} className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.sectionInner}>{children}</div>
    </section>
  );
}

function Placeholder({ label }: { label: string }) {
  return <div className={styles.placeholder}>{label}</div>;
}

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Section>
        <HeroSection />
      </Section>

      {/* Social Proof */}
      <Section>
        <SocialProofSection />
      </Section>

      {/* Problem / Solution */}
      <Section>
        <ProblemSolutionSection />
      </Section>

      {/* Product Demo */}
      <Section>
        <ProductDemoSection />
      </Section>

      {/* How It Works */}
      <Section>
        <HowItWorksSection />
      </Section>

      {/* Feature Highlights */}
      <Section>
        <Placeholder label="Feature Highlights" />
      </Section>

      {/* Speed Comparison (differentiator) */}
      <Section>
        <Placeholder label="Speed Comparison" />
      </Section>

      {/* ROI Calculator */}
      <Section className="scroll-mt-20" id="roi-calculator">
        <Placeholder label="ROI Calculator" />
      </Section>

      {/* Competitor Comparison */}
      <Section>
        <Placeholder label="Competitor Comparison" />
      </Section>

      {/* Testimonials */}
      <Section>
        <Placeholder label="Testimonials" />
      </Section>

      {/* FAQ */}
      <Section>
        <Placeholder label="FAQ" />
      </Section>

      {/* CTA */}
      <Section>
        <FinalCTASection />
      </Section>
    </main>
  );
}
