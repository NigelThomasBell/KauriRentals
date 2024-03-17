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
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12770.635905895779!2d174.7678881!3d-36.8506426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fca5f404a1%3A0x1106c8f13dfbfc12!2sAlbert%20Park!5e0!3m2!1sen!2snz!4v1710666204783!5m2!1sen!2snz"
            allowFullScreen={true}
            loading="lazy"
            title="map"
            style={{ width: "100%", height: "45rem", border: "0px" }}
          ></iframe>
        <BookBanner />
      </section>
    </>
  );
}

export default Contact;
