import { Link } from "react-router-dom";
import { FileText, MapPin, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const quickLinks = [
  { label: "News & Events", to: "/media/news" },
  { label: "Photo Gallery", to: "/media/photos" },
  { label: "Video Gallery", to: "/media/videos" },
  { label: "Publications", to: "/knowledge/publications" },
];

const pressReleases = [
  {
    id: "PR-2026-10",
    date: "12 Oct 2026",
    title: "FASII submits memorandum on MSME Credit Framework to Ministry of Finance",
    location: "New Delhi",
    category: "Policy Framework"
  },
  {
    id: "PR-2026-09",
    date: "28 Sep 2026",
    title: "Successful conclusion of Vendor Development Programme in Tamil Nadu",
    location: "Tamil Nadu",
    category: "Event Conclusion"
  },
  {
    id: "PR-2026-08",
    date: "15 Aug 2026",
    title: "Launch of Nationwide Awareness Campaign for Rural Industries",
    location: "Pan-India",
    category: "Campaign Launch"
  }
];

export default function Press() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Press Releases" />

      <section className="mx-auto max-w-7xl px-5 mt-10 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_300px] gap-8 items-start">
        
        {/* Press Release List */}
        <div className="bg-white border border-slate-300 shadow-sm">
          <div className="bg-slate-800 p-4 border-b-4 border-amber-500">
            <h2 className="text-base font-bold text-white uppercase tracking-wider">Official Press Releases</h2>
          </div>
          
          <div className="divide-y divide-slate-200">
            {pressReleases.map((pr) => (
              <div key={pr.id} className="p-6 hover:bg-orange-50/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-orange-700 bg-orange-100 border border-orange-200 px-2.5 py-0.5 uppercase">{pr.date}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Ref: {pr.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-3 hover:text-orange-700 cursor-pointer">{pr.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                    <span className="flex items-center gap-1"><MapPin size={14} className="text-orange-600"/> {pr.location}</span>
                    <span className="text-slate-300">|</span>
                    <span className="uppercase text-slate-500 font-semibold">{pr.category}</span>
                  </div>
                </div>
                <button className="shrink-0 flex items-center gap-2 border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold uppercase text-slate-700 hover:bg-[#b45309] hover:text-white hover:border-[#b45309] transition-all shadow-sm">
                  <FileText size={14} /> Read PR
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Official Sidebar */}
        <aside className="space-y-6 sticky top-6">
          <div className="border border-slate-300 bg-white shadow-sm">
            <div className="bg-[#b45309] p-3 border-b-2 border-amber-400">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h2>
            </div>
            <ul className="divide-y divide-slate-100">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                  >
                    <ChevronRight size={16} className="text-amber-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-slate-800 bg-slate-800 text-white p-5 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-slate-700 pb-2 mb-3">Media Enquiries</h2>
            <p className="text-xs leading-5 text-slate-300 mb-4">
              Direct all media inquiries regarding FASII programmes to the public relations office.
            </p>
            <div className="space-y-2 text-sm bg-slate-900 p-3 border border-slate-700">
              <p className="font-bold text-white">Shri B. Karthikeyan</p>
              <p className="text-xs text-amber-400 uppercase">Southern Regional Chairman</p>
              <a href="mailto:fasiichairman@gmail.com" className="flex items-center gap-2 text-xs mt-2 hover:text-amber-300 break-all font-medium">
                <ExternalLink size={12}/> fasiichairman@gmail.com
              </a>
            </div>
          </div>
        </aside>

      </section>
    </main>
  );
}