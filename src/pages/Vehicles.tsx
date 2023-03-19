import { Link } from "react-router-dom";
import SubNavbar from "../components/route-components/SubNavbar";
import BookBanner from "../components/route-components/banners/BookBanner";
import { VEHICLE_DATA } from "../data/WebsiteData";

function Vehicles() {
  return (
    <>
      <section className="vehicles-section">
        <SubNavbar name="Vehicles" />
        <div className="container">
          <div className="vehicles">
            {VEHICLE_DATA.map((vehicle, index) => (
              <div key={index} className="vehicles__box">
                <div className="vehicles__box__img">
                  <img src={vehicle.img} alt="vehicle_img" />
                  <div className="vehicles__box__descr">
                    <div className="vehicles__box__descr__name-price">
                      <div className="vehicles__box__descr__name-price__name">
                        <p>{vehicle.name}</p>
                      </div>
                      <div className="vehicles__box__descr__name-price__price">
                        <h4>${vehicle.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="vehicles__box__descr__name-price__details">
                      <p>
                        <b>Year:</b> {vehicle.year}
                      </p>
                      <p>
                        <b>Doors:</b> {vehicle.doors}
                      </p>
                      <p>
                        <b>Transmission:</b> {vehicle.transmission}
                      </p>
                      <p>
                        <b>Fuel:</b> {vehicle.fuel}
                      </p>
                    </div>
                    <div className="vehicles__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
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

export default Vehicles;
