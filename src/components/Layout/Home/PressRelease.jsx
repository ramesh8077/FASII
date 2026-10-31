import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { fasiiEvents } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import hosur from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";

const photos = [conclave, connect, awareness, hosur];

export default function PressRelease() {
  return (
    <section className="bg-[#fff8ec] py-12 sm:py-16" aria-labelledby="fasii-updates-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">News &amp; activities</p>
            <h2 id="fasii-updates-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
              Latest from FASII
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-700">
              Updates from FASII programmes, industry engagements and member association events.
            </p>
          </div>
          <Link to="/media/news" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
            View all news and events <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <ul className="divide-y divide-orange-200 border-y-4 border-orange-600 bg-white">
          {fasiiEvents.map((item, index) => (
            <li key={item.id}>
              <article className="grid gap-4 p-4 transition hover:bg-amber-50 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:p-5 lg:grid-cols-[16rem_1fr]">
                <img
                  src={photos[index]}
                  alt={`${item.title}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full border-b-4 border-amber-400 object-cover"
                />
                <div className="self-center">
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-orange-800">
                    <span className="inline-flex items-center gap-2"><CalendarDays size={16} aria-hidden="true" />{item.date}</span>
                    <span className="inline-flex items-center gap-2"><MapPin size={16} aria-hidden="true" />{item.location}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-orange-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{item.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}