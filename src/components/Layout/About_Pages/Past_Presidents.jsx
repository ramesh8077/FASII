import { Link } from "react-router-dom";
import { ArrowRight, User } from "lucide-react";
import { officeBearers } from "../../../data/fasiiContent.js";
import PageHero from "../common/PageHero.jsx";

const placeholderTerms = [1, 2, 3, 4, 5, 6];

export default function Past_Presidents() {
  const president = officeBearers.find((bearer) => bearer.role === "National President");

  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="Past Presidents" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 bg-white rounded-b-2xl shadow-sm">
        <p className="max-w-3xl border-l-4 border-amber-500 pl-4 text-lg leading-8 text-slate-700">
          FASII has been led by presidents drawn from its member industry
          associations across India. This page records the federation&apos;s
          leadership history.
        </p>

        {president && (
          <div className="mt-10 overflow-hidden rounded-2xl border-2 border-orange-200 bg-orange-50 shadow-sm">
            <div className="grid gap-6 px-6 py-8 sm:grid-cols-[1fr_auto] sm:items-center sm:px-8">
              <div>
                <p className="mb-2 inline-block rounded-full bg-orange-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-orange-800">
                  Current Leadership
                </p>
                <h2 className="text-3xl font-bold text-orange-950">{president.name}</h2>
                <p className="mt-2 text-lg font-semibold text-slate-800">{president.role}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {president.affiliation}, West Bengal
                </p>
              </div>
              <Link
                to="/about/office-bearers"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-700 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-orange-800 hover:shadow-lg"
              >
                View complete directory <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}

        <div className="mt-16">
          <h2 className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
            Former Presidents
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Historical records of former presidents are being compiled and will be
            published on this page shortly.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {placeholderTerms.map((slot) => (
              <div key={slot} className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-5 opacity-70 transition-opacity hover:opacity-100">
                <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
                  <User className="text-slate-400" size={24} />
                  <span className="text-2xl font-bold tabular-nums text-slate-300">#{String(slot).padStart(2, "0")}</span>
                </div>
                <span className="text-lg font-bold text-slate-700">To be updated</span>
                <span className="mt-1 text-sm font-medium text-slate-500">Term: —</span>
                <span className="mt-4 rounded bg-slate-200/50 px-2 py-1.5 text-xs text-slate-600">
                  Association records pending
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl border-l-4 border-orange-400 bg-amber-50 p-5 shadow-sm">
          <p className="text-sm leading-7 text-slate-700">
            Verified records of former presidents will be added here as they are
            confirmed. For enquiries relating to the federation&apos;s
            leadership, please{" "}
            <Link to="/about" className="font-bold text-orange-700 underline underline-offset-2 transition-colors hover:text-orange-900">
              contact FASII
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}