import { LogoCloud } from "./ui/logo-cloud-4";

const logos = [
  {
    src: "https://svgl.app/library/nvidia-wordmark-light.svg",
    alt: "Nvidia Logo",
  },
  {
    src: "https://svgl.app/library/supabase_wordmark_light.svg",
    alt: "Supabase Logo",
  },
  {
    src: "https://svgl.app/library/openai_wordmark_light.svg",
    alt: "OpenAI Logo",
  },
  {
    src: "https://svgl.app/library/turso-wordmark-light.svg",
    alt: "Turso Logo",
  },
  {
    src: "https://svgl.app/library/vercel_wordmark.svg",
    alt: "Vercel Logo",
  },
  {
    src: "https://svgl.app/library/github_wordmark_light.svg",
    alt: "GitHub Logo",
  },
  {
    src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg",
    alt: "Claude AI Logo",
  },
  {
    src: "https://svgl.app/library/clerk-wordmark-light.svg",
    alt: "Clerk Logo",
  },
];

export default function SocialProofSection() {
  return (
    <div className="w-full">
      <h2 className="mb-5 text-center text-xl font-semibold tracking-tight text-white md:text-2xl">
        These companies increase their profit by 5% with Liqr Vision
      </h2>
      <h3 className="mb-5 text-center text-lg font-medium tracking-tight text-white/60 md:text-xl">
        Stop losing your profit!
      </h3>

      <LogoCloud logos={logos} />
    </div>
  );
}
