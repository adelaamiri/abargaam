import { partnersData } from "../data/siteData";

const Partners = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-12 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-6 flex items-center justify-between mb-6">
          <h2 className="text-[#111827] text-[28px] md:text-[40px] font-semibold">
            Our Partners
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#111827] text-[20px]">
            <span className="text-[#078b8f] text-2xl">•</span>
            <span>Trusted By</span>
            <span className="text-[#078b8f] text-2xl">•</span>
          </div>
        </div>

        {/* Slider */}
        <div className="bg-white rounded-md py-7 overflow-hidden shadow-sm">
          <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...partnersData, ...partnersData].map((item, index) => (
              <div
                key={index}
                className="min-w-[230px] md:min-w-[270px] h-[145px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col items-center justify-center transition-all duration-500 ease-out hover:scale-105 hover:shadow-md"
              >
                <div className="w-full h-[80px] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[190px] md:max-w-[230px] h-[65px] object-contain"
                  />
                </div>

                <p className="text-[#4b5563] text-[16px] md:text-[18px] font-semibold text-center mt-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
