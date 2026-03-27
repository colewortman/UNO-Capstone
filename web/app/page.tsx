import ProblemSolutionSection from "./components/ProblemSolutionSection";
import styles from "./page.module.css";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProductDemoSection from "./components/ProductDemoSection";
import FinalCTASection from "./components/FinalCTASection";
import FeatureHighlightsSection from "./components/FeatureHighlights";
import SocialProofSection from "./components/SocialProofSection";
import ROICalculator from "./components/ROICalculator";
import HowItWorksSection from "./components/HowItWorksSection";
import {TestimonialsSection} from "./components/Testimonials";

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
      <Section className={styles.heroSection}>
        <HeroSection />
      </Section>

      {/* Social Proof Logos */}
      <Section className={styles.socialProofSection}>
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

       {/* Testimonials */}
      <Section id="testimonials" className="scroll-mt-20">
        <TestimonialsSection />
      </Section>

      {/* How It Works */}
      <Section>
        <HowItWorksSection />
      </Section>

      {/* Feature Highlights */}
      <Section>
        <FeatureHighlightsSection />
      </Section>

      {/* Comparisons (differentiator) */}
      <Section>
        <Placeholder label="Comparison" />
      </Section>

      {/* ROI Calculator */}
      <Section className="scroll-mt-20" id="roi-calculator">
        <ROICalculator/>
      </Section>

      {/* Competitor Comparison */}
      <Section>
        <Placeholder label="Competitor Comparison" />
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
