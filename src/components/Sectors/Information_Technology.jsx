import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Database, Cloud, Cpu } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Code,
    title: "Software Development Services",
    description: "Supporting small software development firms, IT consulting companies, custom application developers, and software product startups."
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Solutions",
    description: "Promoting MSMEs developing mobile applications, web platforms, e-commerce solutions, and digital transformation services."
  },
  {
    icon: Database,
    title: "Data Analytics & AI/ML",
    description: "Facilitating startups and small firms working on data analytics, artificial intelligence, machine learning, and business intelligence solutions."
  },
  {
    icon: Cloud,
    title: "Cloud Services & Cybersecurity",
    description: "Supporting enterprises providing cloud migration, SaaS solutions, cybersecurity services, and IT infrastructure management."
  }
];

const focusAreas = [
  "Custom Software Development",
  "Mobile App Development",
  "Web Development & Design",
  "IT Consulting Services",
  "Cloud Computing Solutions",
  "Cybersecurity Services",
  "Data Analytics & BI",
  "AI/ML Development",
  "E-commerce Platforms",
  "Digital Marketing Services",
  "IoT Solutions",
  "IT Hardware Trading"
];

const challenges = [
  {
    challenge: "Skilled Talent Acquisition & Retention",
    solution: "Facilitating partnerships with educational institutions, conducting skill development programs, and promoting attractive work environments in small IT firms."
  },
  {
    challenge: "Access to Global Markets & Clients",
    solution: "Connecting IT MSMEs with export promotion councils, trade missions, and international business opportunities through STPI and other bodies."
  },
  {
    challenge: "Technology Infrastructure & Capital",
    solution: "Advocacy for easier credit access, technology parks, incubation centers, and infrastructure support under government IT schemes."
  },
  {
    challenge: "Competition from Large Players",
    solution: "Promoting niche specialization, innovation support, and reservation of government IT projects for MSMEs under procurement policies."
  }
];

export default function Information_Technology() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Information Technology & Software" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              The Information Technology sector is a key driver of India's economic growth and digital transformation. IT MSMEs, from software development firms to tech startups, play a vital role in innovation, employment generation, and positioning India as a global IT powerhouse while supporting Digital India initiatives.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for IT Sector MSMEs</h2>
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
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for IT MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Software Technology Parks of India (STPI) Scheme:</strong> Infrastructure support, single-window clearance, and tax benefits for software exporters</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Startup India Initiative:</strong> Recognition, funding support, tax exemptions, and regulatory ease for IT startups and tech innovators</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Digital India Programme:</strong> Opportunities for IT MSMEs in e-governance, digital infrastructure, and service delivery projects</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>SIDBI Fund of Funds:</strong> Venture capital funding support for innovative tech startups through registered Alternative Investment Funds</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Digital India & IT MSME Opportunities</h2>
          <p className="text-slate-700">
            Government's Digital India mission creates vast opportunities for IT MSMEs across:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">E-Governance Projects</h3>
              <p className="mt-2 text-sm text-slate-600">
                Development and maintenance of government portals, citizen services platforms, and digital infrastructure
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Technology Innovation</h3>
              <p className="mt-2 text-sm text-slate-600">
                AI/ML applications, IoT solutions, blockchain implementations, and emerging technology services
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">IT Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII connects IT MSMEs with incubation centers, technology parks, export opportunities, and government IT procurement under MSME preference policies.
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
