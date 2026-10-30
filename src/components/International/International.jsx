import { Link } from "react-router-dom";
import { Globe, Users, Handshake, Award, ArrowRight } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const internationalInitiatives = [
  {
    icon: Handshake,
    title: "Global Partnerships",
    description: "FASII explores partnerships with international small business federations and industry bodies to share best practices and promote cross-border collaboration."
  },
  {
    icon: Users,
    title: "Knowledge Exchange",
    description: "Facilitating knowledge exchange programmes with international counterparts on MSME development, technology adoption, and market access strategies."
  },
  {
    icon: Globe,
    title: "Export Promotion",
    description: "Supporting member associations in accessing international markets through trade fairs, buyer-seller meets, and export promotion initiatives."
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Assisting small industries in achieving international quality certifications and meeting global compliance requirements for market access."
  }
];

const potentialPartners = [
  {
    region: "Asia-Pacific",
    focus: "Regional trade integration and MSME cooperation",
    opportunities: "ASEAN small business networks, bilateral chambers of commerce"
  },
  {
    region: "Europe",
    focus: "Technology transfer and quality standards",
    opportunities: "EU small business federations, quality certification bodies"
  },
  {
    region: "Africa",
    focus: "South-South cooperation and manufacturing partnerships",
    opportunities: "Pan-African MSME networks, industrial cooperation forums"
  },
  {
    region: "Americas",
    focus: "Market access and innovation exchange",
    opportunities: "OAS small business initiatives, trade promotion organizations"
  }
];

export default function International() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="International Engagement" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              FASII recognizes the importance of international engagement for India's small industries sector. Through collaboration with global partners, we aim to facilitate knowledge exchange, promote best practices, and create opportunities for Indian MSMEs to access international markets and technologies.
            </p>
          </div>
        </div>

        {/* International Initiatives */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">International Cooperation Areas</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {internationalInitiatives.map((initiative, index) => (
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

        {/* Potential Partnership Regions */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Regional Partnership Opportunities</h2>
          <div className="space-y-4">
            {potentialPartners.map((partner, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900">{partner.region}</h3>
                    <p className="mt-2 text-sm font-medium text-orange-600">{partner.focus}</p>
                    <p className="mt-3 text-sm text-slate-700">
                      <span className="font-medium">Opportunities:</span> {partner.opportunities}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mb-12 rounded-lg bg-slate-50 p-8">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">Focus Areas for International Engagement</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-orange-700">Market Access</h3>
              <p className="mt-2 text-sm text-slate-700">
                Facilitating access to international markets for Indian small industries through trade promotion and market linkages
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-700">Technology Transfer</h3>
              <p className="mt-2 text-sm text-slate-700">
                Promoting technology collaboration and knowledge exchange with international partners for MSME modernization
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-700">Capacity Building</h3>
              <p className="mt-2 text-sm text-slate-700">
                Organizing international training programmes and exposure visits for skill development and best practice adoption
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orange-700">Policy Learning</h3>
              <p className="mt-2 text-sm text-slate-700">
                Studying successful international MSME policies and adapting relevant practices for the Indian context
              </p>
            </div>
          </div>
        </div>

        {/* Make in India Alignment */}
        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Supporting Make in India & Atmanirbhar Bharat</h2>
          <p className="text-slate-700">
            FASII's international engagement strategy aligns with India's Make in India and Atmanirbhar Bharat initiatives, focusing on:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              Attracting foreign investment in MSME sector through international partnership facilitation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              Promoting Indian MSMEs as reliable suppliers in global value chains
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              Building competitiveness through international quality standards and certifications
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              Facilitating technology partnerships that enhance domestic manufacturing capabilities
            </li>
          </ul>
        </div>

        {/* Contact for International Collaboration */}
        <div className="text-center rounded-lg border-2 border-slate-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-slate-900">Interested in International Collaboration?</h3>
          <p className="mt-3 text-slate-700">
            FASII welcomes proposals for international partnerships, exchange programmes, and collaborative initiatives that benefit India's small industries sector.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
              Contact FASII Leadership
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
