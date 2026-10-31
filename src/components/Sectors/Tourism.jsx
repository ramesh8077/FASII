import { Link } from "react-router-dom";
import { Hotel, Utensils, Camera, Compass, ChevronRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Hotel, title: "Hospitality Services", description: "Supporting small hotels, guest houses, homestays, and budget accommodations catering to tourists." },
  { icon: Utensils, title: "Food & Beverage Services", description: "Promoting restaurants, cafes, catering services, and culinary tourism enterprises." },
  { icon: Camera, title: "Tour Operations", description: "Facilitating travel agencies, tour operators, and adventure tourism providers." },
  { icon: Compass, title: "Tourism Products", description: "Supporting manufacturers and sellers of tourism souvenirs, handicrafts, and local artifacts." }
];

const focusAreas = [
  "Budget Hotels & Homestays", "Tour & Travel Agencies", "Adventure Tourism Services", 
  "Restaurant & Food Services", "Transport & Taxi Services", "Tourist Guide Services"
];

const governmentSchemes = [
  { title: "Swadesh Darshan Scheme", desc: "Development of theme-based tourist circuits creating opportunities for local tourism service providers." },
  { title: "PRASHAD Scheme", desc: "Pilgrimage infrastructure development benefiting hospitality and tourism MSMEs." },
  { title: "Hunar Se Rozgar Scheme", desc: "Skill training for youth in hospitality and tourism sectors for quality service delivery." }
];

export default function Tourism() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Tourism & Hospitality" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[280px_1fr] items-start gap-8">
          
          {/* Strict Left Sidebar */}
          <aside className="border border-slate-300">
            <div className="bg-[#b45309] p-4 border-b-4 border-amber-500">
              <h2 className="font-bold uppercase text-white text-sm tracking-widest">Key Operations</h2>
            </div>
            <ul className="divide-y divide-slate-200 bg-slate-50">
              {focusAreas.map((area, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center p-4 text-sm font-semibold text-slate-700 hover:bg-white hover:text-[#b45309] transition-colors">
                    <ChevronRight size={16} className="text-amber-500 mr-2 shrink-0" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-orange-100 border-t border-slate-300">
              <h3 className="text-xs font-bold uppercase text-orange-900 mb-2">Need Assistance?</h3>
              <Link to="/about/allied-organisations" className="block text-center bg-[#b45309] text-white text-sm font-bold py-2 hover:bg-orange-900">
                Contact Member Network
              </Link>
            </div>
          </aside>

          {/* Right Content Area */}
          <div className="space-y-8">
            <div className="border-l-4 border-amber-500 bg-[#fff8ec] p-5 border border-y-orange-200 border-r-orange-200">
              <p className="text-sm leading-7 text-slate-800 text-justify">
                Tourism is a major employment generator and MSMEs form the backbone of India's tourism and hospitality sector. From small hotels to tour operators, handicraft vendors to restaurant services, small enterprises contribute significantly to showcasing India's rich cultural heritage.
              </p>
            </div>

            {/* Structured Table Layout for Initiatives */}
            <div className="border border-slate-300">
              <h2 className="bg-slate-800 p-4 text-white text-sm font-bold uppercase tracking-wider">
                FASII Sector Operations
              </h2>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white">
                {initiatives.map((item, index) => (
                  <div key={index} className="p-5 flex gap-4 hover:bg-orange-50/50">
                    <item.icon size={28} className="text-[#b45309] shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scheme List Format */}
            <div className="border border-slate-300">
              <h2 className="bg-[#b45309] p-4 text-white text-sm font-bold uppercase tracking-wider border-b-4 border-amber-500">
                Notified Tourism Schemes
              </h2>
              <ul className="divide-y divide-slate-200">
                {governmentSchemes.map((scheme, index) => (
                  <li key={index} className="p-5 bg-white flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/3">
                      <span className="font-bold text-orange-950 text-sm block">{scheme.title}</span>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-slate-700">{scheme.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}