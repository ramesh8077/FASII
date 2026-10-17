import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { fasiiEvents } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-12 at 9.35.21 AM.jpeg";
import connect from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.31 PM.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.03 PM.jpeg";
import hosur from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.54 PM.jpeg";

const photos = [conclave, connect, awareness, hosur];

export default function EventHighlights() {
  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby="fasii-events-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-orange-600">FASII in action</p><h2 id="fasii-events-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">Recent programmes & events</h2></div>
          <Link to="/media/news" className="inline-flex items-center gap-2 font-semibold text-orange-700 hover:text-orange-900">All updates <ArrowRight size={18} /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fasiiEvents.map((event, index) => <article key={event.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src={photos[index]} alt={`${event.title} event`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">{event.category}</p><h3 className="mt-2 text-lg font-semibold leading-snug text-slate-900">{event.title}</h3><div className="mt-4 space-y-2 text-sm text-slate-600"><p className="flex items-center gap-2"><CalendarDays size={16} />{event.date}</p><p className="flex items-center gap-2"><MapPin size={16} />{event.location}</p></div><p className="mt-4 text-sm leading-6 text-slate-600">{event.description}</p></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
