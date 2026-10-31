import { Link } from "react-router-dom";
import { Mail, Briefcase, MapPin, Building2 } from "lucide-react";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import PageHero from "../common/PageHero.jsx";

const memberAssociations = [
  { name: "Khasmohal Balichak Polley Unnayan Samity", region: "Eastern Region", location: "Howrah, West Bengal", representative: "Shri Saileswar Panda (National President)" },
  { name: "Machenahalli Industrialists Association", region: "Southern Region", location: "Shimoga, Karnataka", representative: "Shri M. Raju (National Senior Vice President)" },
  { name: "Tiny Enterprises' Association", region: "Eastern Region", location: "Kolkata, West Bengal", representative: "Shri Debdutta Banerjee (National Vice President)" },
  { name: "Association for Helping Hand", region: "Northern Region", location: "Ghaziabad, Uttar Pradesh", representative: "Shri Shivanshu Tyagi (National Honorary General Secretary)" },
  { name: "Sourashtra Chamber of Commerce", region: "Southern Region", location: "Madurai, Tamil Nadu", representative: "Shri K.K.G. Prabhakaran (National Honorary Treasurer)" },
  { name: "Udyog Vyapar Mandal", region: "Northern Region", location: "Ghaziabad, Uttar Pradesh", representative: "Shri Vipin Goel (National Joint Honorary General Secretary)" },
  { name: "West Bengal Industrial Entrepreneurs Association", region: "Eastern Region", location: "Kolkata, West Bengal", representative: "Shri Jahar Chandra Chandra (National Joint Honorary Treasurer)" },
  { name: "Indian Industries And Rural Development Foundation", region: "Southern Region", location: "Chennai, Tamil Nadu", representative: "Shri B. Karthikeyan (Regional Chairman - South)" },
  { name: "North 24 Parganas Chamber of Commerce & Industry", region: "Eastern Region", location: "Kolkata, West Bengal", representative: "Shri Chiranjib Ghosh (Regional Chairman - East)" },
  { name: "Soni Information & Education Society", region: "Western Region", location: "Amravati, Maharashtra", representative: "Shri Devendra Wasundeorao Sherekar (Regional Chairman - West)" },
  { name: "Organic Basket Enterprises", region: "Northern Region", location: "Ghaziabad, Uttar Pradesh", representative: "Shri Himanshu Tyagi (Regional Chairman - North)" },
];

const partnerOrganizations = [
  { name: "Small Industries Development Bank of India (SIDBI)", type: "Financial Institution", partnership: "Collaborates on national conclaves and industry financing programmes" },
  { name: "Ministry of MSME", type: "Government Ministry", partnership: "Policy advocacy, awareness programmes, and scheme implementation" },
  { name: "Ministry of Defence", type: "Government Ministry", partnership: "MSME awareness programmes and vendor development for defence sector" },
  { name: "Armoured Nigam Ltd.", type: "CPSU", partnership: "Industry engagement and procurement opportunities for MSMEs" },
  { name: "District Industries Centres (DICs)", type: "Government Network", partnership: "Regional coordination and implementation of MSME schemes" },
];

export default function Allied_Organization() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Member Associations & Partners" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-14">
          <p className="border-l-4 border-amber-500 pl-4 text-lg leading-8 text-slate-700">
            FASII brings together diverse industry associations from across India, representing thousands of small and
            medium enterprises. Our member associations form the foundation of our federation, each contributing unique
            regional perspectives and industry expertise.
          </p>
          <img
            src={conclave}
            alt="Member associations at a FASII conclave"
            loading="lazy"
            className="aspect-[16/9] w-full rounded-xl border-b-8 border-amber-500 object-cover shadow-lg"
          />
        </div>

        <h2 className="mt-16 border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
          Member Associations
        </h2>
        
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memberAssociations.map((association) => (
            <div key={association.name} className="group relative overflow-hidden rounded-xl border border-orange-200 bg-[#fff8ec] p-6 shadow-sm transition-all hover:shadow-md hover:border-amber-400">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-800">
                {association.region}
              </div>
              <h3 className="pr-10 text-lg font-bold leading-tight text-orange-950">{association.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={14} className="text-orange-600" /> {association.location}
              </p>
              <div className="mt-5 border-t border-orange-200/60 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-orange-700">FASII Representative</p>
                <p className="mt-1 text-sm font-medium text-slate-800">{association.representative}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-lg border-l-4 border-orange-400 bg-amber-50 px-5 py-4 text-sm leading-7 text-slate-700">
          <strong>Note:</strong> The associations listed above are represented through FASII's current office bearers.
          FASII welcomes new member associations from across India. For membership information, please contact the
          National Honorary General Secretary.{" "}
          <Link to="/about/office-bearers" className="font-bold text-orange-700 hover:text-orange-900 underline underline-offset-2">
            View contact details →
          </Link>
        </p>
      </section>

      <section aria-labelledby="partners-title" className="bg-[#fff8ec] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <h2 id="partners-title" className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
            Strategic Partners
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            FASII collaborates with government ministries, financial institutions, and public sector undertakings to
            strengthen the small industries ecosystem.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerOrganizations.map((partner) => (
              <div key={partner.name} className="rounded-xl border border-white bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-orange-50 p-2.5 text-orange-600">
                  <Building2 size={24} />
                </div>
                <h3 className="text-lg font-bold leading-snug text-orange-950">{partner.name}</h3>
                <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  {partner.type}
                </span>
                <p className="mt-4 text-sm leading-6 text-slate-600">{partner.partnership}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="join-title" className="relative isolate overflow-hidden border-y-4 border-amber-500 text-white">
        <img src={awareness} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-orange-950/85" />
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <span className="mx-auto mb-5 block h-1 w-16 bg-amber-400" aria-hidden="true" />
          <h2 id="join-title" className="text-3xl font-bold">Join FASII</h2>
          <p className="mt-4 leading-8 text-orange-50">
            Is your association interested in becoming part of FASII's growing network? Connect with us to explore
            membership opportunities.
          </p>
          <Link
            to="/about/office-bearers"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-amber-400 px-6 py-3 font-bold text-orange-950 transition hover:bg-amber-300"
          >
            <Mail size={18} aria-hidden="true" />
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}