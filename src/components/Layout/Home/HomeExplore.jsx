import { ArrowRight, ArrowUpRight, Download, Factory } from "lucide-react";
import { Link } from "react-router-dom";
import { documents } from "../../../data/fasiiContent.js";

const sectors = [
  { label: "Manufacturing", path: "/sectors/manufacturing", detail: "Production & industry" },
  { label: "Agriculture", path: "/sectors/agriculture", detail: "Agri-based enterprise" },
  { label: "Energy", path: "/sectors/energy", detail: "Power & renewables" },
  { label: "Healthcare", path: "/sectors/healthcare", detail: "Health & medical" },
  { label: "Banking & finance", path: "/sectors/finance", detail: "Financial services" },
  { label: "Technology", path: "/sectors/technology", detail: "Digital industries" },
];

export default function HomeExplore() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24" aria-labelledby="home-explore-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">Industry landscape</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <h2 id="home-explore-heading" className="max-w-lg text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Explore sectors</h2>
              <Link to="/sectors/msme" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">All sectors <ArrowRight size={17} /></Link>
            </div>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">Discover information and FASII’s engagement across industries that support India’s small enterprises.</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {sectors.map((sector, index) => (
                <Link key={sector.path} to={sector.path} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#fffaf5] p-5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                  <span className="absolute right-4 top-4 text-xs font-bold tabular-nums text-orange-300">0{index + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-orange-700 shadow-sm ring-1 ring-orange-100"><Factory size={21} /></span>
                  <h3 className="mt-5 pr-5 font-bold text-slate-900">{sector.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{sector.detail}</p>
                  <ArrowUpRight size={17} className="absolute bottom-5 right-5 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-700" />
                </Link>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8" aria-labelledby="home-documents-heading">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-600/20 blur-2xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-300">Useful resources</p>
              <h2 id="home-documents-heading" className="mt-2 text-2xl font-bold sm:text-3xl">Documents & downloads</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">Access policy, scheme and standards documents from the FASII resource library.</p>
              <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[.04] px-4">
                {documents.map((document) => (
                  <a key={document.id} href={document.file} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4 py-4 first:pt-5 last:pb-5 focus-visible:outline-2 focus-visible:outline-orange-400">
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[.16em] text-orange-300">{document.category}</span>
                      <span className="mt-1 block text-sm font-semibold leading-5 text-white transition group-hover:text-orange-200">{document.title}</span>
                    </span>
                    <Download size={17} className="mt-1 shrink-0 text-slate-400 transition group-hover:text-orange-300" />
                  </a>
                ))}
              </div>
              <Link to="/services/downloads" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-300 hover:text-white">Browse all downloads <ArrowRight size={17} /></Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
