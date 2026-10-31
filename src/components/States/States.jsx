import { Link } from "react-router-dom";
import { MapPin, Users, Building2, Mail, ExternalLink, ChevronRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const statePresence = [
  {
    region: "Northern States",
    states: ["Uttar Pradesh", "Delhi NCR", "Punjab", "Haryana", "Rajasthan", "Himachal Pradesh", "Uttarakhand"],
    chairman: "Shri Himanshu Tyagi",
    contact: "Organicbasket09@gmail.com",
    mapImage: "src/assets/Images/Maps/north.jpg", 
    associations: [
      "Association for Helping Hand, Ghaziabad",
      "Udyog Vyapar Mandal, Ghaziabad",
      "Organic Basket Enterprises, Ghaziabad"
    ]
  },
  {
    region: "Southern States",
    states: ["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry"],
    chairman: "Shri B. Karthikeyan",
    contact: "fasiichairman@gmail.com",
    mapImage: "src/assets/Images/Maps/south.jpg",
    associations: [
      "Indian Industries and Rural Development Foundation, Chennai",
      "Sourashtra Chamber of Commerce, Madurai",
      "Machenahalli Industrialists Association, Karnataka"
    ]
  },
  {
    region: "Eastern States",
    states: ["West Bengal", "Odisha", "Bihar", "Jharkhand", "Northeast States", "Andaman & Nicobar"],
    chairman: "Shri Chiranjib Ghosh",
    contact: "chiranjib36@gmail.com",
    mapImage: "src/assets/Images/Maps/east.jpg",
    associations: [
      "Khasmohal Balichak Polley Unnayan Samity, Howrah",
      "Tiny Enterprises' Association, Kolkata",
      "West Bengal Industrial Entrepreneurs Association, Kolkata",
      "North 24 Parganas Chamber of Commerce & Industry, Kolkata"
    ]
  },
  {
    region: "Western States",
    states: ["Maharashtra", "Gujarat", "Goa", "Madhya Pradesh", "Chhattisgarh", "Dadra & Nagar Haveli"],
    chairman: "Shri Devendra Wasundeorao Sherekar",
    contact: "devenwarud@rediffmail.com",
    mapImage: "src/assets/Images/Maps/west.jpg",
    associations: [
      "Soni Information & Education Society, Amravati"
    ]
  }
];

const stateInitiatives = [
  {
    title: "State-Level Industry Association Networks",
    description: "FASII works through member associations across states to represent and support small industries at the state level."
  },
  {
    title: "Regional Policy Advocacy",
    description: "Coordinating with state governments on MSME-friendly policies, incentives, and regulatory frameworks specific to each state."
  },
  {
    title: "State Industrial Clusters",
    description: "Supporting development and growth of state-specific industrial clusters and sector-focused associations."
  },
  {
    title: "Inter-State Collaboration",
    description: "Facilitating partnerships and knowledge exchange between industry associations across different states."
  }
];

export default function States() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="State-wise Presence" />

      {/* Intro Header Section with India Map context image */}
      <section className="bg-white border-b border-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-black uppercase text-[#b45309] mb-4 tracking-wide border-l-8 border-amber-500 pl-4">
              Pan-India Integration
            </h2>
            <p className="text-base leading-8 text-slate-700 text-justify">
              FASII's pan-India presence is organized through four regional structures covering all states and union territories. Our member associations and regional chairmen ensure effective representation and support for small industries across the country, aligning local state policies with national development frameworks.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-2 bg-slate-100 border border-slate-300">
            {/* Image 1: National/India Context */}
            <img 
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" 
              alt="India Gate New Delhi National Coordination" 
              className="w-full h-48 object-cover border border-slate-300 grayscale-[30%]"
            />
          </div>
        </div>
      </section>

      {/* Regional Directory Layout */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="mb-8 flex items-center justify-between border-b-2 border-slate-300 pb-2">
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
            Regional Coverage Directory
          </h2>
          <MapPin size={24} className="text-amber-600 hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {statePresence.map((region, index) => (
            <div key={index} className="border border-slate-300 bg-white shadow-sm flex flex-col overflow-hidden">
              <div className="bg-[#b45309] p-4 flex justify-between items-center border-b-4 border-amber-500">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">{region.region}</h3>
                <span className="text-xs font-bold bg-white text-[#b45309] px-2 py-1 uppercase">{region.states.length} States/UTs</span>
              </div>
              
              <div className="flex-grow flex flex-col">
                {/* Fixed Map Image: Removed scale and object-top, using standard full-width fitting */}
                <div className="w-full h-64 bg-slate-100 border-b border-slate-200">
                  <img 
                    src={region.mapImage} 
                    alt={`${region.region} Map`} 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-6 flex flex-col gap-6">
                  {/* States List */}
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-2">
                      <MapPin size={14} className="text-orange-600" /> States & Union Territories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {region.states.map((state, idx) => (
                        <span key={idx} className="bg-slate-100 border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Member Associations */}
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-2 flex items-center gap-2">
                      <Building2 size={14} className="text-orange-600" /> Member Associations
                    </p>
                    <ul className="space-y-2">
                      {region.associations.map((association, idx) => (
                        <li key={idx} className="text-sm text-slate-700 leading-snug pl-3 border-l-2 border-amber-300">
                          {association}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto">
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-500">Regional Chairman</p>
                  <p className="text-sm font-bold text-slate-900">{region.chairman}</p>
                </div>
                <a
                  href={`mailto:${region.contact}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase bg-white border border-slate-300 px-3 py-2 text-orange-700 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                >
                  <Mail size={14} /> Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives & Coordination */}
      <section className="bg-white border-t border-slate-300">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_350px] gap-10">
          
          <div className="space-y-12">
            
            {/* Initiatives Table-like List */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 uppercase tracking-widest border-b-2 border-orange-600 pb-2 mb-6">
                State-Level Interventions
              </h2>
              <div className="border border-slate-300 divide-y divide-slate-200">
                {stateInitiatives.map((initiative, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center p-5 hover:bg-slate-50">
                    <div className="sm:w-1/3 mb-2 sm:mb-0">
                      <h3 className="text-sm font-bold text-slate-900 pr-4">{initiative.title}</h3>
                    </div>
                    <div className="sm:w-2/3 sm:border-l border-slate-200 sm:pl-5">
                      <p className="text-sm leading-6 text-slate-700">{initiative.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordination Framework (Formal Block) */}
            <div className="bg-[#fff8ec] border border-amber-200 p-6 sm:p-8">
              <h2 className="mb-4 text-lg font-bold text-orange-950 uppercase border-b border-amber-300 pb-2">Regional Coordination Framework</h2>
              <p className="mb-6 text-sm text-slate-700">
                FASII's four regional chairmen coordinate activities across their respective states, ensuring localized support within a national framework:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-amber-100">
                  <h3 className="text-sm font-bold text-[#b45309] uppercase mb-1">North Region</h3>
                  <p className="text-xs text-slate-600">Covering major industrial hubs in UP, Delhi NCR, Punjab, and Rajasthan.</p>
                </div>
                <div className="bg-white p-4 border border-amber-100">
                  <h3 className="text-sm font-bold text-[#b45309] uppercase mb-1">South Region</h3>
                  <p className="text-xs text-slate-600">Coordinating activities across Tamil Nadu, Karnataka, Kerala, and Telangana.</p>
                </div>
                <div className="bg-white p-4 border border-amber-100">
                  <h3 className="text-sm font-bold text-[#b45309] uppercase mb-1">East Region</h3>
                  <p className="text-xs text-slate-600">Managing presence in West Bengal, Odisha, Bihar, and Northeast states.</p>
                </div>
                <div className="bg-white p-4 border border-amber-100">
                  <h3 className="text-sm font-bold text-[#b45309] uppercase mb-1">West Region</h3>
                  <p className="text-xs text-slate-600">Overseeing operations in Maharashtra, Gujarat, Goa, and Madhya Pradesh.</p>
                </div>
              </div>
            </div>

          </div>

          <aside className="space-y-8">
            {/* Image 2: Regional Industrial Meetings */}
            <div className="border border-slate-300 p-2 bg-slate-50">
               <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600" 
                  alt="Business meeting coordination" 
                  className="w-full h-56 object-cover border border-slate-300"
               />
               <div className="bg-slate-800 p-3 mt-2">
                 <p className="text-xs font-bold uppercase text-white tracking-widest text-center">Inter-State Policy Dialogues</p>
               </div>
            </div>

            {/* Image 3: Local Industrial Clusters */}
            <div className="border border-slate-300 p-2 bg-slate-50">
               <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600" 
                  alt="Local industrial clusters and beaches of India" 
                  className="w-full h-40 object-cover border border-slate-300 grayscale-[40%]"
               />
               <div className="bg-slate-200 p-2 mt-2">
                 <p className="text-[10px] font-bold uppercase text-slate-600 text-center">Coastal & Regional Clusters</p>
               </div>
            </div>

            {/* CTA Box */}
            <div className="border-4 border-[#b45309] p-6 text-center">
              <Users size={32} className="text-[#b45309] mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 uppercase">State Association Membership</h3>
              <p className="mt-3 text-xs text-slate-600 mb-6 leading-5">
                Is your state-level industry association interested in joining FASII's network? Connect with your regional chairman to explore membership.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/about/office-bearers" className="bg-[#b45309] text-white text-xs font-bold uppercase py-3 hover:bg-slate-900 transition-colors">
                  View Regional Contacts
                </Link>
                <Link to="/about/allied-organisations" className="bg-white text-slate-700 border border-slate-300 text-xs font-bold uppercase py-3 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  All Member Associations <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </aside>
          
        </div>
      </section>
    </main>
  );
}