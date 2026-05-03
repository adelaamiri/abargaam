import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { teamData } from "../../data/aboutPageData";

const socialIcons = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
};

const OurTeam = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-6 flex items-center justify-between mb-8">
          <h2 className="text-[#07142d] text-[24px] md:text-[32px] font-semibold">
            The People Behind ABARGAAM
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#07142d] text-[16px]">
            <span className="text-[#078b8f] text-xl">•</span>
            <span>Our Team</span>
            <span className="text-[#078b8f] text-xl">•</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-md overflow-hidden shadow-sm border border-[#e5eaf0] hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[300px] md:h-[330px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-[#07142d] text-[18px] font-bold mb-1">
                  {member.name}
                </h3>

                <p className="text-[#64748b] text-[13px] mb-3">{member.role}</p>

                <p className="text-[#1f3554] text-[14px] leading-[1.65] mb-3 line-clamp-4">
                  {member.description}
                </p>

                <button className="text-[#00a98f] text-[13px] font-semibold mb-4">
                  Show more
                </button>

                <div className="flex items-center gap-3">
                  {member.socials.map((social) => {
                    const Icon = socialIcons[social];

                    return (
                      <a
                        key={social}
                        href="#"
                        className="w-8 h-8 rounded-full border border-[#dbe4ef] flex items-center justify-center text-black hover:bg-[#078b8f] hover:text-white transition"
                      >
                        <Icon className="text-[13px]" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
