import { servicesHeroData } from "../../data/servicesPageData";

const ServicesHero = () => {
  const { title, breadcrumb, image } = servicesHeroData;

  return (
    <section className="pt-28 px-4 md:px-8 lg:px-10">
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] md:h-[550px] lg:h-[720px] object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16">
          <div className="max-w-3xl mt-10 md:mt-16">
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              {title}
            </h1>
          </div>

          <div className="self-end">
            <p className="text-white text-lg md:text-2xl">
              [{breadcrumb.join(" / ")}]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
