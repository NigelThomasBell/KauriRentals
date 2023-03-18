import SuzukiSwift from "../images/vehicles/car-placeholder.png";
import ToyotaCorolla from "../images/vehicles/car-placeholder.png";
import HondaCivic from "../images/vehicles/car-placeholder.png";
import ToyotaCamry from "../images/vehicles/car-placeholder.png";
import MitsubishiOutlander from "../images/vehicles/car-placeholder.png";
import ToyotaRAV4 from "../images/vehicles/car-placeholder.png";

import TestimonialMale from "../images/testimonials/male.png";
import TestimonialFemale from "../images/testimonials/female.png";

import AboutMain from "../images/about/about-main.jpg";

// Navbar
export const NAVBAR_LINKS_DATA = [
  {
    link: "/",
    label: "Home",
    className: "home-link"
  },
  {
    link: "/about",
    label: "About",
    className: "about-link"
  },
  {
    link: "/vehicles",
    label: "Vehicles",
    className: "vehicles-link"
  },
  {
    link: "/testimonials",
    label: "Testimonials",
    className: "testimonials-link"
  },
  {
    link: "/team",
    label: "Team",
    className: "team-link"
  },
  {
    link: "/faq",
    label: "FAQ",
    className: "faq-link"
  },
  {
    link: "/contact",
    label: "Contact",
    className: "contact-link"
  }
];
export const NAVBAR_BUTTONS_DATA = [
  {
    link: "/",
    label: "Sign In",
  },
  {
    link: "/",
    label: "Register",
  }
]

// Vehicle Data
export const VEHICLE_DATA = [
  {
    name: "Suzuki Swift",
    price: "30",
    img: SuzukiSwift,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota Corolla",
    price: "35",
    img: ToyotaCorolla,
    year: "2022",
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    name: "Honda Civic",
    price: "40",
    img: HondaCivic,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota Camry",
    price: "40",
    img: ToyotaCamry,
    year: "2022",
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    name: "Mitsubishi Outlander",
    price: "45",
    img: MitsubishiOutlander,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota RAV4",
    price: "45",
    img: ToyotaRAV4,
    year: "2022",
    doors: "4",
    transmission: "Automatic",
    fuel: "Diesel",
  }
];
// Location Data
export const LOCATION_DATA = [
  {
    name: "Auckland"
  },
  {
    name: "Hamilton"
  },
  {
    name: "Tauranga"
  },
  {
    name: "Gisborne"
  },
  {
    name: "Napier"
  },
  {
    name: "Palmerston North"
  },
  {
    name: "Wellington"
  },
]

// Trip Steps
export const TRIP_STEPS_DATA = [
  {
    title: "Step 1: Select",
    description: "Explore our extensive selection of vehicles tailored to meet all your driving requirements. Find the perfect vehicle that aligns seamlessly with your needs.",
  },
  {
    title: "Step 2: Contact",
    description: "Our experienced and friendly team will go the extra mile with any inquiries or concerns you may have. Feel free to contact us for personalized support.",
  },
  {
    title: "Step 3: Drive",
    description: "Enjoy your journey and confidently embrace the open road with our comprehensive support system and multiple service centres.",
  },
];

// TestimonialComponent
export const TESTIMONIAL_PEOPLE_DATA = [
  {
    name: "Ethan Anderson",
    quote: "I recently used Kauri Rentals for a weekend getaway, and I couldn't be happier with the service! The booking process was seamless, and the variety of vehicles available was impressive. Not only were the rental rates affordable, but the car itself was in top-notch condition. I highly recommend Kauri Rentals for anyone looking for a hassle-free and enjoyable car rental experience.",
    location: "Auckland",
    img: TestimonialMale
  },
  { 
    name: "Olivia Martinez",
    quote: "What a fantastic experience with Kauri Rentals! The user-friendly website made booking a breeze, and I was pleasantly surprised by the competitive rental rates. The vehicle I rented was clean, well-maintained, and fueled up, ready for my journey. The customer service was also exceptional, making the entire process stress-free. I'll definitely be using Kauri Rentals again and recommending it to friends and family!",
    location: "Hamilton",
    img: TestimonialFemale
  },
];

// Footer
export const FOOTER_CONTACT_DATA = [
  {
    title: "Phone",
    link: "tel:123456789",
    text: "(123) 456-789",
  },
  {
    title: "Email",
    link: "mailto:kaurirentals@notrealmail.com",
    text: "kaurirentals@notrealmail.com",
  }
];
export const FOOTER_COMPANY_DATA = [
  {
    link: "#home",
    text: "Careers",
  },
  {
    link: "#home",
    text: "Blog",
  },
];
export const FOOTER_WORKING_HOURS_DATA = [
  {
    title: "Mon-Fri",
    text: "9:00AM - 9:00PM",
  },
  {
    title: "Sat",
    text: "10:00AM - 8:00PM",
  },
  {
    title: "Sun",
    text: "Closed",
  }
];

// About
export const ABOUT_MAIN_CONTENT = {
  "heading": "Start the engine to your adventure",
  "description": "At Kauri Rentals, we pride ourselves on providing a seamless and enjoyable Vehicle rental experience. With our diverse fleet of well-maintained Vehicles, competitive rates, flexible rental options, and a commitment to customer satisfaction, we strive to make your rental process straightforward and stress-free. Discover the freedom to drive the open road with confidence, and let Kauri Rentals be your trusted partner in transportation.",
  "img": AboutMain
}
export const ABOUT_FIGURES_DATA = [
  {
    number: "6",
    category: "Vehicle Types",
  },
  { 
    number: "12",
    category: "Rental Outlets",
  },
  { 
    number: "18",
    category: "Repair Shops",
  },
];

// Contact
export const DETAILS_DATA = {
  phone: "(123) 456-7869",
  email: "kaurirentals@notrealmail.com",
  location: "Auckland, New Zealand",
}