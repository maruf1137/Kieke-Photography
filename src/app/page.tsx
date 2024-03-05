import Hero from "@/components/hero";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Price from "@/components/price";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <About />
      <Portfolio />
      <Price />
      <Testimonial />
      <Contact />
    </main>
  );
}
