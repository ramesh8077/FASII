import { Link } from "react-router-dom";
import { MapPin, Users, Mail, Phone, Building2, Factory } from "lucide-react";
import PageHero from "../Layout/common/PageHero.jsx";

const eastZoneStates = [
  "West Bengal",
  "Odisha",
  "Bihar",
  "Jharkhand",
  "Assam",
  "Arunachal Pradesh",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Sikkim",
  "Tripura",
  "Andaman & Nicobar Islands"
];

const memberAssociations = [
  {
    name: "Khasmohal Balichak Polley Unnayan Samity",
    location: "Howrah, West Bengal",
    focus: "Local industrial development and community welfare"
  },
  {
    name: "Tiny Enterprises' Association",
    location: "Kolkata, West Bengal",
    focus: "Support for micro and tiny enterprises"
  },
  {
    name: "West Bengal Industrial Entrepreneurs Association",
    location: "Kolkata, West Bengal",
    focus: "Industrial entrepreneurship and business development"
  },
  {
    name: "North 24 Parganas Chamber of Commerce & Industry",
    location: "Kolkata, West Bengal",
    focus: "Trade, commerce, and industrial promotion"
  }
];

const keyIndustries = [
  "Engineering & Manufacturing",
  "Jute & Textile Products",
  "Tea Processing & Packaging",
  "Handicrafts & Handloom",
  "Food Processing",
  "Leather Products",
  "IT & ITES",
  "Tourism & Hospitality"
];

const regionalInitiatives = [
  {
    title: "Cluster Development Support",
    description: "Strengthening MSME clusters in Howrah engineering, Hooghly brass, and traditional craft clusters across East and Northeast."
  },
  {
    title: "Northeast Industrial Promotion",
    description: "Special focus on promoting entrepreneurship and industrial development in Northeast states through tailored support programs."
  },
  {
    title: "Skill Enhancement Programs",
    description: "Conducting training programs in traditional crafts, modern manufacturing techniques, and entrepreneurship development."
  },
  {
    title: "Market Linkage & Export Support",
    description: "Connecting MSMEs with domestic and international markets, particularly for handicrafts, tea, and niche products."
  }
];

export default function Zone3() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="FASII East Zone" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The East Zone covers FASII's presence across West Bengal, Odisha, Bihar, Jharkhand, and all Northeast states. This region represents a diverse industrial landscape with traditional manufacturing clusters, emerging industries, and immense potential for entrepreneurship development, particularly in the Northeast region.
            </p>
          </div>
        </div>

        {/* Regional Leadership */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Regional Chairman - East Zone</h2>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Shri Chiranjib Ghosh</h3>
              <p className="mt-2 text-sm text-slate-700">
                Leading FASII initiatives across eastern and northeastern states, promoting industrial development, and ensuring effective representation of small industries in the region.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:chiranjib36@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900">
                  <Mail size={16} />
                  chiranjib36@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* States Covered */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">States & Union Territories Covered</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {eastZoneStates.map((state, index) => (
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
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Industries in East Zone</h2>
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
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">East Zone Initiatives</h2>
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
              <h3 className="font-semibold text-slate-900">Howrah (West Bengal)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Engineering goods, foundries, metal products, and machinery manufacturing
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Kolkata (West Bengal)</h3>
              <p className="mt-2 text-sm text-slate-600">
                IT services, leather goods, jute products, and diversified manufacturing
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Bhubaneswar (Odisha)</h3>
              <p className="mt-2 text-sm text-slate-600">
                IT and ITES, food processing, handicrafts, and emerging industries
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Ranchi (Jharkhand)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Engineering workshops, metal products, and mineral-based industries
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Guwahati (Assam)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Tea processing, handicrafts, bamboo products, and agro-processing
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Northeast States</h3>
              <p className="mt-2 text-sm text-slate-600">
                Traditional crafts, handloom, organic products, and tourism services
              </p>
            </div>
          </div>
        </div>

        {/* Northeast Focus */}
        <div className="mb-12 rounded-lg border-2 border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Special Focus: Northeast Development</h2>
          <p className="text-slate-700">
            FASII East Zone places special emphasis on industrial development in Northeast states through:
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p>Promoting traditional crafts and handloom industries unique to Northeast region</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p>Facilitating access to North East Industrial Development Scheme (NEIDS) and other regional schemes</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p>Supporting organic farming-based enterprises and bamboo industry development</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <p>Promoting tourism and hospitality MSMEs leveraging Northeast's natural beauty and culture</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Connect with East Zone</h3>
          <p className="mt-3 text-slate-700">
            For MSME support, membership inquiries, or collaboration opportunities in the East Zone, reach out to the regional chairman or member associations.
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
