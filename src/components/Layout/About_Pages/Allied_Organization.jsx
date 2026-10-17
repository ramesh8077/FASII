import { Link } from "react-router-dom";
import { Building2, MapPin, Mail } from "lucide-react";

const memberAssociations = [
  {
    name: "Khasmohal Balichak Polley Unnayan Samity",
    region: "Eastern Region",
    location: "Howrah, West Bengal",
    representative: "Shri Saileswar Panda (National President)"
  },
  {
    name: "Machenahalli Industrialists Association",
    region: "Southern Region",
    location: "Shimoga, Karnataka",
    representative: "Shri M. Raju (National Senior Vice President)"
  },
  {
    name: "Tiny Enterprises' Association",
    region: "Eastern Region",
    location: "Kolkata, West Bengal",
    representative: "Shri Debdutta Banerjee (National Vice President)"
  },
  {
    name: "Association for Helping Hand",
    region: "Northern Region",
    location: "Ghaziabad, Uttar Pradesh",
    representative: "Shri Shivanshu Tyagi (National Honorary General Secretary)"
  },
  {
    name: "Sourashtra Chamber of Commerce",
    region: "Southern Region",
    location: "Madurai, Tamil Nadu",
    representative: "Shri K.K.G. Prabhakaran (National Honorary Treasurer)"
  },
  {
    name: "Udyog Vyapar Mandal",
    region: "Northern Region",
    location: "Ghaziabad, Uttar Pradesh",
    representative: "Shri Vipin Goel (National Joint Honorary General Secretary)"
  },
  {
    name: "West Bengal Industrial Entrepreneurs Association",
    region: "Eastern Region",
    location: "Kolkata, West Bengal",
    representative: "Shri Jahar Chandra Chandra (National Joint Honorary Treasurer)"
  },
  {
    name: "Indian Industries And Rural Development Foundation",
    region: "Southern Region",
    location: "Chennai, Tamil Nadu",
    representative: "Shri B. Karthikeyan (Regional Chairman - South)"
  },
  {
    name: "North 24 Parganas Chamber of Commerce & Industry",
    region: "Eastern Region",
    location: "Kolkata, West Bengal",
    representative: "Shri Chiranjib Ghosh (Regional Chairman - East)"
  },
  {
    name: "Soni Information & Education Society",
    region: "Western Region",
    location: "Amravati, Maharashtra",
    representative: "Shri Devendra Wasundeorao Sherekar (Regional Chairman - West)"
  },
  {
    name: "Organic Basket Enterprises",
    region: "Northern Region",
    location: "Ghaziabad, Uttar Pradesh",
    representative: "Shri Himanshu Tyagi (Regional Chairman - North)"
  }
];

const partnerOrganizations = [
  {
    name: "Small Industries Development Bank of India (SIDBI)",
    type: "Financial Institution",
    partnership: "Collaborates on national conclaves and industry financing programmes"
  },
  {
    name: "Ministry of MSME",
    type: "Government Ministry",
    partnership: "Policy advocacy, awareness programmes, and scheme implementation"
  },
  {
    name: "Ministry of Defence",
    type: "Government Ministry",
    partnership: "MSME awareness programmes and vendor development for defence sector"
  },
  {
    name: "Armoured Nigam Ltd.",
    type: "CPSU",
    partnership: "Industry engagement and procurement opportunities for MSMEs"
  },
  {
    name: "District Industries Centres (DICs)",
    type: "Government Network",
    partnership: "Regional coordination and implementation of MSME schemes"
  }
];

export default function Allied_Organization() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-semibold sm:text-4xl">Member Associations & Partners</h1>
          <p className="mt-3 text-slate-600">
            <Link to="/about" className="hover:text-orange-700">About FASII</Link> / Member Associations
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-lg leading-7 text-slate-600">
            FASII brings together diverse industry associations from across India, representing thousands of small and medium enterprises. Our member associations form the foundation of our federation, each contributing unique regional perspectives and industry expertise.
          </p>
        </div>

        {/* Member Associations */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Member Associations</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberAssociations.map((association, index) => (
              <article key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Building2 size={20} />
                </div>
                <h3 className="text-base font-semibold text-slate-900 leading-snug">{association.name}</h3>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="shrink-0 text-orange-600" />
                    {association.location}
                  </p>
                  <p className="rounded bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700">
                    {association.region}
                  </p>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-xs font-medium text-orange-700">FASII Representative</p>
                  <p className="mt-1 text-xs text-slate-600">{association.representative}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-slate-50 p-6">
            <p className="text-sm text-slate-700">
              <strong>Note:</strong> The associations listed above are represented through FASII's current office bearers. FASII welcomes new member associations from across India. For membership information, please contact the National Honorary General Secretary.
            </p>
            <Link to="/about/office-bearers" className="mt-3 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
              View contact details →
            </Link>
          </div>
        </div>

        {/* Partner Organizations */}
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Strategic Partners</h2>
          <p className="mb-6 text-slate-600">
            FASII collaborates with government ministries, financial institutions, and public sector undertakings to strengthen the small industries ecosystem.
          </p>
          <div className="space-y-4">
            {partnerOrganizations.map((partner, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{partner.name}</h3>
                    <p className="mt-1 text-sm font-medium text-orange-600">{partner.type}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  <span className="font-medium">Partnership:</span> {partner.partnership}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-lg bg-orange-50 border border-orange-200 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Join FASII</h3>
          <p className="mt-3 text-slate-700">
            Is your association interested in becoming part of FASII's growing network? Connect with us to explore membership opportunities.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              <Mail size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
