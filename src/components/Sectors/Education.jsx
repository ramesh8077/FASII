import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, Laptop, Building2, ChevronRight, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: GraduationCap, title: "Skill Development & Training", description: "Supporting MSMEs engaged in vocational training, skill development centers, and industry-specific certification programs." },
  { icon: BookOpen, title: "Educational Content & E-Learning", description: "Promoting small enterprises developing educational content, e-learning platforms, digital learning tools, and ed-tech solutions." },
  { icon: Laptop, title: "Educational Equipment & Technology", description: "Facilitating MSMEs manufacturing educational equipment, laboratory instruments, teaching aids, and classroom technology." },
  { icon: Building2, title: "Private Training Institutions", description: "Supporting small-scale coaching centers, professional training institutes, and specialized education service providers." }
];

const focusAreas = [
  "Vocational Training Centers", "E-Learning Platform Development", "Educational Content Creation", 
  "Skill Certification Programs", "Educational Equipment Manufacturing", "Language Training Services",
  "Professional Course Institutes", "Educational Software Development", "School Supplies & Stationery",
  "Laboratory Equipment Supply", "Digital Learning Tools", "Training & Placement Services"
];

const challenges = [
  { challenge: "Quality Standards & Accreditation", solution: "Guidance on NSDC affiliation, ISO certification, and compliance with educational regulatory frameworks." },
  { challenge: "Technology Adoption & Digitalization", solution: "Support for adopting digital platforms, online learning management systems, and technology integration." },
  { challenge: "Skilled Faculty & Trainers", solution: "Facilitating partnerships with industry experts and connecting education MSMEs with qualified trainers." },
  { challenge: "Market Competition & Branding", solution: "Assistance in marketing strategies, brand building, and differentiation in the competitive education services market." }
];

export default function Education() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Education & Skill Development" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="border-l-4 border-[#b45309] bg-slate-50 px-5 py-4 border border-y-slate-300 border-r-slate-300 mb-8">
          <p className="text-sm leading-7 text-slate-800 text-justify">
            <strong className="text-orange-900">Background Overview:</strong> The education and skill development sector presents significant opportunities for MSMEs in India. From vocational training centers to ed-tech startups, small industries play a vital role in skill building, employment generation, and supporting India's human capital development goals under programs like Skill India and Digital India.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            
            {/* Image 1: Main Sector Banner */}
            <div className="border border-slate-300 bg-slate-50 p-2">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
                alt="Students in a modern vocational training classroom" 
                className="w-full h-72 object-cover border border-slate-300"
              />
              <div className="bg-[#b45309] border-t-4 border-amber-500 p-2 mt-2">
                <p className="text-xs text-white font-bold tracking-wider text-center uppercase">National Skill Development Directives</p>
              </div>
            </div>

            {/* 1. Support Areas */}
            <div className="border border-slate-300">
              <div className="bg-slate-800 px-4 py-2.5 border-b-4 border-[#b45309]">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  FASII Support for Education Sector MSMEs
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
                  Challenges & Policy Directives
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
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                  alt="Corporate training and e-learning integration" 
                  className="w-full h-full object-cover min-h-[200px] border border-slate-300"
                />
              </div>
              <div className="w-full sm:w-3/5">
                <div className="bg-amber-500 px-4 py-2.5 border-b border-amber-600">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-orange-950">
                    Government Schemes & Initiatives
                  </h2>
                </div>
                <div className="bg-white p-5">
                  <ul className="list-disc pl-4 space-y-3 text-sm text-slate-700 marker:text-[#b45309]">
                    <li>
                      <strong className="text-slate-900 block mb-0.5">Pradhan Mantri Kaushal Vikas Yojana (PMKVY):</strong> Skill training and certification scheme with financial support for training partners.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">National Apprenticeship Promotion Scheme (NAPS):</strong> Financial incentives for establishments engaging apprentices.
                    </li>
                    <li>
                      <strong className="text-slate-900 block mb-0.5">PM eVIDYA Programme:</strong> Digital education initiatives and e-learning infrastructure development support.
                    </li>
                     <li>
                      <strong className="text-slate-900 block mb-0.5">Startup India Seed Fund Scheme:</strong> Financial assistance for ed-tech and skill-tech startups in early stage.
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" 
                  alt="Digital learning technology setup" 
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
                Education Sector Support
              </h3>
              <p className="text-sm leading-6 text-slate-700 mb-4">
                FASII assists education and skill development MSMEs with regulatory compliance, scheme access, and industry partnerships.
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