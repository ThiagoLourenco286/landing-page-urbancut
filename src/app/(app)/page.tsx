import { AvaliationSection } from "./avaliation-section/avaliation-section";
import { CallToAction } from "./call-to-action/call-to-action";
import { FatureSection } from "./fature-section/fature-section";
import { HeroSection } from "./hero-section/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col pt-30 space-y-25">
      <HeroSection />
      <FatureSection />
      <AvaliationSection />
      <CallToAction />
    </main>
  );
}
