import { motion } from "framer-motion";
import { reasonsData } from "../data/siteData";
import {
  FaLayerGroup,
  FaChartLine,
  FaTools,
  FaHardHat,
  FaLeaf,
} from "react-icons/fa";

const iconMap = {
  layers: FaLayerGroup,
  chart: FaChartLine,
  tools: FaTools,
  helmet: FaHardHat,
  leaf: FaLeaf,
};

const Reasons = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="max-w-[1200px] mx-auto bg-[#f4f6fa] p-6 rounded-xl grid lg:grid-cols-2 gap-8">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Reasons to <br /> Work With Us
          </h2>

          {/* Green Box */}
          <div className="bg-green-500 text-white p-6 rounded-xl mb-4">
            <h3 className="text-3xl font-bold">{reasonsData.stats.number}</h3>
            <h4 className="font-bold mb-2">{reasonsData.stats.title}</h4>
            <p>{reasonsData.stats.description}</p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasonsData.cards.map((card) => {
              const Icon = iconMap[card.icon];

              return (
                <motion.div
                  key={card.id}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`bg-white p-5 rounded-xl shadow-sm transition ${
                    card.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full ${card.color} flex items-center justify-center text-white mb-4`}
                  >
                    <Icon />
                  </div>

                  <h3 className="font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={reasonsData.image}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Reasons;
