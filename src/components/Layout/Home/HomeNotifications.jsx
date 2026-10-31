import { Link } from "react-router-dom";
import { ArrowRight, BellRing, Download } from "lucide-react";
import { documents } from "../../../data/fasiiContent.js";
import hosur from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";

const notices = [
  {
    date: "12 Oct 2026",
    tag: "Policy",
    title: "MSME Bill 2026 — stakeholder views invited",
    document: documents.find((item) => item.id === "msme-bill"),
  },
  {
    date: "29 Sep 2026",
    tag: "Schemes",
    title: "PM Viksit Bharat Rozgar Yojana — scheme documentation released",
    document: documents.find((item) => item.id === "pmvbry"),
  },
  {
    date: "07 Sep 2026",
    tag: "Standards",
    title: "Quality Control Order — compliance advisory for small industries",
    document: documents.find((item) => item.id === "quality-control"),
  },
  {
    date: "07 Sep 2026",
    tag: "Certification",
    title: "BIS product certification — simplified procedure for MSMEs",
    document: documents.find((item) => item.id === "bis-certification"),
  },
];

const quickLinks = [
  { label: "Policy documents", path: "/knowledge/policies" },
  { label: "Circulars & orders", path: "/knowledge/circulars" },
  { label: "Forms & downloads", path: "/services/downloads" },
];

export default function HomeNotifications() {
  return (
    <section className="bg-white py-12 sm:py-16" aria-labelledby="home-notifications-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          {/* Notifications table */}
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-orange-700">
                  <BellRing size={15} aria-hidden="true" /> Notifications
                </p>
                <h2 id="home-notifications-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
                  Notifications &amp; circulars
                </h2>
              </div>
              <Link to="/knowledge/circulars" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
                View all <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 border-t-4 border-orange-600">
              <div className="hidden bg-orange-700 text-xs font-bold uppercase tracking-wider text-white md:grid md:grid-cols-[7.5rem_8rem_1fr_3rem]">
                <span className="px-4 py-3">Date</span>
                <span className="px-4 py-3">Category</span>
                <span className="px-4 py-3">Subject</span>
                <span className="px-4 py-3 text-center">
                  <span className="sr-only">Download</span>
                </span>
              </div>
              <ul className="divide-y divide-orange-100 border-b border-orange-200">
                {notices.map((notice, index) => (
                  <li key={notice.title}>
                    <a
                      href={notice.document?.file ?? "/knowledge/circulars"}
                      target={notice.document ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group grid gap-1 px-4 py-4 transition-colors odd:bg-[#fff8ec] hover:bg-amber-100 md:grid-cols-[7.5rem_8rem_1fr_3rem] md:items-center md:gap-0 md:px-0 md:py-0"
                    >
                      <span className="text-sm font-semibold tabular-nums text-slate-600 md:px-4 md:py-4">{notice.date}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-800 md:px-4 md:py-4">{notice.tag}</span>
                      <span className="font-semibold leading-snug text-slate-900 group-hover:text-orange-800 md:px-4 md:py-4">
                        {notice.title}
                        {index === 0 && (
                          <span className="ml-2 inline-block bg-amber-400 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-orange-950">
                            New
                          </span>
                        )}
                      </span>
                      <span className="hidden justify-center text-slate-400 group-hover:text-orange-700 md:flex">
                        <Download size={17} aria-hidden="true" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Public information: image + links */}
          <aside aria-labelledby="home-public-notices-heading" className="self-start">
            <figure className="relative">
              <img
                src={hosur}
                alt="FASII scheme awareness programme"
                loading="lazy"
                className="aspect-[4/3] w-full border-b-4 border-amber-500 object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-orange-950/90 to-transparent px-4 pb-3 pt-10">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Public information</p>
                <h2 id="home-public-notices-heading" className="mt-1 text-xl font-bold leading-snug text-white">
                  Keeping small industries informed
                </h2>
              </figcaption>
            </figure>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              FASII circulates policy updates, scheme documents and standards guidance so that member
              associations and small enterprises can act on the latest government requirements.
            </p>
            <ul className="mt-4 divide-y divide-orange-200 border-y border-orange-200">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center justify-between gap-3 py-3 text-sm font-bold text-orange-900 transition hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-600"
                  >
                    {item.label}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}