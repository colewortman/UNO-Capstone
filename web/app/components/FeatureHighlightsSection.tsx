import { CheckCircle2 } from "lucide-react";
import { FeatureHighlight } from "./ui/feature-highlight";

// Helper component for inline icons to manage styling
/** Not being used currently
const InlineIcon = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="mx-1 inline-block h-6 w-6 align-middle"
  />
);
*/

export default function FeatureHighlightsSection() {
  // Define the features as an array of React nodes
  const features = [
    <>
        Get push notifications when:
    </>,
    <></>,
    <>
      Overpour thresholds are exceeded
    </>,
    <>
      Inventory drops below par
    </>,
    <>
      A shift variance spikes
    </>,
    <>
      A bottle depletes abnormally fast
    </>,
    <>from a vending machine.</>,
    <>
      A station deviates from historical norms
    </>,
  ];

  // Define the footer content
  const footer = (
    <p className="pt-2 text-2xl text-muted-foreground">
        No waiting until next week's review. Inventory intelligence — in your pocket.
    </p>
  );
  
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-background p-4">
      <FeatureHighlight
        icon={
          <CheckCircle2 className="h-10 w-10 rounded-full bg-blue-500 p-1 text-white" />
        }
        title="Know Immediately. Act Immediately."
        features={features}
        footer={footer}
      />
    </div>
  );
}