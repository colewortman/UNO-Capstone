import ProblemSolutionSection from "./components/ProblemSolutionSection";
import styles from "./page.module.css";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProductDemoSection from "./components/ProductDemoSection";
import FinalCTASection from "./components/FinalCTASection";
import FeatureHighlightsSection from "./components/FeatureHighlights";
import SocialProofSection from "./components/SocialProofSection";
import ROICalculator from "./components/ROICalculator";
import { TestimonialsSection } from "./components/Testimonials";
import Comparisons from "./components/ComparisonSection";

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

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <Section id="hero" className={`${styles.heroSection} scroll-mt-20`}>
        <HeroSection />
      </Section>

      {/* Social Proof Logos */}
      <Section id="social-proof" className={`${styles.socialProofSection} scroll-mt-20`}>
        <SocialProofSection />
      </Section>

      {/* Problem / Solution */}
      <Section id="problem-solution" className="scroll-mt-20">
        <ProblemSolutionSection />
      </Section>

      {/* Product Demo */}
      <Section id="product-demo" className="scroll-mt-20">
        <ProductDemoSection />
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="scroll-mt-20">
        <TestimonialsSection />
      </Section>

      {/* Feature Highlights */}
      <Section id="feature-highlights" className="scroll-mt-20">
        <FeatureHighlightsSection />
      </Section>

      {/* Comparisons (differentiator) */}
      <Section id="comparisons" className={`${styles.sectionFull} scroll-mt-20`}>
        <Comparisons />
      </Section>

      {/* ROI Calculator */}
      <Section className="scroll-mt-20" id="roi-calculator">
        <ROICalculator />
      </Section>

      {/* CTA */}
      <Section id="final-cta" className="scroll-mt-20">
        <FinalCTASection />
      </Section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
