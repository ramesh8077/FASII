import { Link } from "react-router-dom";
import { Building2, CreditCard, TrendingUp, Shield, Landmark, Users } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Building2,
    title: "MSME Credit Access",
    description: "Advocacy for easier access to institutional credit, working capital loans, and term loans for small industries through simplified processes and credit guarantee schemes."
  },
  {
    icon: CreditCard,
    title: "Digital Financial Services",
    description: "Promoting adoption of digital banking, online payment systems, and fintech solutions for MSMEs to improve financial management and operational efficiency."
  },
  {
    icon: Shield,
    title: "Credit Guarantee Schemes",
    description: "Facilitating access to CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) and other guarantee schemes for collateral-free loans."
  },
  {
    icon: Landmark,
    title: "Financial Literacy Programs",
    description: "Conducting workshops and awareness programs on financial planning, credit management, and government financial schemes for MSME entrepreneurs."
  }
];

const challenges = [
  {
    challenge: "Limited Access to Formal Credit",
    solution: "FASII works with banks and financial institutions to simplify loan procedures and increase credit flow to member MSMEs through priority sector lending initiatives."
  },
  {
    challenge: "High Collateral Requirements",
    solution: "Advocacy for wider adoption of CGTMSE and alternative credit assessment methods based on cash flows and business viability rather than just collateral."
  },
  {
    challenge: "Delayed Payment Realization",
    solution: "Promoting TReDS (Trade Receivables Discounting System) platform and invoice financing solutions for faster working capital realization."
  },
  {
    challenge: "Lack of Financial Awareness",
    solution: "Regular financial literacy programs, one-on-one counseling, and handholding support for MSMEs to navigate banking and financial services."
  }
];

const financialSchemes = [
  {
    name: "CGTMSE - Credit Guarantee Scheme",
    description: "Collateral-free loans up to ₹5 crore for micro and small enterprises with 85% guarantee coverage",
    eligibility: "Micro and small enterprises, both existing and new"
  },
  {
    name: "MUDRA Loans",
    description: "Funding for non-corporate, non-farm small/micro enterprises up to ₹10 lakh under Shishu, Kishore, and Tarun categories",
    eligibility: "Individual entrepreneurs, proprietorships, partnerships, and registered companies"
  },
  {
    name: "Stand-Up India Scheme",
    description: "Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs for greenfield enterprises",
    eligibility: "SC/ST and women entrepreneurs starting new manufacturing, services or trading sector enterprises"
  },
  {
    name: "PM SVANidhi Scheme",
    description: "Working capital loan up to ₹50,000 for street vendors with digital transaction incentives",
    eligibility: "Street vendors engaged in vending activities as on or before March 24, 2020"
  }
];

const bankingSupport = [
  "Priority Sector Lending Advocacy",
  "Loan Application Assistance",
  "CGTMSE Registration Support",
  "TReDS Platform Facilitation",
  "Financial Planning Guidance",
  "Credit Rating Advisory",
  "Working Capital Management",
  "Government Scheme Awareness"
];

export default function Banking() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Banking & Finance" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Access to adequate and timely finance is critical for MSME growth and sustainability. FASII actively engages with banks, financial institutions, and government agencies to improve credit availability, simplify lending procedures, and promote financial inclusion for small industries across India.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Banking & Finance Initiatives</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {initiatives.map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-700">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Financial Support Areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {bankingSupport.map((area, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="h-2 w-2 shrink-0 rounded-full bg-orange-600" />
                <span className="text-sm font-medium text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Challenges & FASII Solutions</h2>
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-900">{item.challenge}</h3>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-medium text-orange-700">FASII Solution:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Government Financial Schemes for MSMEs</h2>
          <div className="space-y-4">
            {financialSchemes.map((scheme, index) => (
              <div key={index} className="rounded-lg border-2 border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{scheme.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{scheme.description}</p>
                <p className="mt-3 text-xs text-slate-600">
                  <span className="font-semibold text-orange-700">Eligibility:</span> {scheme.eligibility}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-lg bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Banking Partnerships & Advocacy</h2>
          <p className="mb-4 text-slate-700">
            FASII maintains regular dialogue with:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Public Sector Banks</h3>
              <p className="mt-2 text-sm text-slate-600">
                Facilitating MSME credit camps, loan melas, and simplified lending procedures through PSU banks
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">SIDBI & Development Institutions</h3>
              <p className="mt-2 text-sm text-slate-600">
                Coordination for specialized MSME financing schemes, credit support, and capacity building programs
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Regional Rural Banks</h3>
              <p className="mt-2 text-sm text-slate-600">
                Partnering with RRBs for rural MSME credit facilitation and financial inclusion initiatives
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Fintech & NBFCs</h3>
              <p className="mt-2 text-sm text-slate-600">
                Exploring alternative financing channels and digital lending platforms for quick credit access
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Need Financial Assistance for Your MSME?</h3>
          <p className="mt-3 text-slate-700">
            FASII member associations provide guidance on loan applications, scheme eligibility, and connections with banking institutions for credit facilitation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Connect with Member Associations
            </Link>
            <Link to="/services/downloads" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Download Scheme Guidelines
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}