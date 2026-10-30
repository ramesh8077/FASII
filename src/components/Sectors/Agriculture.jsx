import { Link } from "react-router-dom";
import { Sprout, Users, TrendingUp, Factory, Leaf, Package } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Sprout,
    title: "Agro-Processing MSMEs",
    description: "Supporting small-scale food processing units, value addition enterprises, and farm-to-market linkage initiatives for agricultural products."
  },
  {
    icon: Factory,
    title: "Farm Equipment Manufacturing",
    description: "Promoting small industries engaged in manufacturing agricultural tools, equipment, and machinery for modernization of farming practices."
  },
  {
    icon: Package,
    title: "Agricultural Input Supply",
    description: "Facilitating MSMEs in production and distribution of seeds, fertilizers, bio-pesticides, and other agricultural inputs."
  },
  {
    icon: Leaf,
    title: "Organic & Sustainable Agriculture",
    description: "Encouraging small enterprises in organic farming inputs, bio-fertilizers, vermicompost, and sustainable agriculture solutions."
  }
];

const challenges = [
  {
    challenge: "Market Access & Price Realization",
    solution: "Facilitating linkages with organized retail, food processing companies, and export markets for better price realization."
  },
  {
    challenge: "Technology & Modernization",
    solution: "Promoting adoption of modern processing technologies, cold chain infrastructure, and quality certification for agro-MSMEs."
  },
  {
    challenge: "Working Capital & Credit",
    solution: "Advocacy for accessible institutional credit, working capital support, and credit guarantee schemes for agriculture-linked MSMEs."
  },
  {
    challenge: "Quality Standards & Certification",
    solution: "Assistance in achieving FSSAI, organic certifications, and compliance with quality standards for market access."
  }
];

const keyAreas = [
  "Food Processing & Value Addition",
  "Agricultural Equipment Manufacturing",
  "Organic Input Production",
  "Cold Chain & Storage Solutions",
  "Agro-Chemical Manufacturing",
  "Seed Processing & Distribution",
  "Agricultural Tools & Implements",
  "Farm Mechanization Equipment"
];

export default function Agriculture() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Agriculture & Allied Industries" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Agriculture remains the backbone of India's economy, and small industries play a crucial role in the agricultural value chain. FASII supports MSMEs engaged in agro-processing, farm equipment manufacturing, agricultural input production, and allied activities that strengthen the agriculture sector and enhance farmer incomes.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support Areas in Agriculture Sector</h2>
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
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Focus Areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keyAreas.map((area, index) => (
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

        <div className="mb-12 rounded-lg bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Agriculture MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PM Formalization of Micro Food Processing Enterprises (PMFME):</strong> Financial, technical and business support for micro food processing enterprises</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Agriculture Infrastructure Fund:</strong> Financing facility for agri-entrepreneurs and MSMEs for post-harvest management infrastructure</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Credit Linked Capital Subsidy Scheme (CLCSS):</strong> Technology upgradation support for food processing MSMEs</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Sub-Mission on Agricultural Mechanization (SMAM):</strong> Support for farm machinery manufacturing and custom hiring centers</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Agriculture-Allied MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII member associations provide guidance on government schemes, market linkages, technology adoption, and compliance support for MSMEs in the agriculture and allied sectors.
          </p>
          <div className="mt-6">
            <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Connect with Member Associations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}