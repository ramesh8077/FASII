import { Link } from "react-router-dom";
import { MapPin, Users, Mail, Building2, Factory } from "lucide-react";
import PageHero from "../Layout/common/PageHero.jsx";
import eastMap from "../../assets/Images/Maps/east.jpg";

const eastZoneStates = [
  "West Bengal", "Odisha", "Bihar", "Jharkhand", "Assam", "Arunachal Pradesh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura", "Andaman & Nicobar Islands"
];

const memberAssociations = [
  { name: "Khasmohal Balichak Polley Unnayan Samity", location: "Howrah, West Bengal", focus: "Local industrial development and community welfare" },
  { name: "Tiny Enterprises' Association", location: "Kolkata, West Bengal", focus: "Support for micro and tiny enterprises" },
  { name: "West Bengal Industrial Entrepreneurs Association", location: "Kolkata, West Bengal", focus: "Industrial entrepreneurship and business development" },
  { name: "North 24 Parganas Chamber of Commerce & Industry", location: "Kolkata, West Bengal", focus: "Trade, commerce, and industrial promotion" }
];

const keyIndustries = [
  "Engineering & Manufacturing", "Jute & Textile Products", "Tea Processing & Packaging", "Handicrafts & Handloom", "Food Processing", "Leather Products", "IT & ITES", "Tourism & Hospitality"
];

const regionalInitiatives = [
  { title: "Cluster Development Support", description: "Strengthening MSME clusters in Howrah engineering, Hooghly brass, and traditional craft clusters across East and Northeast." },
  { title: "Northeast Industrial Promotion", description: "Special focus on promoting entrepreneurship and industrial development in Northeast states through tailored support programs." },
  { title: "Skill Enhancement Programs", description: "Conducting training programs in traditional crafts, modern manufacturing techniques, and entrepreneurship development." },
  { title: "Market Linkage & Export Support", description: "Connecting MSMEs with domestic and international markets, particularly for handicrafts, tea, and niche products." }
];

export default function Zone3() {
  return (
    <main className="bg-white text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="FASII East Zone" />

      {/* Intro Banner with Local East Map Image */}
      <section className="bg-slate-50 border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold uppercase text-[#b45309] mb-4 tracking-wide border-l-8 border-amber-500 pl-4">
              Eastern &amp; Northeastern Administration
            </h2>
            <p className="text-sm leading-8 text-slate-700 text-justify">
              The East Zone covers FASII's presence across West Bengal, Odisha, Bihar, Jharkhand, and all Northeast states. This region represents a diverse industrial landscape with traditional manufacturing clusters, emerging industries, and immense potential for entrepreneurship development.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-2 bg-white border border-slate-300 shadow-sm flex items-center justify-center h-56">
            <img 
              src={eastMap} 
              alt="East Zone Map" 
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 space-y-12">
        
        {/* Regional Leadership */}
        <div className="border border-slate-300 bg-white shadow-sm">
          <div className="bg-[#b45309] px-6 py-3 border-b-4 border-amber-500">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Regional Chairman - East Zone</h2>
          </div>
          <div className="p-6 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border-2 border-amber-500 bg-orange-50 text-[#b45309] font-bold text-xl">
              CG
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 uppercase">Shri Chiranjib Ghosh</h3>
              <p className="mt-2 text-sm text-slate-700 leading-6 text-justify">
                Leading FASII initiatives across eastern and northeastern states, promoting industrial development, and ensuring effective representation of small industries in the region.
              </p>
              <div className="mt-4">
                <a href="mailto:chiranjib36@gmail.com" className="inline-flex items-center gap-2 text-xs font-bold uppercase bg-slate-100 border border-slate-300 px-3 py-2 text-orange-700 hover:bg-orange-700 hover:text-white transition-colors">
                  <Mail size={14} /> chiranjib36@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* States Covered */}
        <div className="border border-slate-300 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-2 mb-4 border-l-4 border-amber-500">
            States &amp; Union Territories Covered
          </h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {eastZoneStates.map((state, index) => (
              <div key={index} className="flex items-center gap-3 border border-slate-200 bg-slate-50 p-3">
                <MapPin size={14} className="shrink-0 text-orange-700" />
                <span className="text-xs font-bold uppercase text-slate-800">{state}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Member Associations */}
        <div className="border border-slate-300 bg-white shadow-sm">
          <div className="bg-slate-800 px-6 py-3 border-b-4 border-amber-500">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Associated Member Bodies</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {memberAssociations.map((association, index) => (
              <div key={index} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-orange-700"><Building2 size={18} /></div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm uppercase">{association.name}</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1"><MapPin size={12} className="inline mr-1 text-amber-600"/>{association.location}</p>
                    <p className="text-xs text-slate-700 mt-2">{association.focus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Industries & Initiatives */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-2 mb-4 border-l-4 border-amber-500">
              Key Industrial Sectors
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {keyIndustries.map((industry, index) => (
                <div key={index} className="flex items-center gap-2 border border-slate-200 p-3 bg-slate-50 text-xs font-semibold text-slate-800">
                  <Factory size={14} className="text-orange-700 shrink-0" /> {industry}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-300 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-3 py-2 mb-4 border-l-4 border-amber-500">
              Regional Interventions
            </h2>
            <div className="space-y-4">
              {regionalInitiatives.map((initiative, index) => (
                <div key={index} className="border-b border-slate-200 pb-3 last:border-b-0">
                  <h3 className="text-xs font-bold text-slate-900 uppercase">{initiative.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-5">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}