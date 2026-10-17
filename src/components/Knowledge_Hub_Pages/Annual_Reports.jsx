import { Link } from "react-router-dom";
import { BookOpen, Download, Calendar, FileText } from "lucide-react";

const annualReports = [
  {
    year: "2025-26",
    title: "FASII Annual Report 2025-26",
    description: "Comprehensive report covering federation activities, programmes, events, policy advocacy, and member services during the financial year 2025-26",
    highlights: [
      "National Conclave with SIDBI",
      "MSME Connect'26 - Vendor Development Programme",
      "4 Regional awareness programmes",
      "Policy representations to 3 ministries",
      "15+ member association events"
    ],
    pages: "82 pages",
    status: "Latest"
  },
  {
    year: "2024-25",
    title: "FASII Annual Report 2024-25",
    description: "Annual activities report detailing federation programmes, policy initiatives, and achievements for the year 2024-25",
    highlights: [
      "Launched regional chairman structure",
      "Organized 12 vendor development programmes",
      "Membership growth of 25%",
      "New partnerships with 5 CPSUs",
      "Published 3 sector studies"
    ],
    pages: "76 pages",
    status: "Available"
  },
  {
    year: "2023-24",
    title: "FASII Annual Report 2023-24",
    description: "Detailed account of FASII's work in strengthening small industries ecosystem through various programmes and advocacy efforts",
    highlights: [
      "Post-pandemic recovery initiatives",
      "Digital transformation programmes",
      "10+ awareness camps across regions",
      "Policy submissions on MSME Bill",
      "International collaboration framework"
    ],
    pages: "68 pages",
    status: "Available"
  },
  {
    year: "2022-23",
    title: "FASII Annual Report 2022-23",
    description: "Report on federation activities, member services, and small industries sector developments during 2022-23",
    highlights: [
      "Expanded to 4 regions nationwide",
      "Quality certification support programme",
      "8 industry exhibitions organized",
      "New member associations onboarded",
      "Financial assistance facilitation"
    ],
    pages: "64 pages",
    status: "Available"
  }
];

export default function AnnualReports() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Annual Reports
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
              <li aria-current="page" className="text-slate-600">Annual Reports</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            Access FASII's annual reports documenting our programmes, achievements, policy initiatives, and contributions to the small industries sector.
          </p>
        </div>

        <div className="space-y-6">
          {annualReports.map((report, index) => (
            <article key={report.year} className={`rounded-lg border-2 p-8 shadow-sm hover:shadow-md transition-all ${
              index === 0 ? 'border-orange-300 bg-orange-50' : 'border-slate-200 bg-white'
            }`}>
              <div className="flex items-start gap-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg ${
                  index === 0 ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-600'
                }`}>
                  <BookOpen size={32} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      {index === 0 && (
                        <span className="inline-block rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                          {report.status}
                        </span>
                      )}
                      <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                        {report.title}
                      </h2>
                      <p className="mt-3 leading-7 text-slate-700">
                        {report.description}
                      </p>

                      <div className="mt-5">
                        <p className="text-sm font-semibold text-orange-700">Key Highlights:</p>
                        <ul className="mt-3 space-y-2">
                          {report.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5 flex items-center gap-6 text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} className="text-orange-600" />
                          FY {report.year}
                        </span>
                        <span className="flex items-center gap-2">
                          <FileText size={16} className="text-orange-600" />
                          {report.pages}
                        </span>
                      </div>
                    </div>

                    <button className={`flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                      index === 0
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'border-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}>
                      <Download size={18} />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-slate-100 p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900">Transparency & Accountability</h3>
            <p className="mt-3 text-slate-700">
              FASII is committed to transparency in its operations. Our annual reports provide detailed information on activities, finances, and impact.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
                About FASII
              </Link>
              <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
