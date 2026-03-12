import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { ShineBorder } from "./ui/shine-border";

const features = [
  {
    Icon: FileTextIcon,
    name: "View your inventory",
    description: "Track every bottle from the dashboard.",
    href: "/UNO-Capstone",
    cta: "Learn more",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Scan a bottle",
    description: "Scan the liquid level of a bottle for inventory.",
    href: "/UNO-Capstone",
    cta: "Learn more",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Statistics",
    description: "See the latest trends of your inventory.",
    href: "/UNO-Capstone",
    cta: "Learn more",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your inventory by date.",
    href: "/UNO-Capstone",
    cta: "Learn more",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when overpour and inventory thresholds are exceeded.",
    href: "/UNO-Capstone",
    cta: "Learn more",
    background: (
      <img alt="" className="absolute -top-20 -right-20 opacity-60" />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function HowItWorksSection() {
  return (
    <div>
      <h2 className="mb-6 text-center text-4xl font-semibold md:text-5xl">
        Level Up. Move Faster. Operate Smarter.
      </h2>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard
            key={feature.name}
            {...feature}
            shineBorder={
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}
