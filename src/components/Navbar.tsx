import { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "../images/logo/logo.png";
import { NAVBAR_LINKS_DATA, NAVBAR_BUTTONS_DATA } from "../data/WebsiteData";

function Navbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const openNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          {/* Desktop Navbar */}
          <div className="navbar__logo">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            {NAVBAR_LINKS_DATA.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className={item.className ? item.className : ""}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar__buttons">
            {NAVBAR_BUTTONS_DATA.map((item, index) => (
              <Link
                key={index}
                className="navbar__buttons__button"
                to={item.link}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile Navbar */}
          <div className="mobile-hamburger" onClick={openNavbar}>
            <IconMenu2 width={30} height={30} />
          </div>
          <div className={`mobile-navbar ${mobileNavbar ? "open-nav" : ""}`}>
            <div onClick={openNavbar} className="mobile-navbar__close">
              <IconX className={"close"} width={30} height={30} />
            </div>
            <ul className="mobile-navbar__links">
              {NAVBAR_LINKS_DATA.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={openNavbar}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {NAVBAR_BUTTONS_DATA.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={openNavbar}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
