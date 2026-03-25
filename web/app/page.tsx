import styles from "./page.module.css";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProductDemoSection from "./components/ProductDemoSection";
import FinalCTASection from "./components/FinalCTASection";
import FeatureHighlightsSection from "./components/FeatureHighlights";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
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
      <Section className={styles.heroSection}>
        <HeroSection />
      </Section>

      {/* Social Proof */}
      <Section>
        <Placeholder label="Social Proof" />
      </Section>

      {/* Problem / Solution */}
      <Section>
        <Placeholder label="Problem / Solution" />
      </Section>

      {/* Product Demo */}
      <Section>
        <ProductDemoSection />
      </Section>

      {/* How It Works */}
      <Section>
        <Placeholder label="How It Works" />
      </Section>

      {/* Feature Highlights */}
      <Section>
        <FeatureHighlightsSection />
      </Section>

      {/* Speed Comparison (differentiator) */}
      <Section>
        <Placeholder label="Speed Comparison" />
      </Section>

      {/* ROI Calculator */}
      <Section>
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

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
