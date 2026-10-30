import { Link } from "react-router-dom";
import { MapPin, Users, Mail, Building2, Factory } from "lucide-react";
import PageHero from "../Layout/common/PageHero.jsx";

const westZoneStates = [
  "Maharashtra",
  "Gujarat",
  "Goa",
  "Madhya Pradesh",
  "Chhattisgarh",
  "Dadra & Nagar Haveli and Daman & Diu",
];

const memberAssociations = [
  {
    name: "Soni Information & Education Society",
    location: "Amravati, Maharashtra",
    focus: "Industry information, education and enterprise development",
  },
];

const keyIndustries = [
  "Engineering & Auto Components",
  "Textiles & Apparel",
  "Chemicals & Petrochemicals",
  "Pharmaceuticals & Bulk Drugs",
  "Gems & Jewellery",
  "Food Processing",
  "Plastics & Packaging",
  "Electronics & Electricals",
];

const regionalInitiatives = [
  {
    title: "Cluster & Vendor Development",
    description:
      "Connecting MSME clusters across Maharashtra, Gujarat and Madhya Pradesh with CPSUs and large buyers through vendor development programmes.",
  },
  {
    title: "MSME Awareness & Capacity Building",
    description:
      "Organising awareness programmes on central and state schemes, credit facilitation and quality certification for small industries.",
  },
  {
    title: "Export & Market Access",
    description:
      "Supporting western region enterprises in reaching domestic and international markets for engineering goods, textiles and processed foods.",
  },
  {
    title: "Industry Representation",
    description:
      "Representing the interests of small industries before government departments, financial institutions and industry forums.",
  },
];

export default function Zone4() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="FASII West Zone" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <p className="text-lg leading-8 text-slate-700">
            The West Zone represents FASII&apos;s presence across the western and central
            states of India, covering established industrial belts in Maharashtra,
            Gujarat, Madhya Pradesh and neighbouring states. The region is known for
            its strength in engineering, chemicals, pharmaceuticals, textiles and
            export-oriented manufacturing.
          </p>
        </div>

        {/* Regional Leadership */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Regional Chairman - West Zone</h2>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Users size={32} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Shri Devendra Wasundeorao Sherekar</h3>
              <p className="mt-2 text-sm text-slate-700">
                Leading FASII&apos;s initiatives across the western and central states,
                coordinating with member associations and representing small
                industries&apos; interests at regional forums.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a href="mailto:devenwarud@rediffmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900">
                  <Mail size={16} />
                  devenwarud@rediffmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* States Covered */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">States & Union Territories Covered</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {westZoneStates.map((state) => (
              <div key={state} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
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
            {memberAssociations.map((association) => (
              <div key={association.name} className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <Building2 size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{association.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      <MapPin size={14} className="mr-1 inline" />
                      {association.location}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{association.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about/allied-organisations" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-900">
            View all member associations →
          </Link>
        </div>

        {/* Key Industries */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Industries in West Zone</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyIndustries.map((industry) => (
              <div key={industry} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <Factory size={18} className="shrink-0 text-orange-600" />
                <span className="text-sm font-medium text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Initiatives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">West Zone Initiatives</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {regionalInitiatives.map((initiative) => (
              <div key={initiative.title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{initiative.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Connect with West Zone</h3>
          <p className="mt-3 text-slate-700">
            For MSME support, membership enquiries or collaboration opportunities in the
            West Zone, reach out to the regional chairman or member associations.
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
