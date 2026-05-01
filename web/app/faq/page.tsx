"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  fadeUpContainer,
  fadeUpItem,
} from "@/lib/animations";
import FooterSection from "../components/FooterSection";

// Sequential card entrance — same pattern Pricing/Testimonials use.
const cardsStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

// Returns a relevance score for `item` against `value`, or null if no match.
// Lower scores are better. Question hits beat answer hits; earlier hits beat later.
const matchScore = (
  item: { question: string; answer: string },
  value: string,
): number | null => {
  const qIdx = item.question.toLowerCase().indexOf(value);
  const aIdx = item.answer.toLowerCase().indexOf(value);
  if (qIdx === -1 && aIdx === -1) return null;
  return (
    (qIdx === -1 ? 10_000 : qIdx) + (aIdx === -1 ? 10_000 : aIdx + 1_000)
  );
};

const faqItems = [
  {
    question: "How long does inventory usually take?",
    answer:
      "Most bar teams can complete a session in around 15 to 20 minutes, depending on venue size, layout, and bottle count.",
  },
  {
    question: "Do I need special hardware?",
    answer:
      "Liqr Vision is designed to keep setup simple. The workflow is centered around guided inventory counting with minimal friction for teams getting started.",
  },
  {
    question: "What does Liqr Vision actually improve?",
    answer:
      "It reduces manual counting time, improves visibility into shrinkage, and gives managers cleaner reporting after each session.",
  },
  {
    question: "Can multiple locations use it?",
    answer:
      "Yes. Liqr Vision can support multiple bar environments and gives teams a clearer way to compare counts, sessions, and results across locations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the plan selected. The pricing structure is designed to align each tier with the operational value and ROI it can deliver.",
  },
];

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Per-card visibility flags + the index of the best match. We keep all cards
  // mounted (so the parent's one-shot stagger animation isn't disrupted) and
  // just hide non-matching cards via display:none.
  const { visibleFlags, anyMatch } = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return {
        visibleFlags: faqItems.map(() => true),
        anyMatch: true,
      };
    }
    const flags = faqItems.map((item) => matchScore(item, value) !== null);
    return { visibleFlags: flags, anyMatch: flags.some(Boolean) };
  }, [query]);

  return (
    <>
      <section
        id="faq"
        className="flex flex-col justify-center bg-black text-white lg:min-h-[calc(100svh-4rem)]"
      >
        {/* Header */}
        <div className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="max-w-5xl"
              variants={fadeUpContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                variants={fadeUpItem}
                style={{ willChange: "transform, opacity, filter" }}
                className="mb-3 text-[11px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs"
              >
                FAQ
              </motion.p>

              <motion.h2
                variants={fadeUpItem}
                style={{ willChange: "transform, opacity, filter" }}
                className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:whitespace-nowrap"
              >
                Advice and answers from the Liqr Vision team
              </motion.h2>
            </motion.div>

            <div className="mt-6 sm:mt-8">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    const next = e.target.value;
                    setQuery(next);
                    const value = next.trim().toLowerCase();
                    if (!value) {
                      setOpenIndex(null);
                      return;
                    }
                    // Auto-open the most relevant match so the user immediately
                    // sees the answer to what they're searching for.
                    let bestIdx: number | null = null;
                    let bestScore = Infinity;
                    faqItems.forEach((item, i) => {
                      const score = matchScore(item, value);
                      if (score !== null && score < bestScore) {
                        bestScore = score;
                        bestIdx = i;
                      }
                    });
                    setOpenIndex(bestIdx);
                  }}
                  placeholder="Search for questions..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 pl-14 text-base text-white outline-none transition placeholder:text-white/45 focus:border-blue-300/50 focus:bg-white/[0.08] sm:text-lg"
                />
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-white/50">
                  ⌕
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="px-4 pb-10 sm:px-6 sm:pb-12 md:px-8 md:pb-14 lg:px-12 lg:pb-16 xl:px-16">
          <div className="mx-auto max-w-7xl">
            {!anyMatch ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 text-white/60">
                No matching questions found.
              </div>
            ) : (
              <motion.div
                className="space-y-4"
                variants={cardsStaggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {faqItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  const isVisible = visibleFlags[index];

                  return (
                    <motion.div
                      key={item.question}
                      variants={fadeUpItem}
                      style={{ willChange: "transform, opacity, filter" }}
                      className={`overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(59,130,246,0.03)] ${
                        isVisible ? "" : "hidden"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setOpenIndex((prev) =>
                            prev === index ? null : index,
                          )
                        }
                        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.02] sm:px-6 sm:py-6 md:px-8"
                      >
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                            {item.question}
                          </h3>
                        </div>

                        <span
                          className={`mt-1 shrink-0 text-xl text-blue-300 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? "max-h-96 border-t border-white/10 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-5 py-5 sm:px-6 sm:py-6 md:px-8">
                          <p className="max-w-4xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Bottom banner */}
            <div className="mt-10 sm:mt-12 md:mt-14">
              <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:px-6 sm:py-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-7">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Have more questions?
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                    Our team can help you understand setup, pricing, and how
                    Liqr Vision fits into your workflow.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] transition hover:scale-[1.01] sm:px-7 sm:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
