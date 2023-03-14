import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { IconCar, IconX, IconMapPin, IconCalendarEvent } from "@tabler/icons-react";
import { VEHICLE_DATA, LOCATION_DATA } from "../../data/WebsiteData";

function BookVehicle() {
  // State to handle when booking form modal displays
  const [modal, setModal] = useState<boolean>(false);

  // Booking vehicle
  const [vehicleType, setVehicleType] = useState<string>("");
  const [pickLocation, setPickLocation] = useState<string>("");
  const [dropLocation, setDropLocation] = useState<string>("");
  const [pickDate, setPickDate] = useState<string>("");
  const [pickTime, setPickTime] = useState<string>("");
  const [dropDate, setDropDate] = useState<string>("");
  const [dropTime, setDropTime] = useState<string>("");
  const [vehicleImg, setVehicleImg] = useState<string>("");

  // Book form modal information
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");

  // Handle modal inputs
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  // Open modal when all inputs are fulfilled
  const openModal = (e: FormEvent) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message") as HTMLElement;
    if (
      pickLocation === "" ||
      dropLocation === "" ||
      pickDate === "" ||
      dropDate === "" ||
      pickTime === "" ||
      dropTime === "" ||
      vehicleType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(
        ".book-form-modal"
      ) as HTMLElement;
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // Disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // Confirm modal booking
  const confirmBooking = (e: FormEvent) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done") as HTMLElement;
    doneMsg.style.display = "flex";
  };

  // Take value of booking inputs
  const handleVehicle = (e: ChangeEvent<HTMLSelectElement>) => {
    setVehicleType(e.target.value);
    setVehicleImg(e.target.value);
  };

  const handlePick = (e: ChangeEvent<HTMLSelectElement>) => {
    setPickLocation(e.target.value);
  };

  const handleDrop = (e: ChangeEvent<HTMLSelectElement>) => {
    setDropLocation(e.target.value);
  };

  const handlePickDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPickDate(e.target.value);
  };

  const handlePickTime = (e: ChangeEvent<HTMLInputElement>) => {
    setPickTime(e.target.value);
  };

  const handleDropDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDropDate(e.target.value);
  };

  const handleDropTime = (e: ChangeEvent<HTMLInputElement>) => {
    setDropTime(e.target.value);
  };

  // Obtain vehicle images
  let imgUrl;
  VEHICLE_DATA.map((vehicle) => {
    if (vehicle.name === vehicleImg) {
      imgUrl = vehicle.img;
    }
  });

  // Hide message
  const hideMessage = (className: string) => {
    const doneMsg = document.querySelector(className) as HTMLElement;
    doneMsg.style.display = "none";
  };

  // Functions to add objects to select dropdowns
  const addVehicleOptions = () => {
    return VEHICLE_DATA.map((vehicle, index) => (
      <option key={index} value={vehicle.name}>
        {vehicle.name}
      </option>
    ));
  };
  const addLocationOptions = () => {
    return LOCATION_DATA.map((location, index) => (
      <option key={index} value={location.name}>
        {location.name}
      </option>
    ));
  };

  return (
    <>
      <section id="book-section">
        {/* Overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h3>Book Vehicle</h3>

              <p className="error-message">
                All fields are required!
                <IconX
                  className={"close-icon"}
                  width={20}
                  height={20}
                  onClick={() => {
                    hideMessage(".error-message");
                  }}
                />
              </p>

              <p className="booking-done">
                Check your emails to confirm your order.
                <IconX
                  className={"close-icon"}
                  width={20}
                  height={20}
                  onClick={() => {
                    hideMessage(".booking-done");
                  }}
                />
              </p>

              <form className="box-form">
                <div className="box-form__section">
                  <div className="box-form__booking-type">
                    <label>
                      <IconCar className="input-icon" /> 
                      &nbsp; 
                      <p>
                        Vehicle 
                        <b>*</b>
                      </p>
                    </label>
                    <select value={vehicleType} onChange={handleVehicle}>
                      <option>Select Vehicle</option>
                      {addVehicleOptions()}
                    </select>
                  </div>
                </div>
                <div className="box-form__section">
                  <div className="box-form__booking-type">
                    <label>
                      <IconMapPin className="input-icon" />
                      &nbsp; 
                      <p>
                        Pick Up Location
                        <b>*</b>
                      </p>
                    </label>
                    <select value={pickLocation} onChange={handlePick}>
                      <option>Select Pick Up Location</option>
                      {addLocationOptions()}
                    </select>
                  </div>
                  <div className="box-form__booking-datetime">
                    <label htmlFor="pickdate">
                      <IconCalendarEvent className="input-icon" /> 
                      &nbsp; 
                      <p>
                        Pick Up Date & Time
                        <b>*</b>
                      </p>
                    </label>
                    <div className="datetime-input-section">
                        <input
                            id="pickdate"
                            value={pickDate}
                            onChange={handlePickDate}
                            type="date"
                        ></input>
                        <input
                            id="picktime"
                            value={pickTime}
                            onChange={handlePickTime}
                            type="time"
                        ></input>
                    </div>
                  </div>
                </div>
                <div className="box-form__section">
                  <div className="box-form__booking-type">
                    <label>
                      <IconMapPin className="input-icon" /> 
                      &nbsp;
                      <p>
                        Drop Off Location
                        <b>*</b>
                      </p>
                    </label>
                    <select value={dropLocation} onChange={handleDrop}>
                      <option>Select Drop Off Location</option>
                      {addLocationOptions()}
                    </select>
                  </div>
                  <div className="box-form__booking-datetime">
                    <label htmlFor="dropdate">
                      <IconCalendarEvent className="input-icon" />
                      &nbsp;
                      <p>
                        Drop Off Date & Time
                        <b>*</b>
                      </p>
                    </label>
                    <div className="datetime-input-section">
                      <input
                          id="dropdate"
                          value={dropDate}
                          onChange={handleDropDate}
                          type="date"
                      ></input>
                      <input
                          id="droptime"
                          value={dropTime}
                          onChange={handleDropTime}
                          type="time"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="box-form__section">
                  <button
                    className="submit-button"
                    onClick={openModal}
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Reservation Form Modal */}
      <div className={`book-form-modal ${modal ? "active-modal" : ""}`}>
        {/* Title */}
        <div className="book-form-modal__title">
          <h2>Complete Reservation</h2>
          <IconX onClick={openModal} />
        </div>
        {/* Message */}
        <div className="book-form-modal__message">
          <h4>After completing this form, you will receive</h4>
          <p>
            An email containing a rental voucher to produce to the rental desk, with a toll-free customer support number.
          </p>
        </div>
        {/* Vehicle Information */}
        <div className="book-form-modal__vehicle-info">
          <div className="dates-div">
            <div className="book-form-modal__vehicle-info__dates">
              <h5>Location & Date</h5>
              <span>
                <IconMapPin />
                <div>
                  <h6>Pick Up</h6>
                  <p>{pickLocation}</p>
                  <p>
                    {pickDate}, {pickTime}
                  </p>
                </div>
              </span>
            </div>
            <div className="book-form-modal__vehicle-info__dates">
              <span>
                <IconMapPin />
                <div>
                  <h6>Drop Off</h6>
                  <p>{dropLocation}</p>
                  <p>
                    {dropDate}, {dropTime}
                  </p>
                </div>
              </span>
            </div>
          </div>
          <div className="book-form-modal__vehicle-info__model">
            <h5>
              <span>Vehicle -</span> {vehicleType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="vehicle_img" />}
          </div>
        </div>
        {/* Personal Information */}
        <div className="book-form-modal__person-info">
          <h5>Personal Information</h5>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">Field required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">Field required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">Field required.</p>
              </span>

              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">Field required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">Field required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">Field required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipCode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">Field required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please email me the latest news and updates</p>
            </span>

            <div className="reserve-button-section">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookVehicle;
