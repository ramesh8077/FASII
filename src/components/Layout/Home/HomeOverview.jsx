import { ArrowUpRight, Factory, FileText, Landmark, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { organization } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";

const pathways = [
  {
    title: "For industry associations",
    description: "Connect with FASII's national network and learn about its leadership and work.",
    link: "Explore FASII",
    path: "/about",
    icon: UsersRound,
  },
  {
    title: "For small industries",
    description: "Find sector information, support programmes and opportunities for MSMEs.",
    link: "Explore sectors",
    path: "/sectors/msme",
    icon: Factory,
  },
  {
    title: "Schemes & services",
    description: "Browse citizen services, applications, grievance support and downloads.",
    link: "View services",
    path: "/services/YojanaIntro",
    icon: Landmark,
  },
  {
    title: "Knowledge & policy",
    description: "Access publications, research reports, policy documents and circulars.",
    link: "Visit knowledge hub",
    path: "/knowledge/publications",
    icon: FileText,
  },
];

export default function HomeOverview() {
  return (
    <section className="bg-[#fff8ec]" aria-labelledby="home-overview-title">
      {/* Welcome: image + text */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          <figure>
            <img
              src={conclave}
              alt="FASII industry conclave"
              loading="lazy"
              className="aspect-[4/3] w-full border-b-8 border-amber-500 object-cover"
            />
            <figcaption className="bg-orange-900 px-4 py-2 text-xs font-medium tracking-wide text-amber-100">
              FASII industry conclave with member associations
            </figcaption>
          </figure>

          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Welcome to FASII</p>
            <h2 id="home-overview-title" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold leading-tight text-orange-950 sm:text-4xl">
              A stronger voice for small industry
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">{organization.about}</p>
            <p className="mt-3 text-base leading-8 text-slate-700">{organization.description}</p>
            <Link
              to="/about"
              className="group mt-6 inline-flex items-center gap-2 bg-orange-700 px-6 py-3 font-semibold text-white transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            >
              Discover FASII <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* What we do: full-width band */}
      <div className="border-y-4 border-amber-500 bg-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">What we do</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Bringing associations, industry and institutions together</h3>
            </div>
          </div>
          <ol className="mt-7 grid gap-x-10 sm:grid-cols-2">
            {organization.focus.map((item, index) => (
              <li key={item} className="flex items-start gap-4 border-t border-white/20 py-4">
                <span className="w-8 shrink-0 text-xl font-bold tabular-nums text-amber-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium leading-6 text-orange-50">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Quick links strip */}
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Start here</p>
            <h3 className="mt-2 border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">Find what you need</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">Explore the federation, practical support and resources for India's small industries.</p>
        </div>

        <div className="grid divide-y divide-orange-200 border-y-2 border-orange-600 bg-white sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4 xl:divide-x">
          {pathways.map(({ title, description, link, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="group flex flex-col p-6 transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600 sm:border-b sm:border-orange-200 xl:border-b-0"
            >
              <Icon size={28} className="text-orange-700" aria-hidden="true" />
              <h4 className="mt-4 text-lg font-bold text-orange-950">{title}</h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:text-orange-900">
                {link} <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}