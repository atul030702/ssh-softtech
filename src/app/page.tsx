import Hero from "../components/Hero/Hero";
import Industries from "../components/Industry/Industries";
import Services from "../components/Services/services";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Industries />
    </div>
  );
}
