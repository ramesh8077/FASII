import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Database, Cloud } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Code, title: "Software Development", description: "Supporting custom application developers, and software startups." },
  { icon: Smartphone, title: "Mobile & Web Solutions", description: "Promoting MSMEs developing applications, e-commerce solutions." },
  { icon: Database, title: "Data Analytics & AI", description: "Facilitating startups working on AI, machine learning, and BI." }
];

const focusAreas = [
  "Custom Software", "Mobile App Dev", "Web Development", "IT Consulting", 
  "Cloud Solutions", "Cybersecurity", "Data Analytics", "AI/ML Development"
];

export default function Information_Technology() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Information Technology & Software" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12 border-b border-slate-300">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 border-l-8 border-[#b45309] pl-4">IT Sector Masterplan</h2>
        
        {/* Generated Image Integration */}
        <div className="mb-6 border-4 border-slate-200">
          <img src="/assets/it-sector-banner.jpg" alt="Information Technology" className="w-full h-64 object-cover" />
        </div>

        <p className="text-sm leading-6 text-slate-700 text-justify columns-1 md:columns-2 gap-8">
          The Information Technology sector is a key driver of India's economic growth and digital transformation. IT MSMEs, from software development firms to tech startups, play a vital role in innovation, employment generation, and positioning India as a global IT powerhouse. Under the Digital India initiative, FASII connects IT MSMEs with incubation centers, technology parks, export opportunities, and government IT procurement platforms.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-6">
          
          <div className="border-t-4 border-[#b45309] bg-slate-50 p-6 border border-slate-200">
            <h3 className="font-bold uppercase text-slate-900 mb-6 text-sm">Core Service Domains</h3>
            <div className="space-y-6">
              {initiatives.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-2 text-[#b45309]">
                    <item.icon size={20} />
                    <h4 className="font-bold text-sm">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t-4 border-amber-500 bg-white p-6 border border-slate-200">
            <h3 className="font-bold uppercase text-slate-900 mb-6 text-sm">Operational Vectors</h3>
            <ul className="list-decimal pl-4 text-sm text-slate-700 space-y-3 marker:font-bold marker:text-amber-600">
              {focusAreas.map((area, index) => (
                <li key={index} className="pl-2 border-b border-slate-100 pb-2 last:border-b-0">{area}</li>
              ))}
            </ul>
          </div>

          <div className="border-t-4 border-slate-800 bg-slate-800 text-white p-6 flex flex-col">
            <h3 className="font-bold uppercase text-amber-500 mb-6 text-sm">Policy & Frameworks</h3>
            <div className="space-y-5 flex-grow">
              <div>
                <h4 className="font-bold text-sm text-white">STPI Scheme</h4>
                <p className="text-xs text-slate-300 mt-1">Infrastructure support and clearance for exporters.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Startup India</h4>
                <p className="text-xs text-slate-300 mt-1">Funding support and regulatory ease for innovators.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Digital India</h4>
                <p className="text-xs text-slate-300 mt-1">Opportunities in e-governance infrastructure.</p>
              </div>
            </div>
            <Link to="/about/allied-organisations" className="mt-6 block text-center bg-amber-500 text-slate-900 text-sm font-bold py-3 uppercase tracking-wider hover:bg-amber-400">
              Seek Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}