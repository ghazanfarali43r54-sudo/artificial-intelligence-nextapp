// app/Solutions/page.jsx
import React from "react";
import Image from "next/image";
import { logo } from "../assets";
import CountUp from "../component/countup";

const features = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automate reading and validation of legacy PDF forms, invoice pipelines, medical charts, and compliance documentation with 99.8% precision.",
  },
  {
    title: "AI-Powered Customer Service",
    description:
      "Deploy natural contextual support models trained on your core internal product docs to deflect up to 80% of standard ticket workloads.",
  },
  {
    title: "Smart Supply Chain Optimization",
    description:
      "Preempt transport delays, automate storage allocation parameters, and optimize regional delivery routes in real-time.",
  },
  {
    title: "Automated Fraud Detection",
    description:
      "Analyze transactional logs instantly, flagging irregular payment velocity or login vectors to safeguard customer security.",
  },
  {
    title: "Healthcare Diagnostics AI",
    description:
      "Accelerate chart triage pipelines, clinical documentation indexing, and patient routing via certified secure compliance portals.",
  },
  {
    title: "Financial Ledger Automation",
    description:
      "Automate accounting reconciliations, currency risk calculations, and balance sheets validations with secure AWS execution.",
  },
];

const stats = [
  {
    value: "98%",
    title: "Accuracy Threshold",
    description:
      "Automate reading unstructured charts with greater accuracy than manual review teams.",
  },
  {
    value: "60%",
    title: "Operational Deflection",
    description:
      "Lower overall support and data entry costs by automating routine pipelines.",
  },
  {
    value: "3x",
    title: "Pipeline Acceleration",
    description:
      "Ingest records, update system databases, and deploy payloads in seconds.",
  },
  {
    value: "24/7",
    title: "Continuous Autopilot",
    description:
      "Rest easy with automated routing pipelines running continuously, zero down-time.",
  },
];

const integrations = [
  "Salesforce",
  "SAP ERP",
  "ServiceNow",
  "HubSpot",
  "Microsoft Dynamics",
  "Oracle Cloud",
  "Atlassian Jira",
];

const links = ["Support", "Blog", "Testimonials", "Careers", "About Us"];

export default function Solutions() {
  return (
    <>
      {/* Hero Section */}
      <main className="min-h-[50vh] bg-gray-50 flex items-center justify-center px-6">
        <section className="max-w-4xl text-center py-24">
          <h1 className="font-serif text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            AI <span className="text-[#A000DF]">Solutions</span> For Complex
            <br />
            Industrial Challenges
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Standard software is static. Our customized artificial
            intelligence solutions continuously adapt to live transactions,
            optimizing workflows without human
            <br />
            downtime.
          </p>

          <div className="mt-8">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
              Explore Case Studies
            </button>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="bg-gray-50 py-20 px-6 min-h-[60vh]">
        <div className="max-w-[76rem] mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Turn Complex Workflows{" "}
            <span className="text-[#A000DF]">Into Seamless Autopilot</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14 pl-10">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispatch Routing Section */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-8xl mx-auto flex justify-center items-center md:grid-cols-2 gap-12">
          <div className="w-[347px] h-[150px] flex items-center justify-center">
            <Image
              src="/assets/solution/visual.png"
              alt="Intelligent Dispatch Routing Logic visualization"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-3xl font-bold text-white leading-tight">
              Intelligent Dispatch{" "}
              <span className="text-[#A000DF]">Routing Logic</span>
            </h2>

            <p className="mt-3 text-gray-400 text-xs md:text-base leading-relaxed">
              In partnership with LogiFlow Solutions, we replaced legacy
              static scheduling scripts with a real-time predictive routing
              matrix. The system maps regional freight volumes, live highway
              weather patterns, and local storage limits to calculate dynamic
              delivery lanes instantly.
            </p>

            <div className="mt-5 flex gap-16">
              <div>
                <p className="text-[#A000DF] text-2xl font-bold">40%</p>
                <p className="text-gray-400 text-xs mt-1">Efficiency Boost</p>
              </div>
              <div>
                <p className="text-[#A000DF] text-2xl font-bold">$1.2M</p>
                <p className="text-gray-400 text-xs mt-1">Yearly Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Measurable Operational{" "}
            <span className="text-[#A000DF]">ROI from Week One</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-[#A000DF] font-serif text-4xl font-bold mb-3">
                  <CountUp value={stat.value}/>
                </p>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <p className="text-xs tracking-wide text-gray-500 uppercase mb-8">
              Connects Natively With Your Existing Systems
            </p>

            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {integrations.map((name, index) => (
                <span
                  key={index}
                  className="font-serif text-gray-700 text-base md:text-lg"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            Success Stories{" "}
            <span className="text-[#A000DF]">After Implementation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div>
              <Image
                src="/assets/solution/Rectangle.png"
                alt="Cloud-Native Microservice Redesign"
                width={772}
                height={240}
                className="w-full h-[240px] object-contain"
              />
              <p className="text-[#A000DF] text-xs font-semibold mt-4">
                FinTrust Global
              </p>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
                Cloud-Native Microservice Redesign
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                How we migrated legacy platform architectures to an isolated,
                SOC2-compliant AWS secure stack.
              </p>
            </div>

            {/* Card 2 */}
            <div>
              <Image
                src="/assets/solution/Rectangle1.png"
                alt="Medical Portal Triage Automation"
                width={772}
                height={240}
                className="w-full h-[240px] object-contain "
              />
              <p className="text-[#A000DF] text-xs font-semibold mt-4">
                HealthPlus Networks
              </p>
              <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
                Medical Portal Triage Automation
              </h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Designing patient coordinate workflows enabling doctors to
                triage sensitive files securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
            Discover Your AI <span className="text-[#A000DF]">Solution</span>
          </h2>

          <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
            Don&apos;t buy generic off-the-shelf software. Build a customized
            engine focused <br></br>purely on your specific industry rules.
          </p>

          <div className="mt-8">
            <button className="bg-[#A000DF] hover:bg-[#a000dfdf] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
              Schedule Design Workshop
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
                  
                   <a key={link}
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