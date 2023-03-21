import SubNavbar from "../components/route-components/SubNavbar";
import BookBanner from "../components/route-components/banners/BookBanner";
import { TEAM_PEOPLE_DATA } from "../data/WebsiteData";

function Team() {
  return (
    <>
      <section className="team-page">
        <SubNavbar name="Team" />
        <div className="container">
          <div className="team-container">
            {TEAM_PEOPLE_DATA.map((person, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={person.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BookBanner />
      </section>
    </>
  );
}

export default Team;
