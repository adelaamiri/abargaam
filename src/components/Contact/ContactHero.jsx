import { contactHeroData } from "../../data/contactPageData";

const ContactHero = () => {
  return (
    <section className="page-hero-offset w-full px-4 md:px-10 pb-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="relative w-full h-[520px] md:h-[720px] lg:h-[950px] rounded-md overflow-hidden">
          {/* Image */}
          <img
            src={contactHeroData.image}
            alt="Contact Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2933]/40 via-black/20 to-black/60"></div>

          {/* Title */}
          <h1 className="absolute top-10 md:top-16 left-6 md:left-12 text-white text-[32px] md:text-[50px] lg:text-[58px] leading-[1.1] font-light whitespace-pre-line max-w-[520px]">
            {contactHeroData.title}
          </h1>

          {/* Breadcrumb */}
          <p className="absolute right-6 md:right-12 bottom-6 md:bottom-10 text-white text-[13px] md:text-[15px] font-medium">
            {contactHeroData.breadcrumb}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
