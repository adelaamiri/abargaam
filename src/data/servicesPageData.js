// import { services5 } from "../assets/images";

// export const servicesHeroData = {
//   title: "Advanced Logistics Services",
//   breadcrumb: ["Home", "Services"],
//   image: services5,
// };
import {
  services1,
  services2,
  services3,
  services4,
  servicess5,
  services6,
  services7,
  services5,
  sersection3,
} from "../assets/images";

import { FaMapMarkerAlt } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";
import { FaBoxes } from "react-icons/fa";
import { MdTrackChanges } from "react-icons/md";

export const servicesHeroData = {
  title: "Advanced Logistics Services",
  breadcrumb: ["Home", "Services"],
  image: services5,
};

export const essentialServicesData = {
  title: "Essential Freight Services",
  linkText: "View Services",
};

export const servicesGridData = [
  {
    id: 1,
    image: services1,
    title: "General Logistics and Supply",
    description:
      "We provide end-to-end procurement, transportation, and delivery solutions across Afghanistan, supporting domestic distribution and project supply needs.",
  },
  {
    id: 2,
    image: services2,
    title: "Innovative Agriculture Solutions",
    description:
      "Climate-smart agricultural solutions including cold storage, drip irrigation, and greenhouse systems that improve productivity and resilience.",
  },
  {
    id: 3,
    image: services3,
    title: "Renewable Energy Solutions",
    description:
      "Reliable and sustainable off-grid and on-grid energy systems designed for communities, institutions, and businesses.",
  },
  {
    id: 4,
    image: services4,
    title: "Business Development and Market Study",
    description:
      "Strategic market analysis, customer insights, and growth planning to support informed business decisions.",
  },
  {
    id: 5,
    image: servicess5,
    title: "Strategic Communication and Media",
    description:
      "Professional communication, media production, and visibility services that strengthen engagement and impact.",
  },
  {
    id: 6,
    image: services6,
    title: "Project Management",
    description:
      "Comprehensive project planning, implementation, monitoring, and evaluation services for effective delivery.",
  },
  {
    id: 7,
    image: services7,
    title: "Human Resources & Compliance Advisory",
    description:
      "Expert HR consulting, compliance systems, policy development, and organizational capacity strengthening.",
  },
];

export const whyChooseData = {
  badge: "WHY CHOOSE US",
  title: "The ABARGAAM Advantage",
  description:
    "We are bringing essential support services under one roof, we simplify operations, strengthen coordination, and reduce operational risk. Our practical, context driven approach delivers compliant, efficient, and results oriented solutions tailored to your organization’s needs.",

  image: sersection3,

  features: [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Site Planning",
      desc: "Strategic analysis and infrastructure planning",
    },
    {
      id: 2,
      icon: HiShieldCheck,
      title: "Quality Assurance",
      desc: "Rigorous safety standards and material testing",
    },
    {
      id: 3,
      icon: FaBoxes,
      title: "Material Supply",
      desc: "Just-in-time logistics for construction projects",
    },
    {
      id: 4,
      icon: MdTrackChanges,
      title: "Real-Time Tracking",
      desc: "Live visibility for every fleet and supply",
    },
  ],
};
