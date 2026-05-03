import { visionMissionData } from "../../data/aboutPageData";

const VisionMission = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-10 bg-[#f5f7fa]">
      <div className="max-w-[1400px] mx-auto space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between bg-white px-6 py-5 rounded-xl shadow-sm border">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0a2342]">
            Vision & Mission
          </h2>

          <p className="text-[#0b8d95] text-sm font-medium hidden md:block">
            • Who We Are •
          </p>
        </div>

        {/* Sections */}
        {visionMissionData.map((item, index) => {
          const isReverse = index === 1;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white p-6 md:p-8 rounded-2xl shadow-sm border transition-all duration-500 hover:shadow-lg`}
            >
              {/* IMAGE */}
              <div
                className={`${
                  isReverse ? "lg:order-1" : "lg:order-2"
                } overflow-hidden rounded-xl`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] md:h-[350px] lg:h-[400px] object-cover rounded-xl transform transition duration-700 hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className={`${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                {/* Badge */}
                <div className="inline-block bg-[#0b8d95] text-white px-5 py-2 rounded-md text-sm font-medium mb-5">
                  {item.title}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-7 mb-6 max-w-xl">
                  {item.desc}
                </p>

                {/* Button */}
                <button className="text-[#0b8d95] font-semibold hover:underline transition">
                  {item.btn}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VisionMission;
