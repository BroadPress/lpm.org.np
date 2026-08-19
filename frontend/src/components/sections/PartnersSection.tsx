"use client";
import { motion } from "framer-motion";
import { memo } from "react";
import OptimizedImage from "../ui/OptimizedImage";
interface Partner {
  logo: string;
  name: string;
}
interface PartnerLogoProps {
  logo: string;
  name: string;
}

const PartnerLogo = memo(({ logo, name }: PartnerLogoProps) => (
  <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 mx-3 flex-shrink-0">
    <div className="relative w-24 h-16">
      <OptimizedImage src={logo} fill={true} sizes="160px"   alt={name} className="object-contain h-16 w-24" />
    </div>
  </div>
));

PartnerLogo.displayName = "PartnerLogo";
export default function PartnersSection() {
  const partners: Partner[] = [
    { logo: "/images/partner/logo1.png", name: "Partner 1" },
    { logo: "/images/partner/logo2.png", name: "Partner 2" },
    { logo: "/images/partner/logo3.png", name: "Partner 3" },
    { logo: "/images/partner/logo4.png", name: "Partner 4" },
    { logo: "/images/partner/logo5.png", name: "Partner 5" },
  ];
  const repeated = [...partners, ...partners, ...partners];
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Our Trusted Partners
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Working together for a better world
          </p>
        </motion.div>

        {/* marquee wrapper fade edges via mask  pause on hover  */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div
            className="flex"
            style={{
              animation: "marquee 28s linear infinite ",
              width: "max-content",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState =
                "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState =
                "running";
            }}
          >
            {repeated.map((partner, idx) => (
              <PartnerLogo key={idx} logo={partner.logo} name={partner.name} />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
  @keyframes marquee {
  0% { transform: translateX(0); }
 100% {transform : translateX(calc(-100% / 3))}
  }
   @media (prefers-reduced-motion: reduce) {
           .flex[style*="animation"] {
             animation: none !important;
           }
        }
  `}
      </style>
    </section>
  );
}
