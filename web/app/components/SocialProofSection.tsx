import {
  Slack,
  Github,
  Figma,
  Chrome,
  Dribbble,
  Trello,
  Twitch,
  Youtube,
} from "lucide-react";

import { OrbitingCircles } from "./ui/orbiting-circles";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export default function SocialProofSection() {
  return (
    <div className="flex flex-col items-center gap-8 py-16">
      <AnimatedGradientText
        className="text-4xl font-bold uppercase tracking-[0.2em] md:text-5xl"
        speed={0.75}
        colorFrom="#F19A38"
        colorTo="#F9D84A"
      >
        Used by Leading Companies
      </AnimatedGradientText>

      <div className="relative flex h-125 w-full items-center justify-center">
        {/* Outer ring */}
        <OrbitingCircles radius={200} speed={0.5} iconSize={40} path={false}>
          <Slack className="size-10 text-white/70" />
          <Github className="size-10 text-white/70" />
          <Figma className="size-10 text-white/70" />
          <Chrome className="size-10 text-white/70" />
          <Dribbble className="size-10 text-white/70" />
        </OrbitingCircles>

        {/* Inner ring */}
        <OrbitingCircles
          radius={110}
          speed={0.4}
          iconSize={36}
          reverse
          path={false}
        >
          <Trello className="size-9 text-white/70" />
          <Twitch className="size-9 text-white/70" />
          <Youtube className="size-9 text-white/70" />
        </OrbitingCircles>
      </div>
    </div>
  );
}
