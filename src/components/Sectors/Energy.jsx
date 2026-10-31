import { Link } from "react-router-dom";
import { Sun, Wind, Battery, Leaf, CheckSquare } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Sun, title: "Solar Energy Solutions", description: "Supporting MSMEs engaged in solar panel manufacturing, installation services, and rooftop solutions." },
  { icon: Wind, title: "Renewable Components", description: "Promoting small industries manufacturing components for wind turbines and biomass plants." },
  { icon: Battery, title: "Energy Storage", description: "Facilitating MSMEs developing energy storage solutions and battery systems." },
  { icon: Leaf, title: "Green Energy Services", description: "Supporting energy audit services, energy management consultancy, and green certifications." }
];

const focusAreas = [
  "Solar Panel Manufacturing", "Renewable Energy Installation", "Energy Efficient Lighting", 
  "Battery & Storage Systems", "Biomass Energy Solutions", "Wind Energy Components"
];

export default function Energy() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans">
      <PageHero title="Energy & Renewable Energy" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="bg-white border border-slate-300 p-6 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-[#b45309] uppercase mb-2 border-b-2 border-amber-500 inline-block pb-1">Executive Summary</h2>
          <p className="text-sm leading-7 text-slate-700 mt-3 text-justify">
            India's transition to clean and renewable energy creates immense opportunities for MSMEs. From solar equipment manufacturing to energy efficiency services, small industries are integral to achieving India's renewable energy targets and sustainable development goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Panel 1 */}
          <div className="border border-slate-300 bg-white">
             <div className="bg-slate-800 p-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">Renewable Energy Directives</h2>
            </div>
            <div className="p-0">
              {initiatives.map((item, index) => (
                <div key={index} className="flex p-4 border-b border-slate-200 last:border-b-0 hover:bg-[#fff8ec]">
                  <item.icon size={24} className="text-amber-600 shrink-0 mr-4" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel 2 */}
          <div className="border border-slate-300 bg-white">
             <div className="bg-[#b45309] p-3 border-b-4 border-amber-500">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">Approved Operations Index</h2>
            </div>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="flex items-start">
                  <CheckSquare size={16} className="text-green-600 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="bg-orange-50 p-4 border-t border-slate-300 mt-4">
               <h3 className="text-xs font-bold uppercase text-orange-900 mb-2">Government Subsidy Schemes</h3>
               <ul className="list-disc pl-4 text-xs text-slate-700 space-y-2">
                 <li><strong>PM Kusum Scheme:</strong> Financial support for solar pumps.</li>
                 <li><strong>National Solar Mission:</strong> Subsidies for solar manufacturing.</li>
                 <li><strong>PLI for Solar:</strong> Incentives for solar PV modules.</li>
               </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#b45309] text-white p-6 border-l-8 border-amber-500 text-center">
          <h3 className="text-base font-bold uppercase tracking-wider">Sector Facilitation & Linkages</h3>
          <p className="text-sm mt-2 text-orange-100">FASII provides technical guidance on regulatory matters, MNRE compliance, and market integration.</p>
          <Link to="/about/allied-organisations" className="mt-4 inline-block bg-white text-[#b45309] px-6 py-2 text-sm font-bold uppercase hover:bg-amber-100 transition-colors">
            Access MSME Network
          </Link>
        </div>
      </section>
    </main>
  );
}