import { AvaliationSection } from "./avaliation-section/avaliation-section";
import { CallToAction } from "./call-to-action/call-to-action";
import { FatureSection } from "./fature-section/fature-section";
import { HeroSection } from "./hero-section/hero-section";

export default function Home() {
  return (
    <article className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <FatureSection />
      <AvaliationSection />
      <CallToAction />
    </article>
  );
}
