"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/app/components/ui/testimonial-card";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials?: Array<{
    author: TestimonialAuthor;
    text: string;
    videoSrc: string;
    href?: string;
  }>;
  className?: string;
}

type TestimonialItem = NonNullable<
  TestimonialsSectionProps["testimonials"]
>[number];

const defaultTestimonials = [
  {
    author: {
      name: "John Doe",
      handle: "Bar Manager",
      avatar: "/testimonial1.jpg",
    },
    text: "BarIq has revolutionized our inventory management!",
    videoSrc: "/videos/testimonials/john-doe.mp4",
    href: "#",
  },
  {
    author: {
      name: "Jane Smith",
      handle: "Owner",
      avatar: "/testimonial1.jpg",
    },
    text: "We've seen a significant increase in efficiency since using BarIq.",
    videoSrc: "/videos/testimonials/jane-smith.mp4",
    href: "#",
  },
  {
    author: { name: "Jane Doe", handle: "Worker", avatar: "/testimonial1.jpg" },
    text: "We love this product!.",
    videoSrc: "/videos/testimonials/jane-doe.mp4",
    href: "#",
  },
  {
    author: { name: "John Smith", handle: "CEO", avatar: "/testimonial1.jpg" },
    text: "We love this product!.",
    videoSrc: "/videos/testimonials/john-smith.mp4",
    href: "#",
  },
];

export function TestimonialsSection({
  title = "What Our Customers Are Saying",
  description = "Hear from businesses that have transformed their operations with BarIq.",
  testimonials = defaultTestimonials,
  className,
}: TestimonialsSectionProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const cardsPerSlide = isMobile ? 1 : 2;
  const slides = testimonials.reduce<TestimonialItem[][]>(
    (acc, testimonial, index) => {
      const slideIndex = Math.floor(index / cardsPerSlide);
      if (!acc[slideIndex]) {
        acc[slideIndex] = [];
      }
      acc[slideIndex].push(testimonial);
      return acc;
    },
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const hasTestimonials = testimonials.length > 0;
  const hasMultipleSlides = slides.length > 1;

  const goPrev = () => {
    if (!hasTestimonials) return;
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!hasTestimonials) return;
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full max-w-4xl flex-col items-center justify-center px-4">
          <div className="relative flex w-full items-center justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-3 text-xl leading-none shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous testimonial"
              disabled={!hasMultipleSlides}
            >
              {"<"}
            </button>

            <div className="w-full overflow-hidden px-8 sm:px-12">
              {hasTestimonials ? (
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {slides.map((slide, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="grid min-w-full grid-cols-1 gap-6 md:grid-cols-2"
                    >
                      {slide.map((testimonial, testimonialIndex) => (
                        <TestimonialCard
                          key={`${slideIndex}-${testimonial.author.name}-${testimonialIndex}`}
                          {...testimonial}
                          className="mx-auto w-full max-w-full sm:max-w-[420px]"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border bg-muted/30 p-8 text-center text-sm text-muted-foreground">
                  No testimonials available yet.
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-3 text-xl leading-none shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next testimonial"
              disabled={!hasMultipleSlides}
            >
              {">"}
            </button>
          </div>

          {hasTestimonials && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={`${slide[0]?.author.name ?? "slide"}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border transition",
                    activeIndex === index
                      ? "scale-110 border-foreground bg-foreground"
                      : "border-muted-foreground/40 bg-muted-foreground/20 hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
