import { Link } from "react-router-dom";
import { Plane, Hotel, MapPin, Camera, Utensils, Compass } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

const initiatives = [
  {
    icon: Hotel,
    title: "Hospitality Services",
    description: "Supporting small hotels, guest houses, homestays, budget accommodations, and hospitality service providers catering to domestic and international tourists."
  },
  {
    icon: Utensils,
    title: "Food & Beverage Services",
    description: "Promoting restaurants, cafes, food courts, catering services, and culinary tourism enterprises offering local and regional cuisines."
  },
  {
    icon: Camera,
    title: "Tour Operations & Travel Services",
    description: "Facilitating travel agencies, tour operators, adventure tourism providers, and specialized tourism service operators."
  },
  {
    icon: Compass,
    title: "Tourism Products & Handicrafts",
    description: "Supporting manufacturers and sellers of tourism souvenirs, handicrafts, local artifacts, and tourism-related merchandise."
  }
];

const focusAreas = [
  "Budget Hotels & Homestays",
  "Tour & Travel Agencies",
  "Adventure Tourism Services",
  "Restaurant & Food Services",
  "Transport & Taxi Services",
  "Tourist Guide Services",
  "Handicraft & Souvenir Shops",
  "Cultural Tourism Programs",
  "Medical Tourism Services",
  "Eco-Tourism Initiatives",
  "Event Management Services",
  "Photography & Videography"
];

const challenges = [
  {
    challenge: "Seasonality & Revenue Fluctuation",
    solution: "Promoting off-season tourism packages, diversification of services, and working capital support during lean periods."
  },
  {
    challenge: "Quality Standards & Safety",
    solution: "Guidance on tourism classification, safety certifications, hygiene standards, and quality ratings for hospitality enterprises."
  },
  {
    challenge: "Digital Marketing & Online Presence",
    solution: "Training on digital marketing, OTA registrations, social media promotion, and online booking platform integration."
  },
  {
    challenge: "Skilled Manpower & Service Quality",
    solution: "Facilitating hospitality training programs, customer service workshops, and certification courses for tourism service providers."
  }
];

export default function Tourism() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Tourism & Hospitality" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-12">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-8 text-slate-700">
              Tourism is a major employment generator and MSMEs form the backbone of India's tourism and hospitality sector. From small hotels to tour operators, handicraft vendors to restaurant services, small enterprises contribute significantly to showcasing India's rich cultural heritage, natural beauty, and diverse tourism experiences to domestic and international visitors.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">FASII Support for Tourism Sector MSMEs</h2>
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
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Government Schemes for Tourism MSMEs</h2>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Swadesh Darshan Scheme:</strong> Development of theme-based tourist circuits creating opportunities for local tourism service providers</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>PRASHAD Scheme:</strong> Pilgrimage infrastructure development benefiting hospitality and tourism MSMEs in pilgrimage destinations</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Incredible India Campaign:</strong> National and international tourism promotion creating demand for domestic tourism services</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
              <p><strong>Hunar Se Rozgar Scheme:</strong> Skill training for youth in hospitality and tourism sectors for quality service delivery</p>
            </div>
          </div>
        </div>

        <div className="mb-12 rounded-lg border-2 border-orange-200 bg-orange-50 p-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">Post-Pandemic Tourism Recovery</h2>
          <p className="text-slate-700">
            As tourism rebounds post-pandemic, opportunities for MSMEs include:
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Domestic Tourism Growth</h3>
              <p className="mt-2 text-sm text-slate-600">
                Rising domestic travel creating demand for homestays, local experiences, and regional tourism services
              </p>
            </div>
            <div className="rounded-lg bg-white p-4">
              <h3 className="font-semibold text-slate-900">Sustainable Tourism</h3>
              <p className="mt-2 text-sm text-slate-600">
                Growing demand for eco-tourism, rural tourism, and sustainable hospitality practices
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-2 border-slate-200 bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900">Tourism Sector MSME Support</h3>
          <p className="mt-3 text-slate-700">
            FASII assists tourism MSMEs with licensing support, quality certifications, digital marketing guidance, and connections with tourism promotion bodies.
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
