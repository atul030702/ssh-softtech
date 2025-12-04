import Hero from "../components/Hero";
import { ServicesSection } from "../components/Services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesSection />
    </div>
  );
}
