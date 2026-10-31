import { Link } from "react-router-dom";
import { Building2, CreditCard, Shield, Landmark, ChevronRight, ExternalLink } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  { icon: Building2, title: "MSME Credit Access", description: "Advocacy for easier access to institutional credit, working capital loans, and term loans for small industries through simplified processes and credit guarantee schemes." },
  { icon: CreditCard, title: "Digital Financial Services", description: "Promoting adoption of digital banking, online payment systems, and fintech solutions for MSMEs to improve financial management and operational efficiency." },
  { icon: Shield, title: "Credit Guarantee Schemes", description: "Facilitating access to CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) and other guarantee schemes for collateral-free loans." },
  { icon: Landmark, title: "Financial Literacy Programs", description: "Conducting workshops and awareness programs on financial planning, credit management, and government financial schemes for MSME entrepreneurs." }
];

const challenges = [
  { challenge: "Limited Access to Formal Credit", solution: "FASII works with banks and financial institutions to simplify loan procedures and increase credit flow to member MSMEs through priority sector lending initiatives." },
  { challenge: "High Collateral Requirements", solution: "Advocacy for wider adoption of CGTMSE and alternative credit assessment methods based on cash flows and business viability rather than just collateral." },
  { challenge: "Delayed Payment Realization", solution: "Promoting TReDS (Trade Receivables Discounting System) platform and invoice financing solutions for faster working capital realization." },
  { challenge: "Lack of Financial Awareness", solution: "Regular financial literacy programs, one-on-one counseling, and handholding support for MSMEs to navigate banking and financial services." }
];

const financialSchemes = [
  { name: "CGTMSE - Credit Guarantee Scheme", description: "Collateral-free loans up to ₹5 crore for micro and small enterprises with 85% guarantee coverage", eligibility: "Micro and small enterprises, both existing and new" },
  { name: "MUDRA Loans", description: "Funding for non-corporate, non-farm small/micro enterprises up to ₹10 lakh under Shishu, Kishore, and Tarun categories", eligibility: "Individual entrepreneurs, proprietorships, partnerships, and registered companies" },
  { name: "Stand-Up India Scheme", description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs for greenfield enterprises", eligibility: "SC/ST and women entrepreneurs starting new manufacturing, services or trading sector enterprises" },
  { name: "PM SVANidhi Scheme", description: "Working capital loan up to ₹50,000 for street vendors with digital transaction incentives", eligibility: "Street vendors engaged in vending activities as on or before March 24, 2020" }
];

const bankingSupport = [
  "Priority Sector Lending Advocacy", "Loan Application Assistance", "CGTMSE Registration Support",
  "TReDS Platform Facilitation", "Financial Planning Guidance", "Credit Rating Advisory",
  "Working Capital Management", "Government Scheme Awareness"
];

export default function Banking() {
  return (
    <main className="bg-white text-slate-900 font-sans">
      <PageHero title="Banking & Finance" />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="border-l-4 border-[#b45309] bg-slate-50 px-5 py-4 border border-y-slate-300 border-r-slate-300 mb-8">
          <p className="text-sm leading-7 text-slate-800 text-justify">
            <strong className="text-orange-900">Background Overview:</strong> Access to adequate and timely finance is critical for MSME growth and sustainability. FASII actively engages with banks, financial institutions, and government agencies to improve credit availability, simplify lending procedures, and promote financial inclusion for small industries across India.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-8">
            
            {/* Image 1: Main Sector Banner */}
            <div className="border border-slate-300 bg-slate-50 p-2">
               {/* IMAGE 1: 100% Working Live Image */}
              <img 
                src="https://loremflickr.com/1200/400/finance,banking/all" 
                alt="Financial planning and digital banking metrics" 
                className="w-full h-72 object-cover border border-slate-300"
              />
              <div className="bg-[#b45309] border-t-4 border-amber-500 p-2 mt-2">
                <p className="text-xs text-white font-bold tracking-wider text-center uppercase">Institutional Credit and Financial Literacy</p>
              </div>
            </div>

            {/* 1. Support Areas */}
            <div className="border border-slate-300">
              <div className="bg-slate-800 px-4 py-2.5 border-b-4 border-[#b45309]">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  FASII Banking & Finance Initiatives
                </h2>
              </div>
              <div className="bg-white grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                {initiatives.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2 p-5 hover:bg-orange-50/40">
                    <item.icon size={28} className="text-[#b45309]" />
                    <h3 className="text-sm font-bold text-slate-900 mt-2">{item.title}</h3>
                    <p className="text-xs leading-5 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Challenges & Solutions */}
            <div className="border border-slate-300">
              <div className="bg-[#b45309] px-4 py-2.5 border-b-4 border-amber-500">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Sector Challenges & FASII Solutions
                </h2>
              </div>
              <div className="overflow-x-auto bg-white">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-amber-100 border-b border-slate-300">
                    <tr>
                      <th className="w-1/3 px-4 py-3 font-bold text-orange-950 border-r border-slate-300">Identified Challenge</th>
                      <th className="w-2/3 px-4 py-3 font-bold text-orange-950">Strategic Intervention / Solution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {challenges.map((item, index) => (
                      <tr key={index} className="hover:bg-orange-50/55">
                        <td className="px-4 py-3 font-semibold text-slate-800 border-r border-slate-300 align-top">
                          {item.challenge}
                        </td>
                        <td className="px-4 py-3 text-slate-700 align-top">
                          {item.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image 2 + Government Schemes */}
            <div className="border border-slate-300 flex flex-col sm:flex-row bg-white">
              <div className="w-full sm:w-2/5 border-b sm:border-b-0 sm:border-r border-slate-300 bg-slate-100 p-2">
                 {/* IMAGE 2: 100% Working Live Image */}
                 <img 
                  src="https://loremflickr.com/600/400/meeting,business/all" 
                  alt="Business meeting for bank financing" 
                  className="w-full h-full object-cover min-h-[200px] border border-slate-300"
                />
              </div>
              <div className="w-full sm:w-3/5">
                <div className="bg-amber-500 px-4 py-2.5 border-b border-amber-600">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-orange-950">
                    Government Financial Schemes
                  </h2>
                </div>
                <div className="bg-white p-5 overflow-y-auto max-h-[300px]">
                  <ul className="list-disc pl-4 space-y-3 text-sm text-slate-700 marker:text-[#b45309]">
                    {financialSchemes.map((scheme, index) => (
                      <li key={index}>
                        <strong className="text-slate-900 block mb-0.5">{scheme.name}:</strong> 
                        <span className="block mb-1">{scheme.description}</span>
                        <span className="text-xs font-semibold text-orange-800 border border-orange-200 bg-orange-50 px-2 py-0.5">Target: {scheme.eligibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>

          <aside className="space-y-6">
            
            {/* Image 3: Sidebar Focus */}
            <div className="border border-slate-300 bg-white">
              <div className="p-2 bg-slate-50 border-b border-slate-300">
                 {/* IMAGE 3: 100% Working Live Image */}
                <img 
                  src="https://loremflickr.com/400/400/money,digital/all" 
                  alt="Digital and mobile banking concept" 
                  className="w-full h-40 object-cover border border-slate-300"
                />
              </div>
              <div className="bg-[#b45309] px-4 py-2.5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                  Key Financial Support Areas
                </h2>
              </div>
              <ul className="divide-y divide-slate-200 max-h-96 overflow-y-auto">
                {bankingSupport.map((area, index) => (
                  <li key={index}>
                    <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#b45309] transition-colors">
                      <ChevronRight size={16} className="text-amber-500 mr-2 shrink-0" />
                      {area}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Callout Box */}
            <div className="border-2 border-[#b45309] bg-[#fff8ec] p-5 text-center">
              <h3 className="text-sm font-bold text-orange-950 uppercase border-b border-amber-300 pb-2 mb-3">
                Need Financial Assistance?
              </h3>
              <p className="text-sm leading-6 text-slate-700 mb-4">
                FASII member associations provide guidance on loan applications, scheme eligibility, and connections with banking institutions.
              </p>
              <Link to="/about/allied-organisations" className="inline-flex w-full items-center justify-center gap-2 bg-[#b45309] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-900 border border-orange-950">
                <ExternalLink size={16} /> Connect with Associations
              </Link>
            </div>
            
          </aside>
        </div>
      </section>
    </main>
  );
}