import { Link } from "react-router-dom";
import { FileText, TrendingUp, Download, Calendar } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "MSME Sector Performance Analysis 2025-26",
    description: "Comprehensive analysis of MSME sector performance, covering production, exports, employment, and growth trends across different regions of India",
    date: "October 2026",
    category: "Sector Analysis",
    pages: "78 pages",
    highlights: ["Regional growth patterns", "Export performance", "Employment data"]
  },
  {
    id: 2,
    title: "Impact of Quality Control Orders on Small Industries",
    description: "Research study examining the implementation and impact of Quality Control Orders on small and medium enterprises",
    date: "September 2026",
    category: "Policy Impact",
    pages: "52 pages",
    highlights: ["Compliance challenges", "Cost implications", "Market access"]
  },
  {
    id: 3,
    title: "Vendor Development Programmes: Success Stories",
    description: "Case studies and best practices from successful vendor development initiatives connecting MSMEs with government departments and CPSUs",
    date: "August 2026",
    category: "Case Studies",
    pages: "64 pages",
    highlights: ["Success factors", "Partnership models", "Lessons learned"]
  },
  {
    id: 4,
    title: "Small Industries and Digital Transformation",
    description: "Study on digital adoption among small industries, challenges faced, and opportunities for technology-driven growth",
    date: "July 2026",
    category: "Technology",
    pages: "48 pages",
    highlights: ["Digital readiness", "Technology barriers", "Best practices"]
  },
  {
    id: 5,
    title: "Access to Finance for MSMEs: Trends and Challenges",
    description: "Analysis of financing patterns, institutional support, and challenges faced by MSMEs in accessing credit and working capital",
    date: "June 2026",
    category: "Finance",
    pages: "56 pages",
    highlights: ["Credit gap analysis", "Institutional lending", "Alternative finance"]
  }
];

export default function ResearchReports() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Research Reports
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
              <li aria-current="page" className="text-slate-600">Research Reports</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            Explore in-depth research reports on small industries sector covering policy analysis, sector studies, and impact assessments.
          </p>
        </div>

        <div className="space-y-6">
          {reports.map((report) => (
            <article key={report.id} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <FileText size={28} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                        {report.category}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold text-slate-900">
                        {report.title}
                      </h2>
                      <p className="mt-3 leading-7 text-slate-700">
                        {report.description}
                      </p>

                      <div className="mt-4 flex items-center gap-6 text-sm text-slate-600">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} className="text-orange-600" />
                          {report.date}
                        </span>
                        <span>{report.pages}</span>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Key Highlights:</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {report.highlights.map((highlight, index) => (
                            <span key={index} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <button className="flex shrink-0 items-center gap-2 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors">
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
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <TrendingUp size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-900">Research Collaboration</h3>
              <p className="mt-2 text-sm text-slate-700">
                FASII welcomes collaboration opportunities with academic institutions, research organizations, and industry bodies for conducting research on small industries sector. For partnership inquiries, please contact the National Secretariat.
              </p>
              <Link to="/about/office-bearers" className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
