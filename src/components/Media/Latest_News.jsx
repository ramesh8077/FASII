import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import { fasiiEvents } from "../../data/fasiiContent.js";

export default function Latest_News() {
  return <main className="bg-white text-slate-900"><header className="bg-slate-100"><div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12"><h1 className="text-3xl font-semibold sm:text-4xl">FASII News & Events</h1><nav aria-label="Breadcrumb" className="mt-4 text-sm text-slate-600"><Link to="/" className="hover:text-orange-700">Home</Link><span className="mx-2">/</span><span aria-current="page">News & Events</span></nav></div></header><section className="mx-auto max-w-7xl space-y-5 px-5 py-10 sm:px-8 lg:px-12">{fasiiEvents.map((event) => <article key={event.id} className="rounded-lg border border-slate-200 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">{event.category}</p><h2 className="mt-2 text-2xl font-semibold">{event.title}</h2><div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600"><span className="inline-flex items-center gap-2"><CalendarDays size={16}/>{event.date}</span><span className="inline-flex items-center gap-2"><MapPin size={16}/>{event.location}</span></div><p className="mt-4 max-w-4xl leading-7 text-slate-700">{event.description}</p></article>)}</section></main>;
}
