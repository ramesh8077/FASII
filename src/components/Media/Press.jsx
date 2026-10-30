import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import { fasiiEvents, contactInfo } from "../../data/fasiiContent.js";
import PageHero from "../Layout/common/PageHero";

const quickLinks = [
  { label: "News & Events", to: "/media/news" },
  { label: "Photo Gallery", to: "/media/photos" },
  { label: "Video Gallery", to: "/media/videos" },
  { label: "Publications", to: "/knowledge/publications" },
];

export default function Press() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Press Releases" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          FASII issues regular updates on its programmes, industry engagements and
          representations to government departments and public sector undertakings.
          The press releases below cover vendor development programmes, awareness
          initiatives, conclaves and industry addresses held across the country.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          {/* Press release list */}
          <div className="space-y-6">
            {fasiiEvents.map((event) => (
              <article
                key={event.id}
                className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
                    {event.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CalendarDays size={16} className="text-orange-600" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                    <MapPin size={16} className="text-orange-600" />
                    {event.location}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">
                  {event.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-700">
                  {event.description}
                </p>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-slate-200 bg-[#fffaf5] p-6">
              <h2 className="text-lg font-semibold text-slate-950">Quick Links</h2>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-2 font-semibold text-orange-700 transition-colors hover:text-orange-900"
                    >
                      <ArrowRight size={16} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50 p-6">
              <h2 className="text-lg font-semibold text-slate-950">Media Enquiries</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Media enquiries about FASII programmes and industry engagements may be
                directed to the federation contact below.
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  {contactInfo.southernRegion.name}
                </p>
                <p>{contactInfo.southernRegion.role}</p>
                <p>
                  <a
                    href={`tel:${contactInfo.southernRegion.phone}`}
                    className="font-medium text-orange-700 transition-colors hover:text-orange-900"
                  >
                    {contactInfo.southernRegion.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contactInfo.southernRegion.email}`}
                    className="break-all font-medium text-orange-700 transition-colors hover:text-orange-900"
                  >
                    {contactInfo.southernRegion.email}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
