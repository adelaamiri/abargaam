import { motion } from "framer-motion";
import { footprintData } from "../data/siteData";

const Footprint = () => {
  const activeProvince = footprintData.provinces.find((p) => p.active);

  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-12">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-7 flex justify-between mb-8">
          <h2 className="text-[30px] font-semibold">
            Our Footprint in Afghanistan
          </h2>

          <div className="hidden md:flex gap-2 text-[18px]">
            <span className="text-[#078b8f]">•</span>
            <span>Active Provinces</span>
            <span className="text-[#078b8f]">•</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative bg-white rounded-3xl overflow-hidden p-6">
            {/* Map Image */}
            <img
              src={footprintData.mapImage}
              className="w-full h-full object-contain"
              alt="Afghanistan Map"
            />

            {/* Markers */}
            {footprintData.provinces.map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ top: item.top, left: item.left }}
              >
                {/* Pulse Ring */}
                <span
                  className="absolute w-6 h-6 rounded-full opacity-50 animate-ping"
                  style={{ background: item.color }}
                ></span>

                {/* Dot */}
                <div
                  className="relative w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition"
                  style={{ background: item.color }}
                ></div>

                {/* Label */}
                <p className="text-xs font-bold mt-1 text-[#001b43] opacity-80 group-hover:opacity-100 transition">
                  {item.name}
                </p>
              </motion.div>
            ))}

            {/* Floating Card (Dynamic) */}
            {activeProvince && (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 w-[260px]"
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                    style={{ background: activeProvince.color }}
                  >
                    {activeProvince.code}
                  </div>

                  <div>
                    <h3 className="font-bold">{activeProvince.name}</h3>
                    <p className="text-sm text-gray-500">
                      {activeProvince.type}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-3xl p-6">
            <h3 className="text-sm tracking-widest text-gray-400 mb-3">
              ACTIVE COVERAGE
            </h3>

            <h2 className="text-[30px] font-bold mb-4 leading-tight">
              Where we are active in Afghanistan
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our operations are focused across key provinces in Afghanistan,
              delivering reliable support and regional coverage.
            </p>

            <div className="space-y-4">
              {footprintData.provinces.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02 }}
                  className={`flex justify-between items-center p-4 rounded-xl border transition ${
                    item.active
                      ? "bg-[#e6f7f4] shadow-md"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <div
                      className="w-10 h-10 rounded-lg text-white flex items-center justify-center font-bold"
                      style={{ background: item.color }}
                    >
                      {item.code}
                    </div>

                    <div>
                      <h4 className="font-bold text-[#0f172a]">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  </div>

                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ background: item.color }}
                  ></span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;
