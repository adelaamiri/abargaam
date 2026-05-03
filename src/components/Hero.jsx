import { FaPlay, FaStar } from "react-icons/fa";
import { heroData } from "../data/siteData";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="w-full px-4 md:px-10 py-4">
      {/* Animation Container */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "top" }} // 👈 مهم برای باز شدن از بالا
        className="max-w-[1500px] mx-auto bg-[#f7f8fa] rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left Content */}
        <div className="px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-fit bg-[#e1e4e8] rounded-full px-6 py-4 flex items-center gap-3 mb-8"
          >
            <FaStar className="text-[#008fa0] text-xl" />
            <span className="text-[#26384d] font-semibold text-[15px] md:text-[16px]">
              {heroData.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-black text-[30px] md:text-[40px] lg:text-[45px] leading-[1.18] max-w-[680px] mb-8"
          >
            {heroData.title}
          </motion.h1>

          {/* Video */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-5 mb-8"
          >
            <div className="w-[3px] h-[135px] bg-red-500"></div>

            <div className="relative w-[230px] md:w-[270px] h-[115px] md:h-[130px] rounded-md overflow-hidden shadow-md">
              <video
                src={heroData.introVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <button className="absolute left-3 bottom-3 w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center shadow-md animate-pulse">
                <FaPlay className="text-[#0b96a5] ml-1" />
              </button>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#2c3d55] text-[18px] md:text-[20px] leading-[1.45] max-w-[630px] mb-10"
          >
            {heroData.description}
          </motion.p>

          {/* Button */}
          <motion.a
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            href="#contact"
            className="w-[260px] h-[58px] rounded-md bg-[#0797aa] text-white flex items-center justify-center text-[18px] font-bold hover:bg-[#067f8f] transition"
          >
            {heroData.buttonText}
          </motion.a>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full h-[420px] md:h-[600px]"
        >
          <img
            src={heroData.heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
