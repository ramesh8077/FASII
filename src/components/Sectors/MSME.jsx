import { Link } from "react-router-dom";
import { FileText, Users, TrendingUp, Award, Download } from "lucide-react";

const msmeInitiatives = [
  {
    icon: Users,
    title: "Vendor Development Programmes",
    description: "FASII organizes vendor development programmes connecting MSMEs with CPSUs and government departments for procurement opportunities."
  },
  {
    icon: TrendingUp,
    title: "Capacity Building",
    description: "Awareness programmes on MSME schemes, quality standards, certification procedures, and long-term sustainability strategies."
  },
  {
    icon: Award,
    title: "Quality & Certification Support",
    description: "Guidance on BIS certification, quality control orders, and compliance with government standards for MSMEs."
  },
  {
    icon: FileText,
    title: "Policy Advocacy",
    description: "Representing MSME concerns to government ministries and advocating for supportive policies and schemes."
  }
];

const schemes = [
  {
    title: "MSME Bill 2026",
    description: "Latest legislative framework for MSMEs with provisions for growth, financing, and regulatory support",
    category: "Legislation"
  },
  {
    title: "PMVBRY Scheme",
    description: "Prime Minister's scheme providing financial assistance and support to viable MSMEs",
    category: "Financial Support"
  },
  {
    title: "Quality Control Orders",
    description: "Government standards ensuring quality compliance and market access for MSME products",
    category: "Quality Standards"
  },
  {
    title: "BIS Certification",
    description: "Simplified certification process for MSME products under Bureau of Indian Standards",
    category: "Certification"
  }
];

export default function MSME() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            MSME Sector
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
                <span className="text-slate-600">Sectors</span>
              </li>
              <li aria-hidden="true" className="text-slate-800">/</li>
              <li aria-current="page" className="text-slate-600">MSME</li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Micro, Small, and Medium Enterprises (MSMEs) form the backbone of India's economy, contributing significantly to employment generation, industrial output, and exports. FASII is dedicated to strengthening this vital sector through advocacy, capacity building, and strategic partnerships.
            </p>
          </div>
        </div>

        {/* FASII's MSME Initiatives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII's MSME Initiatives</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {msmeInitiatives.map((initiative, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <initiative.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{initiative.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent MSME Activities */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Recent MSME Activities</h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-orange-500 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">September-October 2026</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">MSME Connect'26</h3>
              <p className="mt-2 text-sm text-slate-700">
                Vendor Development Programme cum Industrial Exhibition at Virudhunagar, Tamil Nadu, connecting MSMEs with CPSUs and government departments.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">September 2026</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">MSME Awareness Programme</h3>
              <p className="mt-2 text-sm text-slate-700">
                Conducted in association with Armoured Nigam Ltd., Ministry of Defence, and Ministry of MSME at Avadi, Chennai.
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-orange-500 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-orange-700">September 2026</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Industry Address on Sustainability</h3>
              <p className="mt-2 text-sm text-slate-700">
                FASII Southern Regional Chairman addressed Hosur Industrial Association on "MSME Schemes for Long-Term Sustainability."
              </p>
            </div>
          </div>
          <Link to="/media/news" className="mt-6 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
            View all MSME events →
          </Link>
        </div>

        {/* Government Schemes */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key MSME Schemes & Frameworks</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {schemes.map((scheme, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{scheme.category}</p>
                    <h3 className="mt-2 font-semibold text-slate-900">{scheme.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{scheme.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-orange-50 p-6">
            <p className="text-sm font-medium text-slate-900">Download detailed policy documents</p>
            <Link to="/knowledge/policies" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-900">
              <Download size={16} />
              Access Policy Documents
            </Link>
          </div>
        </div>

        {/* MSME Definition */}
        <div className="mb-12 rounded-lg bg-slate-100 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">MSME Classification</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="pb-3 text-left font-semibold text-slate-900">Category</th>
                  <th className="pb-3 text-left font-semibold text-slate-900">Investment</th>
                  <th className="pb-3 text-left font-semibold text-slate-900">Turnover</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 font-medium text-slate-900">Micro Enterprise</td>
                  <td className="py-3 text-slate-700">Up to ₹1 Crore</td>
                  <td className="py-3 text-slate-700">Up to ₹5 Crore</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-900">Small Enterprise</td>
                  <td className="py-3 text-slate-700">Up to ₹10 Crore</td>
                  <td className="py-3 text-slate-700">Up to ₹50 Crore</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-slate-900">Medium Enterprise</td>
                  <td className="py-3 text-slate-700">Up to ₹50 Crore</td>
                  <td className="py-3 text-slate-700">Up to ₹250 Crore</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            As per the revised MSME definition under the MSME Act
          </p>
        </div>

        {/* Contact CTA */}
        <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Support for MSMEs</h3>
          <p className="mt-3 text-slate-700">
            FASII continues to work towards creating an enabling environment for MSMEs through policy advocacy, capacity building, and strategic partnerships.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Contact FASII
            </Link>
            <Link to="/media/news" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              View MSME Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}