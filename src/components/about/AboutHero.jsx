import { aboutHeroData } from "../../data/aboutPageData";

const AboutHero = () => {
  const { title, breadcrumb, image } = aboutHeroData;

  return (
    <section className="pt-28 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {/* IMAGE */}
          <img
            src={image}
            alt="About Hero"
            className="w-full h-[400px] md:h-[550px] lg:h-[700px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16">
            {/* TITLE (Top Left) */}
            <div className="max-w-xl mt-10 md:mt-16">
              <h1 className="text-white text-4xl md:text-6xl font-light leading-tight">
                {title}
              </h1>
            </div>

            {/* BREADCRUMB (Bottom Right) */}
            <div className="self-end">
              <p className="text-white text-lg md:text-xl">
                [{breadcrumb.join(" / ")}]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
