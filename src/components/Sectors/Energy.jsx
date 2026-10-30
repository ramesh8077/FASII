import { Link } from "react-router-dom";
import { Zap, Sun, Wind, Battery, Factory, Leaf } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Sun,
    title: "Solar Energy Solutions",
    description: "Supporting MSMEs engaged in solar panel manufacturing, installation services, rooftop solar solutions, and solar equipment supply for residential and commercial sectors."
  },
  {
    icon: Wind,
    title: "Renewable Energy Components",
    description: "Promoting small industries manufacturing components for wind turbines, biomass plants, and other renewable energy systems."
  },
  {
    icon: Battery,
    title: "Energy Storage & Efficiency",
    description: "Facilitating MSMEs developing energy storage solutions, battery systems, and energy-efficient appliances and equipment."
  },
  {
    icon: Leaf,
    title: "Green Energy Services",
    description: "Supporting energy audit services, energy management consultancy, and green building certification services for MSMEs."
  }
];

const focusAreas = [
  "Solar Panel Manufacturing",
  "Renewable Energy Installation",
  "Energy Efficient Lighting",
  "Battery & Storage Systems",
  "Biomass Energy Solutions",
  "Wind Energy Components",
  "Energy Audit Services",
  "Power Backup Systems",
  "Energy Management Systems",
  "Green Building Materials",
  "Electric Vehicle Components",
  "Energy Efficient Appliances"
];

const challenges = [
  {
    challenge: "High Initial Capital Investment",
    solution: "Facilitating access to subsidized credit, MNRE schemes, and capital subsidy programs for renewable energy MSMEs."
  },
  {
    challenge: "Technology & Quality Standards",
    solution: "Guidance on BIS standards, MNRE approved technology, and quality certifications required for energy sector operations."
  },
  {
    challenge: "Market Awareness & Demand",
    solution: "Advocacy campaigns, buyer-seller meets, and awareness programs to increase adoption of renewable energy solutions among industries."
  },
  {
    challenge: "Grid Integration & Policy Support",
    solution: "Representation with regulatory authorities on net metering policies, renewable purchase obligations, and grid connectivity issues."
  }
];

export default function Energy() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Energy & Renewable Energy" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              India's transition to clean and renewable energy creates immense opportunities for MSMEs. From solar equipment manufacturing to energy efficiency services, small industries are integral to achieving India's renewable energy targets and sustainable development goals while contributing to energy security and climate action.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Energy Sector MSMEs</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {initiatives.map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Focus Areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="h-2 w-2 shrink-0 rounded-full bg-orange-600" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Challenges & FASII Solutions</h2>
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{item.challenge}</h3>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-medium text-orange-700">FASII Solution:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-lg bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Energy Sector MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PM Kusum Scheme:</strong> Financial support for solar pumps, grid-connected solar power plants, and solarization of agricultural infrastructure</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>National Solar Mission:</strong> Subsidies and incentives for solar manufacturing, rooftop solar installations, and solar park development</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Production Linked Incentive (PLI) for Solar:</strong> Manufacturing incentives for solar PV modules and integrated solar components</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>FAME India Scheme:</strong> Support for electric vehicle component manufacturers and charging infrastructure providers</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">India's Renewable Energy Targets & MSME Role</h2>
          <p className="text-slate-700">
            India aims to achieve 500 GW of renewable energy capacity by 2030. MSMEs are crucial partners in this journey through:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Manufacturing</h3>
              <p className="mt-2 text-sm text-slate-600">
                Domestic manufacturing of solar panels, wind turbine components, and energy storage systems
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Installation & Services</h3>
              <p className="mt-2 text-sm text-slate-600">
                Widespread rooftop solar installations, O&M services, and energy efficiency audits across sectors
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Energy Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII provides guidance on renewable energy schemes, quality certifications, technology access, and market linkages for energy sector MSMEs.
          </p>
          <div className="mt-6">
            <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Connect with Member Associations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
