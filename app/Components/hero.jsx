import {
  aiModelImg,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  instagramIcon,
  facebookIcon,
  linkedinIcon,
} from "../assets";
import { RiGeminiFill } from "react-icons/ri";
import { GrPlayFill } from "react-icons/gr";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full max-w-[1728px] mx-auto overflow-hidden bg-white px-6 py-16 lg:px-0 lg:py-0 lg:h-[820px]">
      {/* Background giant watermark text (desktop only) */}
      <h2
        className="hidden lg:block absolute font-bold whitespace-nowrap select-none pointer-events-none z-0"
        style={{
          fontFamily: "Garamond, serif",
          left: "50%",
          transform: "translateX(-50%)",
          top: "4vw",
          width: "97.11vw",
          fontSize: "12.80vw",
          lineHeight: "12.15vw",
          textAlign: "center",
          color: "rgba(175, 0, 232, 0.08)",
        }}
      >
        Artificial Intelligence
      </h2>

      {/* Decorative rotated badges (desktop only) */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute flex items-center justify-center bg-[#18181B] border border-black/5"
          style={{ left: "7.30%", top: "10%", width: "3.24%", height: "6.83%", transform: "rotate(-60deg)" }}
        >
          <GrPlayFill className="w-4 h-5 object-contain text-white"/>
        </div>

        <div
          className="absolute flex items-center justify-center bg-[#AF00E8]"
          style={{ left: "40.30%", top: "24%", width: "3.24%", height: "6.83%", transform: "rotate(-17.73deg)" }}
        >
          <RiGeminiFill className="w-4 h-5 object-contain text-white"/>
        </div>

        <div
          className="absolute flex items-center justify-center bg-[#FFE167]"
          style={{ left: "83.40%", top: "13.10%", width: "3.24%", height: "6.83%", transform: "rotate(-15deg)" }}
        >
          <span
            className="text-[#333333] text-[20px] leading-[28px]"
            style={{ fontFamily: "'Times New Roman', serif", transform: "rotate(-15deg)" }}
          >
            TS
          </span>
        </div>
      </div>

      {/* Center AI model image */}
      <div
        className="hidden lg:block absolute inset-0 z-20"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 95%), url("${aiModelImg}")`,
          backgroundSize: "auto, contain",
          backgroundPosition: "center 30px, left 525px top 140px",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      />

      {/* Mobile AI model image */}
      <img src={aiModelImg} alt="AI Model" className="lg:hidden w-full max-w-xs mx-auto mb-8 relative z-20" />

      {/* Left content block */}
      <div className="relative z-30 flex flex-col items-center text-center gap-6 lg:items-start lg:text-left lg:absolute lg:left-[160px] lg:top-[310px] lg:w-[520px] lg:gap-6">
        <h1
          className="font-bold text-3xl leading-tight lg:text-[58px] lg:leading-[66px]"
          style={{ fontFamily: "Garamond, serif", color: "#333333" }}
        >
          That Scales Your Business Revenue
        </h1>

        <div className="flex items-center gap-3">
          <div className="w-[48px] h-[48px] rounded-full bg-[#26262B] flex items-center justify-center shrink-0">
            <RiGeminiFill className="w-6 h-8 object-contain  text-white" />
          </div>
          <span
            className="italic text-3xl lg:text-[58px] lg:leading-[66px]"
            style={{ fontFamily: "Garamond, serif", color: "#A000DF" }}
          >
            Not Just Code
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">

          {/* Get a free quote */}
          <a
            href="#quote"
            className="flex items-center justify-center px-5 py-3.5 gap-2.5 w-[170px] h-[47px] bg-[#A000DF] hover:opacity-90 transition-opacity"
          >
            <span className="text-white text-base font-thin" style={{ fontFamily: "Urbanist, sans-serif" }}>
              Get a free quote
            </span>
          </a>

          {/* Founders */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[avatar1, avatar2, avatar3, avatar4].map((av, i) => (
                <img
                  key={av}
                  src={av}
                  alt=""
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">120+ founders shipped</span>
          </div>
        </div>
      </div>

      {/* Right content block */}
      <div className="relative z-30 mt-10 flex flex-col items-center gap-6 lg:mt-0 lg:absolute lg:right-[80px] lg:top-[315px] lg:items-end lg:w-[420px]">
        <p
          className="text-center text-sm lg:text-right lg:text-[15px] lg:leading-[20px]"
          style={{ fontFamily: "Urbanist, sans-serif", color: "#333333" }}
        >
          We build scalable ERP, CRM, and enterprise solutions focused on
          performance and ROI. From MVPs to full-scale SaaS platforms, AI
          automation systems, and native or cross-platform mobile apps, we
          create future-ready digital products for growing businesses.
        </p>

        {/* icons */}

        <div className="flex  items-center gap-5">
          <div className="flex lg:flex-col items-center gap-5">
            <img src={instagramIcon} alt="Instagram" className="w-[38px] h-[38px]" />
            <img src={facebookIcon} alt="Facebook" className="w-[30px] h-[30px]" />
            <img src={linkedinIcon} alt="LinkedIn" className="w-[30px] h-[30px]" />
          </div>
          <div className="hidden lg:flex flex-col items-center gap-0">
            <span className="w-[6px] h-[6px] rounded-full bg-[#333333]" />
            <div className="w-0 h-[140px] border-l border-[#333333]" />
            <span className="w-[6px] h-[6px] rounded-full bg-[#333333]" />
          </div>
        </div>
      </div>

    </section>
  );
}