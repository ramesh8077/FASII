import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { fasiiEvents } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import hosur from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";

const photos = [conclave, connect, awareness, hosur];

export default function EventHighlights() {
  return (
    <section className="bg-white py-12 sm:py-16" aria-labelledby="fasii-events-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">FASII in action</p>
            <h2 id="fasii-events-title" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
              Recent Programmes &amp; Events
            </h2>
          </div>
          <Link to="/media/news" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
            All updates <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Event grid: mosaic layout with text below images */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fasiiEvents.map((event, index) => {
            const featured = index === 0;
            const wide = index === 3;
            return (
              <article
                key={event.id}
                className={`group flex flex-col border border-orange-900 bg-orange-950 shadow-sm transition-transform hover:-translate-y-1 ${
                  featured ? "sm:col-span-2 lg:row-span-2" : ""
                } ${wide ? "sm:col-span-2" : ""}`}
              >
                <div className="flex flex-grow flex-col">
                  <img
                    src={photos[index]}
                    alt={`${event.title} event`}
                    loading="lazy"
                    className={`w-full border-b-8 border-amber-500 object-cover ${
                      featured ? "lg:h-full" : wide ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  />
                  <div className="flex flex-grow flex-col p-4 sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">{event.category}</p>
                    <h3 className={`mt-1 font-bold leading-snug text-white ${featured ? "text-lg sm:text-xl" : "text-sm"}`}>
                      {event.title}
                    </h3>
                    <div className="mt-auto pt-3 border-t border-orange-900/50">
                      <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-orange-100/80">
                        <span className="inline-flex items-center gap-1.5"><CalendarDays size={13} aria-hidden="true" />{event.date}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin size={13} aria-hidden="true" />{event.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}