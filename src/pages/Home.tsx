import Hero from "../components/route-components/Hero";
import TripSteps from "../components/route-components/TripSteps";
import VehicleShowcase from "../components/route-components/VehicleShowcase";
import TestimonialsComponent from "../components/route-components/TestimonialsComponent";

function Home() {
  return (
    <>
      <Hero />
      <TripSteps />
      <VehicleShowcase />
      <TestimonialsComponent />
    </>
  );
}

export default Home;
