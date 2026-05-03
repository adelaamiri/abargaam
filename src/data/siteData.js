import {
  logo,
  heroImage,
  introVideo,
  service1,
  service2,
  service3,
  service4,
  projectMain,
  project1,
  project2,
  project3,
  ctaBg,
  reasonsImage,
  client1,
  client2,
  client3,
  qrCode,
} from "../assets/images";

// ================= NAVBAR =================
// export const navLinks = [
//   { id: "home", title: "Home" },
//   { id: "services", title: "Services" },
//   { id: "about", title: "About" },
//   { id: "projects", title: "Projects" },
//   { id: "contact", title: "Contact" },
// ];

export const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "services", title: "Services", path: "/services" },
  { id: "about", title: "About", path: "/about" },
  { id: "blog", title: "Blog", path: "/blog" },
  { id: "contact", title: "Contact", path: "/contact" },
];

export const siteInfo = {
  logo,
  whatsapp: "+93 789174000",
};

// ================= HERO =================
export const heroData = {
  badge: "Afghan-led since 2019",
  title:
    "Integrated Operational & Advisory Solutions for NGOs and Growing Organizations.",
  description:
    "Abargaam Logistics & Consulting delivers practical and sustainable solutions to complex operational challenges, helping organizations serve communities across Afghanistan with confidence.",
  buttonText: "Contact Us",
  heroImage,
  introVideo,
};

// ================= SERVICES =================
export const servicesData = [
  {
    id: 1,
    image: service1,
    title: "General Logistics & Supply Chain",
    description:
      "End-to-end logistics planning, coordination, and delivery support for complex operations.",
  },
  {
    id: 2,
    image: service2,
    title: "Business Development Services",
    description:
      "Market-focused advisory and growth strategy support aligned with local realities.",
  },
  {
    id: 3,
    image: service3,
    title: "Strategic Communication and Media",
    description:
      "Communication, media, and reporting services that strengthen visibility and impact.",
  },
  {
    id: 4,
    image: service4,
    title: "Project Management Support",
    description:
      "Structured planning and execution support to keep projects on-track in dynamic environments.",
  },
];

// ================= PROJECTS =================
export const projectsData = {
  main: {
    image: projectMain,
    title: "Humanitarian Supply Chain Deployment",
    location: "Kabul, Afghanistan",
    year: "2024",
    description:
      "Delivered end-to-end logistics support for humanitarian aid distribution across remote regions, including procurement coordination, secure transport planning, and last-mile delivery tracking to ensure timely assistance.",
  },

  side: [
    {
      id: 1,
      image: project1,
      title: "Monitoring & Evaluation",
      location: "Balkh, Afghanistan",
      year: "2023",
      description:
        "Implemented monitoring and evaluation support for multi-site operational programs.",
      tags: ["M&E", "Data Analytics"],
    },
    {
      id: 2,
      image: project2,
      title: "Strategic Advisory Program",
      location: "Afghanistan",
      year: "2023",
      description: "Provided advisory services for supply chain optimization.",
      tags: ["Business Development", "Advisory"],
    },
    {
      id: 3,
      image: project3,
      title: "HR & Compliance Advisory",
      location: "Kabul, Afghanistan",
      year: "2024",
      description: "Provided HR structure and compliance advisory.",
      tags: ["HR Advisory", "Compliance"],
    },
  ],
};

// ================= REASONS =================
export const reasonsData = {
  image: reasonsImage,

  stats: {
    number: "7+",
    title: "Years of Trusted Experience",
    description:
      "With over 7 years of experience delivering projects and services, we have built a strong track record in supporting development, humanitarian, and private sector initiatives in Afghanistan.",
  },

  cards: [
    {
      id: 1,
      icon: "layers",
      color: "bg-[#08b99d]",
      title: "Integrated, End-to-End Services",
      description:
        "From market studies and project design to implementation, monitoring, logistics, and reporting, we provide complete solutions under one trusted partner.",
    },
    {
      id: 2,
      icon: "chart",
      color: "bg-[#1f7ae0]",
      title: "Results-Driven Project Management and Independent Oversight",
      description:
        "We ensure accountability and impact through strong project management, Monitoring and Evaluation, Post Distribution Monitoring, and Third Party Monitoring (TPM).",
    },
    {
      id: 3,
      icon: "tools",
      color: "bg-[#ff9416]",
      title: "Specific and Practical Solutions",
      description:
        "Our services are tailored to local realities, whether in energy, agriculture, logistics, or communications, to ensure sustainability, scalability, and real world impact.",
    },
    {
      id: 4,
      icon: "helmet",
      color: "bg-[#2554d8]",
      title: "Technical Expertise Combined with Field Experience",
      description:
        "Our teams combine technical knowledge with on the ground implementation experience to deliver solutions that work beyond paper plans.",
    },
    {
      id: 5,
      icon: "leaf",
      color: "bg-[#128399]",
      title: "Commitment to Sustainability and Resilience",
      description:
        "We prioritize climate smart, resource efficient, and resilient approaches that support long term development outcomes.",
      wide: true,
    },
  ],
};

// ================= CTA =================
export const ctaData = {
  image: ctaBg,
  title: "Need dependable support across Afghanistan?",
  buttonText: "Contact Us",
};

import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
} from "../assets/images";

export const partnersData = [
  { id: 1, image: partner1, name: "People in Need" },
  { id: 2, image: partner2, name: "DOT Glasses" },
  { id: 3, image: partner3, name: "BBC Media Action" },
  { id: 4, image: partner4, name: "USAID" },
  { id: 5, image: partner5, name: "ALTRON" },
  { id: 6, image: partner6, name: "HealthNet" },
];

import { mapImage } from "../assets/images";

export const footprintData = {
  mapImage,

  provinces: [
    {
      name: "Kabul",
      code: "01",
      type: "Operational Hub",
      top: "58%",
      left: "52%",
      color: "#ff9416",
    },
    {
      name: "Balkh",
      code: "02",
      type: "Active Region",
      top: "38%",
      left: "46%",
      color: "#009ca6",
    },
    {
      name: "Herat",
      code: "03",
      type: "Active Region",
      top: "55%",
      left: "20%",
      color: "#009ca6",
    },
    {
      name: "Nangarhar",
      code: "04",
      type: "Active Region",
      top: "62%",
      left: "66%",
      color: "#009ca6",
    },
    {
      name: "Badakhshan",
      code: "05",
      type: "Active Region",
      top: "20%",
      left: "68%",
      color: "#08b99d",
      active: true,
    },
  ],
};
export const testimonialsData = [
  {
    id: 1,
    image: client1,
    name: "Ahmed Khan",
    role: "Business Owner",
    title: "Dependable Logistics",
    text: `"Since choosing Abargaam as our logistics partner, we have seen major improvement in reliability, visibility, and client satisfaction."`,
    company: "Flectra",
  },
  {
    id: 2,
    image: client2,
    name: "David Thomas",
    role: "Supply Chain Manager",
    title: "Seamless Experience",
    text: `"We've partnered with many logistics companies, but Abargaam stands out for reliability and practical execution. Their responsive team has improved our delivery flow significantly."`,
    company: "Brandalix",
  },
  {
    id: 3,
    image: client3,
    name: "Jessica Mathew",
    role: "Logistics Coordinator",
    title: "Exceptional Service",
    text: `"Abargaam exceeded our expectations with clear communication, transparent coordination, and on-time support in challenging conditions."`,
    company: "Flectra",
  },
];
export const contactData = {
  headerTitle: "Contact Us",
  headerLabel: "Start Conversation",

  formBadge: "LET’S TALK",
  formTitle: "Send us your requirement",
  formText:
    "Tell us about your business needs and our team will get back to you with a practical response.",

  buttonText: "SUBMIT NOW",

  detailsBadge: "CONTACT DETAILS",
  detailsTitle: "Get in touch with ABARGAAM",
  detailsText:
    "We provide logistics, advisory, and project support services across Afghanistan. Share your scope and our team will respond with a practical plan.",

  contacts: [
    {
      id: 1,
      title: "WhatsApp Business",
      value: "+93 789174000",
      icon: "whatsapp",
    },
    {
      id: 2,
      title: "Direct Number",
      value: "+93 789174000",
      icon: "phone",
    },
    {
      id: 3,
      title: "Email Address",
      value: "sales@abargaam.com",
      icon: "email",
    },
    {
      id: 4,
      title: "Office Address",
      value: "Office: Karte Chahar, Street 1, House 5, Kabul, Afghanistan",
      icon: "location",
    },
  ],

  note: "Need quick support? Contact us by WhatsApp, phone, or email and our team will assist you promptly.",
};
export const faqData = [
  {
    id: 1,
    question: "What services does ABARGAAM provide?",
    answer:
      "ABARGAAM provides logistics, supply chain support, business development, project management, monitoring and evaluation, advisory, and communication services for NGOs and growing organizations.",
  },
  {
    id: 2,
    question: "Where do you operate in Afghanistan?",
    answer:
      "We operate across key provinces in Afghanistan, including Kabul, Balkh, Herat, Nangarhar, and Badakhshan, with Kabul serving as the central operational hub.",
  },
  {
    id: 3,
    question: "Do you support both implementation and advisory in one project?",
    answer:
      "Yes. We can support both practical implementation and strategic advisory in one project, helping clients plan, coordinate, execute, monitor, and report effectively.",
  },
  {
    id: 4,
    question: "Do you provide Monitoring and Evaluation services?",
    answer:
      "Yes. We provide Monitoring and Evaluation, post-distribution monitoring, reporting support, data collection, and independent oversight for development and humanitarian programs.",
  },
  {
    id: 5,
    question: "Can you deliver in complex or hard-to-reach environments?",
    answer:
      "Yes. Our team has experience working in complex operational environments and can support logistics, coordination, and field-based delivery in challenging conditions.",
  },
  {
    id: 6,
    question: "How can we start working with ABARGAAM?",
    answer:
      "You can start by contacting us through the contact form, WhatsApp, phone, or email. Share your requirements, and our team will respond with a practical plan.",
  },
];
export const footerData = {
  title: "Partnering In Your Global Journey",
  description:
    "ABARGAAM delivers dependable logistics, supply chain, and advisory solutions tailored for complex environments, helping organizations move with confidence and clarity.",
  buttonText: "Contact Us",
  email: "sales@abargaam.com",
  qrImage: qrCode,

  linksLeft: [
    { id: "home", title: "Home" },
    { id: "services", title: "Services" },
    { id: "about", title: "About" },
  ],

  linksRight: [
    { id: "blogs", title: "Blogs" },
    { id: "contact", title: "Contact us" },
  ],
};
