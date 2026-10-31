import { Link } from "react-router-dom";
import { Factory, Cog, Package, Settings, ChevronRight, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Factory, title: "Diverse Manufacturing Base", description: "Supporting MSMEs across engineering goods, electronics, textiles, chemicals, plastics, metal fabrication, and consumer goods manufacturing." },
  { icon: Cog, title: "Make in India Support", description: "Facilitating manufacturing MSMEs to participate in Make in India initiative, domestic value addition, and import substitution opportunities." },
  { icon: Settings, title: "Technology Upgradation", description: "Promoting adoption of modern manufacturing technologies, automation, Industry 4.0 solutions, and quality improvement initiatives." },
  { icon: Package, title: "Supply Chain Integration", description: "Connecting MSME manufacturers with large industries, OEMs, government procurement, and export markets for sustainable growth." }
];

const focusAreas = [
  "Engineering & Metal Products", "Electronics Manufacturing", "Textile & Garment Production",
  "Plastic & Rubber Products", "Chemical Manufacturing", "Food Processing Units",
  "Auto Component Manufacturing", "Consumer Goods Production", "Packaging Materials",
  "Furniture Manufacturing", "Leather & Footwear", "Handicrafts & Artisan Products"
];

const challenges = [
  { challenge: "Technology & Modernization", solution: "Facilitating technology upgradation schemes, ZED certification, and access to modern machinery through CLCSS and other subsidy programs." },
  { challenge: "Quality Standards & Certifications", solution: "Support for achieving ISO certifications, BIS standards, industry-specific quality marks, and export-oriented certifications." },
  { challenge: "Raw Material Access & Pricing", solution: "Advocacy for stable raw material supply, price stabilization mechanisms, and direct linkages with material suppliers." },
  { challenge: "Market Access & Competition", solution: "Facilitating buyer-seller meets, participation in trade fairs, GeM registration, and connections with anchor industries for vendor development." }
];

export default function Manufacturing() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Manufacturing Sector" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="border-l-4 border-[#b45309] bg-slate-50 px-5 py-4 border border-y-slate-300 border-r-slate-300 mb-8">
          <p className="text-sm leading-7 text-slate-800 text-justify">
            <strong className="text-orange-900">Sector Directives:</strong> Manufacturing is the backbone of India's industrial economy and MSMEs constitute the largest segment of the manufacturing sector. From traditional industries to modern high-tech manufacturing, small industries contribute significantly to employment, exports, and economic growth under initiatives like Make in India, Atmanirbhar Bharat, and Production Linked Incentive schemes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            
            {/* Image 1: Main Sector Banner */}
            <div className="border border-slate-300 bg-slate-50 p-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Automated manufacturing assembly line" 
                className="w-full h-72 object-cover border border-slate-300"
              />
              <div className="bg-slate-800 border-t-4 border-amber-500 p-2 mt-2">
                <p className="text-xs text-white font-bold tracking-wider text-center uppercase">Industrial Framework Integration</p>
              </div>
            </div>

            {/* 1. Support Areas Table */}
            <div className="border border-slate-300">
              <div className="bg-[#b45309] px-4 py-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">Strategic MSME Interventions</h2>
              </div>
              <div className="overflow-x-auto bg-white">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-amber-100 border-b-2 border-amber-500">
                    <tr>
                      <th className="px-4 py-3 font-bold text-orange-950 border-r border-slate-300 w-16 text-center">Domain</th>
                      <th className="px-4 py-3 font-bold text-orange-950 border-r border-slate-300 w-1/3">Intervention Area</th>
                      <th className="px-4 py-3 font-bold text-orange-950">Implementation Strategy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {initiatives.map((item, index) => (
                      <tr key={index} className="hover:bg-orange-50">
                        <td className="px-4 py-3 border-r border-slate-300 text-center">
                          <item.icon size={20} className="text-[#b45309] mx-auto" />
                        </td>
                        <td className="px-4 py-3 font-bold text-slate-900 border-r border-slate-300 align-top">{item.title}</td>
                        <td className="px-4 py-3 text-slate-700 align-top">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

             {/* 2. Challenges & Solutions */}
             <div className="border border-slate-300">
              <div className="bg-[#b45309] px-4 py-2.5 border-b-4 border-amber-500">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Sector Challenges & FASII Interventions
                </h2>
              </div>
              <div className="overflow-x-auto bg-white">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-amber-100 border-b border-slate-300">
                    <tr>
                      <th className="w-1/3 px-4 py-3 font-bold text-orange-950 border-r border-slate-300">Identified Challenge</th>
                      <th className="w-2/3 px-4 py-3 font-bold text-orange-950">Strategic Intervention / Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {challenges.map((item, index) => (
                      <tr key={index} className="hover:bg-orange-50/55">
                        <td className="px-4 py-3 font-semibold text-slate-800 border-r border-slate-300 align-top">
                          {item.challenge}
                        </td>
                        <td className="px-4 py-3 text-slate-700 align-top">
                          {item.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image 2 + Government Schemes */}
            <div className="border border-slate-300 flex flex-col sm:flex-row bg-white">
              <div className="w-full sm:w-2/5 border-b sm:border-b-0 sm:border-r border-slate-300 bg-slate-100 p-2">
                 <img 
                  src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600" 
                  alt="Industrial workers reviewing plans" 
                  className="w-full h-full object-cover min-h-[200px] border border-slate-300"
                />
              </div>
              <div className="w-full sm:w-3/5">
                <div className="bg-amber-500 px-4 py-2.5 border-b border-amber-600">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-orange-950">
                    Government Manufacturing Schemes
                  </h2>
                </div>
                <div className="bg-white p-5">
                  <ul className="list-disc pl-4 space-y-3 text-sm text-slate-700 marker:text-[#b45309]">
                    <li>
                      <strong className="text-slate-900 block mb-0.5">Production Linked Incentive (PLI):</strong> Financial incentives across 14 sectors including electronics, pharmaceuticals, auto components.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">CLCSS:</strong> Capital subsidy up to ₹1 crore for technology upgradation in specified manufacturing sectors.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">ZED Certification:</strong> Quality and environmental certification support with subsidy for MSMEs.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">MSME Champion Scheme:</strong> Sector-specific support for enhancing competitiveness.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>

          <aside className="space-y-6">
            
            {/* Image 3: Sidebar Focus */}
            <div className="border border-slate-300 bg-white">
              <div className="p-2 bg-slate-50 border-b border-slate-300">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" 
                  alt="Heavy machinery and factory floor" 
                  className="w-full h-40 object-cover border border-slate-300"
                />
              </div>
              <div className="bg-[#b45309] px-4 py-2.5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Key Focus Areas
                </h2>
              </div>
              <ul className="divide-y divide-slate-200 max-h-96 overflow-y-auto">
                {focusAreas.map((area, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#b45309] transition-colors">
                      <ChevronRight size={16} className="text-amber-500 mr-2 shrink-0" />
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Callout Box */}
            <div className="border-2 border-[#b45309] bg-[#fff8ec] p-5 text-center">
              <h3 className="text-sm font-bold text-orange-950 uppercase border-b border-amber-300 pb-2 mb-3">
                Make in India Compliance
              </h3>
              <p className="text-sm leading-6 text-slate-700 mb-4">
                FASII provides guidance on technology upgradation, quality certifications, scheme access, and participation in government procurement.
              </p>
              <Link to="/about/allied-organisations" className="inline-flex w-full items-center justify-center gap-2 bg-[#b45309] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-900 border border-orange-950">
                <ExternalLink size={16} /> Contact Associations
              </Link>
            </div>
            
          </aside>
        </div>
      </section>
    </main>
  );
}