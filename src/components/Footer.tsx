import {
  FOOTER_CONTACT_DATA,
  FOOTER_COMPANY_DATA,
  FOOTER_WORKING_HOURS_DATA,
} from "../data/WebsiteData";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__section">
              <li>Contact</li>
              {FOOTER_CONTACT_DATA.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>
                    <b>{item.title}</b>: {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer-content__section">
              <li>Company</li>
              {FOOTER_COMPANY_DATA.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.text}</a>
                </li>
              ))}
            </ul>
            <ul className="footer-content__section">
              <li>Working Hours</li>
              {FOOTER_WORKING_HOURS_DATA.map((item, index) => (
                <li key={index}>
                  <b>{item.title}</b>: {item.text}
                </li>
              ))}
            </ul>
            <ul className="footer-content__section">
              <li>Subscribe</li>
              <li>
                <p>Subscribe for emails about the latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
