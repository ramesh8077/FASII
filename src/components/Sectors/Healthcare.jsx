import { Link } from "react-router-dom";
import { Pill, TestTube, Activity, ShieldPlus, ExternalLink, ChevronRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Pill, title: "Pharmaceutical Manufacturing", description: "Supporting small-scale pharmaceutical units, generic drug manufacturers, API producers, and formulation development enterprises aligned with quality standards." },
  { icon: TestTube, title: "Medical Devices & Equipment", description: "Promoting MSMEs engaged in manufacturing medical devices, diagnostic equipment, surgical instruments, and healthcare consumables." },
  { icon: Activity, title: "Healthcare Services", description: "Facilitating small clinics, diagnostic centers, pathology labs, physiotherapy centers, and home healthcare service providers." },
  { icon: ShieldPlus, title: "Ayurveda & Traditional Medicine", description: "Supporting manufacturers of Ayurvedic, Unani, and herbal medicines, wellness products, and traditional healthcare solutions." }
];

const focusAreas = [
  "Generic Medicine Manufacturing", "Medical Device Production", "Diagnostic Laboratory Services",
  "Surgical Instruments Manufacturing", "Ayurvedic Medicine Production", "Healthcare IT Solutions",
  "Medical Equipment Trading", "Pharmaceutical Packaging", "Clinical Research Services",
  "Telemedicine Platforms", "Medical Consumables Supply", "Healthcare Training Services"
];

const challenges = [
  { challenge: "Regulatory Compliance & Licensing", solution: "Guidance on drug licensing, GMP certification, medical device registration, and compliance with regulatory authorities like CDSCO and FDA." },
  { challenge: "Quality Standards & Certifications", solution: "Support for achieving WHO-GMP, ISO 13485, CE marking, and other quality certifications required for domestic and export markets." },
  { challenge: "R&D and Innovation Support", solution: "Facilitating access to R&D grants, collaboration with research institutions, and technology transfer for product development." },
  { challenge: "Market Access & Distribution", solution: "Connecting manufacturers with hospitals, pharmacies, government procurement, and export opportunities through trade facilitation." }
];

export default function Healthcare() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Healthcare & Pharmaceuticals" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="border-l-4 border-[#b45309] bg-slate-50 px-5 py-4 border border-y-slate-300 border-r-slate-300 mb-8">
          <p className="text-sm leading-7 text-slate-800 text-justify">
            <strong className="text-orange-900">Background Overview:</strong> The healthcare and pharmaceutical sector offers significant growth opportunities for MSMEs in India. From generic medicine manufacturing to medical device production and healthcare services, small industries contribute to making quality healthcare accessible and affordable while supporting India's vision of becoming a global hub for pharmaceuticals and medical devices.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            
            {/* Image 1: Main Sector Banner */}
            <div className="border border-slate-300 bg-slate-50 p-2">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Medical laboratory and pharmaceutical manufacturing" 
                className="w-full h-72 object-cover border border-slate-300"
              />
              <div className="bg-[#b45309] border-t-4 border-amber-500 p-2 mt-2">
                <p className="text-xs text-white font-bold tracking-wider text-center uppercase">Healthcare Infrastructure Framework</p>
              </div>
            </div>

            {/* 1. Support Areas */}
            <div className="border border-slate-300">
              <div className="bg-slate-800 px-4 py-2.5 border-b-4 border-[#b45309]">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Sector Support Directives
                </h2>
              </div>
              <div className="bg-white grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {initiatives.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 p-5 hover:bg-orange-50/40">
                    <item.icon size={28} className="text-[#b45309]" />
                    <h3 className="text-sm font-bold text-slate-900 mt-2">{item.title}</h3>
                    <p className="text-xs leading-5 text-slate-700">{item.description}</p>
                  </div>
                ))}
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
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600" 
                  alt="Medical professional examining equipment" 
                  className="w-full h-full object-cover min-h-[200px] border border-slate-300"
                />
              </div>
              <div className="w-full sm:w-3/5">
                <div className="bg-amber-500 px-4 py-2.5 border-b border-amber-600">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-orange-950">
                    Government Schemes & Policy
                  </h2>
                </div>
                <div className="bg-white p-5">
                  <ul className="list-disc pl-4 space-y-3 text-sm text-slate-700 marker:text-[#b45309]">
                    <li>
                      <strong className="text-slate-900 block mb-0.5">Production Linked Incentive (PLI):</strong> Financial incentives for domestic manufacturing of bulk drugs, medical devices.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">PPDS Scheme:</strong> Support for setting up common facility centers and technology upgradation.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">Medical Device Parks Scheme:</strong> Infrastructure support for establishing manufacturing clusters.
                    </li>
                     <li>
                      <strong className="text-slate-900 block mb-0.5">National AYUSH Mission:</strong> Financial assistance for traditional medicine manufacturing units.
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
                  src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&q=80&w=400" 
                  alt="Healthcare professional with patient" 
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
                Healthcare Sector Support
              </h3>
              <p className="text-sm leading-6 text-slate-700 mb-4">
                FASII provides guidance on regulatory compliance, quality certifications, scheme access, and market linkages.
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