import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";

const policyDocuments = [
  {
    id: "msme-bill",
    title: "MSME Bill 2026",
    description: "Latest MSME legislation and policy framework document outlining key provisions for small and medium enterprises.",
    file: "/documents/MSME_Bill_2026.pdf",
    category: "Policy & Legislation",
    date: "2026"
  },
  {
    id: "pmvbry",
    title: "PMVBRY - Final",
    description: "Prime Minister's scheme documentation with guidelines and implementation framework.",
    file: "/documents/PMVBRY-Final.pdf",
    category: "Government Schemes",
    date: "2026"
  },
  {
    id: "quality-control",
    title: "Quality Control Order of the Govt. of India",
    description: "Government of India's quality control standards, compliance requirements and guidelines for industries.",
    file: "/documents/Quality Control Order of the Govt. of India.pdf",
    category: "Standards & Compliance",
    date: "2026"
  },
  {
    id: "bis-certification",
    title: "Bureau of Indian Standards - Product Certification",
    description: "Simplified procedure for BIS product certification - guidelines for manufacturers and small industries.",
    file: "/documents/Bureau of Indian Standards - Product Certification - Simplified Procedure.pdf",
    category: "Certification",
    date: "2026"
  }
];

export default function Policy_Documents() {
  return (
    <main className="bg-white text-slate-900">
      {/* Page title and breadcrumb */}
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Policy Documents
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true" className="text-slate-800">
                /
              </li>

              <li>
                <span className="text-slate-600">Knowledge Hub</span>
              </li>

              <li aria-hidden="true" className="text-slate-800">
                /
              </li>

              <li aria-current="page" className="text-slate-600">
                Policy Documents
              </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Documents Section */}
      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            Access important policy documents, government schemes, quality standards, and certification guidelines relevant to small industries and MSMEs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {policyDocuments.map((doc) => (
            <article
              key={doc.id}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <FileText size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    {doc.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">
                    {doc.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {doc.description}
                  </p>
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition-colors hover:text-orange-900"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}