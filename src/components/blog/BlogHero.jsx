import { blogHeroData } from "../../data/blogPageData";

const BlogHero = () => {
  return (
    <section className="page-hero-offset w-full px-4 md:px-10 pb-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="relative w-full h-[520px] md:h-[720px] lg:h-[950px] rounded-md overflow-hidden">
          <img
            src={blogHeroData.image}
            alt="Transport and Logistics Blog"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2933]/45 via-black/25 to-black/50"></div>

          <h1 className="absolute top-10 md:top-16 left-8 md:left-12 text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.1] font-normal whitespace-pre-line max-w-[520px]">
            {blogHeroData.title}
          </h1>

          <p className="absolute right-8 md:right-12 bottom-8 md:bottom-10 text-white text-[14px] md:text-[16px] font-semibold">
            {blogHeroData.breadcrumb}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
