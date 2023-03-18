import { IconPhone } from "@tabler/icons-react";
import { DETAILS_DATA } from "../../../data/WebsiteData";

function BookBanner() {
  return (
    <>
      <div className="book-banner">
        <div className="container">
          <div className="text-content">
            <h2>Make a booking on the home page or call</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>{DETAILS_DATA.phone}</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookBanner;
