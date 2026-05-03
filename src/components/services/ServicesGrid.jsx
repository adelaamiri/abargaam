// import {
//   essentialServicesData,
//   servicesGridData,
// } from "../../data/servicesPageData";
// import ServiceCard from "./ServiceCard";

// const ServicesGrid = () => {
//   return (
//     <section className="py-16 md:py-24 px-4 md:px-8 lg:px-10">
//       <div className="max-w-[1600px] mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 md:px-10 py-6 md:py-8 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <h2 className="text-3xl md:text-5xl font-semibold text-[#0a2342]">
//             {essentialServicesData.title}
//           </h2>

//           <button className="text-[#0b8d95] text-lg md:text-xl font-medium hover:underline self-start md:self-auto">
//             • {essentialServicesData.linkText} •
//           </button>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">
//           {servicesGridData.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesGrid;

import {
  essentialServicesData,
  servicesGridData,
} from "../../data/servicesPageData";

const rowLayouts = [
  servicesGridData.slice(0, 2), // Row 1
  servicesGridData.slice(2, 5), // Row 2
  servicesGridData.slice(5, 7), // Row 3
];

const ServicesGrid = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-10">
      <div className="max-w-[1700px] mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 md:px-10 py-6 md:py-8 mb-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0a2342]">
            {essentialServicesData.title}
          </h2>

          <button className="text-[#0b8d95] text-lg md:text-xl font-medium hover:underline">
            • {essentialServicesData.linkText} •
          </button>
        </div>

        {/* Custom Rows */}
        <div className="space-y-10">
          {rowLayouts.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-8 ${
                row.length === 2
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              }`}
            >
              {row.map((service) => (
                <article
                  key={service.id}
                  className="group bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        row.length === 2
                          ? "h-[320px] md:h-[380px]"
                          : "h-[260px] md:h-[300px]"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 text-center">
                    <h3 className="text-2xl md:text-[2rem] font-semibold text-[#0a2342] mb-5 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-8 mb-8">
                      {service.description}
                    </p>

                    <button className="text-[#0b8d95] text-xl font-semibold hover:underline">
                      Read more
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
