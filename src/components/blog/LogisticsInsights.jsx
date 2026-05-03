import { logisticsInsightsData } from "../../data/blogPageData";

const LogisticsInsights = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-6 flex items-center justify-between mb-8">
          <h2 className="text-[#07142d] text-[24px] md:text-[32px] font-semibold">
            {logisticsInsightsData.title}
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#07142d] text-[15px]">
            <span className="text-[#078b8f] text-xl">•</span>
            <span>{logisticsInsightsData.label}</span>
            <span className="text-[#078b8f] text-xl">•</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {logisticsInsightsData.posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-md overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <div className="p-4">
                <div className="w-full h-[190px] md:h-[220px] overflow-hidden rounded-md">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="px-4 pb-5 pt-1">
                <h3 className="text-black text-[16px] md:text-[18px] font-semibold leading-[1.55]">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsInsights;
