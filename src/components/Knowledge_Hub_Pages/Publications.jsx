import { Link } from "react-router-dom";
import { BookOpen, Download, Calendar } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "FASII Annual Report 2025-26",
    description: "Comprehensive report on FASII activities, programmes, and achievements for the year 2025-26",
    date: "September 2026",
    type: "Annual Report",
    pages: "64 pages"
  },
  {
    id: 2,
    title: "Small Industries in India: Growth and Challenges",
    description: "Analysis of the small industries sector covering growth trends, challenges, and opportunities",
    date: "August 2026",
    type: "Research Study",
    pages: "42 pages"
  },
  {
    id: 3,
    title: "Vendor Development Best Practices Guide",
    description: "Comprehensive guide for MSMEs on vendor development and procurement opportunities with government departments",
    date: "July 2026",
    type: "Handbook",
    pages: "28 pages"
  },
  {
    id: 4,
    title: "MSME Schemes Compendium 2026",
    description: "Complete compilation of central and state government schemes available for micro, small and medium enterprises",
    date: "June 2026",
    type: "Reference Guide",
    pages: "156 pages"
  },
  {
    id: 5,
    title: "Quality Standards and Certification for MSMEs",
    description: "Guide to quality control orders, BIS certification, and compliance requirements for small industries",
    date: "May 2026",
    type: "Technical Guide",
    pages: "38 pages"
  },
  {
    id: 6,
    title: "Regional Industrial Development - Quarterly Bulletin",
    description: "Quarterly bulletin featuring regional industrial developments, member association updates, and policy changes",
    date: "April 2026",
    type: "Bulletin",
    pages: "24 pages"
  }
];

export default function Publications() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Publications
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
              <li>
                <Link to="/" className="transition-colors hover:text-orange-600">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-800">/</li>
              <li>
                <span className="text-slate-600">Knowledge Hub</span>
              </li>
              <li aria-hidden="true" className="text-slate-800">/</li>
              <li aria-current="page" className="text-slate-600">Publications</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            Access FASII's publications including annual reports, research studies, handbooks, and bulletins on small industries sector.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <article key={publication.id} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <BookOpen size={28} />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                {publication.type}
              </p>

              <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                {publication.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {publication.description}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {publication.date}
                </span>
                <span>{publication.pages}</span>
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors">
                <Download size={16} />
                Download PDF
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Request Publications</h3>
          <p className="mt-3 text-slate-700">
            Need a printed copy or older publications? Contact the National Secretariat for assistance.
          </p>
          <Link to="/about/office-bearers" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
            Contact Secretariat
          </Link>
        </div>
      </section>
    </main>
  );
}
