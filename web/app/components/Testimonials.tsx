"use client";

import { useEffect, useMemo, useState } from "react";
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
    thumbnailSrc?: string;
    href?: string;
  }>;
  className?: string;
}

const defaultTestimonials: NonNullable<TestimonialsSectionProps["testimonials"]> = [
  {
    author: {
      name: "John Doe",
      handle: "Bar Manager",
      avatar: "/UNO-Capstone/testimonial2.jpg",
    },
    text: "BarIq has revolutionized our inventory management!",
    videoSrc: "/UNO-Capstone/videos/testimonials/johndoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Jane Smith",
      handle: "Owner",
      avatar: "/UNO-Capstone/testimonial3.jpg",
    },
    text: "We've seen a significant increase in efficiency since using BarIq.",
    videoSrc: "/UNO-Capstone/videos/testimonials/janedoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Jane Doe",
      handle: "Operations Lead",
      avatar: "/UNO-Capstone/testimonial2.jpg",
    },
    text: "BarIq helps our team move faster with fewer inventory mistakes.",
    videoSrc: "/UNO-Capstone/videos/testimonials/janedoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "John Smith",
      handle: "CEO",
      avatar: "/UNO-Capstone/testimonial3.jpg",
    },
    text: "Implementation was smooth and the ROI showed up quickly.",
    videoSrc: "/UNO-Capstone/videos/testimonials/johndoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Mia Torres",
      handle: "General Manager",
      avatar: "/UNO-Capstone/testimonial3.jpg",
    },
    text: "Ordering is cleaner and our weekly counts now take half the time.",
    videoSrc: "/UNO-Capstone/videos/testimonials/johndoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Liam Carter",
      handle: "Owner",
      avatar: "/UNO-Capstone/testimonial3.jpg",
    },
    text: "The dashboards made it easy to spot waste and fix margin leaks fast.",
    videoSrc: "/UNO-Capstone/videos/testimonials/janedoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Ava Brooks",
      handle: "Operations Director",
      avatar: "/UNO-Capstone/testimonial2.jpg",
    },
    text: "Our team adopted it quickly, and training new staff is much easier now.",
    videoSrc: "/UNO-Capstone/videos/testimonials/janedoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
  {
    author: {
      name: "Noah Bell",
      handle: "Regional Lead",
      avatar: "/UNO-Capstone/testimonial3.jpg",
    },
    text: "We rolled this out across locations and saw immediate process consistency.",
    videoSrc: "/UNO-Capstone/videos/testimonials/johndoe.mp4",
    thumbnailSrc: "/UNO-Capstone/testimonial1.jpg",
  },
];

export function TestimonialsSection({
  title = "What Our Customers Are Saying",
  description = "Hear from businesses that have transformed their operations with BarIq.",
  testimonials = defaultTestimonials,
  className,
}: TestimonialsSectionProps) {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const cardsPerPage = isDesktop ? 4 : isTablet ? 2 : 1;

  const pages = useMemo(() => {
    const result: typeof testimonials[] = [];
    for (let i = 0; i < testimonials.length; i += cardsPerPage) {
      result.push(testimonials.slice(i, i + cardsPerPage));
    }
    return result;
  }, [cardsPerPage, testimonials]);

  const [activePage, setActivePage] = useState(0);
  const pageCount = pages.length;
  const hasMultiplePages = pageCount > 1;

  useEffect(() => {
    if (activePage >= pageCount) {
      setActivePage(Math.max(0, pageCount - 1));
    }
  }, [activePage, pageCount]);

  const goToPrev = () => {
    if (!hasMultiplePages) return;
    setActivePage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const goToNext = () => {
    if (!hasMultiplePages) return;
    setActivePage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
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

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-2 sm:px-4">
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={goToPrev}
            disabled={!hasMultiplePages}
            className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-lg shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 sm:left-3"
          >
            {"<"}
          </button>

          <div className="w-full overflow-hidden px-8 sm:px-12 lg:px-14">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activePage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={`page-${pageIndex}`}
                  className={cn(
                    "grid min-w-full gap-4",
                    cardsPerPage === 4
                      ? "grid-cols-4"
                      : cardsPerPage === 2
                        ? "grid-cols-2"
                        : "grid-cols-1",
                  )}
                >
                  {page.map((testimonial, i) => (
                    <TestimonialCard
                      key={`${pageIndex}-${i}-${testimonial.author.name}`}
                      {...testimonial}
                      className="h-full max-w-none"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={goToNext}
            disabled={!hasMultiplePages}
            className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-lg shadow-sm transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40 sm:right-3"
          >
            {">"}
          </button>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>

        {pageCount > 0 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {pages.map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Go to testimonials page ${index + 1}`}
                onClick={() => setActivePage(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border transition",
                  activePage === index
                    ? "scale-110 border-foreground bg-foreground"
                    : "border-muted-foreground/40 bg-muted-foreground/20 hover:bg-muted-foreground/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
