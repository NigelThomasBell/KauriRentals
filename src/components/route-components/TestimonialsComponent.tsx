import { IconQuote } from "@tabler/icons-react";
import { TESTIMONIAL_PEOPLE_DATA } from "../../data/WebsiteData";

function TestimonialsComponent() {
  const addTestimonialPeople = () => {
    return TESTIMONIAL_PEOPLE_DATA.map((person, index) => (
      <div key={index} className="testimonials__box">
        <span className="quotes-icon">
          <IconQuote width={60} height={60} />
        </span>
        <p>"{person.quote}"</p>
        <div className="testimonials__box__name">
          <div className="testimonials__box__name__profile">
            <img src={person.img} alt="user_img" />
            <span>
              <h4>{person.name}</h4>
              <p>{person.location}</p>
            </span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-container">
            <div className="testimonials-container__title">
              <h2>Some satisfied customers</h2>
            </div>
            <div className="testimonials">{addTestimonialPeople()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsComponent;
