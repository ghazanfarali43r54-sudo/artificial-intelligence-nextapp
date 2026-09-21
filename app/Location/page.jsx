// app/Locations/page.jsx
import React from "react";
import Image from "next/image";
import { logo } from "../assets";
import CountUp from "../component/countup";

const internationalHubs = [
  {
    city: "New York",
    address: "120 Broadway, Manhattan, NY, USA",
    image: "/assets/location/image2.png",
  },
  {
    city: "London",
    address: "30 St Mary Axe, London, United Kingdom",
    image: "/assets/location/image3.png",
  },
  {
    city: "Dubai",
    address: "Marina Plaza, Dubai Marina, UAE",
    image: "/assets/location/image4.png",
  },
  {
    city: "Singapore",
    address: "Marina Bay Sands Tower 3, Singapore",
    image: "/assets/location/image5.png",
  },
  {
    city: "Toronto",
    address: "Bay Street, Toronto, ON, Canada",
    image: "/assets/location/image6.png",
  },
  {
    city: "Sydney",
    address: "George Street, Sydney, NSW, Australia",
    image: "/assets/location/image7.png",
  },
];

const teamStats = [
  { value: "15+", label: "Active Countries Represented" },
  { value: "8", label: "State-of-the-Art Regional Hubs" },
  { value: "500+", label: "Global AI Engineers & Experts" },
  { value: "24/7", label: "Dedicated On-Call Live Support" },
];

const localizedPoints = [
  "Localized compliance auditing and sandboxes",
  "Private on-premise regional hardware choices",
  "Native API integrations for local banking & logistics hubs",
];

const engineeringCultureImages = [
  "/assets/location/image9.png",
  "/assets/location/image10.png",
  "/assets/location/image11.png",
];

const links = ["Support", "Blog", "Testimonials", "Careers", "About Us"];

export default function Locations() {
  return (
    <>
      {/* Global Presence Hero Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">
            Our <span className="italic text-[#A000DF]">Global Presence</span>
          </h1>

          <p className="mt-5 text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            With offices strategically positioned in primary global
            technology hubs, we guarantee active around-the-clock
            development and deployment support.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <Image
                src="/assets/location/image1.png"
                alt="Silicon Valley office building at sunset"
                width={700}
                height={450}
                className="w-full h-auto object-contian"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                Silicon Valley Office
              </h2>

              <p className="mt-4 text-gray-500 text-md leading-relaxed">
                Located at the absolute heart of tech disruption. Our
                headquarters houses our primary deep research pipelines,
                model fine-tuning frameworks, and executive operations.
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-gray-700 text-sm flex items-center gap-2">
                  📍 400 Infinite Loop, Cupertino, CA, USA
                </p>
                <p className="text-gray-700 text-sm flex items-center gap-2">
                  📞 +1 (415) 555-0199
                </p>
              </div>

              <div className="mt-6">
                <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
                  Book a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Hubs Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            International Hubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
            {internationalHubs.map((hub, index) => (
              <div key={index}>
                <Image
                  src={hub.image}
                  alt={`${hub.city} skyline`}
                  width={500}
                  height={280}
                  className="w-full h-[220px] object-contain"
                />
                <h3 className="font-serif text-lg font-bold text-gray-900 mt-4">
                  {hub.city}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributed Teams Stats Section */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white">
            Distributed Teams.{" "}
            <span className="italic text-[#A000DF]">Continuous Iteration.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mt-14">
            {teamStats.map((stat, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-3xl md:text-4xl font-bold mb-2">
                 <CountUp value= {stat.value}/>
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-2xl font-bold text-gray-900">
              Tailored Solutions,{" "}
              <span className="italic text-[#A000DF]">Localized Impact</span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              Different regions present unique legal, regulatory, and
              technical requirements. Our teams bring localized knowledge on
              HIPAA for US MedTech, GDPR compliance for European pipelines,
              and secure fintech practices across global commerce centers.
            </p>

            <ul className="mt-6 space-y-3">
              {localizedPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#A000DF] mt-1">◆</span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <Image
              src="/assets/location/image8.png"
              alt="Global network connectivity map visualization"
              width={700}
              height={450}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Engineering Culture Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            Inside our Engineering Culture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringCultureImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="ClickMasters engineering office culture"
                width={500}
                height={350}
                className="w-full h-[220px] object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Visit Our Nearest <span className="italic text-[#A000DF]">Office</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Let&apos;s sit down and chart out your AI roadmaps together.
            Coordinate with our principal developers in your region.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3  transition-colors">
              Get Free Consultation
            </button>
            
             <a href="#"
              className="text-[#A000DF] text-sm font-medium hover:underline"
            >
              Contact Regional HQ
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full max-w-[1728px] mx-auto bg-white overflow-hidden lg:h-[687px] py-16 lg:py-0 px-6">
        

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