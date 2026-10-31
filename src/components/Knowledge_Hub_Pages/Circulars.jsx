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

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-4xl text-base leading-7 text-slate-700">
          Circulars, orders and notifications issued by FASII and other relevant
          authorities affecting small industries are published here for the
          information of member associations. This page is updated as and when such
          communications are issued.
        </p>

        <div className="mt-10 border border-orange-200">
          <div className="bg-orange-700 px-5 py-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Circulars &amp; Orders Directory
            </h2>
          </div>
          
          <div className="overflow-x-auto bg-white">
            <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
              <thead className="border-b-2 border-orange-200 bg-orange-50">
                <tr>
                  <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">
                    Reference No.
                  </th>
                  <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">
                    Subject / Title
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-orange-900">
                    Issue Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {circularRows.map((row) => (
                  <tr key={row.id} className="hover:bg-[#fff8ec]">
                    <td className="align-top border-r border-orange-100 px-5 py-4 font-bold text-slate-900">
                      REF-XXXX-YY
                    </td>
                    <td className="align-top border-r border-orange-100 px-5 py-4 text-slate-700">
                      Awaiting subject details from secretariat
                    </td>
                    <td className="whitespace-nowrap align-top px-5 py-4 text-slate-500">
                      DD-MM-YYYY
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
            <h3 className="font-bold text-orange-950">Important Note</h3>
            <p className="mt-1 text-sm text-slate-700">
              Circulars and orders are published here as they are officially issued. Reference
              numbers, subjects and dates will be populated once verified by the National Secretariat.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}