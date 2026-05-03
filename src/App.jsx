// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Reasons from "./components/Reasons";
// import CTA from "./components/CTA";
// import Partners from "./components/Partners";
// import Footprint from "./components/Footprint";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// const App = () => {
//   return (
//     <main className="min-h-screen bg-[#e8eef5]">
//       <Navbar />
//       <Hero />
//       <Services />
//       <Projects />
//       <Reasons />
//       <CTA />
//       <Partners />
//       <Footprint />
//       <Testimonials />
//       <Contact />
//       <FAQ />
//       <Footer />
//     </main>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <main className="min-h-screen bg-[#e8eef5]">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Other Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;
