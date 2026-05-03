import { experienceData } from "../../data/aboutPageData";

const colors = {
  white: "bg-white text-[#0f172a]",
  teal: "bg-[#0e8a92] text-white",
  green: "bg-[#1aa187] text-white",
  blue: "bg-[#0f7c8a] text-white",
  orange: "bg-[#f7931a] text-white",
};

const Experience = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10 md:py-14">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-6 flex justify-between mb-10">
          <h2 className="text-[26px] md:text-[34px] font-semibold">
            Our Experience
          </h2>

          <div className="hidden md:flex items-center gap-2 text-[18px]">
            <span className="text-[#078b8f]">•</span>
            <span>What We Do</span>
            <span className="text-[#078b8f]">•</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl p-6 shadow-md relative overflow-hidden ${
                colors[item.color]
              }`}
            >
              {/* Logo */}
              <img
                src={item.logo}
                className="w-[90px] absolute top-4 right-4 opacity-90"
              />

              {/* Year */}
              <p className="text-sm font-semibold mb-3">{item.year}</p>

              {/* Title */}
              <h3 className="text-[20px] font-bold mb-3 leading-[1.3]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] opacity-90 mb-4 leading-[1.6]">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-full border ${
                      item.color === "white"
                        ? "border-gray-300"
                        : "border-white/40"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative circle */}
              <div className="absolute bottom-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full border opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
