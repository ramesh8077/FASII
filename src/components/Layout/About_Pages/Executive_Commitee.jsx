import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { officeBearers, regionalChairmen } from "../../../data/fasiiContent.js";

const executiveCommitteeMembers = [
  ...officeBearers,
  ...regionalChairmen
];

function MemberCard({ member }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-orange-700">{member.role}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{member.name}</h3>
      <p className="mt-2 text-sm font-medium text-slate-600">{member.affiliation}</p>
      <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
        <p className="flex gap-2">
          <MapPin size={17} className="mt-1 shrink-0 text-orange-600" />
          {member.address}
        </p>
        <a className="flex items-center gap-2 hover:text-orange-700" href={`tel:${member.phone.replace(/\s/g, "")}`}>
          <Phone size={16}/>
          {member.phone}
        </a>
        <a className="flex items-center gap-2 break-all hover:text-orange-700" href={`mailto:${member.email}`}>
          <Mail size={16}/>
          {member.email}
        </a>
      </div>
    </article>
  );
}

export default function Executive_Commitee() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-semibold sm:text-4xl">Executive Committee</h1>
          <p className="mt-3 text-slate-600">
            <Link to="/about" className="hover:text-orange-700">About FASII</Link> / Executive Committee
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-lg leading-7 text-slate-600">
            The FASII Executive Committee comprises all national office bearers and regional chairmen, collectively providing strategic leadership and operational oversight for the federation's activities across India.
          </p>
        </div>

        {/* National Executive Members */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">National Office Bearers</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {officeBearers.map((member) => (
              <MemberCard key={member.email} member={member} />
            ))}
          </div>
        </div>

        {/* Regional Chairmen */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Regional Chairmen</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {regionalChairmen.map((member) => (
              <MemberCard key={member.email} member={member} />
            ))}
          </div>
        </div>

        {/* Committee Functions */}
        <div className="rounded-lg bg-slate-50 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Committee Functions</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-orange-700">Strategic Planning</h4>
              <p className="mt-2 text-sm text-slate-700">
                Formulates policies, sets strategic direction, and approves major federation initiatives
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700">Member Services</h4>
              <p className="mt-2 text-sm text-slate-700">
                Oversees programmes and services for member associations across all regions
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700">Government Liaison</h4>
              <p className="mt-2 text-sm text-slate-700">
                Coordinates advocacy efforts with ministries, departments, and government institutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700">Regional Coordination</h4>
              <p className="mt-2 text-sm text-slate-700">
                Ensures effective implementation of federation activities across all four regions
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-600">
            The Executive Committee meets regularly to review federation activities, address member concerns, and ensure coordinated action on matters affecting small industries.
          </p>
        </div>
      </section>
    </main>
  );
}
