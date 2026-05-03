import { featuredReadsData } from "../../data/blogPageData";

const FeaturedReads = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-6 flex items-center justify-between mb-8">
          <h2 className="text-[#07142d] text-[24px] md:text-[32px] font-semibold">
            {featuredReadsData.title}
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#07142d] text-[15px]">
            <span className="text-[#078b8f] text-xl">•</span>
            <span>{featuredReadsData.label}</span>
            <span className="text-[#078b8f] text-xl">•</span>
          </div>
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-md shadow-md overflow-hidden p-2">
          <div className="w-full h-[260px] md:h-[420px] lg:h-[560px] overflow-hidden">
            <img
              src={featuredReadsData.image}
              alt={featuredReadsData.blogTitle}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="px-2 md:px-4 py-5">
            <h3 className="text-black text-[17px] md:text-[22px] font-normal">
              {featuredReadsData.blogTitle}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReads;
