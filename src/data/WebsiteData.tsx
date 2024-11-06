import CarPlaceholder from "../images/vehicles/car-placeholder.png";

import TestimonialMale from "../images/testimonials/male.png";
import TestimonialFemale from "../images/testimonials/female.png";
import TeamMale from "../images/team/male.png";
import TeamFemale from "../images/team/female.png";

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
    img: CarPlaceholder,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota Corolla",
    price: "35",
    img: CarPlaceholder,
    year: "2022",
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    name: "Honda Civic",
    price: "40",
    img: CarPlaceholder,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota Camry",
    price: "40",
    img: CarPlaceholder,
    year: "2022",
    doors: "4",
    transmission: "Automatic",
    fuel: "Petrol",
  },
  {
    name: "Mitsubishi Outlander",
    price: "45",
    img: CarPlaceholder,
    year: "2022",
    doors: "4",
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    name: "Toyota RAV4",
    price: "45",
    img: CarPlaceholder,
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

// Footer and Contact
export const CONTACT_DATA = [
  {
    title: "Phone",
    link: "tel:123456789",
    text: "(123) 456-789",
  },
  {
    title: "Email",
    link: "mailto:kaurirentals@notrealmail.com",
    text: "kaurirentals@notrealmail.com",
  },
  {
    title: "Location",
    link: "https://www.google.com/maps/place/Albert+Park/@-36.8506426,174.7678881,15z/data=!4m2!3m1!1s0x0:0x1106c8f13dfbfc12?sa=X&ved=1t:2428&ictx=111",
    text: "Auckland, New Zealand",
  }
];
export const FOOTER_COMPANY_DATA = [
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/team",
    text: "Team",
  },
  {
    link: "/faq",
    text: "Faq",
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
  "description": "At Kauri Rentals, we pride ourselves on providing a seamless and enjoyable vehicle rental experience. With our diverse fleet of well-maintained vehicles, competitive rates, flexible rental options, and a commitment to customer satisfaction, we strive to make your rental process straightforward and stress-free. Discover the freedom to drive the open road with confidence, and let Kauri Rentals be your trusted partner in transportation.",
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
]

// Our Team
export const TEAM_PEOPLE_DATA = [
  { name: "Jackson Reynolds", role: "Founder", img: TeamMale },
  { name: "Lily Thompson", role: "Branch Manager", img: TeamFemale },
  { name: "Caleb Mitchell", role: "Fleet Coordinator", img: TeamMale, },
  { name: "Sophia Rodriguez", role: "Customer Service", img: TeamFemale },
  {  name: "Isaac Harper", role: "Mechanic", img: TeamMale },
  {  name: "Amy Simmons", role: "Risk Management Specialist", img: TeamFemale },
];

// FAQ
export const FAQ_DATA = [
  {
    question: "How old do I need to be to rent a vehicle?",
    answer: "To rent a vehicle with us, you must be at least 21 years old. However, some vehicle categories may have a minimum age requirement of 25. Additionally, drivers under 25 may be subject to a young driver surcharge.",
  },
  {
    question: "What documents are required to rent a vehicle?",
    answer: "You will need a valid driver's license, a major credit card in the renter's name, and, in some cases, proof of insurance. International renters may also need a valid passport and an international driver's permit.",
  },
  {
    question: "What is included in the rental rate?",
    answer: "Our rental rates typically include the basic rental fee and mandatory taxes and fees. However, additional charges may apply for optional services like GPS navigation, child seats, and fuel. It's essential to review the rental agreement and ask our staff about any specific fees related to your rental.",
  },
  {
    question: "What happens if I return the vehicle late?",
    answer: "Returning the vehicle late may result in additional charges. We usually provide a grace period, but if you exceed it, you'll likely be charged for an extra day or on an hourly basis. It's important to communicate any potential delays with our rental office to discuss options and avoid unnecessary charges.",
  },
]