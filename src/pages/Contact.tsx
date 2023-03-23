import SubNavbar from "../components/route-components/SubNavbar";
import BookBanner from "../components/route-components/banners/BookBanner";
import { DETAILS_DATA } from "../data/WebsiteData";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <SubNavbar name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need further information?</h2>
              {Object.entries(DETAILS_DATA).map(([key, value]) => (
                <a key={key} href="/">
                  {value}
                </a>
              ))}
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Bloggs"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Description <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <BookBanner />
      </section>
    </>
  );
}

export default Contact;
