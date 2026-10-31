import { CalendarDays, MapPin, ChevronRight, Megaphone } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

// Using reliable live images since you don't have local ones
const liveNewsEvents = [
  {
    id: 1,
    title: "National Conclave for Industry Associations",
    category: "Conclave",
    date: "12 Oct 2026",
    location: "New Delhi",
    description: "FASII office bearers attended the National Conclave organised by SIDBI to discuss MSME credit frameworks and policy implementations.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "MSME Connect'26 Vendor Development Programme",
    category: "Exhibition",
    date: "27 Sep 2026",
    location: "Tamil Nadu",
    description: "A two-day industrial exhibition and vendor development programme to bridge the gap between large PSUs and local MSME manufacturers.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "MSME Awareness Programme",
    category: "Awareness",
    date: "15 Aug 2026",
    location: "Chennai",
    description: "Annual General Meeting and awareness drive focusing on the new schemes launched by the Ministry of MSME for rural enterprises.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Latest_News() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="News & Events" />

      <section className="mx-auto max-w-7xl px-5 mt-10 sm:px-8 lg:px-12">
        
        {/* Official Header */}
        <div className="bg-white border border-slate-300 shadow-sm mb-8 flex items-center justify-between p-4 border-l-8 border-l-amber-500">
          <div className="flex items-center gap-3">
            <Megaphone size={24} className="text-orange-700" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-slate-900">Latest Announcements</h2>
          </div>
          <span className="text-xs font-bold bg-slate-100 px-3 py-1 uppercase border border-slate-200">Media Wing, FASII</span>
        </div>

        {/* List Layout (No Cards) */}
        <div className="border border-slate-300 bg-white">
          <div className="divide-y divide-slate-200">
            {liveNewsEvents.map((event) => (
              <article key={event.id} className="flex flex-col sm:flex-row items-stretch hover:bg-orange-50 transition-colors">
                
                {/* Date Block */}
                <div className="bg-slate-100 sm:w-40 flex flex-col justify-center items-center p-4 border-r border-slate-200 border-b-4 sm:border-b-0 sm:border-r-4 border-amber-500 shrink-0">
                  <CalendarDays size={24} className="text-orange-700 mb-2" />
                  <span className="text-sm font-bold text-slate-900 uppercase text-center">{event.date}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-orange-700 px-2 py-1">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                  <p className="text-sm text-slate-700 leading-6 text-justify mb-4 max-w-3xl">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                    <MapPin size={14} className="text-amber-600" /> {event.location}
                  </div>
                </div>

                {/* Thumbnail Image */}
                <div className="sm:w-64 shrink-0 p-4 flex items-center justify-center bg-slate-50 border-l border-slate-200 hidden md:flex">
                  <div className="w-full h-32 border border-slate-300 p-1 bg-white">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}