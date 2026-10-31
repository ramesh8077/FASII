import { Link } from "react-router-dom";
import { Sprout, Factory, Leaf, Package, ChevronRight, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Sprout, title: "Agro-Processing MSMEs", description: "Supporting small-scale food processing units, value addition enterprises, and farm-to-market linkage initiatives for agricultural products." },
  { icon: Factory, title: "Farm Equipment Manufacturing", description: "Promoting small industries engaged in manufacturing agricultural tools, equipment, and machinery for modernization of farming practices." },
  { icon: Package, title: "Agricultural Input Supply", description: "Facilitating MSMEs in production and distribution of seeds, fertilizers, bio-pesticides, and other agricultural inputs." },
  { icon: Leaf, title: "Organic & Sustainable Agriculture", description: "Encouraging small enterprises in organic farming inputs, bio-fertilizers, vermicompost, and sustainable agriculture solutions." }
];

const challenges = [
  { challenge: "Market Access & Price Realization", solution: "Facilitating linkages with organized retail, food processing companies, and export markets for better price realization." },
  { challenge: "Technology & Modernization", solution: "Promoting adoption of modern processing technologies, cold chain infrastructure, and quality certification." },
  { challenge: "Working Capital & Credit", solution: "Advocacy for accessible institutional credit, working capital support, and credit guarantee schemes." },
  { challenge: "Quality Standards & Certification", solution: "Assistance in achieving FSSAI, organic certifications, and compliance with quality standards." }
];

const keyAreas = [
  "Food Processing & Value Addition", "Agricultural Equipment Manufacturing", "Organic Input Production",
  "Cold Chain & Storage Solutions", "Agro-Chemical Manufacturing", "Seed Processing & Distribution"
];

export default function Agriculture() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Agriculture & Allied Industries" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        {/* Official Briefing Box */}
        <div className="border-l-4 border-[#b45309] bg-slate-50 px-5 py-4 border border-y-slate-300 border-r-slate-300 mb-8">
          <p className="text-sm leading-7 text-slate-800 text-justify">
            <strong className="text-orange-900">Background Overview:</strong> Agriculture remains the backbone of India's economy, and small industries play a crucial role in the agricultural value chain. FASII supports MSMEs engaged in agro-processing, farm equipment manufacturing, agricultural input production, and allied activities that strengthen the agriculture sector and enhance farmer incomes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main Content Area */}
          <div className="space-y-8">
            
            {/* Image 1: Main Sector Banner - Fields and Equipment */}
            <div className="border border-slate-300 bg-slate-50 p-2">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200" 
                alt="Agricultural fields and modern farming equipment in India" 
                className="w-full h-72 object-cover border border-slate-300"
              />
              <div className="bg-[#b45309] border-t-4 border-amber-500 p-2 mt-2">
                <p className="text-xs text-white font-bold tracking-wider text-center uppercase">Modernization of Agricultural Supply Chain</p>
              </div>
            </div>

            {/* 1. Support Areas (Formal Grid) */}
            <div className="border border-slate-300">
              <div className="bg-slate-800 px-4 py-2.5 border-b-4 border-[#b45309]">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Support Areas in Agriculture Sector
                </h2>
              </div>
              <div className="bg-white grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {initiatives.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 hover:bg-orange-50/40">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange-100 border border-orange-200 text-[#b45309]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-xs leading-5 text-slate-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image 2 + Government Schemes */}
            <div className="border border-slate-300 flex flex-col sm:flex-row bg-white">
              <div className="w-full sm:w-2/5 border-b sm:border-b-0 sm:border-r border-slate-300 bg-slate-100 p-2">
                 <img 
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600" 
                  alt="Agro-processing industrial packaging and production in India" 
                  className="w-full h-full object-cover min-h-[200px] border border-slate-300"
                />
              </div>
              <div className="w-full sm:w-3/5">
                <div className="bg-amber-500 px-4 py-2.5 border-b border-amber-600">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-orange-950">
                    Notified Government Schemes
                  </h2>
                </div>
                <div className="bg-white p-5">
                  <ul className="list-disc pl-4 space-y-3 text-sm text-slate-700 marker:text-[#b45309]">
                    <li>
                      <strong className="text-slate-900 block mb-0.5">PMFME Scheme:</strong> Financial & technical support for micro food processing.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">Agriculture Infrastructure Fund:</strong> Financing facility for post-harvest infrastructure.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">CLCSS:</strong> Technology upgradation support for food processing MSMEs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Challenges & Interventions (Tabular Format) */}
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
            
          </div>

          {/* Sidebar Area */}
          <aside className="space-y-6">
            
            {/* Image 3: Sidebar Focus - Organic and Farming inputs */}
            <div className="border border-slate-300 bg-white">
              <div className="p-2 bg-slate-50 border-b border-slate-300">
                <img 
                  src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=400" 
                  alt="Quality seeds and farming focus areas" 
                  className="w-full h-40 object-cover border border-slate-300"
                />
              </div>
              <div className="bg-[#b45309] px-4 py-2.5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Key Focus Areas
                </h2>
              </div>
              <ul className="divide-y divide-slate-200">
                {keyAreas.map((area, index) => (
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
                Agriculture-Allied Support
              </h3>
              <p className="text-sm leading-6 text-slate-700 mb-4">
                FASII member associations provide guidance on government schemes, market linkages, and compliance support for MSMEs.
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