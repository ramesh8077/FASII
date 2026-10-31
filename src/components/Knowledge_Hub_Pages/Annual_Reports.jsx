import { Info, Download } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const annualReportRows = [
  { id: 1, year: "2024 – 2025" },
  { id: 2, year: "2023 – 2024" },
  { id: 3, year: "2022 – 2023" },
  { id: 4, year: "2021 – 2022" },
];

export default function AnnualReports() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Annual Reports" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-4xl text-base leading-7 text-slate-700">
          FASII's annual reports set out the activities, programmes and initiatives
          undertaken by the federation during each financial year. They are published
          for the information of member associations and other stakeholders.
        </p>

        <div className="mt-10 border border-orange-200">
          <div className="bg-orange-700 px-5 py-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Annual Report Archive
            </h2>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="border-b-2 border-orange-200 bg-orange-50">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-bold text-orange-900">Financial Year</th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-orange-900">Status / Description</th>
                  <th scope="col" className="px-5 py-3.5 text-right font-bold text-orange-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {annualReportRows.map((row) => (
                  <tr key={row.id} className="hover:bg-[#fff8ec]">
                    <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-900">
                      {row.year}
                    </td>
                    <td className="px-5 py-4 text-slate-700">
                      Records being compiled — pending official publication.
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button disabled className="inline-flex cursor-not-allowed items-center gap-1.5 border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-400">
                        <Download size={14} /> Pending
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex gap-4 border-l-4 border-amber-500 bg-[#fff8ec] p-5">
          <Info className="mt-0.5 shrink-0 text-orange-600" size={20} aria-hidden="true" />
          <div>
            <h3 className="font-bold text-orange-950">Publication Notice</h3>
            <p className="mt-1 text-sm text-slate-700">
              Annual reports will be published here once the records are finalised by
              the National Secretariat. For any urgent assistance, please contact the official helpdesk.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}