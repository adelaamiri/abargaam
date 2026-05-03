import { motion } from "framer-motion";
import { servicesData } from "../data/siteData";

const Services = () => {
  const cardVariants = {
    hidden: (index) => ({
      x: index === 0 ? 520 : index === 1 ? 170 : index === 2 ? -170 : -520,
      scale: 0.96,
      opacity: 0.9,
    }),

    visible: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section
      id="services"
      className="w-full px-4 md:px-10 py-8 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white rounded-md shadow-sm px-6 md:px-8 py-8 md:py-9 flex items-center justify-between mb-10 md:mb-12"
        >
          <h2 className="text-[#111827] text-[28px] md:text-[38px] lg:text-[42px] font-semibold">
            Core Services We Deliver
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#111827] text-[20px]">
            <span className="text-[#078b8f] text-2xl">•</span>
            <span>Services</span>
            <span className="text-[#078b8f] text-2xl">•</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              animate="hidden"
              transition={{
                duration: 1.4,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.45 }}
              className="bg-white rounded-md shadow-md px-7 pt-7 pb-8 flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-full h-[180px] md:h-[190px] rounded-md overflow-hidden mb-7">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-black text-[23px] md:text-[25px] font-bold leading-[1.25] mb-6 min-h-[64px] flex items-center">
                {service.title}
              </h3>

              <p className="text-[#4b5563] text-[18px] md:text-[19px] leading-[1.55] max-w-[330px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center mt-12 md:mt-14"
        >
          <a
            href="#services"
            className="w-[230px] h-[66px] bg-[#ff9416] text-white rounded-lg flex items-center justify-center text-[19px] md:text-[20px] font-medium hover:bg-[#e98208] transition"
          >
            See All Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
