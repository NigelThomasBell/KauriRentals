import SubNavbar from "../components/route-components/SubNavbar";
import TestimonialsComponent from "../components/route-components/TestimonialsComponent";
import BookBanner from "../components/route-components/banners/BookBanner";

function Testimonials() {
  return (
    <>
      <section className="testimonial-page">
        <SubNavbar name="Testimonials" />
        <TestimonialsComponent />
        <BookBanner />
      </section>
    </>
  );
}

export default Testimonials;
