import { Link } from "react-router-dom";
import { Building, Hammer, Truck, Construction, HardHat, Wrench } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Construction,
    title: "Construction Materials & Supplies",
    description: "Supporting MSMEs manufacturing cement products, steel fabrication, building materials, pre-cast components, and construction consumables."
  },
  {
    icon: Wrench,
    title: "Civil Engineering Services",
    description: "Promoting small contractors, civil engineering consultancies, project management firms, and infrastructure execution services."
  },
  {
    icon: Truck,
    title: "Construction Equipment & Machinery",
    description: "Facilitating manufacturers and suppliers of construction equipment, tools, material handling systems, and rental services."
  },
  {
    icon: HardHat,
    title: "Infrastructure Technology Solutions",
    description: "Supporting firms providing BIM services, construction tech, project monitoring software, and infrastructure digitalization solutions."
  }
];

const focusAreas = [
  "Building Materials Manufacturing",
  "Steel Fabrication Services",
  "Pre-Cast Concrete Components",
  "Civil Contracting Services",
  "Construction Equipment Supply",
  "Real Estate Development",
  "Project Management Services",
  "Infrastructure Consulting",
  "Road Construction Materials",
  "Water Supply & Sanitation",
  "Electrical & Plumbing Services",
  "Green Building Solutions"
];

const challenges = [
  {
    challenge: "Working Capital & Project Finance",
    solution: "Facilitating access to construction finance, contractor loans, equipment financing, and mobilization advance support through banking channels."
  },
  {
    challenge: "Contractor Classification & Registration",
    solution: "Guidance on contractor registration, NSIC performance and credit rating, and empanelment with government departments and PSUs."
  },
  {
    challenge: "Quality Standards & Compliance",
    solution: "Support for BIS certifications, quality testing, compliance with construction codes, and adoption of sustainable building practices."
  },
  {
    challenge: "Skilled Labor & Safety",
    solution: "Promoting skill development programs, safety training, and compliance with labor laws and construction site safety regulations."
  }
];

export default function Infrastructure() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Infrastructure & Construction" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Infrastructure development is critical to India's economic growth, and MSMEs play a vital role as contractors, material suppliers, and service providers. From road construction to building materials manufacturing, small industries contribute significantly to India's infrastructure expansion under initiatives like PM Gati Shakti and National Infrastructure Pipeline.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Infrastructure Sector MSMEs</h2>
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
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Infrastructure MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PM Gati Shakti - National Master Plan:</strong> Integrated infrastructure development creating opportunities for material suppliers and contractors</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PMAY - Housing for All:</strong> Opportunities in affordable housing construction, building materials, and housing technology</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Smart Cities Mission:</strong> Urban infrastructure projects creating demand for construction services and smart infrastructure solutions</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>MSME Procurement Preference:</strong> Reservation for MSMEs in government infrastructure procurement and subcontracting requirements</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">National Infrastructure Pipeline & MSME Opportunities</h2>
          <p className="text-slate-700">
            India's ₹111 lakh crore National Infrastructure Pipeline creates immense opportunities for MSMEs in:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Road & Highway Projects</h3>
              <p className="mt-2 text-sm text-slate-600">
                Construction contracts, material supply, equipment rental, and maintenance services for highway infrastructure
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Urban Infrastructure</h3>
              <p className="mt-2 text-sm text-slate-600">
                Metro rail, water supply, sewerage projects, and smart city development creating multiple MSME opportunities
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Infrastructure Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII assists infrastructure MSMEs with contractor registration, NSIC rating, project finance facilitation, and access to government infrastructure opportunities.
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
