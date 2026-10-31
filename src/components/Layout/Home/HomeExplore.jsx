import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { documents } from "../../../data/fasiiContent.js";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";

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
    <section className="bg-[#fff8ec] py-12 sm:py-16" aria-labelledby="home-explore-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
          {/* Sectors */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Industry landscape</p>
            <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
              <h2 id="home-explore-heading" className="border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
                Explore sectors
              </h2>
              <Link to="/sectors/msme" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
                All sectors <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-3 max-w-2xl leading-7 text-slate-700">
              Discover information and FASII's engagement across industries that support India's small enterprises.
            </p>

            <figure className="mt-6">
              <img
                src={awareness}
                alt="MSME awareness programme organised by FASII"
                loading="lazy"
                className="aspect-[16/7] w-full border-b-4 border-amber-500 object-cover"
              />
            </figure>

            <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-10">
              {sectors.map((sector, index) => (
                <li key={sector.path} className="border-b border-orange-200">
                  <Link
                    to={sector.path}
                    className="group flex items-center gap-4 py-4 focus-visible:outline-2 focus-visible:outline-orange-600"
                  >
                    <span className="w-7 text-sm font-bold tabular-nums text-amber-600">{String(index + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="block font-bold text-orange-950 group-hover:text-orange-700">{sector.label}</span>
                      <span className="block text-sm text-slate-600">{sector.detail}</span>
                    </span>
                    <ArrowUpRight size={17} className="text-slate-400 transition group-hover:text-orange-700" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <aside aria-labelledby="home-documents-heading" className="self-start border-t-4 border-orange-600 bg-white">
            <div className="bg-orange-900 px-5 py-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Useful resources</p>
              <h2 id="home-documents-heading" className="mt-1 text-2xl font-bold">Documents &amp; downloads</h2>
              <p className="mt-2 text-sm leading-6 text-orange-100">
                Policy, scheme and standards documents from the FASII resource library.
              </p>
            </div>
            <ul className="divide-y divide-orange-100">
              {documents.map((document) => (
                <li key={document.id}>
                  <a
                    href={document.file}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-4 px-5 py-4 transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600"
                  >
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[.16em] text-orange-700">{document.category}</span>
                      <span className="mt-1 block text-sm font-semibold leading-5 text-slate-900 group-hover:text-orange-800">{document.title}</span>
                    </span>
                    <Download size={17} className="mt-1 shrink-0 text-slate-400 group-hover:text-orange-700" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/services/downloads"
              className="flex items-center gap-2 border-t border-orange-200 bg-amber-50 px-5 py-3 text-sm font-bold text-orange-800 hover:text-orange-950"
            >
              Browse all downloads <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}