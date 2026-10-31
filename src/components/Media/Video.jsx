import { Link } from "react-router-dom";
import { Play, Calendar, Clock, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

import sidbiConclave from "../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import msmeConnect from "../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import msmeAwareness from "../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import hosurSchemes from "../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";

const videos = [
  {
    id: 1,
    title: "MSME Connect'26 Highlights",
    description: "Highlights from the Vendor Development Programme cum Industrial Exhibition held at Virudhunagar, Tamil Nadu",
    date: "27-28 September 2026",
    duration: "5:24",
    thumbnail: msmeConnect,
    thumbnailAlt: "MSME Connect'26 Vendor Development Programme cum Industrial Exhibition at Virudhunagar, Tamil Nadu",
    category: "Events"
  },
  {
    id: 2,
    title: "National Conclave with SIDBI",
    description: "Coverage of the National Conclave for Industry Associations organized by SIDBI at Delhi",
    date: "12 October 2026",
    duration: "8:15",
    thumbnail: sidbiConclave,
    thumbnailAlt: "FASII office bearers at the National Conclave for Industry Associations organised by SIDBI in New Delhi",
    category: "Conclaves"
  },
  {
    id: 3,
    title: "MSME Awareness Programme - Chennai",
    description: "Key moments from the MSME Awareness Programme conducted at Avadi, Chennai in partnership with Ministry of Defence",
    date: "29 September 2026",
    duration: "6:42",
    thumbnail: msmeAwareness,
    thumbnailAlt: "MSME Awareness Programme and FASII Annual General Meeting at Avadi, Chennai",
    category: "Awareness"
  },
  {
    id: 4,
    title: "Industry Address: Long-Term Sustainability",
    description: "FASII Southern Regional Chairman addresses Hosur Industrial Association on MSME schemes",
    date: "7 September 2026",
    duration: "12:30",
    thumbnail: hosurSchemes,
    thumbnailAlt: "FASII Southern Regional Chairman addressing Hosur Industrial Association on MSME schemes",
    category: "Addresses"
  }
];

export default function Video() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Video Gallery" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-10 border-l-4 border-amber-500 pl-4 bg-white p-4 border-y border-r border-slate-200">
          <p className="text-sm font-medium leading-6 text-slate-700">
            Watch highlights from FASII's events, programmes, conclaves, and industry addresses across India.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.id} className="border border-slate-300 bg-white flex flex-col group">
              <div className="relative w-full aspect-video bg-slate-900 border-b-4 border-[#b45309] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#b45309] text-white border-2 border-white/50 shadow-lg">
                    <Play size={20} className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-900 border border-slate-700 px-2 py-1 text-[10px] font-bold text-white tracking-widest flex items-center gap-1">
                  <Clock size={10} /> {video.duration}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-2">
                  {video.category}
                </p>
                <h3 className="text-base font-bold leading-tight text-slate-900 mb-3">
                  {video.title}
                </h3>
                <p className="text-xs leading-5 text-slate-600 mb-4 flex-grow">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-slate-200 pt-3 mt-auto">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase">
                    <Calendar size={12} /> {video.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-2 border-slate-300 bg-white p-8 text-center shadow-sm">
          <h3 className="text-sm font-bold uppercase text-slate-900 tracking-widest mb-2">Digital Archive Notice</h3>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-6 mb-6">
            Video content from FASII events is being compiled and will be available soon. Check back for updates or view event photos in the meantime.
          </p>
          <Link
            to="/media/photos"
            className="inline-flex items-center gap-2 border border-[#b45309] bg-[#b45309] px-6 py-2.5 text-xs font-bold uppercase text-white hover:bg-slate-900 hover:border-slate-900 transition-colors"
          >
            View Photo Gallery <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}