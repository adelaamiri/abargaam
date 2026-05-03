import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPlay } from "react-icons/fa";
import { contactFormData } from "../../data/contactPageData";

const iconMap = {
  location: FaMapMarkerAlt,
  phone: FaPhoneAlt,
  email: FaEnvelope,
};

const ContactForm = () => {
  return (
    <section className="w-full px-4 md:px-10 py-8 md:py-12">
      <div className="max-w-[1500px] mx-auto">
        <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-sm">
          <div className="px-6 md:px-12 py-10 md:py-14">
            <span className="inline-flex px-5 py-2 rounded-full border border-[#9be7dd] bg-[#e2faf6] text-[#009b8f] text-[12px] font-bold tracking-[3px] mb-5">
              {contactFormData.badge}
            </span>

            <h2 className="text-[#07142d] text-[30px] md:text-[38px] font-bold mb-4">
              {contactFormData.title}
            </h2>

            <p className="text-[#334155] text-[15px] leading-[1.7] mb-8 max-w-[620px]">
              {contactFormData.description}
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input className="contact-input" placeholder="Your Name" />
              <input className="contact-input" placeholder="Your Email" />
              <input className="contact-input" placeholder="Phone Number" />
              <input className="contact-input" placeholder="Business Type" />
              <input className="contact-input" placeholder="Company Name" />

              <select className="contact-input text-[#64748b]">
                <option>Select Country</option>
                <option>Afghanistan</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>Turkey</option>
              </select>

              <textarea
                className="contact-input md:col-span-2 h-[150px] resize-none pt-5"
                placeholder="Tell us about your project or inquiry"
              />

              <label className="md:col-span-2 min-h-[70px] rounded-2xl border border-[#dbe4ef] px-4 py-4 flex items-start gap-3 text-[#334155] text-[14px] leading-[1.6]">
                <input type="checkbox" className="mt-1 w-4 h-4" />
                <span>
                  I agree to the privacy policy and consent to being contacted
                  regarding my inquiry.
                </span>
              </label>

              <button
                type="submit"
                className="md:col-span-2 h-[58px] rounded-2xl bg-[#ff8a2a] text-white font-bold tracking-[5px] hover:bg-[#e86f14] hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                {contactFormData.buttonText}
              </button>
            </form>
          </div>

          <div className="relative min-h-[520px] lg:min-h-full overflow-hidden">
            <img
              src={contactFormData.image}
              alt="Contact Overview"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 bg-black/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            <div className="absolute left-8 md:left-12 bottom-10 md:bottom-14 text-white max-w-[520px]">
              <button className="w-[74px] h-[74px] rounded-full bg-white/80 flex items-center justify-center mb-6 shadow-lg">
                <span className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">
                  <FaPlay className="text-[#08a98f] ml-1 text-[20px]" />
                </span>
              </button>

              <span className="inline-flex px-5 py-2 rounded-full bg-white/20 border border-white/30 text-[12px] font-bold tracking-[3px] mb-5">
                {contactFormData.videoLabel}
              </span>

              <h3 className="text-[32px] md:text-[42px] font-bold leading-[1.05] whitespace-pre-line mb-5">
                {contactFormData.sideTitle}
              </h3>

              <p className="text-white/95 text-[15px] leading-[1.8] max-w-[520px]">
                {contactFormData.sideText}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12 md:mt-20">
          {contactFormData.infoCards.map((card) => {
            const Icon = iconMap[card.icon];

            return (
              <div
                key={card.id}
                className="bg-white rounded-xl px-6 py-10 md:py-12 text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`w-[58px] h-[58px] rounded-full ${card.color} text-white mx-auto flex items-center justify-center mb-7 shadow-md`}
                >
                  <Icon className="text-[22px]" />
                </div>

                <h3 className="text-black text-[20px] font-bold mb-4">
                  {card.title}
                </h3>

                <div className="space-y-2">
                  {card.lines.map((line, index) => (
                    <p
                      key={index}
                      className="text-[#334155] text-[14px] leading-[1.7]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
