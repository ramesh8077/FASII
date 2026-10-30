import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { officeBearers } from "../../../data/fasiiContent.js";
import PageHero from "../common/PageHero.jsx";

const placeholderTerms = [1, 2, 3, 4];

export default function Past_Presidents() {
  const president = officeBearers.find(
    (bearer) => bearer.role === "National President"
  );

  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Past Presidents" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          FASII has been led by presidents drawn from its member industry
          associations across India. This page records the federation&apos;s
          leadership history.
        </p>

        {/* Current Leadership */}
        <div className="mt-10 rounded-lg border border-orange-200 bg-orange-50 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
            Current Leadership
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-950 sm:text-3xl">
            {president.name}
          </h2>
          <p className="mt-2 text-sm font-semibold text-slate-700 sm:text-base">
            {president.role}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            {president.affiliation}, West Bengal
          </p>
          <Link
            to="/about/office-bearers"
            className="mt-5 inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
          >
            View current office bearers
          </Link>
        </div>

        {/* Former Presidents */}
        <h2 className="mt-14 text-xl font-medium tracking-tight text-slate-950 sm:text-2xl">
          Former Presidents
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Historical records of former presidents are being compiled and will be
          published on this page shortly.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {placeholderTerms.map((slot) => (
            <article
              key={slot}
              className="rounded-lg border border-slate-200 bg-[#fffaf5] p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-100 text-orange-700">
                  <User size={24} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-700 sm:text-lg">
                      Former President — To be updated
                    </h3>
                    <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      —
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Tenure and association details will be published once
                    verified records are available.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-100 p-6">
          <p className="text-sm leading-6 text-slate-600">
            Verified records of former presidents will be added here as they are
            confirmed. For enquiries relating to the federation&apos;s
            leadership, please{" "}
            <Link
              to="/about"
              className="font-semibold text-orange-700 transition-colors hover:text-orange-600"
            >
              contact FASII
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
