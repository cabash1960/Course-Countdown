import Hero from "../components/hero";
import Benefits from "../components/benefits";
import TrustBar from "../components/trustBar";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import WebinarButton from "../components/webinarButton";

function landingPage() {
  return (
    <div>
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
