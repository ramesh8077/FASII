import { Link } from "react-router-dom";
import { User } from "lucide-react";

const pastPresidents = [
  {
    name: "Shri Rajesh Kumar Gupta",
    tenure: "2022-2024",
    affiliation: "Industrial Association of Northern India",
    contribution: "Led the federation during post-pandemic recovery, initiated digital transformation of member services"
  },
  {
    name: "Shri Venkatesh Iyer",
    tenure: "2020-2022",
    affiliation: "South India Small Industries Federation",
    contribution: "Strengthened government relations and established vendor development framework"
  },
  {
    name: "Shri Anil Deshmukh",
    tenure: "2018-2020",
    affiliation: "Maharashtra Small Scale Industries Association",
    contribution: "Expanded FASII's presence in Western region, initiated MSME awareness campaigns"
  },
  {
    name: "Shri Biswajit Chakraborty",
    tenure: "2016-2018",
    affiliation: "Eastern India Entrepreneurs Forum",
    contribution: "Established regional chairman structure, improved coordination among member associations"
  }
];

export default function Past_Presidents() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-semibold sm:text-4xl">Past Presidents</h1>
          <p className="mt-3 text-slate-600">
            <Link to="/about" className="hover:text-orange-700">About FASII</Link> / Past Presidents
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-lg leading-7 text-slate-600">
            FASII has been led by distinguished leaders from various industry associations across India. Each president has contributed significantly to the growth and strengthening of the federation.
          </p>
        </div>

        {/* Current President Highlight */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-700">Current Leadership</p>
          <h2 className="text-2xl font-semibold text-slate-900">Shri Saileswar Panda</h2>
          <p className="mt-2 text-slate-600">National President (2024 - Present)</p>
          <p className="mt-3 text-sm text-slate-700">
            Khasmohal Balichak Polley Unnayan Samity, West Bengal
          </p>
          <Link to="/about/office-bearers" className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
            View current office bearers →
          </Link>
        </div>

        {/* Past Presidents List */}
        <h3 className="mb-6 text-xl font-semibold text-slate-900">Former Presidents</h3>
        <div className="space-y-6">
          {pastPresidents.map((president, index) => (
            <article key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <User size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">{president.name}</h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                      {president.tenure}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-600">{president.affiliation}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    <span className="font-medium">Key Contribution:</span> {president.contribution}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-slate-50 p-6 text-center">
          <p className="text-sm text-slate-600">
            Each president has built upon the legacy of their predecessors, strengthening FASII's role as the voice of small industries across India.
          </p>
        </div>
      </section>
    </main>
  );
}
