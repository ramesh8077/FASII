import { Link } from "react-router-dom";
import { FileText, Download, Info, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";
import { documents } from "../../data/fasiiContent";

const reportRows = [
  { id: 1, category: "Analysis", title: "Market trends to be updated", status: "Draft" },
  { id: 2, category: "Survey", title: "Industry feedback to be updated", status: "Draft" },
  { id: 3, category: "Report", title: "Policy impact to be updated", status: "Draft" },
];

export default function ResearchReports() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Research Reports" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <p className="mb-8 border-l-4 border-amber-500 pl-4 max-w-4xl text-base leading-7 text-slate-700">
          FASII undertakes research and documentation on issues affecting small
          industries, including policy developments, compliance requirements and
          access to schemes.
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="border border-orange-200">
              <div className="bg-orange-700 px-5 py-3">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Research Report Library
                </h2>
              </div>
              <div className="overflow-x-auto bg-white">
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead className="border-b-2 border-orange-200 bg-orange-50">
                    <tr>
                      <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">Category</th>
                      <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">Report Title</th>
                      <th scope="col" className="px-5 py-3.5 font-bold text-orange-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    {reportRows.map((row) => (
                      <tr key={row.id} className="hover:bg-[#fff8ec]">
                        <td className="align-top border-r border-orange-100 px-5 py-4">
                          <span className="flex items-center gap-2 font-medium text-slate-700">
                            <FileText size={16} className="text-orange-400" />
                            {row.category}
                          </span>
                        </td>
                        <td className="align-top border-r border-orange-100 px-5 py-4 font-bold text-slate-900">
                          {row.title}
                        </td>
                        <td className="align-top px-5 py-4">
                          <span className="border border-orange-200 bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-800">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 border-l-4 border-amber-500 bg-[#fff8ec] p-4">
              <Info size={20} className="mt-0.5 shrink-0 text-orange-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-orange-950">
                Research report titles and official download links are being compiled and will
                be published here shortly by the administration.
              </p>
            </div>
          </div>

          <aside aria-label="Downloadable documents">
            <div className="border border-orange-200 bg-white">
              <h2 className="border-b border-orange-200 bg-orange-50 px-5 py-3 text-sm font-bold uppercase tracking-wider text-orange-900">
                Quick Downloads
              </h2>
              <ul className="divide-y divide-orange-100">
                {documents.map((document) => (
                  <li key={document.id}>
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start justify-between px-5 py-4 transition-colors hover:bg-[#fff8ec]"
                    >
                      <div className="pr-4">
                        <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-orange-600">
                          {document.category}
                        </span>
                        <span className="block text-sm font-semibold text-slate-900 group-hover:text-orange-800">
                          {document.title}
                        </span>
                      </div>
                      <Download size={18} className="mt-1 shrink-0 text-orange-300 group-hover:text-orange-600" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-orange-200 bg-orange-50 px-5 py-3">
                <Link
                  to="/knowledge/policies"
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 hover:text-orange-950"
                >
                  <ExternalLink size={14} /> View All Policies
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}