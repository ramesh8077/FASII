import { FileText, Download } from "lucide-react";
import PageHero from "../Layout/common/PageHero";
import { documents } from "../../data/fasiiContent";

export default function Policy_Documents() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Policy Documents" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          This section brings together policy documents, government schemes,
          standards and certification material of relevance to small industries.
          Documents made available below are published for the information of FASII
          member associations and the wider MSME community.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {documents.map((document) => (
            <article
              key={document.id}
              className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <FileText size={24} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-700">
                    {document.category}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">
                    {document.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {document.description}
                  </p>
                </div>
              </div>

              <a
                href={document.file}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-orange-700 transition-colors hover:text-orange-900"
              >
                <Download size={16} aria-hidden="true" />
                Download PDF
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
