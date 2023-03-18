import { Link } from "react-router-dom";

interface HeroPagesProps {
  name: string;
}

function SubNavbar({ name }: HeroPagesProps): JSX.Element {
  return (
    <>
      <section className="sub-navbar">
        <div className="sub-navbar__overlay"></div>
        <div className="container">
          <div className="sub-navbar__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SubNavbar;
