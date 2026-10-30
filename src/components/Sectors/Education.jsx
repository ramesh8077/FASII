import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, Laptop, Building2 } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: GraduationCap,
    title: "Skill Development & Training",
    description: "Supporting MSMEs engaged in vocational training, skill development centers, and industry-specific certification programs aligned with government initiatives."
  },
  {
    icon: BookOpen,
    title: "Educational Content & E-Learning",
    description: "Promoting small enterprises developing educational content, e-learning platforms, digital learning tools, and ed-tech solutions."
  },
  {
    icon: Laptop,
    title: "Educational Equipment & Technology",
    description: "Facilitating MSMEs manufacturing educational equipment, laboratory instruments, teaching aids, and classroom technology solutions."
  },
  {
    icon: Building2,
    title: "Private Training Institutions",
    description: "Supporting small-scale coaching centers, professional training institutes, and specialized education service providers."
  }
];

const focusAreas = [
  "Vocational Training Centers",
  "E-Learning Platform Development",
  "Educational Content Creation",
  "Skill Certification Programs",
  "Educational Equipment Manufacturing",
  "Language Training Services",
  "Professional Course Institutes",
  "Educational Software Development",
  "School Supplies & Stationery",
  "Laboratory Equipment Supply",
  "Digital Learning Tools",
  "Training & Placement Services"
];

const challenges = [
  {
    challenge: "Quality Standards & Accreditation",
    solution: "Guidance on NSDC affiliation, ISO certification, and compliance with educational regulatory frameworks for training institutes."
  },
  {
    challenge: "Technology Adoption & Digitalization",
    solution: "Support for adopting digital platforms, online learning management systems, and technology integration in education MSMEs."
  },
  {
    challenge: "Skilled Faculty & Trainers",
    solution: "Facilitating partnerships with industry experts and connecting education MSMEs with qualified trainers and subject matter experts."
  },
  {
    challenge: "Market Competition & Branding",
    solution: "Assistance in marketing strategies, brand building, and differentiation in the competitive education services market."
  }
];

export default function Education() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Education & Skill Development" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The education and skill development sector presents significant opportunities for MSMEs in India. From vocational training centers to ed-tech startups, small industries play a vital role in skill building, employment generation, and supporting India's human capital development goals under programs like Skill India and Digital India.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Education Sector MSMEs</h2>
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
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Education & Skill Development</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Pradhan Mantri Kaushal Vikas Yojana (PMKVY):</strong> Skill training and certification scheme with financial support for training partners</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>National Apprenticeship Promotion Scheme (NAPS):</strong> Financial incentives for establishments engaging apprentices</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PM eVIDYA Programme:</strong> Digital education initiatives and e-learning infrastructure development support</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Startup India Seed Fund Scheme:</strong> Financial assistance for ed-tech and skill-tech startups in early stage</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Education Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII assists education and skill development MSMEs with regulatory compliance, scheme access, industry partnerships, and growth opportunities.
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