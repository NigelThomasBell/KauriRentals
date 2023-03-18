import SubNavbar from "../components/route-components/SubNavbar";
import PlanTripNow from "../components/route-components/TripSteps";
import BookBanner from "../components/route-components/banners/BookBanner";
import { ABOUT_MAIN_CONTENT, ABOUT_FIGURES_DATA } from "../data/WebsiteData";

function About() {
  return (
    <>
      <section className="about-page">
        <SubNavbar name="About" />
        <div className="container">
          <div className="about-main">
            <div className="about-main__text">
              <h2>{ABOUT_MAIN_CONTENT["heading"]}</h2>
              <p>
                {ABOUT_MAIN_CONTENT["description"]}
              </p>
              <div className="about-main__text__icons">
                {ABOUT_FIGURES_DATA.map((figure, index) => (
                  <div key={index} className="about-main__text__icons__box">
                    <span>
                      <h4>{figure.number}</h4>
                      <p>{figure.category}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <img
              className="about-main__img"
              src={ABOUT_MAIN_CONTENT["img"]}
              alt="vehicle-renting"
            />
          </div>
          <PlanTripNow />
        </div>
        <BookBanner />
      </section>
    </>
  );
}

export default About;
