import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BarChart3, BookOpen, FileStack, ScrollText } from "lucide-react";
import { fasiiEvents, officeBearers, organization, regionalChairmen } from "../../../data/fasiiContent.js";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";

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
      <section className="border-y-4 border-amber-400 bg-linear-to-r from-orange-700 via-orange-600 to-amber-600 py-10 text-white" aria-label="FASII at a glance">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-100">FASII at a glance</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The federation by numbers</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-orange-50">
                A national federation built on member associations, regional leadership and practical
                engagement with small industries.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:divide-x sm:divide-white/30">
              {stats.map((stat) => (
                <div key={stat.label} className="px-4 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-serif text-4xl font-bold tabular-nums sm:text-5xl">{stat.value}</span>
                    <span className="mt-2 block text-xs font-semibold uppercase tracking-wider text-amber-100">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Knowledge hub */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="home-knowledge-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Knowledge hub</p>
              <h2 id="home-knowledge-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
                Publications, reports and policy
              </h2>
            </div>
            <Link to="/knowledge/publications" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
              Visit knowledge hub <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
            <figure>
              <img
                src={connect}
                alt="MSME connect programme"
                loading="lazy"
                className="aspect-[4/3] w-full border-b-8 border-amber-500 object-cover"
              />
              <figcaption className="bg-orange-900 px-4 py-3 text-sm leading-6 text-amber-100">
                Browse the federation's reference library of studies, policy documents and annual publications.
              </figcaption>
            </figure>

            <ul className="divide-y divide-orange-200 border-y-2 border-orange-600">
              {knowledgeLinks.map(({ title, text, path, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="group flex items-start gap-4 px-2 py-5 transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600"
                  >
                    <Icon size={26} className="mt-0.5 shrink-0 text-orange-700" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-lg font-bold text-orange-950 group-hover:text-orange-700">{title}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span>
                    </span>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-slate-400 group-hover:text-orange-700" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}