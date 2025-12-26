import Hero from "../components/Hero/Hero";
import Industries from "../components/Industry/Industries";
import ServicesSectionHero from "../components/Services/Services";
import CTA from "@/components/CallToAction/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSectionHero />
      <Industries />
      <CTA />
    </div>
  );
}
