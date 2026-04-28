"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type Logo = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  perPage?: number;
  perPageMobile?: number;
  interval?: number;
};

const DURATION = 8;

export function LogoCloud({
  logos,
  perPage = 4,
  perPageMobile,
}: LogoCloudProps) {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const effectivePerPage =
    !isDesktop && perPageMobile !== undefined ? perPageMobile : perPage;
  const totalPages = Math.ceil(logos.length / effectivePerPage);
  const [page, setPage] = useState(0);

  // Keep page index valid when perPage changes between breakpoints.
  useEffect(() => {
    setPage((p) => (p >= totalPages ? 0 : p));
  }, [totalPages]);
  const [barKey, setBarKey] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const start = page * effectivePerPage;
  const visible = logos.slice(start, start + effectivePerPage);

  const advance = useCallback(
    (dir: 1 | -1) => {
      setPage((p) => (p + dir + totalPages) % totalPages);
      setBarKey((k) => k + 1);
    },
    [totalPages],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl py-6">
      <style>{`
        @keyframes logoCloudProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => advance(-1)}
          aria-label="Previous logos"
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center text-white/50 transition hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative flex min-h-[24px] flex-1 items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14"
            >
              {visible.map((logo) => (
                <Image
                  alt={logo.alt}
                  className="pointer-events-none h-7 w-auto select-none brightness-0 invert sm:h-8 md:h-10"
                  key={`logo-${logo.alt}`}
                  src={logo.src}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => advance(1)}
          aria-label="Next logos"
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center text-white/50 transition hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-6 h-0.5 overflow-hidden rounded-full bg-white/10">
        <div
          key={barKey}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #3478F7, #3B81F7)",
            animation: `logoCloudProgress ${DURATION}s linear forwards`,
            animationPlayState: isInView ? "running" : "paused",
            width: 0,
          }}
          onAnimationEnd={() => advance(1)}
        />
      </div>
    </div>
  );
}
