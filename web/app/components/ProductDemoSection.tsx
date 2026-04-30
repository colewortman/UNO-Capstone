"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import VideoPlayer from "./ui/video-player";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
  fadeUpContainer,
  fadeUpItem,
  fadeUpItemSlow,
} from "@/lib/animations";

const VideoPlayerDemo = () => {
  return (
    <VideoPlayer src="/UNO-Capstone/videos/demo_placeholder.mp4" />
  );
};

export { VideoPlayerDemo };

export default function ProductDemoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Drive animation purely from natural scroll. No pin → no extra section height.
  //   "start 10%" — section top is 10% from the viewport top (about to slide
  //                 under the sticky navbar).
  //   "end 20%"   — section bottom is 20% from the viewport top (player nearly
  //                 off the screen).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 10%", "end 20%"],
  });

  // Step 1 — header slides down over the player and fades out.
  const headerY = useTransform(scrollYProgress, [0, 0.4], ["0%", "200%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Step 2 — overlay darkens.
  const overlayOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 0.85]);

  // Step 3 — player fades out before leaving the viewport.
  const playerOpacity = useTransform(scrollYProgress, [0.55, 1], [1, 0]);

  if (isMobile) {
    return (
      <div ref={sectionRef} className="relative text-white">
        <motion.div
          className="relative z-10"
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUpItem}
            style={{ willChange: "transform, opacity, filter" }}
            className="mb-4 text-center text-3xl font-semibold sm:text-4xl md:text-5xl"
          >
            See Liqr Vision in action
          </motion.h2>

          <motion.p
            variants={fadeUpItemSlow}
            style={{ willChange: "transform, opacity, filter" }}
            className="mx-auto mb-8 max-w-2xl text-center text-base text-white/70 sm:text-lg"
          >
            Watch how Liqr Vision helps teams move from slow manual counts to fast,
            guided inventory workflows.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-4xl">
          <VideoPlayerDemo />
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative text-white">
      <motion.div
        style={{ y: headerY, opacity: headerOpacity }}
        className="relative z-10"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="mb-4 text-center text-3xl font-semibold sm:text-4xl md:text-5xl"
        >
          See Liqr Vision in action
        </motion.h2>

        <motion.p
          variants={fadeUpItemSlow}
          style={{ willChange: "transform, opacity, filter" }}
          className="mx-auto mb-8 max-w-2xl text-center text-base text-white/70 sm:text-lg"
        >
          Watch how Liqr Vision helps teams move from slow manual counts to fast,
          guided inventory workflows.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: playerOpacity }}
        className="relative mx-auto w-full max-w-4xl"
      >
        <VideoPlayerDemo />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 rounded-xl bg-black"
        />
      </motion.div>
    </div>
  );
}
