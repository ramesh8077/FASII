import { Link } from "react-router-dom";
import { MapPin, Users, Mail, Phone, Building2, Factory } from "lucide-react";
import PageHero from "../Layout/common/PageHero.jsx";

const northZoneStates = [
  "Uttar Pradesh",
  "Delhi NCR",
  "Punjab",
  "Haryana",
  "Rajasthan",
  "Himachal Pradesh",
  "Uttarakhand",
  "Jammu & Kashmir",
  "Chandigarh"
];

const memberAssociations = [
  {
    name: "Association for Helping Hand",
    location: "Ghaziabad, Uttar Pradesh",
    focus: "Industrial support and entrepreneurship development"
  },
  {
    name: "Udyog Vyapar Mandal",
    location: "Ghaziabad, Uttar Pradesh",
    focus: "Trade and industrial coordination"
  },
  {
    name: "Organic Basket Enterprises",
    location: "Ghaziabad, Uttar Pradesh",
    focus: "Organic products and sustainable industries"
  }
];

const keyIndustries = [
  "Engineering & Manufacturing",
  "Textile & Garments",
  "Food Processing",
  "Automobile Components",
  "Electronics & Electricals",
  "Handicrafts & Carpets",
  "IT & Software Services",
  "Pharmaceutical Products"
];

const regionalInitiatives = [
  {
    title: "Industrial Cluster Development",
    description: "Supporting MSME clusters in NCR, Ludhiana, Moradabad, Panipat, and other industrial hubs across the North Zone."
  },
  {
    title: "Skill Development Programs",
    description: "Coordinating skill training and capacity building initiatives for workforce in northern states' MSME sectors."
  },
  {
    title: "Export Promotion",
    description: "Facilitating access to international markets for handicrafts, textiles, and engineering goods from North Zone MSMEs."
  },
  {
    title: "Government Scheme Facilitation",
    description: "Providing guidance and support for accessing central and state government schemes for MSME development."
  }
];

export default function Zone1() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="FASII North Zone" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The North Zone represents FASII's presence across the northern states of India, covering major industrial hubs in the National Capital Region, Punjab, Haryana, Uttar Pradesh, Rajasthan, and the Himalayan states. This region is known for its diverse industrial base ranging from traditional handicrafts to modern manufacturing and IT services.
            </p>
          </div>
        </div>

        {/* Regional Leadership */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Regional Chairman - North Zone</h2>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Shri Himanshu Tyagi</h3>
              <p className="mt-2 text-sm text-slate-700">
                Leading FASII's initiatives across northern states, coordinating with member associations, and representing small industries' interests at regional forums.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:Organicbasket09@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900">
                  <Mail size={16} />
                  Organicbasket09@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* States Covered */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">States & Union Territories Covered</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {northZoneStates.map((state, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <MapPin size={16} className="shrink-0 text-orange-600" />
                <span className="text-sm font-medium text-slate-700">{state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Member Associations */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Member Associations</h2>
          <div className="space-y-4">
            {memberAssociations.map((association, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <Building2 size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{association.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      <MapPin size={14} className="inline mr-1" />
                      {association.location}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{association.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Industries */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Industries in North Zone</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyIndustries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <Factory size={18} className="shrink-0 text-orange-600" />
                <span className="text-sm font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Initiatives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">North Zone Initiatives</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {regionalInitiatives.map((initiative, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{initiative.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Hubs */}
        <div className="mb-12 rounded-lg bg-slate-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Major Industrial Hubs</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Delhi NCR</h3>
              <p className="mt-2 text-sm text-slate-600">
                IT services, electronics manufacturing, garments, and diversified industries
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Ludhiana (Punjab)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Bicycle parts, auto components, knitwear, and engineering goods
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Moradabad (UP)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Brass handicrafts, metalware, and export-oriented artisan products
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Panipat (Haryana)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Textile and handloom products, home furnishings, and carpets
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Jaipur (Rajasthan)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Gems and jewelry, handicrafts, textiles, and traditional crafts
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Kanpur (UP)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Leather products, textile manufacturing, and chemical industries
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Connect with North Zone</h3>
          <p className="mt-3 text-slate-700">
            For MSME support, membership inquiries, or collaboration opportunities in the North Zone, reach out to the regional chairman or member associations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Contact Regional Leadership
            </Link>
            <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              View All Member Associations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
