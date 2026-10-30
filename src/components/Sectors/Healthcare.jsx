import { Link } from "react-router-dom";
import { Heart, Stethoscope, Pill, TestTube, Activity, ShieldPlus } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Pill,
    title: "Pharmaceutical Manufacturing",
    description: "Supporting small-scale pharmaceutical units, generic drug manufacturers, API producers, and formulation development enterprises aligned with quality standards."
  },
  {
    icon: TestTube,
    title: "Medical Devices & Equipment",
    description: "Promoting MSMEs engaged in manufacturing medical devices, diagnostic equipment, surgical instruments, and healthcare consumables."
  },
  {
    icon: Activity,
    title: "Healthcare Services",
    description: "Facilitating small clinics, diagnostic centers, pathology labs, physiotherapy centers, and home healthcare service providers."
  },
  {
    icon: ShieldPlus,
    title: "Ayurveda & Traditional Medicine",
    description: "Supporting manufacturers of Ayurvedic, Unani, and herbal medicines, wellness products, and traditional healthcare solutions."
  }
];

const focusAreas = [
  "Generic Medicine Manufacturing",
  "Medical Device Production",
  "Diagnostic Laboratory Services",
  "Surgical Instruments Manufacturing",
  "Ayurvedic Medicine Production",
  "Healthcare IT Solutions",
  "Medical Equipment Trading",
  "Pharmaceutical Packaging",
  "Clinical Research Services",
  "Telemedicine Platforms",
  "Medical Consumables Supply",
  "Healthcare Training Services"
];

const challenges = [
  {
    challenge: "Regulatory Compliance & Licensing",
    solution: "Guidance on drug licensing, GMP certification, medical device registration, and compliance with regulatory authorities like CDSCO and FDA."
  },
  {
    challenge: "Quality Standards & Certifications",
    solution: "Support for achieving WHO-GMP, ISO 13485, CE marking, and other quality certifications required for domestic and export markets."
  },
  {
    challenge: "R&D and Innovation Support",
    solution: "Facilitating access to R&D grants, collaboration with research institutions, and technology transfer for product development."
  },
  {
    challenge: "Market Access & Distribution",
    solution: "Connecting manufacturers with hospitals, pharmacies, government procurement, and export opportunities through trade facilitation."
  }
];

export default function Healthcare() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Healthcare & Pharmaceuticals" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The healthcare and pharmaceutical sector offers significant growth opportunities for MSMEs in India. From generic medicine manufacturing to medical device production and healthcare services, small industries contribute to making quality healthcare accessible and affordable while supporting India's vision of becoming a global hub for pharmaceuticals and medical devices.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Healthcare Sector MSMEs</h2>
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
            {focusAreas.map((area, index) => (
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
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Healthcare MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Production Linked Incentive (PLI) Scheme:</strong> Financial incentives for domestic manufacturing of bulk drugs, medical devices, and pharmaceuticals</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Pharmaceuticals Promotion & Development Scheme (PPDS):</strong> Support for setting up common facility centers and technology upgradation</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Medical Device Parks Scheme:</strong> Infrastructure support for establishing medical device manufacturing clusters</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>National AYUSH Mission:</strong> Financial assistance for Ayurvedic, Unani, and traditional medicine manufacturing units</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Atmanirbhar Bharat in Healthcare</h2>
          <p className="text-slate-700">
            India's vision for self-reliance in healthcare manufacturing creates opportunities for MSMEs in:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">API & Bulk Drug Manufacturing</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reducing import dependence through domestic production of Active Pharmaceutical Ingredients
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Medical Device Production</h3>
              <p className="mt-2 text-sm text-slate-600">
                Expanding domestic manufacturing of surgical instruments, diagnostic equipment, and consumables
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Healthcare Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII provides guidance on regulatory compliance, quality certifications, scheme access, and market linkages for healthcare and pharmaceutical MSMEs.
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
