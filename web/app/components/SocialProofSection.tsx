"use client";

import { motion } from "motion/react";
import {
  fadeUpContainer,
  fadeUpItem,
  fadeUpItemSlow,
} from "@/lib/animations";
import { LogoCloud } from "./ui/logo-cloud-4";
import baLogo from "@/public/logos/BA.svg";
import bakLogo from "@/public/logos/BAK.svg";
import cncLogo from "@/public/logos/CNC.svg";
import fsLogo from "@/public/logos/FS.svg";
import gastrospotsLogo from "@/public/logos/gastrospots.svg";
import hrLogo from "@/public/logos/HR.svg";
import hsLogo from "@/public/logos/HS.svg";
import iliLogo from "@/public/logos/ILI.svg";
import bahamasLogo from "@/public/logos/Logo-Bahamas-Nassau-03.png";
import lvLogo from "@/public/logos/LV.svg";
import sfLogo from "@/public/logos/SF.svg";
import theLedgeLogo from "@/public/logos/the-ledge.svg";

const logos = [
  { src: baLogo, alt: "BA Logo" },
  { src: bakLogo, alt: "BAK Logo" },
  { src: cncLogo, alt: "CNC Logo" },
  { src: fsLogo, alt: "FS Logo" },
  { src: gastrospotsLogo, alt: "GastroSpots Logo" },
  { src: hrLogo, alt: "HR Logo" },
  { src: hsLogo, alt: "HS Logo" },
  { src: iliLogo, alt: "ILI Logo" },
  { src: bahamasLogo, alt: "Bahamas Nassau Logo" },
  { src: lvLogo, alt: "LV Logo" },
  { src: sfLogo, alt: "SF Logo" },
  { src: theLedgeLogo, alt: "The Ledge Logo" },
];

export default function SocialProofSection() {
  return (
    <motion.div
      className="w-full"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={fadeUpItem}
        style={{ willChange: "transform, opacity, filter" }}
        className="mb-1 text-center text-xl font-semibold tracking-tight text-white md:text-2xl"
      >
        These companies increase their profit by 5% with Liqr Vision
      </motion.h2>
      <motion.h3
        variants={fadeUpItemSlow}
        style={{ willChange: "transform, opacity, filter" }}
        className="mb-5 text-center text-sm font-medium tracking-tight text-white/60 md:text-base"
      >
        Stop losing your profit!
      </motion.h3>

      <LogoCloud logos={logos} perPage={4} perPageMobile={3} />
    </motion.div>
  );
}
