// app/Contact/page.jsx
import React from "react";
import { logo } from "../assets";

const consultationOptions = [
  {
    title: "Schedule a Demo",
    description:
      "Experience live pipelines showing optimized LLM training parameters and predictive dashboards.",
    linkText: "Book 15 Min Call",
  },
  {
    title: "AI Consultation",
    description:
      "Share your structural datasets with our principal model engineers to map strategic solutions.",
    linkText: "Request Session",
  },
  {
    title: "Partnership Inquiry",
    description:
      "Join our network of cloud providers, compliance boards, and native hardware specialists.",
    linkText: "Contact Partners",
  },
];

const datacenters = [
  {
    city: "San Francisco",
    tag: "GLOBAL HEAD OFFICE",
    address: ["2500 Sand Hill Road", "Menlo Park, CA 94025"],
  },
  {
    city: "New York",
    tag: "ENTERPRISE HUB",
    address: ["100 Pine Street", "New York, NY 10005"],
  },
  {
    city: "London",
    tag: "EUROPE & UK OPERATIONS",
    address: ["42 Canary Wharf", "London, E14 5GP"],
  },
  {
    city: "Singapore",
    tag: "APAC DATACENTER",
    address: ["8 Marina Boulevard", "Singapore 018981"],
  },
];

const faqs = [
  {
    question: "What industries do you specialize in?",
    answer:
      "Most custom projects are deployed across high-precision manufacturing, healthcare EHR systems, logistics tracking, and enterprise fintech networks requiring absolute HIPAA/SOC2 compliance pathways.",
  },
  {
    question: "How long is a typical project roadmap?",
    answer:
      "Most functional MVP pilots are launched within 6-8 weeks. Comprehensive global enterprise platforms and private ML pipelines typically scope over 3-6 months based on integration parameters.",
  },
  {
    question: "Can we build a proof-of-concept first?",
    answer:
      "Yes. Our agile software developers prioritize sandbox model deployments so you can audit classification accuracy and verify performance outcomes before scaling parameters.",
  },
  {
    question: "How does your pricing model work?",
    answer:
      "We operate on flat-fee sprint blueprints matching Starter, Professional, or custom Enterprise specifications. No hidden transaction or runtime margin overrides.",
  },
  {
    question: "Is our proprietary data secure with ClickMasters?",
    answer:
      "Every pipeline from our software house follows rigorous OWASP guidelines. We train custom models inside isolated virtual clouds, completely disconnected from public model parameters.",
  },
  {
    question: "Do you integrate with legacy enterprise architectures?",
    answer:
      "Yes. We engineer secure, decoupled translation layers and private API connectors to safely ingest databases from mainframes or legacy ERP solutions.",
  },
];

const complianceBadges = [
  "SOC 2 Type II Certified",
  "ISO 27001 Infrastructure",
  "GDPR Data Processing",
  "HIPAA Compliant Vaults",
];

const links = ["Support", "Blog", "Testimonials", "Careers", "About Us"];

export default function Contact() {
  return (
    <>
      {/* Hero + Contact Form Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let&apos;s Build The{" "}
              <span className="text-[#A000DF]">Future Together</span>
            </h1>

            <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Have a question about architectures, custom compliance setups,
              or model latencies? Consult directly with our technical
              deployment team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8">
                Send Us A Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. Sarah Chen"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@company.com"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="FinTrust Global"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (415) 555-0192"
                      className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject Dropdown
                  </label>
                  <select className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent">
                    <option>Custom Model Engineering & Fine-Tuning</option>
                    <option>AI Consulting & Strategy</option>
                    <option>Enterprise Automation</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message Textarea
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your data pipeline inputs and target scale parameters."
                    className="w-full border-b border-gray-300 focus:border-[#A000DF] outline-none py-2 text-sm text-gray-700 bg-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Direct Information
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Our operational specialists are on hand to map out project
                scoping files.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-[#A000DF] text-xs font-semibold tracking-wide">
                    GENERAL EMAIL
                  </p>
                  <p className="text-gray-900 text-sm mt-1">
                    hello@clickmasters.com
                  </p>
                </div>

                <div>
                  <p className="text-[#A000DF] text-xs font-semibold tracking-wide">
                    PHONE LINE
                  </p>
                  <p className="text-gray-900 text-sm mt-1">
                    +1 (415) 555-0192
                  </p>
                </div>

                <div>
                  <p className="text-[#A000DF] text-xs font-semibold tracking-wide">
                    SILICON VALLEY HQ
                  </p>
                  <p className="text-gray-900 text-sm mt-1">
                    2500 Sand Hill Road, Menlo Park, CA 94025
                  </p>
                </div>

                <div>
                  <p className="text-[#A000DF] text-xs font-semibold tracking-wide">
                    OPERATIONAL HOURS
                  </p>
                  <p className="text-gray-900 text-sm mt-1">
                    Monday - Friday, 9:00 AM - 6:00 PM PST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Consultation Section */}
      <section className="bg-gray-50 py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-tight">
            Structured Consultation{" "}
            <span className="italic text-[#A000DF]">Bypassing Project Limits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {consultationOptions.map((option, index) => (
              <div key={index}>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {option.description}
                </p>
                
                <a  href="#"
                  className="text-[#A000DF] text-sm font-medium hover:underline"
                >
                  {option.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Datacenters Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-14 leading-tight">
            Secure Datacenters And{" "}
            <span className="italic text-[#A000DF]">
              International Support Labs
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {datacenters.map((dc, index) => (
              <div
                key={index}
                className="bg-[#111111] p-6 rounded-md hover:bg-[#1a1a1a] transition-colors"
              >
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {dc.city}
                </h3>
                <p className="text-[#A000DF] text-xs font-semibold tracking-wide mb-4">
                  {dc.tag}
                </p>
                {dc.address.map((line, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with hover effect on each row */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 mb-14">
            Answers Before We{" "}
            <span className="italic text-[#A000DF]">Initialize Code</span>
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group py-6 px-4 -mx-4 rounded-md transition-colors duration-200 hover:bg-white hover:shadow-md cursor-pointer"
              >
                <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-[#A000DF] transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs tracking-wide text-gray-500 uppercase mb-6">
              Compliance Security Verified By
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {complianceBadges.map((badge, index) => (
                <span
                  key={index}
                  className="text-gray-700 text-sm flex items-center gap-2"
                >
                  <span className="text-[#A000DF]">◆</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900">
            Ready To Transform Your{" "}
            <span className="italic text-[#A000DF]">Business?</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Deploy ClickMasters models securely on your systems to eliminate
            bottlenecks, automate decision paths, and increase conversions.
          </p>

          <div className="mt-8">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
              Get Free Consultation
            </button>
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
                  
                 <a   key={link}
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