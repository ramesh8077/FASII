import { Link } from "react-router-dom";
import { Users, Target, Briefcase } from "lucide-react";
import PageHero from "../common/PageHero.jsx";

const committeeMembers = [
  // Ex-officio members from office bearers
  { name: "Shri Saileswar Panda", role: "Chairman", designation: "National President", category: "ex-officio" },
  { name: "Shri M. Raju", role: "Vice Chairman", designation: "National Senior Vice President", category: "ex-officio" },
  { name: "Shri Debdutta Banerjee", role: "Member", designation: "National Vice President", category: "ex-officio" },
  { name: "Shri Shivanshu Tyagi", role: "Secretary", designation: "National Honorary General Secretary", category: "ex-officio" },

  // Regional representation
  { name: "Shri B. Karthikeyan", role: "Regional Representative", designation: "Southern Region Chairman", category: "regional" },
  { name: "Shri Chiranjib Ghosh", role: "Regional Representative", designation: "Eastern Region Chairman", category: "regional" },
  { name: "Shri Devendra Wasundeorao Sherekar", role: "Regional Representative", designation: "Western Region Chairman", category: "regional" },
  { name: "Shri Himanshu Tyagi", role: "Regional Representative", designation: "Northern Region Chairman", category: "regional" },

  // Special invitees
  { name: "Shri K.K.G. Prabhakaran", role: "Financial Advisor", designation: "National Honorary Treasurer", category: "special" },
];

const committees = [
  {
    icon: Target,
    title: "Policy & Advocacy Committee",
    description: "Focuses on policy recommendations, government liaison, and advocacy for small industries sector"
  },
  {
    icon: Briefcase,
    title: "Member Services Committee",
    description: "Oversees member association support, capacity building, and federation-wide initiatives"
  },
  {
    icon: Users,
    title: "Events & Programmes Committee",
    description: "Plans and coordinates vendor development programmes, exhibitions, and awareness campaigns"
  }
];

export default function Committee() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Steering Committee" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-lg leading-7 text-slate-600">
            The FASII Steering Committee provides strategic direction and oversight for the federation's activities. Comprising senior office bearers and regional chairmen, the committee ensures coordinated action across all regions and member associations.
          </p>
        </div>

        {/* Committee Structure */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Committee Composition</h2>

          {/* Ex-officio Members */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-orange-700">Ex-Officio Members</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {committeeMembers.filter(m => m.category === 'ex-officio').map((member, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{member.role}</p>
                  <h4 className="mt-2 font-semibold text-slate-900">{member.name}</h4>
                  <p className="mt-1 text-sm text-slate-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Representatives */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold text-orange-700">Regional Representatives</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {committeeMembers.filter(m => m.category === 'regional').map((member, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{member.role}</p>
                  <h4 className="mt-2 font-semibold text-slate-900">{member.name}</h4>
                  <p className="mt-1 text-sm text-slate-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Special Invitees */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-orange-700">Special Invitees</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {committeeMembers.filter(m => m.category === 'special').map((member, index) => (
                <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">{member.role}</p>
                  <h4 className="mt-2 font-semibold text-slate-900">{member.name}</h4>
                  <p className="mt-1 text-sm text-slate-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Committees */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Working Committees</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {committees.map((committee, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <committee.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{committee.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{committee.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 p-6">
          <p className="text-sm leading-6 text-slate-700">
            The Steering Committee meets quarterly to review federation activities, approve major initiatives, and provide guidance on strategic matters affecting small industries. For detailed contact information of committee members, please visit the office bearers page.
          </p>
          <Link to="/about/office-bearers" className="mt-4 inline-flex items-center text-sm font-semibold text-orange-700 hover:text-orange-900">
            View complete office bearers directory →
          </Link>
        </div>
      </section>
    </main>
  );
}
