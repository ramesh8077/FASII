import { Link } from "react-router-dom";
import { Factory, Cog, Package, Wrench, Box, Settings } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Factory,
    title: "Diverse Manufacturing Base",
    description: "Supporting MSMEs across engineering goods, electronics, textiles, chemicals, plastics, metal fabrication, and consumer goods manufacturing."
  },
  {
    icon: Cog,
    title: "Make in India Support",
    description: "Facilitating manufacturing MSMEs to participate in Make in India initiative, domestic value addition, and import substitution opportunities."
  },
  {
    icon: Settings,
    title: "Technology Upgradation",
    description: "Promoting adoption of modern manufacturing technologies, automation, Industry 4.0 solutions, and quality improvement initiatives."
  },
  {
    icon: Package,
    title: "Supply Chain Integration",
    description: "Connecting MSME manufacturers with large industries, OEMs, government procurement, and export markets for sustainable growth."
  }
];

const focusAreas = [
  "Engineering & Metal Products",
  "Electronics Manufacturing",
  "Textile & Garment Production",
  "Plastic & Rubber Products",
  "Chemical Manufacturing",
  "Food Processing Units",
  "Auto Component Manufacturing",
  "Consumer Goods Production",
  "Packaging Materials",
  "Furniture Manufacturing",
  "Leather & Footwear",
  "Handicrafts & Artisan Products"
];

const challenges = [
  {
    challenge: "Technology & Modernization",
    solution: "Facilitating technology upgradation schemes, ZED certification, and access to modern machinery through CLCSS and other subsidy programs."
  },
  {
    challenge: "Quality Standards & Certifications",
    solution: "Support for achieving ISO certifications, BIS standards, industry-specific quality marks, and export-oriented certifications."
  },
  {
    challenge: "Raw Material Access & Pricing",
    solution: "Advocacy for stable raw material supply, price stabilization mechanisms, and direct linkages with material suppliers."
  },
  {
    challenge: "Market Access & Competition",
    solution: "Facilitating buyer-seller meets, participation in trade fairs, GeM registration, and connections with anchor industries for vendor development."
  }
];

export default function Manufacturing() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Manufacturing Sector" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Manufacturing is the backbone of India's industrial economy and MSMEs constitute the largest segment of the manufacturing sector. From traditional industries to modern high-tech manufacturing, small industries contribute significantly to employment, exports, and economic growth under initiatives like Make in India, Atmanirbhar Bharat, and Production Linked Incentive schemes.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Manufacturing MSMEs</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {initiatives.map((item, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Key Manufacturing Focus Areas</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <div className="h-2 w-2 shrink-0 rounded-full bg-slate-600" />
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
                  <span className="font-medium text-slate-700">FASII Solution:</span> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 rounded-lg bg-slate-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Manufacturing MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <p><strong>Production Linked Incentive (PLI) Schemes:</strong> Financial incentives across 14 sectors including electronics, pharmaceuticals, auto components, textiles, and food processing</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <p><strong>Credit Linked Capital Subsidy Scheme (CLCSS):</strong> Capital subsidy up to ₹1 crore for technology upgradation in specified manufacturing sectors</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <p><strong>ZED (Zero Defect Zero Effect) Certification:</strong> Quality and environmental certification support with subsidy for MSMEs</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
              <p><strong>MSME Champion Scheme:</strong> Sector-specific support for enhancing competitiveness, capacity building, and market access</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Make in India & Atmanirbhar Bharat</h2>
          <p className="text-slate-700">
            FASII supports manufacturing MSMEs to leverage national manufacturing initiatives through:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Domestic Manufacturing Boost</h3>
              <p className="mt-2 text-sm text-slate-600">
                Import substitution opportunities, local sourcing mandates, and participation in domestic value chains
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Export Competitiveness</h3>
              <p className="mt-2 text-sm text-slate-600">
                Quality upgradation, global certifications, and export market linkages for manufactured products
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Manufacturing Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII provides guidance on technology upgradation, quality certifications, scheme access, buyer-seller linkages, and participation in government procurement for manufacturing MSMEs.
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
