import { TRIP_STEPS_DATA } from "../../data/WebsiteData";

function TripSteps() {
  const addTripSteps = () => {
    return TRIP_STEPS_DATA.map((section, index) => (
      <div key={index} className="trip-steps-container__boxes__box">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>
    ));
  };

  return (
    <>
      <section className="trip-steps-section">
        <div className="container">
          <div className="trip-steps-container">
            <div className="trip-steps-container__title">
              <h2>Plan your trip in 3 easy steps</h2>
            </div>
            <div className="trip-steps-container__boxes">{addTripSteps()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TripSteps;
