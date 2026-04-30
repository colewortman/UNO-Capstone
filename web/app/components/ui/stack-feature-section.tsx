"use client";

import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  fadeUpContainer,
  fadeUpItem,
  fadeUpItemSlow,
} from "@/lib/animations";
import lvLogoIcon from "@/public/lv-logo-icon.svg";
import alohaLogo from "@/public/pos icons/Aloha.png";
import cloverLogo from "@/public/pos icons/Clover.png";
import lightspeedLogo from "@/public/pos icons/Lightspeed.png";
import marketmanLogo from "@/public/pos icons/MarketMan.png";
import r365Logo from "@/public/pos icons/R365.jpg";
import revelLogo from "@/public/pos icons/Revel.png";
import shift4Logo from "@/public/pos icons/Shift4.png";
import smarttabLogo from "@/public/pos icons/Smarttab.png";
import spotonLogo from "@/public/pos icons/Spoton.png";
import squareLogo from "@/public/pos icons/Square.png";
import toastLogo from "@/public/pos icons/Toast.jpg";
import wiskLogo from "@/public/pos icons/Wisk.png";

const posLogos = [
  { src: alohaLogo, alt: "Aloha" },
  { src: cloverLogo, alt: "Clover", bg: "#3FAE2A" },
  { src: lightspeedLogo, alt: "Lightspeed" },
  { src: marketmanLogo, alt: "MarketMan" },
  { src: r365Logo, alt: "Restaurant365", bg: "#DA1F26" },
  { src: revelLogo, alt: "Revel", bg: "#3DCDF1" },
  { src: shift4Logo, alt: "Shift4" },
  { src: smarttabLogo, alt: "Smarttab" },
  { src: spotonLogo, alt: "SpotOn" },
  { src: squareLogo, alt: "Square" },
  { src: toastLogo, alt: "Toast", bg: "#FF4C00" },
  { src: wiskLogo, alt: "Wisk", bg: "#3B8BF7" },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(posLogos.length / orbitCount);

  return (
    <section className="relative flex w-full items-center justify-center bg-black px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:min-h-[calc(100svh-4rem)] lg:px-12 lg:py-24 xl:px-16">
      <div className="mx-auto grid w-full max-w-[var(--container-content)] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:gap-12">
      {/* Left side: Heading and Text */}
      <motion.div
        className="z-10 mx-auto max-w-lg text-center lg:mx-0 lg:text-left"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="mb-3 text-xs uppercase tracking-[0.35em] text-blue-300 lg:mb-4"
        >
          POS Integrations
        </motion.p>
        <motion.h1
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Plugs into the systems you already run.
        </motion.h1>
        <motion.p
          variants={fadeUpItem}
          style={{ willChange: "transform, opacity, filter" }}
          className="mt-4 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
        >
          Counts, variance, and reorder data flow straight into your POS and
          back-office tools. No double entry. No spreadsheets. Just cleaner
          numbers in the dashboards your team already trusts.
        </motion.p>
        <motion.div
          variants={fadeUpItemSlow}
          style={{ willChange: "transform, opacity, filter" }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <Button variant="default">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline">
            <Link href="#">Request an Integration</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right side: Orbit animation */}
      <div className="relative mx-auto aspect-square w-full max-w-[40rem]">
        <div className="absolute left-1/2 top-1/2 flex h-[40rem] w-[40rem] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.55] items-center justify-center sm:scale-[0.8] md:scale-100">
          {/* Center Circle */}
          <div className="z-10 w-24 h-24 rounded-full bg-gray-800 shadow-lg flex items-center justify-center">
            <Image
              src={lvLogoIcon}
              alt="Liqr Vision"
              className="h-14 w-14 object-contain"
            />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;
            const orbitDuration = 12 + orbitIdx * 6;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-gray-600"
                style={{
                  width: size,
                  height: size,
                  animation: `featureOrbitSpin ${orbitDuration}s linear infinite`,
                }}
              >
                {posLogos
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((logo, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={logo.alt}
                        className="absolute"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div
                          className={`h-12 w-12 overflow-hidden rounded-full shadow-md ${
                            logo.bg ? "" : "bg-white p-1"
                          }`}
                          style={{
                            animation: `featureOrbitSpinReverse ${orbitDuration}s linear infinite`,
                            backgroundColor: logo.bg,
                          }}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes featureOrbitSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes featureOrbitSpinReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}
