import ProblemSolutionSection from "./components/ProblemSolutionSection";
import styles from "./page.module.css";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ProductDemoSection from "./components/ProductDemoSection";
import FinalCTASection from "./components/FinalCTASection";
import FeatureHighlightsSection from "./components/FeatureHighlights";
import SocialProofSection from "./components/SocialProofSection";
import { TestimonialsSection } from "./components/Testimonials";
import Comparisons from "./components/ComparisonSection";
import HowItWorksSection from "./components/HowItWorks";

function Section({
  children,
  className,
  id,
  full,
  flush,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Full-bleed: drop horizontal padding and max-width rail. */
  full?: boolean;
  /** Drop the standard vertical section padding (e.g. Hero uses viewport height instead). */
  flush?: boolean;
}) {
  const horizontal = full ? "" : "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16";
  const vertical = flush ? "" : "py-16 sm:py-20 lg:py-24";
  return (
    <section
      id={id}
      className={`relative flex w-full items-center justify-center overflow-hidden ${horizontal} ${vertical} ${className ?? ""}`}
    >
      <div
        className={`mx-auto w-full ${full ? "" : "max-w-[var(--container-content)]"}`}
      >
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero — viewport-tall; keeps standard vertical padding for breathing room when content exceeds 100vh */}
      <Section
        id="hero"
        flush
        className={`${styles.heroSection} scroll-mt-20 min-h-[calc(100svh-4rem)] !items-start px-4 py-4 sm:px-6 sm:py-10 md:px-8 lg:!items-center lg:min-h-svh lg:px-12 lg:py-12 xl:px-16`}
      >
        <HeroSection />
      </Section>

      {/* Social Proof Logos */}
      <Section
        id="social-proof"
        className={`${styles.socialProofSection} scroll-mt-20`}
      >
        <SocialProofSection />
      </Section>

      {/* Problem / Solution */}
      <Section id="problem-solution" className="scroll-mt-20">
        <ProblemSolutionSection />
      </Section>

      {/* How It Works */}
      <Section
        id="how-it-works"
        className="scroll-mt-20 [@media(max-height:880px)]:py-10 md:[@media(max-height:880px)]:py-12"
      >
        <HowItWorksSection />
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
      <Section
        id="feature-highlights"
        className="scroll-mt-20 [@media(max-height:880px)]:py-10 md:[@media(max-height:880px)]:py-12"
      >
        <FeatureHighlightsSection />
      </Section>

      {/* Comparisons */}
      <Section id="comparisons" full flush className="scroll-mt-20">
        <Comparisons />
      </Section>

      {/* CTA */}
      <Section
        id="final-cta"
        className="scroll-mt-20 [@media(max-height:880px)]:py-10 md:[@media(max-height:880px)]:py-12"
      >
        <FinalCTASection />
      </Section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
