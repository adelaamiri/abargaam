import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { footerData, siteInfo } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="w-full px-4 md:px-10 py-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Top Footer */}
        <div className="bg-[#f8fafc] rounded-md px-6 md:px-10 lg:px-14 py-12 md:py-16 mb-7">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.7fr] gap-12 items-center">
            {/* Left */}
            <div>
              <img
                src={siteInfo.logo}
                alt="Abargaam Logo"
                className="w-[170px] md:w-[210px] object-contain mb-12"
              />

              <h2 className="text-[#111827] text-[42px] md:text-[58px] lg:text-[68px] font-bold leading-[1.05] max-w-[650px] mb-8">
                {footerData.title}
              </h2>

              <p className="text-[#334155] text-[20px] md:text-[25px] leading-[1.55] max-w-[820px] mb-10">
                {footerData.description}
              </p>

              <a
                href="#contact"
                className="w-[250px] h-[70px] rounded-md bg-[#0797aa] text-white flex items-center justify-center text-[20px] font-bold tracking-wide hover:bg-[#067f8f] transition"
              >
                {footerData.buttonText}
              </a>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center lg:items-end">
              <div className="bg-white rounded-md shadow-sm border border-[#eef2f6] px-8 py-8 text-center mb-8">
                <p className="text-[#00a98f] text-[13px] font-bold tracking-[4px] mb-3">
                  COMPANY PROFILE
                </p>

                <h3 className="text-[#111827] text-[20px] font-bold mb-5">
                  Scan To Download
                </h3>

                <div className="bg-white rounded-xl border border-[#eef2f6] shadow-sm p-4 mb-4">
                  <img
                    src={footerData.qrImage}
                    alt="QR Code"
                    className="w-[190px] h-[190px] object-contain"
                  />
                </div>

                <a
                  href="/company-profile.pdf"
                  download
                  className="inline-flex bg-[#05b999] text-white px-5 py-3 rounded-md text-[14px] font-bold hover:bg-[#079b82] transition"
                >
                  Download Directly
                </a>
              </div>

              <div className="flex items-center gap-5">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-[62px] h-[62px] rounded-full bg-white border border-[#dbe4ef] shadow-sm flex items-center justify-center text-[#94a3b8] text-[24px] hover:text-[#0797aa] hover:-translate-y-1 transition"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="bg-white rounded-md px-6 md:px-8 py-7 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 text-[22px] md:text-[26px]">
            {footerData.linksLeft.map((link, index) => (
              <div key={link.id} className="flex items-center gap-5 md:gap-7">
                <a
                  href={`#${link.id}`}
                  className={`hover:text-[#078b8f] transition ${
                    index === 0 ? "text-[#078b8f]" : "text-black"
                  }`}
                >
                  {link.title}
                </a>

                {index !== footerData.linksLeft.length - 1 && (
                  <span className="text-[#078b8f]">•</span>
                )}
              </div>
            ))}
          </div>

          <a
            href={`mailto:${footerData.email}`}
            className="text-black text-[22px] md:text-[26px] hover:text-[#078b8f] transition"
          >
            {footerData.email}
          </a>

          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7 text-[22px] md:text-[26px]">
            {footerData.linksRight.map((link, index) => (
              <div key={link.id} className="flex items-center gap-5 md:gap-7">
                <a
                  href={`#${link.id}`}
                  className="text-black hover:text-[#078b8f] transition"
                >
                  {link.title}
                </a>

                {index !== footerData.linksRight.length - 1 && (
                  <span className="text-[#078b8f]">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
