"use client";

import { useMemo, useState } from "react";
import FooterSection from "../components/FooterSection";

const faqItems = [
  {
    question: "How long does inventory usually take?",
    answer:
      "Most bar teams can complete a session in around 15 to 20 minutes, depending on venue size, layout, and bottle count.",
  },
  {
    question: "Do I need special hardware?",
    answer:
      "Bar-IQ is designed to keep setup simple. The workflow is centered around guided inventory counting with minimal friction for teams getting started.",
  },
  {
    question: "What does Bar-IQ actually improve?",
    answer:
      "It reduces manual counting time, improves visibility into shrinkage, and gives managers cleaner reporting after each session.",
  },
  {
    question: "Can multiple locations use it?",
    answer:
      "Yes. Bar-IQ can support multiple bar environments and gives teams a clearer way to compare counts, sessions, and results across locations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the plan selected. The pricing structure is designed to align each tier with the operational value and ROI it can deliver.",
  },
];

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return faqItems;

    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(value) ||
        item.answer.toLowerCase().includes(value),
    );
  }, [query]);

  return (
    <>
    <section id="faq" className="bg-black text-white">
      {/* Header */}
      <div className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs">
              FAQ
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:whitespace-nowrap">
              Advice and answers from the Bar-IQ team
            </h2>
          </div>

          <div className="mt-6 sm:mt-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpenIndex(0);
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
          {filteredFaqs.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 text-white/60">
              No matching questions found.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={`${item.question}-${index}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_30px_rgba(59,130,246,0.03)]"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex((prev) => (prev === index ? null : index))
                      }
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition hover:bg-white/[0.02] sm:px-6 sm:py-6 md:px-8"
                    >
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                          {item.question}
                        </h3>

                        {!isOpen && (
                          <p className="mt-3 max-w-4xl text-sm leading-7 text-white/55 sm:text-base">
                            {item.answer}
                          </p>
                        )}
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
                  </div>
                );
              })}
            </div>
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
                  Bar-IQ fits into your workflow.
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
