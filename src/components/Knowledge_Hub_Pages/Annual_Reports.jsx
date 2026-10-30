import { BookOpen, Info } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const annualReportRows = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export default function AnnualReports() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Annual Reports" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          FASII's annual reports set out the activities, programmes and initiatives
          undertaken by the federation during each financial year. They are published
          for the information of member associations and other stakeholders.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-950">
          Annual Report Archive
        </h2>

        <div className="mt-5 space-y-5">
          {annualReportRows.map((row) => (
            <article
              key={row.id}
              className="flex items-start gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <BookOpen size={24} aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                  Financial Year 20XX &ndash; 20XX
                </p>
                <p className="mt-2 text-base font-semibold text-slate-950">
                  Records being compiled &mdash; to be updated
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Year, contents and download link to be updated.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-lg border border-orange-200 bg-orange-50 p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <Info size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Publication of annual reports</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Annual reports will be published here once the records are finalised by
              the National Secretariat. For any assistance in the meantime, please
              contact the Secretariat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
