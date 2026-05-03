import { motion } from "framer-motion";
import { projectsData } from "../data/siteData";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Top Title */}
        <div className="bg-white rounded-md px-6 md:px-8 py-6 flex justify-between items-center mb-6">
          <h2 className="text-[26px] md:text-[32px] font-semibold">
            Abargaam Logistics & Consulting
          </h2>

          <div className="hidden md:flex items-center gap-2 text-[18px]">
            <span className="text-green-600">•</span>
            <span>WHO WE ARE</span>
            <span className="text-green-600">•</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#f4f6f9] rounded-md p-6 md:p-10">
          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-[36px] md:text-[50px] font-bold text-[#0f172a] leading-[1.1] mb-4">
              Our Recent <br /> Projects & Impact
            </h1>

            <p className="text-[#475569] text-[18px] md:text-[20px] max-w-[600px]">
              Delivering exceptional logistics, advisory, and development
              support across Afghanistan.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Big Card */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-md"
            >
              <div className="relative">
                <img
                  src={projectsData.main.image}
                  className="w-full h-[260px] md:h-[350px] object-cover"
                />

                <span className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                  ★ Featured Project
                </span>
              </div>

              <div className="bg-[#1e2b5c] text-white p-6">
                <h3 className="text-[22px] md:text-[26px] font-bold mb-3">
                  {projectsData.main.title}
                </h3>

                <p className="text-sm mb-3 opacity-80">
                  📍 {projectsData.main.location} • 📅 {projectsData.main.year}
                </p>

                <p className="text-[15px] md:text-[16px] mb-5 opacity-90">
                  {projectsData.main.description}
                </p>

                <button className="bg-white text-black px-5 py-3 rounded-md font-medium flex items-center gap-2">
                  View Project Details <FaArrowRight />
                </button>
              </div>
            </motion.div>

            {/* Right Cards */}
            <div className="flex flex-col gap-5">
              {projectsData.side.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white rounded-xl p-4 flex gap-4 items-center shadow-sm"
                >
                  <img
                    src={item.image}
                    className="w-[90px] h-[80px] rounded-md object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold text-[18px]">{item.title}</h4>

                    <p className="text-[13px] text-gray-500 mb-1">
                      📍 {item.location} • 📅 {item.year}
                    </p>

                    <p className="text-[14px] text-gray-600 mb-2">
                      {item.description}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="text-gray-400">
                    <FaArrowRight />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
