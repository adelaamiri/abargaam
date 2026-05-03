import { motion } from "framer-motion";
import { ctaData } from "../data/siteData";

const CTA = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="relative w-full h-[650px] sm:h-[720px] md:h-[850px] lg:h-[1000px] rounded-xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <img
            src={ctaData.image}
            alt="CTA Background"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          {/* Content */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: false, amount: 0.4 }}
            className="absolute left-5 sm:left-8 md:left-12 bottom-10 md:bottom-16 max-w-[520px]"
          >
            <h2 className="text-white text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.1] mb-6">
              {ctaData.title}
            </h2>

            <a
              href="#contact"
              className="w-[150px] md:w-[170px] h-[55px] md:h-[58px] bg-white text-black rounded-md flex items-center justify-center font-semibold hover:bg-[#098b98] hover:text-white transition-all duration-300 shadow-md"
            >
              {ctaData.buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
