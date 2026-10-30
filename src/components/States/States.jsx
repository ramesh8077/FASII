import { Link } from "react-router-dom";
import { MapPin, Users, Building2, Mail } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const statePresence = [
  {
    region: "Northern States",
    states: ["Uttar Pradesh", "Delhi NCR", "Punjab", "Haryana", "Rajasthan", "Himachal Pradesh", "Uttarakhand"],
    chairman: "Shri Himanshu Tyagi",
    contact: "Organicbasket09@gmail.com",
    associations: [
      "Association for Helping Hand, Ghaziabad",
      "Udyog Vyapar Mandal, Ghaziabad",
      "Organic Basket Enterprises, Ghaziabad"
    ]
  },
  {
    region: "Southern States",
    states: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry"],
    chairman: "Shri B. Karthikeyan",
    contact: "fasiichairman@gmail.com",
    associations: [
      "Indian Industries and Rural Development Foundation, Chennai",
      "Sourashtra Chamber of Commerce, Madurai",
      "Machenahalli Industrialists Association, Karnataka"
    ]
  },
  {
    region: "Eastern States",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Northeast States", "Andaman & Nicobar"],
    chairman: "Shri Chiranjib Ghosh",
    contact: "chiranjib36@gmail.com",
    associations: [
      "Khasmohal Balichak Polley Unnayan Samity, Howrah",
      "Tiny Enterprises' Association, Kolkata",
      "West Bengal Industrial Entrepreneurs Association, Kolkata",
      "North 24 Parganas Chamber of Commerce & Industry, Kolkata"
    ]
  },
  {
    region: "Western States",
    states: ["Maharashtra", "Gujarat", "Goa", "Madhya Pradesh", "Chhattisgarh", "Dadra & Nagar Haveli"],
    chairman: "Shri Devendra Wasundeorao Sherekar",
    contact: "devenwarud@rediffmail.com",
    associations: [
      "Soni Information & Education Society, Amravati"
    ]
  }
];

const stateInitiatives = [
  {
    title: "State-Level Industry Association Networks",
    description: "FASII works through member associations across states to represent and support small industries at the state level"
  },
  {
    title: "Regional Policy Advocacy",
    description: "Coordinating with state governments on MSME-friendly policies, incentives, and regulatory frameworks specific to each state"
  },
  {
    title: "State Industrial Clusters",
    description: "Supporting development and growth of state-specific industrial clusters and sector-focused associations"
  },
  {
    title: "Inter-State Collaboration",
    description: "Facilitating partnerships and knowledge exchange between industry associations across different states"
  }
];

export default function States() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="State-wise Presence" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              FASII's pan-India presence is organized through four regional structures covering all states and union territories. Our member associations and regional chairmen ensure effective representation and support for small industries across the country.
            </p>
          </div>
        </div>

        {/* Regional Structure Map */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Regional Coverage Across India</h2>
          <div className="space-y-6">
            {statePresence.map((region, index) => (
              <article key={index} className="rounded-lg border-2 border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">{region.region}</h3>
                    <p className="mt-2 text-sm font-medium text-orange-600">
                      Regional Chairman: {region.chairman}
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Building2 size={16} className="text-orange-600" />
                      States & Union Territories Covered:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {region.states.map((state, idx) => (
                        <span key={idx} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Users size={16} className="text-orange-600" />
                      Member Associations:
                    </p>
                    <ul className="mt-2 space-y-1">
                      {region.associations.map((association, idx) => (
                        <li key={idx} className="text-sm text-slate-600">
                          • {association}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <a
                      href={`mailto:${region.contact}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-900"
                    >
                      <Mail size={16} />
                      {region.contact}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* State-Level Initiatives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">State-Level Initiatives</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {stateInitiatives.map((initiative, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{initiative.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Coordination */}
        <div className="mb-12 rounded-lg bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Regional Coordination Framework</h2>
          <p className="mb-4 text-slate-700">
            FASII's four regional chairmen coordinate activities across their respective states, ensuring:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">North Region</h3>
              <p className="mt-2 text-sm text-slate-600">
                Covering major industrial hubs in UP, Delhi NCR, Punjab, and Rajasthan
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">South Region</h3>
              <p className="mt-2 text-sm text-slate-600">
                Coordinating activities across Tamil Nadu, Karnataka, Kerala, and Telangana
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">East Region</h3>
              <p className="mt-2 text-sm text-slate-600">
                Managing presence in West Bengal, Odisha, Bihar, and Northeast states
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">West Region</h3>
              <p className="mt-2 text-sm text-slate-600">
                Overseeing operations in Maharashtra, Gujarat, Goa, and Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Become Member Association */}
        <div className="text-center rounded-lg border-2 border-orange-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-slate-900">State Association Membership</h3>
          <p className="mt-3 text-slate-700">
            Is your state-level industry association interested in joining FASII's network? Connect with your regional chairman to explore membership opportunities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              View Regional Contacts
            </Link>
            <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Current Member Associations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
