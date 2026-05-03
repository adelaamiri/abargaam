import { FaStar, FaQuoteRight } from "react-icons/fa";
import { SiAirtable } from "react-icons/si";
import { testimonialsData } from "../data/siteData";

const Testimonials = () => {
  const sliderData = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="testimonials"
      className="w-full px-4 md:px-10 py-10 md:py-14 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-7 md:py-9 flex items-center justify-between mb-10">
          <h2 className="text-[#111827] text-[28px] md:text-[40px] font-semibold">
            What Our Clients Say
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#111827] text-[20px]">
            <span className="text-[#078b8f] text-2xl">•</span>
            <span>Testimonials</span>
            <span className="text-[#078b8f] text-2xl">•</span>
          </div>
        </div>

        <div className="bg-white rounded-xl px-4 md:px-10 py-12 md:py-16 overflow-hidden shadow-sm">
          <div className="flex gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {sliderData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="min-w-[330px] md:min-w-[460px] lg:min-w-[520px] bg-white border border-[#dfe7f1] rounded-2xl shadow-md px-7 md:px-9 py-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl whitespace-normal"
              >
                <div className="flex items-start justify-between mb-7">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[70px] h-[70px] rounded-full object-cover border-4 border-[#eef3f8]"
                    />

                    <div>
                      <h3 className="text-[#111827] text-[18px] md:text-[20px] font-bold">
                        {item.name}
                      </h3>
                      <p className="text-[#6b7c93] text-[15px] md:text-[17px]">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <FaQuoteRight className="text-[#d9fbf5] text-[42px]" />
                </div>

                <div className="flex gap-1 text-[#ffb51b] mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>

                <h3 className="text-[#111827] text-[22px] md:text-[25px] font-bold mb-6">
                  {item.title}
                </h3>

                <p className="text-[#5d6b82] text-[17px] md:text-[19px] leading-[1.9] mb-10">
                  {item.text}
                </p>

                <div className="border-t border-[#eef2f6] pt-7 flex items-center gap-4">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#dbe4ef] bg-[#f8fafc] flex items-center justify-center">
                    <SiAirtable className="text-black text-[24px]" />
                  </div>

                  <div>
                    <p className="tracking-[5px] text-[#9aa8bd] text-[12px] font-semibold">
                      COMPANY
                    </p>
                    <h4 className="text-[#111827] font-bold text-[16px]">
                      {item.company}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
