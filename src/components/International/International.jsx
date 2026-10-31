import { Link } from "react-router-dom";
import { Globe, Users, Handshake, Award, ArrowRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const internationalInitiatives = [
  {
    icon: Handshake,
    title: "Global Partnerships",
    description: "FASII explores partnerships with international small business federations and industry bodies to share best practices and promote cross-border collaboration."
  },
  {
    icon: Users,
    title: "Knowledge Exchange",
    description: "Facilitating knowledge exchange programmes with international counterparts on MSME development, technology adoption, and market access strategies."
  },
  {
    icon: Globe,
    title: "Export Promotion",
    description: "Supporting member associations in accessing international markets through trade fairs, buyer-seller meets, and export promotion initiatives."
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Assisting small industries in achieving international quality certifications and meeting global compliance requirements for market access."
  }
];

const potentialPartners = [
  {
    region: "Asia-Pacific",
    focus: "Regional trade integration and MSME cooperation",
    opportunities: "ASEAN small business networks, bilateral chambers of commerce"
  },
  {
    region: "Europe",
    focus: "Technology transfer and quality standards",
    opportunities: "EU small business federations, quality certification bodies"
  },
  {
    region: "Africa",
    focus: "South-South cooperation and manufacturing partnerships",
    opportunities: "Pan-African MSME networks, industrial cooperation forums"
  },
  {
    region: "Americas",
    focus: "Market access and innovation exchange",
    opportunities: "OAS small business initiatives, trade promotion organizations"
  }
];

export default function International() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="International Engagement" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        
        {/* Introduction with Hero Image */}
        <div className="mb-12 flex flex-col lg:flex-row gap-8 items-start border border-orange-200 bg-slate-50 p-2 shadow-sm">
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
              alt="Global trade and container shipping" 
              className="w-full h-64 object-cover border border-slate-300"
            />
          </div>
          <div className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col justify-center h-full">
            <h2 className="text-xl font-bold text-orange-950 uppercase tracking-widest mb-4 border-b-2 border-amber-500 pb-2 inline-block">Strategic Global Vision</h2>
            <p className="text-base leading-7 text-slate-700 text-justify">
              FASII recognizes the importance of international engagement for India's small industries sector. Through collaboration with global partners, we aim to facilitate knowledge exchange, promote best practices, and create opportunities for Indian MSMEs to access international markets and technologies.
            </p>
          </div>
        </div>

        {/* International Initiatives (Strict Grid, No floating cards) */}
        <div className="mb-12 border border-slate-300">
          <div className="bg-[#b45309] px-6 py-4">
            <h2 className="text-base font-bold text-white uppercase tracking-wider">International Cooperation Areas</h2>
          </div>
          <div className="grid gap-0 sm:grid-cols-2 bg-white divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {internationalInitiatives.map((initiative, index) => (
              <div key={index} className={`flex items-start gap-5 p-6 hover:bg-orange-50/50 ${index > 1 ? 'border-t border-slate-200' : ''}`}>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-amber-300 bg-orange-100 text-[#b45309]">
                  <initiative.icon size={28} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{initiative.title}</h3>
                  <p className="text-sm leading-6 text-slate-700">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Potential Partnership Regions (Split Layout with Image) */}
        <div className="mb-12 border border-slate-300 flex flex-col lg:flex-row bg-white shadow-sm">
           <div className="lg:w-2/5 w-full bg-slate-100 p-2 border-b lg:border-b-0 lg:border-r border-slate-300">
             <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
                alt="International business meeting and partnerships" 
                className="w-full h-full min-h-[300px] object-cover border border-slate-300 grayscale-[20%]"
             />
           </div>
           <div className="lg:w-3/5 w-full">
              <div className="bg-amber-500 px-6 py-4 border-b border-amber-600">
                <h2 className="text-base font-bold text-orange-950 uppercase tracking-wider">Regional Partnership Opportunities</h2>
              </div>
              <div className="p-0 divide-y divide-slate-200">
                {potentialPartners.map((partner, index) => (
                  <div key={index} className="p-5 bg-white hover:bg-[#fff8ec]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                      <div className="sm:w-1/3">
                        <h3 className="text-base font-bold text-slate-900 uppercase">{partner.region}</h3>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-orange-700 border border-orange-200 bg-orange-50 px-2 py-0.5 inline-block">{partner.focus}</p>
                      </div>
                      <div className="sm:w-2/3 mt-2 sm:mt-0">
                        <p className="text-sm text-slate-700 leading-6 border-l-2 border-slate-200 pl-3">
                          <span className="font-semibold text-slate-900 block mb-1">Opportunities:</span> 
                          {partner.opportunities}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mb-12 border border-slate-300 bg-slate-50">
          <div className="bg-slate-800 px-6 py-4 border-b-4 border-amber-500">
            <h2 className="text-base font-bold text-white uppercase tracking-wider">Focus Areas for International Engagement</h2>
          </div>
          <div className="p-6 grid gap-6 sm:grid-cols-2 bg-white">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="font-bold text-[#b45309] text-base flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span> Market Access
              </h3>
              <p className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 ml-1 leading-6">
                Facilitating access to international markets for Indian small industries through trade promotion and market linkages.
              </p>
            </div>
            <div className="border-b border-slate-200 pb-4">
              <h3 className="font-bold text-[#b45309] text-base flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span> Technology Transfer
              </h3>
              <p className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 ml-1 leading-6">
                Promoting technology collaboration and knowledge exchange with international partners for MSME modernization.
              </p>
            </div>
            <div className="border-b sm:border-b-0 border-slate-200 pb-4 sm:pb-0">
              <h3 className="font-bold text-[#b45309] text-base flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span> Capacity Building
              </h3>
              <p className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 ml-1 leading-6">
                Organizing international training programmes and exposure visits for skill development and best practice adoption.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-[#b45309] text-base flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-amber-500"></span> Policy Learning
              </h3>
              <p className="text-sm text-slate-700 pl-4 border-l-2 border-slate-200 ml-1 leading-6">
                Studying successful international MSME policies and adapting relevant practices for the Indian context.
              </p>
            </div>
          </div>
        </div>

        {/* Make in India Alignment (Text alongside image) */}
        <div className="mb-12 border border-slate-300 flex flex-col md:flex-row bg-[#fff8ec]">
          <div className="p-6 md:p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-amber-200">
            <h2 className="mb-6 text-xl font-bold text-orange-950 uppercase border-b-2 border-[#b45309] pb-2 inline-block">Supporting Make in India & Atmanirbhar Bharat</h2>
            <p className="text-slate-800 text-sm mb-4 font-semibold">
              FASII's international engagement strategy aligns with national initiatives, focusing on:
            </p>
            <ul className="space-y-4 text-sm text-slate-700 pl-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 border border-[#b45309] bg-amber-400" />
                <span className="leading-snug">Attracting foreign investment in MSME sector through international partnership facilitation.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 border border-[#b45309] bg-amber-400" />
                <span className="leading-snug">Promoting Indian MSMEs as reliable suppliers in global value chains.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 border border-[#b45309] bg-amber-400" />
                <span className="leading-snug">Building competitiveness through international quality standards and certifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 border border-[#b45309] bg-amber-400" />
                <span className="leading-snug">Facilitating technology partnerships that enhance domestic manufacturing capabilities.</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 p-2 bg-slate-50">
             {/* REPLACED THE BROKEN IMAGE WITH A 100% WORKING LINK */}
             <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600" 
                alt="Global export and cargo logistics" 
                className="w-full h-full min-h-[250px] object-cover border border-slate-300"
             />
          </div>
        </div>

        {/* Contact for International Collaboration */}
        <div className="text-center border-4 border-[#b45309] bg-white p-8 sm:p-12 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 uppercase mb-4">Interested in International Collaboration?</h3>
          <p className="mt-3 text-sm text-slate-700 max-w-2xl mx-auto leading-7">
            FASII welcomes proposals for international partnerships, exchange programmes, and collaborative initiatives that benefit India's small industries sector.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-3 bg-[#b45309] px-8 py-3 text-sm font-bold uppercase text-white hover:bg-slate-900 transition-colors">
              Contact FASII Leadership
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}