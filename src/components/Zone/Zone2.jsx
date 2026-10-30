import { Link } from "react-router-dom";
import { MapPin, Users, Mail, Phone, Building2, Factory } from "lucide-react";
import PageHero from "../Layout/common/PageHero.jsx";

const southZoneStates = [
  "Tamil Nadu",
  "Karnataka",
  "Kerala",
  "Andhra Pradesh",
  "Telangana",
  "Puducherry"
];

const memberAssociations = [
  {
    name: "Indian Industries and Rural Development Foundation",
    location: "Chennai, Tamil Nadu",
    focus: "Industrial development and rural entrepreneurship support"
  },
  {
    name: "Sourashtra Chamber of Commerce",
    location: "Madurai, Tamil Nadu",
    focus: "Community-based industrial and trade promotion"
  },
  {
    name: "Machenahalli Industrialists Association",
    location: "Karnataka",
    focus: "Local industrial cluster development and advocacy"
  }
];

const keyIndustries = [
  "Automobile & Components",
  "Textile & Garments",
  "IT & Software Services",
  "Engineering Goods",
  "Food Processing",
  "Electronics Manufacturing",
  "Leather & Footwear",
  "Pharmaceuticals"
];

const regionalInitiatives = [
  {
    title: "Industrial Cluster Strengthening",
    description: "Supporting established MSME clusters in Chennai, Coimbatore, Bangalore, Hosur, and other industrial centers across South Zone."
  },
  {
    title: "Technology & Innovation Support",
    description: "Facilitating technology adoption, R&D collaboration, and innovation support for manufacturing and service MSMEs."
  },
  {
    title: "Export Market Development",
    description: "Connecting South Zone MSMEs with global markets through export promotion, buyer linkages, and quality certifications."
  },
  {
    title: "Industry-Academia Linkages",
    description: "Promoting collaboration between MSMEs and educational institutions for skill development and research initiatives."
  }
];

export default function Zone2() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="FASII South Zone" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The South Zone encompasses FASII's operations across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Puducherry. This region is characterized by strong industrial base, technological advancement, and vibrant MSME ecosystem across sectors from IT and automobiles to traditional industries like textiles and handicrafts.
            </p>
          </div>
        </div>

        {/* Regional Leadership */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Regional Chairman - South Zone</h2>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Shri B. Karthikeyan</h3>
              <p className="mt-2 text-sm text-slate-700">
                Coordinating FASII activities across southern states, facilitating industry-government dialogue, and promoting MSME growth through member associations.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:fasiichairman@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900">
                  <Mail size={16} />
                  fasiichairman@gmail.com
                </a>
                <a href="tel:+919444182838" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900">
                  <Phone size={16} />
                  +91 94441 82838
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* States Covered */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">States & Union Territories Covered</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {southZoneStates.map((state, index) => (
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
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Industries in South Zone</h2>
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
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">South Zone Initiatives</h2>
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
              <h3 className="font-semibold text-slate-900">Chennai (Tamil Nadu)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Auto components, IT services, leather products, and diversified manufacturing
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Coimbatore (Tamil Nadu)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Engineering goods, textiles, pumps, motors, and machinery manufacturing
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Bangalore (Karnataka)</h3>
              <p className="mt-2 text-sm text-slate-600">
                IT and software, aerospace, electronics, and startup ecosystem
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Hosur (Tamil Nadu)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Automobile parts, electronics manufacturing, and industrial equipment
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Hyderabad (Telangana)</h3>
              <p className="mt-2 text-sm text-slate-600">
                IT services, pharmaceuticals, biotechnology, and emerging tech
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Kochi (Kerala)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Marine products, spices processing, coir products, and tourism services
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Connect with South Zone</h3>
          <p className="mt-3 text-slate-700">
            For MSME support, membership inquiries, or collaboration opportunities in the South Zone, reach out to the regional chairman or member associations.
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
