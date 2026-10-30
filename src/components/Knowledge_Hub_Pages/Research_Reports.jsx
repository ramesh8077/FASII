import { Link } from "react-router-dom";
import { FileText, Download, Info, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";
import { documents } from "../../data/fasiiContent";
import bannerImage from "../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";

const reportRows = [
  { id: 1, category: "Research Report", title: "To be updated", status: "To be updated" },
  { id: 2, category: "Research Report", title: "To be updated", status: "To be updated" },
  { id: 3, category: "Research Report", title: "To be updated", status: "To be updated" },
  { id: 4, category: "Research Report", title: "To be updated", status: "To be updated" },
];

export default function ResearchReports() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Research Reports" image={bannerImage} />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          FASII undertakes research and documentation on issues affecting small
          industries, including policy developments, compliance requirements and
          access to schemes. This section brings together research reports and
          reference material prepared by the federation for member associations.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-slate-950">Report Library</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Reports will be listed here as they are finalised.
            </p>

            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <caption className="sr-only">
                    List of FASII research reports. Entries are to be updated.
                  </caption>
                  <thead className="bg-[#fffaf5]">
                    <tr className="border-b border-slate-200">
                      <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                        Category
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                        Title
                      </th>
                      <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-orange-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportRows.map((row) => (
                      <tr key={row.id} className="border-b border-slate-100 last:border-b-0">
                        <td className="px-5 py-4 align-top">
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                            <FileText size={16} className="text-orange-600" aria-hidden="true" />
                            {row.category}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top text-sm font-medium text-slate-900">
                          {row.title}
                        </td>
                        <td className="px-5 py-4 align-top">
                          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-5">
              <Info size={20} className="mt-0.5 shrink-0 text-orange-600" aria-hidden="true" />
              <p className="text-sm leading-6 text-slate-700">
                Research report titles and download links are being compiled and will
                be published here shortly.
              </p>
            </div>
          </div>

          <aside aria-label="Downloadable documents" className="lg:col-span-1">
            <div className="rounded-lg border border-slate-200 bg-[#fffaf5] p-6">
              <h2 className="text-lg font-semibold text-slate-950">Downloads</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Documents currently available for download from FASII.
              </p>

              <ul className="mt-4 space-y-3">
                {documents.map((document) => (
                  <li key={document.id}>
                    <a
                      href={document.file}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-orange-200"
                    >
                      <Download
                        size={18}
                        className="mt-0.5 shrink-0 text-orange-600"
                        aria-hidden="true"
                      />
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-slate-900 group-hover:text-orange-700">
                          {document.title}
                        </span>
                        <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-orange-700">
                          {document.category}
                        </span>
                      </span>
                      <ExternalLink
                        size={16}
                        className="mt-0.5 shrink-0 text-slate-400"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <Link
                to="/knowledge/policies"
                className="mt-5 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900"
              >
                View all policy documents
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
