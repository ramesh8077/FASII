import { Link } from "react-router-dom";
import { Building, Hammer, Truck, Construction, HardHat, Wrench, ChevronRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Construction,
    title: "Construction Materials & Supplies",
    description: "Supporting MSMEs manufacturing cement products, steel fabrication, building materials, pre-cast components, and construction consumables."
  },
  {
    icon: Wrench,
    title: "Civil Engineering Services",
    description: "Promoting small contractors, civil engineering consultancies, project management firms, and infrastructure execution services."
  },
  {
    icon: Truck,
    title: "Construction Equipment & Machinery",
    description: "Facilitating manufacturers and suppliers of construction equipment, tools, material handling systems, and rental services."
  },
  {
    icon: HardHat,
    title: "Infrastructure Technology Solutions",
    description: "Supporting firms providing BIM services, construction tech, project monitoring software, and infrastructure digitalization solutions."
  }
];

const focusAreas = [
  "Building Materials Manufacturing",
  "Steel Fabrication Services",
  "Pre-Cast Concrete Components",
  "Civil Contracting Services",
  "Construction Equipment Supply",
  "Real Estate Development",
  "Project Management Services",
  "Infrastructure Consulting",
  "Road Construction Materials",
  "Water Supply & Sanitation",
  "Electrical & Plumbing Services",
  "Green Building Solutions"
];

const challenges = [
  {
    challenge: "Working Capital & Project Finance",
    solution: "Facilitating access to construction finance, contractor loans, equipment financing, and mobilization advance support through banking channels."
  },
  {
    challenge: "Contractor Classification & Registration",
    solution: "Guidance on contractor registration, NSIC performance and credit rating, and empanelment with government departments and PSUs."
  },
  {
    challenge: "Quality Standards & Compliance",
    solution: "Support for BIS certifications, quality testing, compliance with construction codes, and adoption of sustainable building practices."
  },
  {
    challenge: "Skilled Labor & Safety",
    solution: "Promoting skill development programs, safety training, and compliance with labor laws and construction site safety regulations."
  }
];

export default function Infrastructure() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Infrastructure & Construction" />

      {/* Intro & Main Wide Image */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 border-b border-slate-200">
        <div className="mb-10 text-center">
          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-700">
            Infrastructure development is critical to India's economic growth, and MSMEs play a vital role as contractors, material suppliers, and service providers. From road construction to building materials manufacturing, small industries contribute significantly to India's infrastructure expansion under initiatives like PM Gati Shakti and National Infrastructure Pipeline.
          </p>
        </div>
        
        <div className="mx-auto max-w-6xl border-4 border-slate-200 p-2 bg-slate-50">
           {/* IMAGE 1: 100% Working Live Image */}
           <img 
              src="https://loremflickr.com/1200/400/construction,bridge/all" 
              alt="Massive highway and bridge construction site" 
              className="w-full h-80 md:h-[400px] object-cover"
           />
        </div>
      </section>

      {/* Support Initiatives Grid */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <h2 className="mb-8 text-2xl font-bold text-orange-950 uppercase tracking-wider text-center">
            FASII Support for Infrastructure Sector MSMEs
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {initiatives.map((item, index) => (
              <div key={index} className="flex flex-col rounded-none border border-slate-300 bg-white p-6 transition-all hover:bg-orange-50 border-t-4 border-t-amber-500">
                <div className="mb-4 flex h-14 w-14 items-center justify-center bg-[#b45309] text-white">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Left Column: Challenges & Solutions */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 border-l-8 border-[#b45309] pl-4 uppercase">
              Challenges & FASII Solutions
            </h2>
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div key={index} className="border-l-2 border-[#b45309] bg-slate-50 p-6">
                  <h3 className="font-bold text-lg text-slate-900">{item.challenge}</h3>
                  <p className="mt-2 text-sm text-slate-700 leading-6">
                    <span className="font-bold text-white bg-amber-600 px-2 py-1 text-xs uppercase mr-2">FASII Solution</span> 
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>

            {/* Schemes Block */}
            <div className="mt-10 border border-slate-300">
              <div className="bg-[#b45309] p-4 text-white">
                <h2 className="text-lg font-bold uppercase tracking-wider">Government Schemes for Infrastructure MSMEs</h2>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-4 text-sm text-slate-700">
                  <li className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <ChevronRight className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <p><strong className="text-slate-900">PM Gati Shakti:</strong> Integrated infrastructure development creating opportunities for material suppliers and contractors.</p>
                  </li>
                  <li className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <ChevronRight className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <p><strong className="text-slate-900">PMAY - Housing for All:</strong> Opportunities in affordable housing construction, building materials, and technology.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="text-amber-500 shrink-0 mt-0.5" size={20} />
                    <p><strong className="text-slate-900">Smart Cities Mission:</strong> Urban infrastructure projects creating demand for construction services.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Imagery */}
          <div className="space-y-8">
            <div className="border border-slate-300 p-2 bg-slate-50">
               {/* IMAGE 2: 100% Working Live Image */}
               <img 
                  src="https://loremflickr.com/600/400/industry,crane/all" 
                  alt="Industrial cranes and construction management" 
                  className="w-full h-64 object-cover"
                />
            </div>

            <div className="bg-[#fff8ec] border border-amber-200 p-6">
              <h2 className="mb-4 text-lg font-bold text-orange-950 uppercase border-b-2 border-amber-300 pb-2">
                Key Focus Areas
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {focusAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 border border-amber-100 shadow-sm">
                    <div className="h-2 w-2 shrink-0 bg-amber-500" />
                    <span className="text-sm font-medium text-slate-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#b45309] p-6 text-center text-white">
              <h3 className="text-lg font-bold uppercase tracking-wider">Infrastructure Support</h3>
              <p className="mt-3 text-sm text-orange-100 mb-6">
                FASII assists infrastructure MSMEs with contractor registration, NSIC rating, project finance facilitation, and access to government opportunities.
              </p>
              <Link to="/about/allied-organisations" className="inline-block bg-white text-[#b45309] px-6 py-3 font-bold uppercase hover:bg-amber-100 transition-colors">
                Connect with Member Associations
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}