import Hero from "./Components/hero";
import Navbar from "./Components/Navbar";
import ServicesStrip from "./Components/ServicesStrip";
import ProvenTrackRecord from "./Components/ProvenTrackRecord";
import WhyClickmasters from "./Components/WhyClickmasters";
import ClientsMarquee from "./Components/ClientsMarquee";
import TechStack from "./Components/TechStack";
import Proven from "./Components/Proven";
import Explore from "./Components/Explore";
import TechStackGrid from "./Components/TechStackGrid";
import CTASection from "./Components/CTASection";
import Article from "./Components/Article";
import Testimonials from "./Components/Testimonials";
import SectorsWeServe from "./Components/SectorsWeServe";
import Answer from "./Components/Answer";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesStrip />
      <ProvenTrackRecord />
      <WhyClickmasters />
      <ClientsMarquee />
      <TechStack />
      <TechStackGrid />
      <CTASection />
      <Proven />
      <Explore />
      <Testimonials />
      <SectorsWeServe />
      <Answer />
      <Article />
      <Footer />
    </div>
  );
}

export default Home;