import { useState } from "react";
import { VEHICLE_DATA } from "../../data/WebsiteData";

interface Vehicle {
  name: string;
  price: string;
  img: string;
  year: string;
  doors: string;
  transmission: string;
  fuel: string;
}

function VehicleShowcase() {
  const [active, setActive] = useState("button0");
  const [colorButton, setColorButton] = useState("button0");

  const buttonID = (id: string) => {
    setColorButton(colorButton === id ? "" : id);
  };

  const coloringButton = (id: string) => {
    return colorButton === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="vehicle-section">
        <div className="container">
          <div className="vehicle-container">
            <div className="vehicle-container__title">
              <h2>Our fleet</h2>
            </div>
            <div className="vehicle-container__vehicle-content">
              {/* Vehicle Box */}
              <div className="vehicle-box">
                {VEHICLE_DATA.map((vehicle, id) => (
                  <button
                    key={id}
                    className={`${coloringButton("button" + id)}`}
                    id={"button" + id}
                    onClick={() => {
                      setActive("button" + id);
                      buttonID("button" + id);
                    }}
                  >
                    {vehicle.name}
                  </button>
                ))}
              </div>
              {VEHICLE_DATA.map(
                (vehicle, id) =>
                  active === "button" + id && (
                    <VehicleBox key={"button" + id} {...vehicle} />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function VehicleBox(vehicle: Vehicle): JSX.Element {
  const [vehicleLoad, setVehicleLoad] = useState<boolean>(true);
  return (
    <>
      <div className="box-vehicles">
        {/* Vehicle */}
        <div className="vehicle">
          {vehicleLoad && <span className="loader"></span>}
          <img
            style={{ display: vehicleLoad ? "none" : "block" }}
            src={vehicle.img}
            alt="vehicle_img"
            onLoad={() => setVehicleLoad(false)}
          />
        </div>
        {/* Description */}
        <div className="vehicle-description">
          <div className="vehicle-description__price">
            <span>${vehicle.price}</span> per day
          </div>
          <div className="vehicle-description">
            <div className="vehicle-description__detail">
              <span><b>Year</b>: </span>
              <span>{vehicle.year}</span>
            </div>

            <div className="vehicle-description__detail">
              <span><b>Doors</b>: </span>
              <span>{vehicle.doors}</span>
            </div>

            <div className="vehicle-description__detail">
              <span><b>Transmission</b>: </span>
              <span>{vehicle.transmission}</span>
            </div>

            <div className="vehicle-description__detail">
              <span><b>Fuel</b>: </span>
              <span>{vehicle.fuel}</span>
            </div>
          </div>
          {/* btn cta */}
          <a className="cta-btn" href="#booking-section">
            Reserve Now
          </a>
        </div>
      </div>
    </>
  );
}

export default VehicleShowcase;
