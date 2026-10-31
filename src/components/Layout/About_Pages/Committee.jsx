import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Briefcase } from "lucide-react";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import PageHero from "../common/PageHero.jsx";

const committeeMembers = [
  { name: "Shri Saileswar Panda", role: "Chairman", designation: "National President", category: "ex-officio" },
  { name: "Shri M. Raju", role: "Vice Chairman", designation: "National Senior Vice President", category: "ex-officio" },
  { name: "Shri Debdutta Banerjee", role: "Member", designation: "National Vice President", category: "ex-officio" },
  { name: "Shri Shivanshu Tyagi", role: "Secretary", designation: "National Honorary General Secretary", category: "ex-officio" },
  { name: "Shri B. Karthikeyan", role: "Regional Representative", designation: "Southern Region Chairman", category: "regional" },
  { name: "Shri Chiranjib Ghosh", role: "Regional Representative", designation: "Eastern Region Chairman", category: "regional" },
  { name: "Shri Devendra Wasundeorao Sherekar", role: "Regional Representative", designation: "Western Region Chairman", category: "regional" },
  { name: "Shri Himanshu Tyagi", role: "Regional Representative", designation: "Northern Region Chairman", category: "regional" },
  { name: "Shri K.K.G. Prabhakaran", role: "Financial Advisor", designation: "National Honorary Treasurer", category: "special" },
];

const committees = [
  { icon: Target, title: "Policy & Advocacy Committee", description: "Focuses on policy recommendations, government liaison, and advocacy for small industries sector" },
  { icon: Briefcase, title: "Member Services Committee", description: "Oversees member association support, capacity building, and federation-wide initiatives" },
  { icon: Users, title: "Events & Programmes Committee", description: "Plans and coordinates vendor development programmes, exhibitions, and awareness campaigns" },
];

const groups = [
  { id: "ex-officio", title: "Ex-Officio Members" },
  { id: "regional", title: "Regional Representatives" },
  { id: "special", title: "Special Invitees" },
];

function MemberTable({ title, members }) {
  return (
    <div className="mt-10 first:mt-8">
      <h3 className="mb-4 text-xl font-bold text-orange-900">{title}</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col rounded-xl border border-orange-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400 hover:shadow-md">
            <span className="mb-3 w-fit rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-700">
              {member.role}
            </span>
            <h4 className="text-lg font-bold text-orange-950">{member.name}</h4>
            <p className="mt-1 text-sm font-medium text-slate-600">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="Steering Committee" />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-14 lg:px-12">
          <p className="border-l-4 border-amber-500 pl-4 text-lg leading-8 text-slate-700">
            The FASII Steering Committee provides strategic direction and oversight for the federation's activities.
            Comprising senior office bearers and regional chairmen, the committee ensures coordinated action across all
            regions and member associations.
          </p>
          <img
            src={connect}
            alt="FASII steering committee at an MSME connect programme"
            loading="lazy"
            className="aspect-[16/9] w-full rounded-xl border-b-8 border-amber-500 object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <h2 className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
          Committee Composition
        </h2>
        {groups.map((group) => (
          <MemberTable
            key={group.id}
            title={group.title}
            members={committeeMembers.filter((member) => member.category === group.id)}
          />
        ))}
      </section>

      <section aria-labelledby="working-committees-title" className="border-y-4 border-amber-500 bg-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <h2 id="working-committees-title" className="text-2xl font-bold sm:text-3xl">Working Committees</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {committees.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
                <Icon size={32} className="mb-4 text-amber-300" aria-hidden="true" />
                <h3 className="text-xl font-bold text-amber-200">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-100">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="rounded-xl border-l-4 border-orange-400 bg-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-slate-700">
            The Steering Committee meets quarterly to review federation activities, approve major initiatives, and provide
            guidance on strategic matters affecting small industries. For detailed contact information of committee
            members, please visit the office bearers page.
          </p>
          <Link
            to="/about/office-bearers"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-orange-100 px-4 py-2 text-sm font-bold text-orange-800 transition-colors hover:bg-orange-200"
          >
            View complete directory <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}