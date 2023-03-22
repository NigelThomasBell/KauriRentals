import SubNavbar from "../components/route-components/SubNavbar";
import BookBanner from "../components/route-components/banners/BookBanner";
import { FAQ_DATA } from "../data/WebsiteData";

function Faq() {
  return (
    <>
      <section className="faq-link">
        <SubNavbar name="FAQ" />
        <div className="container">
          <div className="faq-content">
            <div className="questions">
              {FAQ_DATA.map((question, id) => (
                <div key={id.toString()} className="faq-box">
                  <p className="faq-box__question">{question.question}</p>
                  <p className="faq-box__answer">{question.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BookBanner />
      </section>
    </>
  );
}

export default Faq;
