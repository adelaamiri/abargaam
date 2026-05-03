import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactData } from "../data/siteData";

const iconMap = {
  whatsapp: FaWhatsapp,
  phone: FaPhoneAlt,
  email: FaEnvelope,
  location: FaMapMarkerAlt,
};

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 md:px-10 py-10 md:py-14">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-md shadow-sm px-6 md:px-8 py-7 md:py-9 flex items-center justify-between mb-10">
          <h2 className="text-[#07142d] text-[28px] md:text-[36px] font-semibold">
            {contactData.headerTitle}
          </h2>

          <div className="hidden md:flex items-center gap-3 text-[#07142d] text-[18px]">
            <span className="text-[#078b8f] text-2xl">•</span>
            <span>{contactData.headerLabel}</span>
            <span className="text-[#078b8f] text-2xl">•</span>
          </div>
        </div>

        {/* Main Box */}
        <div className="bg-white rounded-md px-5 md:px-9 py-10 md:py-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] border border-[#dce5ef] px-6 md:px-12 py-10 md:py-12 shadow-xl"
            >
              <span className="inline-flex bg-[#dffaf5] text-[#009b8f] border border-[#9be7dd] rounded-full px-5 py-2 text-[12px] font-bold tracking-[3px] mb-6">
                {contactData.formBadge}
              </span>

              <h3 className="text-[#07142d] text-[28px] md:text-[34px] font-bold mb-4">
                {contactData.formTitle}
              </h3>

              <p className="text-[#334155] text-[15px] md:text-[16px] leading-[1.7] mb-8 max-w-[600px]">
                {contactData.formText}
              </p>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="contact-input"
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Business Sector"
                />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Organization"
                />

                <select className="contact-input text-[#64748b]">
                  <option>Select Country</option>
                  <option>Afghanistan</option>
                  <option>Pakistan</option>
                  <option>India</option>
                  <option>Turkey</option>
                </select>

                <textarea
                  className="contact-input md:col-span-2 h-[150px] resize-none pt-5"
                  placeholder="Tell us about your project or requirement"
                ></textarea>

                <button
                  type="submit"
                  className="md:col-span-2 h-[58px] rounded-2xl bg-[#ff7417] text-white font-bold tracking-[5px] hover:bg-[#e8640d] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  {contactData.buttonText}
                </button>
              </form>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-gradient-to-br from-[#08b99d] to-[#078273] px-6 md:px-12 py-10 md:py-12 text-white shadow-xl"
            >
              <span className="inline-flex border border-white/40 bg-white/10 rounded-full px-5 py-2 text-[12px] font-bold tracking-[4px] mb-7">
                {contactData.detailsBadge}
              </span>

              <h3 className="text-[28px] md:text-[36px] font-bold mb-5">
                {contactData.detailsTitle}
              </h3>

              <p className="text-white/95 leading-[1.8] mb-8">
                {contactData.detailsText}
              </p>

              <div className="space-y-5">
                {contactData.contacts.map((item) => {
                  const Icon = iconMap[item.icon];

                  return (
                    <div
                      key={item.id}
                      className="border border-white/25 bg-white/10 rounded-2xl px-5 py-5 flex items-center gap-5 hover:bg-white/15 transition duration-300"
                    >
                      <div className="w-[58px] h-[58px] rounded-xl bg-white text-[#078273] flex items-center justify-center shrink-0">
                        <Icon className="text-[22px]" />
                      </div>

                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-white/95 text-[14px] md:text-[15px]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border border-white/25 bg-white/10 rounded-2xl p-6 leading-[1.8]">
                {contactData.note}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
