"use client";

import { useEffect, useMemo, useState } from "react";

const faqItems = [
  {
    question: "How long does inventory usually take?",
    answer:
      "Most bar teams can complete a session in around 15 to 20 minutes, depending on size, layout, and number of bottles.",
  },
  {
    question: "Do I need special hardware?",
    answer:
      "Bar-IQ is designed to keep the workflow simple. The system is centered around fast, guided inventory counting with minimal setup friction.",
  },
  {
    question: "What does Bar-IQ actually improve?",
    answer:
      "It helps reduce manual counting time, improves visibility into shrinkage, and gives managers cleaner reporting after each session.",
  },
  {
    question: "Can multiple locations use it?",
    answer:
      "Yes. The workflow can support multiple bar environments and gives teams a clearer way to compare counts, sessions, and results across locations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the plan selected. The pricing page is designed to show the available tiers and connect each one to projected ROI.",
  },
];

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredFaqs = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) return faqItems;

    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(trimmed) ||
        item.answer.toLowerCase().includes(trimmed),
    );
  }, [query]);

  useEffect(() => {
    if (activeIndex > filteredFaqs.length - 1) {
      setActiveIndex(0);
    }
  }, [filteredFaqs, activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeItem = filteredFaqs[activeIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="faq"
      className="relative px-4 py-8 text-white sm:px-6 sm:py-10 md:px-10 md:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-blue-300 sm:text-xs">
            FAQ
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Questions, answered simply.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Browse common questions, search quickly, and tap any item to expand
            instantly on mobile.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="max-w-2xl p-2 sm:p-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Search questions..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-11 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-300/50 focus:bg-white/7 sm:text-base"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35">
                ⌕
              </span>
            </div>
          </div>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 md:p-8 text-white/65">
            No matching questions found.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 xl:gap-10">
            {/* Left column */}
            <div className="p-2 sm:p-4">
              <div className="space-y-3">
                {filteredFaqs.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={`${item.question}-${index}`}
                      className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]"
                    >
                      <button
                        onClick={() => setActiveIndex(index)}
                        className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition sm:px-5 sm:py-5 ${
                          isActive
                            ? "text-white"
                            : "text-white/75 hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        <span className="text-base font-medium leading-6 sm:text-lg md:text-xl">
                          {item.question}
                        </span>

                        <span
                          className={`shrink-0 text-lg transition-transform duration-300 ${
                            isActive
                              ? "rotate-90 text-blue-300"
                              : "text-white/35"
                          }`}
                        >
                          →
                        </span>
                      </button>

                      {/* Mobile answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 lg:hidden ${
                          isActive
                            ? "max-h-96 border-t border-white/8 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
                          <p className="text-sm leading-7 text-white/65 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop answer panel */}
            <div className="hidden lg:block p-2 sm:p-4">
              <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm md:p-8 xl:p-10">
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-blue-300">
                  {activeIndex + 1} / {filteredFaqs.length}
                </div>

                <h3 className="text-2xl font-semibold leading-tight xl:text-3xl">
                  {activeItem.question}
                </h3>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 xl:text-lg">
                  {activeItem.answer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md transition-all hover:bg-white/15 sm:bottom-6 sm:right-6 ${
          showScrollTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        ↑
      </button>
    </section>
  );
}
