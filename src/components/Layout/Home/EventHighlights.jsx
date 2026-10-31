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
              Recent programmes &amp; events
            </h2>
          </div>
          <Link to="/media/news" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
            All updates <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Photo mosaic: first event is featured */}
        <div className="grid gap-3 sm:grid-cols-2 lg:auto-rows-[230px] lg:grid-cols-4">
          {fasiiEvents.map((event, index) => {
            const featured = index === 0;
            const wide = index === 3;
            return (
              <article
                key={event.id}
                className={`group relative isolate overflow-hidden bg-orange-950 ${
                  featured ? "sm:col-span-2 lg:row-span-2" : ""
                } ${wide ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={photos[index]}
                  alt={`${event.title} event`}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none lg:aspect-auto"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-orange-950/95 via-orange-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 border-b-4 border-amber-400 p-4 sm:p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">{event.category}</p>
                  <h3 className={`mt-1 font-bold leading-snug text-white ${featured ? "text-xl sm:text-2xl" : "text-base"}`}>
                    {event.title}
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-orange-100">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} aria-hidden="true" />{event.date}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{event.location}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}