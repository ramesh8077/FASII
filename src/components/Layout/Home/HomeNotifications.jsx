import { Link } from "react-router-dom";
import { ArrowRight, BellRing, CalendarDays, Download, FileText } from "lucide-react";
import { documents } from "../../../data/fasiiContent.js";

const notices = [
  {
    date: "12 October 2026",
    tag: "Policy",
    title: "MSME Bill 2026 — stakeholder views invited",
    document: documents.find((item) => item.id === "msme-bill"),
  },
  {
    date: "29 September 2026",
    tag: "Schemes",
    title: "PM Viksit Bharat Rozgar Yojana — scheme documentation released",
    document: documents.find((item) => item.id === "pmvbry"),
  },
  {
    date: "7 September 2026",
    tag: "Standards",
    title: "Quality Control Order — compliance advisory for small industries",
    document: documents.find((item) => item.id === "quality-control"),
  },
  {
    date: "7 September 2026",
    tag: "Certification",
    title: "BIS product certification — simplified procedure for MSMEs",
    document: documents.find((item) => item.id === "bis-certification"),
  },
];

export default function HomeNotifications() {
  return (
    <section className="bg-white py-14 sm:py-20" aria-labelledby="home-notifications-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* Notifications & circulars */}
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-orange-700">
                  <BellRing size={15} aria-hidden="true" /> Notifications
                </p>
                <h2 id="home-notifications-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Notifications &amp; circulars
                </h2>
              </div>
              <Link to="/knowledge/circulars" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
                View all <ArrowRight size={17} />
              </Link>
            </div>

            <ul className="mt-7 divide-y divide-orange-100 overflow-hidden rounded-2xl border border-orange-100 bg-[#fffaf5]">
              {notices.map((notice, index) => (
                <li key={notice.title}>
                  <a
                    href={notice.document?.file ?? "/knowledge/circulars"}
                    target={notice.document ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-orange-50 sm:px-6"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-orange-700 ring-1 ring-orange-100">
                      <FileText size={17} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-800">
                          {notice.tag}
                        </span>
                        {index === 0 && (
                          <span className="rounded-full bg-orange-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                            New
                          </span>
                        )}
                      </span>
                      <span className="mt-2 block font-semibold leading-snug text-slate-900 transition group-hover:text-orange-800">
                        {notice.title}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2 text-xs font-medium text-slate-500">
                        <CalendarDays size={13} aria-hidden="true" /> {notice.date}
                      </span>
                    </span>
                    <Download size={17} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-orange-700" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Public notices panel */}
          <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9" aria-labelledby="home-public-notices-heading">
            <div aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[32px] border-orange-500/20" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-300">Public information</p>
              <h2 id="home-public-notices-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                Keeping small industries informed
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                FASII circulates policy updates, scheme documents and standards guidance
                so that member associations and small enterprises can act on the latest
                government requirements.
              </p>

              <div className="mt-7 space-y-3">
                <Link to="/knowledge/policies" className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.06] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[.12] focus-visible:outline-2 focus-visible:outline-orange-400">
                  Policy documents
                  <ArrowRight size={16} className="text-orange-300" aria-hidden="true" />
                </Link>
                <Link to="/knowledge/circulars" className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.06] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[.12] focus-visible:outline-2 focus-visible:outline-orange-400">
                  Circulars &amp; orders
                  <ArrowRight size={16} className="text-orange-300" aria-hidden="true" />
                </Link>
                <Link to="/services/downloads" className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.06] px-4 py-3.5 text-sm font-semibold transition hover:bg-white/[.12] focus-visible:outline-2 focus-visible:outline-orange-400">
                  Forms &amp; downloads
                  <ArrowRight size={16} className="text-orange-300" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
