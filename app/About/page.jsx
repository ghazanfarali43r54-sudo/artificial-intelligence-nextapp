// app/About/page.jsx
import React from "react";
import Image from "next/image";
import { logo } from "../assets";
import CountUp from "../component/countup";

const coreValues = [
  {
    title: "Innovation Without Boundaries",
    description:
      "We continuously push the boundaries of LLM fine-tuning, retrieval architectures, and real-time computer vision without relying on generic, off-the-shelf APIs.",
  },
  {
    title: "Ethical AI First",
    description:
      "Every data classification process, compliance sandbox, and training dataset we leverage is fully governed to safeguard user privacy and prioritize compliance pathways.",
  },
  {
    title: "Client-Centric Solutions",
    description:
      "We design software systems as dedicated co-founders. Our architectures adapt specifically to your industry guidelines, converting automation directly into revenue.",
  },
  {
    title: "Continuous Learning",
    description:
      "The AI paradigm moves daily. Our pipeline testing tracks model regression and updates weight parameters continuously to sustain peak operational efficiency.",
  },
];

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CHIEF EXECUTIVE OFFICER",
    bio: "Former AI Research Lead, specializing in NLP architectures and strategic enterprise alignment.",
    image: "/assets/about/image1.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "CHIEF TECHNOLOGY OFFICER",
    bio: "Enterprise infrastructure expert, pioneer of HIPAA/SOC2 secure custom database integrations.",
    image: "/assets/about/image2.png",
  },
  {
    name: "Dr. Priya Patel",
    role: "VP AI RESEARCH",
    bio: "Pioneered neural weight distillation methods, actively directing private LLM fine-tuning pipelines.",
    image: "/assets/about/image3.png",
  },
  {
    name: "James Okafor",
    role: "VP ENGINEERING",
    bio: "Directing Agile software deployments, specializing in rapid-scale microservice frameworks.",
    image: "/assets/about/image4.png",
  },
  {
    name: "Dr. Anika Müller",
    role: "HEAD OF DATA SCIENCE",
    bio: "Expert in deep neural clustering models and robust predictive customer-churn analytics.",
    image: "/assets/about/image5.png",
  },
  {
    name: "David Kim",
    role: "VP CLIENT SUCCESS",
    bio: "Supervising system onboarding, prioritizing measurable ROI and continuous post-launch performance.",
    image: "/assets/about/image6.png",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founded in San Francisco",
    description:
      "Formed ClickMasters with a focus on translating theoretical reinforcement learning into scalable custom CRM pipelines.",
  },
  {
    year: "2020",
    title: "$50M Series A Funding",
    description:
      "Backed by global technology investors to scale our GPU infrastructure and launch the private compliance sandboxing labs.",
  },
  {
    year: "2022",
    title: "500+ Enterprise Projects",
    description:
      "Engineered and safely deployed high-availability logistics backends and automated computer vision systems worldwide.",
  },
  {
    year: "2024",
    title: "Surpassed $2B+ Generated Client Value",
    description:
      "Our deployed intelligence agents helped retail, manufacturing, and health tech clients streamline operations and hit historic ROI benchmarks.",
  },
];

const companyNumbers = [
  { value: "500+", label: "AI & System Experts" },
  { value: "200+", label: "Enterprise Clients" },
  { value: "50+", label: "Countries Served" },
  { value: "15+", label: "Registered Patents" },
];

const awards = [
  { year: "2025 // TechAwards Global", title: "AI Enterprise Leader" },
  { year: "2024 // MedTech Insights", title: "Most Secure Medical EHR Integration" },
  { year: "2024 // Software House Review", title: "Agile Development Excellence" },
  { year: "2023 // Data Science Forum", title: "Top Predictive Analytics Suite" },
];

const links = ["Support", "Blog", "Testimonials", "Careers", "About Us"];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Pioneering The Future Of{" "}
            <span className="text-[#A000DF]">Artificial Intelligence</span>
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            ClickMasters designs and deploys custom intelligence platforms,
            converting complex architectural research into
            performance-optimized revenue drivers for fast-growing global
            brands.
          </p>

          <div className="mt-8">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
              Get a free quote
            </button>
          </div>
        </div>
      </section>

      {/* Founded / Mission Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Founded In 2018, ClickMasters Set Out To{" "}
              <span className="italic text-[#A000DF]">
                Democratize AI For Businesses Worldwide.
              </span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              Our core mission is to transform complex academic AI research
              into highly practical, robust enterprise tools. We operate on
              the blueprint that machine intelligence should solve structural
              challenges, streamline operational logic, and create measurable
              ROI from day one.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/assets/about/image0.png"
              alt="Abstract geometric AI structure illustration"
              width={500}
              height={400}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Vision Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-16">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
              Our Core Vision And{" "}
              <span className="italic text-[#A000DF]">Foundational Values</span>
            </h2>

            <p className="text-gray-500 text-sm md:text-right max-w-sm">
              The non-negotiable guidelines that instruct how our engineers
              think, build, and deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {coreValues.map((value, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
              Led By Experienced AI Researchers &{" "}
              <br className="hidden md:block" />
              <span className="italic text-[#A000DF]">System Architects</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-right max-w-sm">
              A multi-disciplinary team committed to engineering excellence,
              scalable databases, and private cloud pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={280}
                  className="w-full h-[220px] object-cover rounded-md"
                />
                <h3 className="font-serif text-lg font-bold text-white mt-4">
                  {member.name}
                </h3>
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mt-1">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Timeline Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            Our Journey Of Scaled Growth And{" "}
            <br className="hidden md:block" />
            <span className="italic text-[#A000DF]">
              Engineering Breakthroughs
            </span>
          </h2>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 border-b border-gray-200 pb-10 last:border-0"
              >
                <p className="text-[#A000DF] font-serif text-3xl font-bold">
                  {item.year}
                </p>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              ClickMasters By{" "}
              <span className="italic text-[#A000DF]">The Numbers</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {companyNumbers.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                   <CountUp value= {stat.value}/>
                  </p>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-16">
            Awards And Global AI{" "}
            <span className="italic text-[#A000DF]">Industry Honors</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {awards.map((award, index) => (
              <div key={index}>
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-2">
                  {award.year}
                </p>
                <h3 className="font-serif text-base font-semibold text-gray-900 leading-snug">
                  {award.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Join Our Team Of AI{" "}
            <span className="italic text-[#A000DF]">Pioneers</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            We are always looking for visionary ML scientists, systems
            architects, and agile programmers. Explore our open positions and
            build future-ready systems.
          </p>

          <div className="mt-8">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden lg:h-[687px] py-16 lg:py-0 px-6">
        <h2
          className="hidden text-transparent [-webkit-text-stroke:2px_#AF00E8] lg:block absolute font-bold uppercase whitespace-nowrap select-none pointer-events-none z-0"
          style={{
            fontFamily: "Outfit, sans-serif",
            bottom: "-39.01px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "12.6vw",
            lineHeight: "16.55vw",
            opacity: 0.1,
            WebkitMaskImage:
              "linear-gradient(to bottom, black 40%, transparent 90%)",
            maskImage: "linear-gradient(to bottom, black 40%, transparent 90%)",
          }}
        >
          Clickmasters
        </h2>

        <div className="relative z-10 flex flex-col items-center gap-[60px] w-full lg:max-w-[1528px] lg:mx-auto lg:pt-[100.71px]">
          <img
            src={logo}
            alt="ClickMasters"
            style={{ width: "271px", height: "37.03px" }}
            className="object-contain"
          />

          <div className="flex flex-col items-center gap-3 w-full lg:w-[600px]">
            <h3
              className="text-center capitalize text-3xl lg:text-[94px] lg:leading-[106px]"
              style={{
                fontFamily: "Garamond, serif",
                fontWeight: 700,
                color: "#333333",
              }}
            >
              Got A Vision?
              <br />
              <span className="italic font-thin">{"Let's Build It."}</span>
            </h3>

            <p
              className="text-center text-sm"
              style={{
                fontFamily: "Urbanist, sans-serif",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#333333",
              }}
            >
              ClickMasters is a software development company. We build custom
              software, web applications, mobile apps, and ERP solutions for
              businesses worldwide.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[50px] w-full">
            <div className="w-full border-t" style={{ borderColor: "#4A4A4A" }} />

            <div className="flex flex-col sm:flex-row items-center gap-[50px] w-full">
              <span
                className="flex-1 text-center sm:text-left"
                style={{
                  fontFamily: "Urbanist, sans-serif",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#252525",
                }}
              >
                © 2026 ClickMasters. All rights reserved.
              </span>

              <div className="flex flex-wrap justify-center sm:justify-end items-center gap-[50px]">
                {links.map((link) => (
                  
                  <a  key={link}
                    href="#"
                    style={{
                      fontFamily: "Urbanist, sans-serif",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#252525",
                    }}
                    className="hover:text-[#AF00E8] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}