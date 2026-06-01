import Starfield from "@/components/Starfield";
import Particles from "@/components/Particles";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import RoastCorner from "@/components/RoastCorner";
import Reasons from "@/components/Reasons";
import Journey from "@/components/Journey";
import Gallery from "@/components/Gallery";
import Letter from "@/components/Letter";
import Surprise from "@/components/Surprise";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Starfield count={70} />
      <Particles count={24} />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Countdown />
        <About />
        <RoastCorner />
        <Reasons />
        <Journey />
        <Gallery />
        <Letter />
        <Surprise />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}
