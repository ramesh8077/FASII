import { FileText, Download } from "lucide-react";
import PageHero from "../Layout/common/PageHero";
import { documents } from "../../data/fasiiContent";

export default function Policy_Documents() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Policy Documents" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="border-l-4 border-amber-500 bg-[#fff8ec] px-5 py-4">
          <p className="max-w-4xl text-base leading-7 text-slate-800">
            This section brings together policy documents, government schemes,
            standards and certification material of relevance to small industries.
            Documents made available below are published for the information of FASII
            member associations and the wider MSME community.
          </p>
        </div>

        <div className="mt-8 border border-orange-200 bg-white">
          <div className="bg-orange-700 px-6 py-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Document Directory
            </h2>
          </div>
          
          <ul className="divide-y divide-orange-100">
            {documents.map((document) => (
              <li
                key={document.id}
                className="flex flex-col gap-4 p-6 transition-colors hover:bg-[#fffaf5] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <FileText className="mt-1 shrink-0 text-orange-400" size={24} aria-hidden="true" />
                  <div>
                    <span className="mb-1 inline-block border border-orange-200 bg-orange-50 px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-orange-800">
                      {document.category}
                    </span>
                    <h3 className="text-lg font-bold text-orange-950">
                      {document.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {document.description}
                    </p>
                  </div>
                </div>

                <a
                  href={document.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 border border-orange-600 bg-white px-4 py-2.5 text-sm font-bold text-orange-700 transition-colors hover:bg-orange-50 hover:text-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <Download size={16} aria-hidden="true" />
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}