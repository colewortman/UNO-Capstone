"use client";

import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black px-4 py-16 text-white sm:px-6 md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-blue-300">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Questions, answered simply.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div className="space-y-2">
            {faqItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.question}
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center justify-between border-b py-6 text-left transition ${
                    isActive
                      ? "border-white/20 text-white"
                      : "border-white/10 text-white/45 hover:text-white/75"
                  }`}
                >
                  <span className="text-lg font-medium md:text-xl">
                    {item.question}
                  </span>

                  <span
                    className={`ml-3 text-xl transition md:ml-6 ${
                      isActive ? "text-blue-300" : "text-white/30"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="rounded-4x1 border border-white/10 bg-white/3 p-6 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8 md:p-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-blue-300">
              {activeIndex + 1} / {faqItems.length}
            </div>

            <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
              {faqItems[activeIndex].question}
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              {faqItems[activeIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
