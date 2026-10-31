import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Info } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const publicationRows = [
  { id: 1, category: "Handbook", title: "MSME Guidelines (Upcoming)", status: "Pending" },
  { id: 2, category: "Journal", title: "Industry Updates", status: "Pending" },
  { id: 3, category: "Manual", title: "Compliance Directory", status: "Pending" },
];

const relatedLinks = [
  { label: "Research Reports", to: "/knowledge/reports" },
  { label: "Policy Documents", to: "/knowledge/policies" },
  { label: "Public Downloads", to: "/services/downloads" },
];

export default function Publications() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Publications" />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_280px] lg:px-12">
        <div>
          <p className="text-base leading-7 text-slate-700">
            FASII periodically brings out publications for its member associations and
            the wider small industries community. These include reference material,
            handbooks and compilations that support micro, small and medium enterprises.
          </p>

          <div className="mt-8 border border-orange-200">
            <div className="bg-orange-700 px-5 py-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Official Publications List
              </h2>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                <thead className="border-b-2 border-orange-200 bg-orange-50">
                  <tr>
                    <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">Category</th>
                    <th scope="col" className="border-r border-orange-100 px-5 py-3.5 font-bold text-orange-900">Publication Title</th>
                    <th scope="col" className="px-5 py-3.5 font-bold text-orange-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100">
                  {publicationRows.map((row) => (
                    <tr key={row.id} className="hover:bg-[#fff8ec]">
                      <td className="align-top border-r border-orange-100 px-5 py-4">
                        <span className="flex items-center gap-2 font-medium text-slate-700">
                          <BookOpen size={16} className="text-orange-500" />
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

          <div className="mt-8 flex gap-4 border-l-4 border-amber-500 bg-[#fff8ec] p-5">
            <Info className="mt-0.5 shrink-0 text-orange-600" size={20} aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">
              Publication titles, editions and download links are being compiled and
              will be updated officially shortly.
            </p>
          </div>
        </div>

        <aside>
          <div className="border border-orange-200 bg-white">
            <h2 className="border-b border-orange-200 bg-orange-50 px-5 py-3 text-sm font-bold uppercase tracking-wider text-orange-900">
              Related Links
            </h2>
            <ul className="divide-y divide-orange-100">
              {relatedLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#fff8ec] hover:text-orange-700"
                  >
                    {link.label}
                    <ChevronRight size={16} className="text-orange-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}