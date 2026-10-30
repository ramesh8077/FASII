import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  FileStack,
  ScrollText,
} from "lucide-react";
import {
  fasiiEvents,
  officeBearers,
  organization,
  regionalChairmen,
} from "../../../data/fasiiContent.js";

const knowledgeLinks = [
  {
    title: "Publications",
    text: "Newsletters, handbooks and reference material for member associations.",
    path: "/knowledge/publications",
    icon: BookOpen,
  },
  {
    title: "Research Reports",
    text: "Studies and surveys on small industries and the MSME ecosystem.",
    path: "/knowledge/reports",
    icon: BarChart3,
  },
  {
    title: "Policy Documents",
    text: "Legislation, standards and scheme documents from the Government of India.",
    path: "/knowledge/policies",
    icon: ScrollText,
  },
  {
    title: "Annual Reports",
    text: "FASII's yearly account of activities, engagement and outcomes.",
    path: "/knowledge/annual-reports",
    icon: FileStack,
  },
];

const stats = [
  { value: "04", label: "Regional zones" },
  { value: String(officeBearers.length + regionalChairmen.length).padStart(2, "0"), label: "Office bearers" },
  { value: String(organization.focus.length).padStart(2, "0"), label: "Focus areas" },
  { value: String(fasiiEvents.length).padStart(2, "0"), label: "Programmes in 2026" },
];

export default function HomeKnowledge() {
  return (
    <>
      {/* FASII at a glance */}
      <section className="border-y border-orange-100 bg-orange-600 py-10 text-white sm:py-12" aria-label="FASII at a glance">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-100">FASII at a glance</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The federation by numbers</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-orange-50">
                A national federation built on member associations, regional leadership
                and practical engagement with small industries.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-5 text-center backdrop-blur-sm">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-3xl font-bold tabular-nums sm:text-4xl">{stat.value}</span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-orange-100">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Knowledge hub preview */}
      <section className="bg-[#fffaf5] py-14 sm:py-20" aria-labelledby="home-knowledge-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">Knowledge hub</p>
              <h2 id="home-knowledge-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Publications, reports and policy
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Browse the federation&apos;s reference library of studies, policy documents
                and annual publications.
              </p>
            </div>
            <Link to="/knowledge/publications" className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-bold text-orange-800 transition hover:bg-orange-50">
              Visit knowledge hub <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {knowledgeLinks.map(({ title, text, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="group flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-950/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-50 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-700">
                  Open <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
