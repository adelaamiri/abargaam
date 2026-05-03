import { abouthero, about1, about2 } from "../assets/images";

export const aboutHeroData = {
  title: "Your Trusted Logistics Partner",
  breadcrumb: ["Home", "About Us"],
  image: abouthero,
};

export const visionMissionData = [
  {
    id: 1,
    type: "vision",
    title: "Our Vision",
    desc: "To be the most trusted regional partner for supply chain management and strategic monitoring, recognized for our ability to navigate complex environments with transparency.",
    btn: "Contact Us ->",
    image: about1,
  },
  {
    id: 2,
    type: "mission",
    title: "Our Mission",
    desc: "To provide seamless logistics and consultancy solutions that bridge the gap between international standards and local realities, ensuring every project is delivered with integrity and precision.",
    btn: "Our Services ->",
    image: about2,
  },
];
//
export const experienceData = [
  {
    id: 1,
    year: "2019 - 2021",
    title: "Fuel Management Systems | SESTICA - USAID",
    description:
      "Engineered and deployed a strategic fuel management project with real-time tracking integration.",
    tags: ["Governance Logic", "Tracking Systems", "Security Tools"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/USAID-Identity.svg/512px-USAID-Identity.svg.png",
    type: "large",
    color: "white",
  },
  {
    id: 2,
    year: "2021 - 2022",
    title: "Post-Distribution Monitoring (PDM) | People in Need",
    description:
      "Conducted large-scale monitoring and evaluation across multiple provinces in Afghanistan.",
    tags: ["Samangan", "Jawzjan", "Balkh"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/People_in_Need_logo.png",
    type: "side",
    color: "teal",
  },
  {
    id: 3,
    year: "2019 - 2020",
    title: "Policy Research & Governance",
    description:
      "Conducted research on governance, decentralization, and political reform.",
    tags: ["Research Unit"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Heart_of_Asia_Society_logo.png/512px-Heart_of_Asia_Society_logo.png",
    color: "green",
  },
  {
    id: 4,
    year: "2019 - 2022",
    title: "Exclusive Regional Partnership | DOT Glasses",
    description:
      "Executed partnership development across Afghanistan, Tajikistan, and Uzbekistan.",
    tags: ["AFG", "TJK", "UZB"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/DOT_Glasses_logo.png",
    color: "blue",
  },
  {
    id: 5,
    year: "2021 - 2022",
    title: "Agricultural Infrastructure Feasibility",
    description:
      "Conducted feasibility studies for cold storage infrastructure projects.",
    tags: ["EPDOR"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/EPDOR_logo.png",
    color: "orange",
  },
  {
    id: 6,
    year: "2021",
    title: "External Evaluation | BBC Media Action",
    description:
      "Implemented large-scale evaluation using surveys and field research tools.",
    tags: ["KII", "FGD", "Mobile Surveys"],
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/BBC_Media_Action_logo.png",
    type: "largeBottom",
    color: "white",
  },
];
import { team1, team2, team3, team4 } from "../assets/images";

export const teamData = [
  {
    id: 1,
    image: team1,
    name: "Francesca Borri",
    role: "Communication and Media",
    description:
      "Francesca Borri is a war reporter specializing in the Middle East. After working in Ramallah as a Human Rights Adviser, she moved to Afghanistan and supported communication projects.",
    socials: ["twitter", "facebook", "linkedin"],
  },
  {
    id: 2,
    image: team2,
    name: "Abdul Kabir Ehsas",
    role: "General Logistics & Supply Chain",
    description:
      "Abdul Kabir Ehsas is a senior logistics and operations specialist with over a decade of experience leading complex supply chain and procurement functions.",
    socials: ["twitter", "facebook", "linkedin"],
  },
  {
    id: 3,
    image: team3,
    name: "Najeebullah Mir",
    role: "Project Management Support",
    description:
      "Najeebullah Mir is a humanitarian leader with over 17 years of experience in program management and emergency response across complex and fragile environments.",
    socials: ["twitter", "facebook", "linkedin"],
  },
  {
    id: 4,
    image: team4,
    name: "David Vojta",
    role: "Business Development Advisor",
    description:
      "David Vojta brings over 15 years of experience in business development advisory services, supporting clients across the Middle East and Europe.",
    socials: ["twitter", "facebook", "linkedin"],
  },
];
