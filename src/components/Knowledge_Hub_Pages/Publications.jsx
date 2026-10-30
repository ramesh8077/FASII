import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Info } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const publicationRows = [
  { id: 1, category: "Publication", title: "Title to be updated", status: "Records being compiled" },
  { id: 2, category: "Publication", title: "Title to be updated", status: "Records being compiled" },
  { id: 3, category: "Publication", title: "Title to be updated", status: "Records being compiled" },
  { id: 4, category: "Publication", title: "Title to be updated", status: "Records being compiled" },
];

const relatedLinks = [
  { label: "Research Reports", to: "/knowledge/reports" },
  { label: "Policy Documents", to: "/knowledge/policies" },
  { label: "Downloads", to: "/services/downloads" },
];

export default function Publications() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Publications" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          FASII periodically brings out publications for its member associations and
          the wider small industries community. These include reference material,
          handbooks and compilations that support micro, small and medium enterprises
          in their day-to-day operations and in engaging with government programmes.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <caption className="sr-only">
                List of FASII publications. Titles and records are being compiled.
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
                {publicationRows.map((row) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-b-0">
                    <td className="px-5 py-4 align-top">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <BookOpen size={16} className="text-orange-600" aria-hidden="true" />
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

        <div className="mt-10 flex items-start gap-4 rounded-lg border border-orange-200 bg-orange-50 p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <Info size={22} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Details will be published shortly</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Publication titles, editions and download links are being compiled and
              will be published here shortly. In the meantime, please refer to the
              related sections below or contact the National Secretariat for assistance.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-slate-950">Related sections</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:border-orange-200 hover:text-orange-700"
              >
                {link.label}
                <ArrowRight
                  size={18}
                  className="text-orange-600 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
