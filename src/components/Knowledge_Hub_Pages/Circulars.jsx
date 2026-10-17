import { Link } from "react-router-dom";
import { FileText, Calendar, Download } from "lucide-react";

const circulars = [
  {
    id: 1,
    title: "MSME Registration and Udyam Portal Updates",
    date: "15 September 2026",
    description: "Important updates regarding Udyam Registration process and documentation requirements for MSMEs",
    category: "Registration"
  },
  {
    id: 2,
    title: "Quality Control Order Implementation Timeline",
    date: "1 September 2026",
    description: "Circular on implementation schedule for Quality Control Orders affecting small industries",
    category: "Compliance"
  },
  {
    id: 3,
    title: "BIS Certification - Simplified Procedure Notice",
    date: "20 August 2026",
    description: "Updated guidelines for simplified BIS product certification process for MSMEs",
    category: "Certification"
  },
  {
    id: 4,
    title: "MSME Vendor Development Programme Guidelines",
    date: "10 August 2026",
    description: "Framework and participation guidelines for vendor development programmes with CPSUs",
    category: "Programmes"
  },
  {
    id: 5,
    title: "Financial Assistance Schemes - Application Process",
    date: "25 July 2026",
    description: "Step-by-step guide for applying to government financial assistance schemes for small industries",
    category: "Finance"
  }
];

export default function Circulars() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Circulars
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
              <li aria-current="page" className="text-slate-600">Circulars</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            Stay updated with important circulars, notifications, and guidelines from FASII and relevant government departments affecting small industries.
          </p>
        </div>

        <div className="space-y-5">
          {circulars.map((circular) => (
            <article key={circular.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                        {circular.category}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-slate-900">
                        {circular.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {circular.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                        <Calendar size={16} />
                        {circular.date}
                      </div>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-slate-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900">Stay Informed</h3>
          <p className="mt-3 text-sm text-slate-700">
            Subscribe to receive the latest circulars and updates from FASII directly to your inbox. Contact your regional chairman for subscription details.
          </p>
          <Link to="/about/office-bearers" className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
            View Regional Contacts →
          </Link>
        </div>
      </section>
    </main>
  );
}
