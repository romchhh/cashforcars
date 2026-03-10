import Image from 'next/image';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#F5F5F0] z-30 md:z-auto">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-5xl font-bold text-[#222221] leading-tight"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Car Services & Offers
          </h2>
        </div>

        {/* Services Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const imageOnLeftDesktop = service.imagePosition === 'left';
            const imageOrderDesktop = imageOnLeftDesktop ? 'md:order-1' : 'md:order-2';
            const textOrderDesktop = imageOnLeftDesktop ? 'md:order-2' : 'md:order-1';
            return (
              <div
                key={index}
                className="bg-[#064E3B] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
              >
                {/* Image Side - mobile: full width on top; desktop: from imagePosition */}
                <div className={`relative w-full h-48 md:h-auto md:w-1/2 flex-shrink-0 ${imageOrderDesktop}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Information Side */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center p-5 md:p-6 bg-[#065F46] ${textOrderDesktop}`}>
                  {/* Icon + Title in one row, icon on the left */}
                  <div className="flex items-center gap-3 mb-2">
                    {service.Icon && (
                      <service.Icon className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
                    )}
                    <h3
                      className="text-white text-base md:text-lg font-bold leading-tight text-left"
                      style={{ fontFamily: 'Corbel, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p
                    className="text-white/90 text-sm font-medium leading-relaxed text-left"
                    style={{ fontFamily: 'Corbel, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
