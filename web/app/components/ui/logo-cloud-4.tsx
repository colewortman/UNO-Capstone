"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  perPage?: number;
  interval?: number;
};

const DURATION = 8;

export function LogoCloud({ logos, perPage = 4 }: LogoCloudProps) {
  const totalPages = Math.ceil(logos.length / perPage);
  const [page, setPage] = useState(0);
  const [barKey, setBarKey] = useState(0);

  const start = page * perPage;
  const visible = logos.slice(start, start + perPage);

  const advance = useCallback(
    (dir: 1 | -1) => {
      setPage((p) => (p + dir + totalPages) % totalPages);
      setBarKey((k) => k + 1);
    },
    [totalPages],
  );

  useEffect(() => {
    const timer = setTimeout(() => advance(1), DURATION * 1000);
    return () => clearTimeout(timer);
  }, [page, barKey, advance]);

  return (
    <div className="relative mx-auto max-w-3xl py-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => advance(-1)}
          aria-label="Previous logos"
          className="shrink-0 text-white/50 transition hover:text-white"
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
              className="flex items-center justify-center gap-10 md:gap-14"
            >
              {visible.map((logo) => (
                <img
                  alt={logo.alt}
                  className="pointer-events-none h-4 select-none brightness-0 invert md:h-5"
                  height="auto"
                  key={`logo-${logo.alt}`}
                  loading="lazy"
                  src={logo.src}
                  width="auto"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => advance(1)}
          aria-label="Next logos"
          className="shrink-0 text-white/50 transition hover:text-white"
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
        <motion.div
          key={barKey}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #3478F7, #3B81F7)",
          }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: DURATION, ease: "linear" }}
        />
      </div>
    </div>
  );
}
