import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqData } from "../data/siteData";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="w-full px-4 md:px-10 py-10 md:py-14">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-7 md:py-9 flex items-center justify-between mb-10">
          <h2 className="text-[#07142d] text-[28px] md:text-[38px] font-semibold">
            Frequently Asked Questions
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#07142d] text-[18px]">
            <span className="text-[#078b8f] text-2xl">•</span>
            <span>FAQs</span>
            <span className="text-[#078b8f] text-2xl">•</span>
          </div>
        </div>

        <div className="bg-[#f8fafc] rounded-md px-5 md:px-10 py-12 md:py-24">
          <div className="max-w-[930px] mx-auto space-y-5">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5eaf0] shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full min-h-[82px] px-6 md:px-8 flex items-center justify-between gap-5 text-left"
                  >
                    <span className="text-black text-[17px] md:text-[20px] font-semibold">
                      {item.question}
                    </span>

                    <span className="w-9 h-9 rounded-full bg-white border border-[#dbe4ef] shadow-sm flex items-center justify-center shrink-0">
                      {isOpen ? (
                        <FaMinus className="text-[14px]" />
                      ) : (
                        <FaPlus className="text-[14px]" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 pb-6 text-[#475569] text-[15px] md:text-[17px] leading-[1.7]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
