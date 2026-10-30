import { Link } from "react-router-dom";
import { PlayCircle, Calendar, Clock } from "lucide-react";
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
    <main className="bg-white text-slate-900">
      <PageHero title="Video Gallery" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="max-w-3xl text-lg leading-7 text-slate-600">
            Watch highlights from FASII's events, programmes, conclaves, and industry addresses across India.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-video bg-slate-200">
                <img
                  src={video.thumbnail}
                  alt={video.thumbnailAlt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/30 transition-colors group-hover:bg-slate-950/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-white opacity-90 transition-opacity group-hover:opacity-100">
                    <PlayCircle size={32} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-1 text-xs font-semibold text-white">
                  <Clock size={12} className="mr-1 inline" />
                  {video.duration}
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  {video.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {video.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={14} />
                  {video.date}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-[#fffaf5] p-8 text-center">
          <p className="text-slate-700">
            Video content from FASII events is being compiled and will be available soon. Check back for updates or view event photos in the meantime.
          </p>
          <Link
            to="/media/photos"
            className="mt-5 inline-flex rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
          >
            View Photo Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
