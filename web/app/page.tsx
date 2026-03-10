import styles from "./page.module.css";

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
      <Section>
        <Placeholder label="Hero" />
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
        <Placeholder label="Features" />
      </Section>

      {/* How It Works */}
      <Section>
        <Placeholder label="How It Works" />
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
        <Placeholder label="CTA" />
      </Section>
    </main>
  );
}
