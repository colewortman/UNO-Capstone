/**
 * @file HeroSection.tsx
 * @description Responsive hero section for the Bar-IQ landing page.
 */

"use client";

import Image from "next/image";
import { Apple, User, Zap } from "lucide-react";
import { motion } from "motion/react";
import {
  fadeUpContainer,
  fadeUpItem,
  fadeUpItemSlow,
} from "@/lib/animations";
import heroImage from "@/public/hero_1.4.webp";
import { LiquidMetalButton } from "./ui/liquid-metal-button";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
];

export default function HeroSection() {
  return (
    <div className="grid w-full -translate-y-4 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,300px)] lg:gap-12 xl:-translate-y-6">
      {/* left side — text + CTA */}
      <motion.div
        className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="mb-3 inline-flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-blue-300 lg:mb-4 lg:justify-start"
        >
          <Zap className="h-4 w-4 fill-blue-300 text-blue-300" />
          Camera-based mobile app
        </motion.p>

        <motion.h1
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Bar inventory in minutes, not hours.
        </motion.h1>

        {/* mobile/tablet phone */}
        <div className="mt-4 flex justify-center lg:hidden">
          <Image
            src={heroImage}
            alt="Bar-IQ inventory scanning interface"
            className="h-auto w-auto max-h-[min(64svh,38rem,calc(100svh_-_22rem))] [@media(min-width:380px)]:max-h-[min(66svh,40rem,calc(100svh_-_22rem))] [@media(min-width:470px)]:max-h-[min(70svh,42rem,calc(100svh_-_22rem))] [@media(max-height:700px)]:max-h-[min(60svh,32rem,calc(100svh_-_24rem))] sm:max-h-[min(72svh,48rem,calc(100svh_-_28rem))] md:max-h-[min(76svh,54rem,calc(100svh_-_28rem))]"
            priority
          />
        </div>

        <motion.p
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8 [@media(max-height:700px)]:text-sm [@media(max-height:700px)]:leading-6"
        >
          Faster counts. Less shrinkage. Cleaner visibility for bar managers.
        </motion.p>

        <motion.div
          variants={fadeUpItemSlow}
          style={{ willChange: "transform, opacity, filter" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-8 lg:justify-start [@media(max-height:700px)]:mt-5"
        >
          <a
            href="#"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-linear-to-r from-blue-500 to-blue-400 px-5 text-sm font-medium text-white shadow-[0_0_40px_rgba(59,130,246,0.28)] transition hover:scale-[1.01]"
          >
            <Apple className="h-4 w-4 fill-white text-white" />
            Download App
          </a>

          <LiquidMetalButton
            label="Watch Demo"
            onClick={() =>
              document
                .getElementById("product-demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </motion.div>
      </motion.div>

      {/* desktop phone */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src={heroImage}
          alt="Bar-IQ inventory scanning interface"
          className="h-auto w-auto lg:max-h-[28rem] xl:max-h-[32rem]"
          priority
        />
      </div>

      {/* right side */}
      <motion.div
        className="hidden flex-col justify-center gap-5 lg:flex lg:max-w-[300px]"
        variants={fadeUpContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="max-w-[260px] text-left text-sm leading-7 text-white/55 xl:text-base"
        >
          Bottle-level visibility for faster counts, cleaner reporting, and less
          manual inventory work.
        </motion.div>

        <motion.div
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="flex flex-col items-start gap-3 pt-1"
        >
          <div className="flex items-center justify-start gap-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar, index) => (
                <div
                  key={avatar}
                  className="h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[0_0_24px_rgba(59,130,246,0.16)] backdrop-blur-sm"
                >
                  <img
                    src={avatar}
                    alt={`Bar-IQ customer ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-4xl font-semibold text-white">50K+</div>
          </div>

          <p className="max-w-[240px] text-left text-sm text-white/55 xl:text-base">
            Trusted by bars and hospitality teams across multiple locations.
          </p>
        </motion.div>

        <motion.a
          variants={fadeUpItemSlow}
          style={{ willChange: "transform, opacity, filter" }}
          href="#testimonials"
          className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          <User className="h-4 w-4 fill-white text-white" />
          See Testimonials
        </motion.a>
      </motion.div>
    </div>
  );
}
