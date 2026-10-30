import { ArrowUpRight, Factory, FileText, Landmark, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { organization } from "../../../data/fasiiContent.js";

const pathways = [
  {
    title: "For industry associations",
    description: "Connect with FASII’s national network and learn about its leadership and work.",
    link: "Explore FASII",
    path: "/about",
    icon: UsersRound,
    tone: "bg-orange-100 text-orange-700",
  },
  {
    title: "For small industries",
    description: "Find sector information, support programmes and opportunities for MSMEs.",
    link: "Explore sectors",
    path: "/sectors/msme",
    icon: Factory,
    tone: "bg-amber-100 text-amber-800",
  },
  {
    title: "Schemes & services",
    description: "Browse citizen services, applications, grievance support and downloads.",
    link: "View services",
    path: "/services/YojanaIntro",
    icon: Landmark,
    tone: "bg-slate-100 text-slate-700",
  },
  {
    title: "Knowledge & policy",
    description: "Access publications, research reports, policy documents and circulars.",
    link: "Visit knowledge hub",
    path: "/knowledge/publications",
    icon: FileText,
    tone: "bg-orange-50 text-orange-700",
  },
];

export default function HomeOverview() {
  return (
    <section className="bg-[#fffaf5] py-14 sm:py-20 lg:py-24" aria-labelledby="home-overview-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-orange-800">
              <span className="h-2 w-2 rounded-full bg-orange-500" /> Supporting India’s small industries
            </p>
            <h2 id="home-overview-title" className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              A stronger voice for <span className="text-orange-600">small industry.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              {organization.about}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              {organization.description}
            </p>
            <Link to="/about" className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
              Discover FASII <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-orange-950/10 sm:p-9 lg:p-10">
            <div aria-hidden="true" className="absolute -right-24 -top-28 h-72 w-72 rounded-full border-[36px] border-orange-500/20" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-orange-600/20 blur-2xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-300">What we do</p>
              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-snug sm:text-3xl">Bringing associations, industry and institutions together.</h3>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {organization.focus.map((item, index) => (
                  <div key={item} className="flex min-h-20 items-start gap-3 rounded-xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-sm">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-500 text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium leading-6 text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-orange-200/80 pt-10 sm:mt-20 sm:pt-12">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">Start here</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Find what you need</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">Explore the federation, practical support and resources for India’s small industries.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pathways.map(({ title, description, link, path, icon: Icon, tone }) => (
              <Link key={path} to={path} className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-950/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:p-6">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${tone}`}><Icon size={23} /></span>
                <h4 className="mt-5 text-lg font-bold text-slate-900">{title}</h4>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-700">{link}<ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
