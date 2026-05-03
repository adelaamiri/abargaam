// import { whyChooseData } from "../../data/servicesPageData";

// const WhyChooseUs = () => {
//   const { badge, title, description, image, features } = whyChooseData;

//   return (
//     <section className="py-16 md:py-24 px-4 md:px-8 lg:px-10">
//       <div className="max-w-[1600px] mx-auto">
//         {/* Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* LEFT SIDE */}
//           <div>
//             {/* Badge */}
//             <p className="text-[#0b8d95] text-sm md:text-base font-semibold mb-3 tracking-wider uppercase">
//               {badge}
//             </p>

//             {/* Title */}
//             <h2 className="text-3xl md:text-5xl font-semibold text-[#0a2342] mb-6 leading-tight">
//               {title}
//             </h2>

//             {/* Description */}
//             <p className="text-gray-600 text-lg leading-8 mb-10 max-w-xl">
//               {description}
//             </p>

//             {/* Features Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {features.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
//                 >
//                   {/* Icon */}
//                   <div className="w-12 h-12 bg-[#0b8d95] text-white flex items-center justify-center rounded-lg mb-4 text-xl">
//                     {item.icon}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xl font-semibold text-[#0a2342] mb-2">
//                     {item.title}
//                   </h3>

//                   {/* Desc */}
//                   <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative">
//             <img
//               src={image}
//               alt="why choose us"
//               className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { whyChooseData } from "../../data/servicesPageData";

const WhyChooseUs = () => {
  const { badge, title, description, image, features } = whyChooseData;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <p className="text-[#0b8d95] text-sm md:text-base font-semibold mb-3 tracking-wider uppercase">
              {badge}
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0a2342] mb-6 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-8 mb-10 max-w-xl">
              {description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item) => {
                const Icon = item.icon; // 🔥 مهم

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-200 
                    hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div
                      className="
                      w-12 h-12 
                      bg-[#0b8d95] 
                      text-white 
                      flex items-center justify-center 
                      rounded-lg 
                      mb-4
                      transition-all duration-300
                      group-hover:bg-[#0a7c83]
                      "
                    >
                      <Icon size={22} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#0a2342] mb-2">
                      {item.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-gray-600 text-sm leading-6">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={image}
              alt="why choose us"
              className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
