import { Info } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const circularRows = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export default function Circulars() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Circulars" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          Circulars, orders and notifications issued by FASII and other relevant
          authorities affecting small industries are published here for the
          information of member associations. This page is updated as and when such
          communications are issued.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-slate-950">
          Circulars &amp; Orders
        </h2>

        <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse text-left">
              <caption className="sr-only">
                Circulars and orders issued by FASII. Reference numbers, subjects and
                dates are to be updated.
              </caption>
              <thead className="bg-[#fffaf5]">
                <tr className="border-b border-slate-200">
                  <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                    Reference No.
                  </th>
                  <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                    Subject
                  </th>
                  <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {circularRows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-b-0">
                    <td className="px-5 py-4 align-top text-sm font-medium text-slate-900">
                      Reference to be updated
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-slate-700">
                      To be updated
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-slate-500">
                      &mdash;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-lg border border-orange-200 bg-orange-50 p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <Info size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-950">About this page</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Circulars and orders are published here as they are issued. Reference
              numbers, subjects and dates will be added once the records are made
              available by the National Secretariat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
