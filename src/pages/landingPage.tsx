import Hero from "../components/hero";
import Benefits from "../components/benefits";
import TrustBar from "../components/trustBar";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import WebinarButton from "../components/webinarButton";
import Navbar from "../components/navBar";

function landingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
      <Benefits />
      <Testimonial />
      <Footer />
      <WebinarButton />
    </div>
  );
}

export default landingPage;
