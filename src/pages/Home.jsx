import Booking from "../components/Booking";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";
import Courses from "../components/Courses";
import WhoITeach from "../components/WhoITeach";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <WhyChoose />

      <About />

      <Courses />

      <WhoITeach />

      <HowItWorks />

      <Booking />

      <FAQ />

      <Footer />
    </>
  );
}

export default Home;