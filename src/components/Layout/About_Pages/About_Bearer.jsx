import { Mail, MapPin, Phone } from "lucide-react";
import { officeBearers, regionalChairmen } from "../../../data/fasiiContent.js";
import PageHero from "../common/PageHero.jsx";

function PeopleSection({ title, people }) {
  return <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12"><h2 className="mb-6 text-2xl font-semibold text-slate-900">{title}</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{people.map((person) => <article key={person.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-orange-700">{person.role}</p><h3 className="mt-2 text-xl font-semibold text-slate-900">{person.name}</h3><p className="mt-2 text-sm font-medium text-slate-600">{person.affiliation}</p><div className="mt-4 space-y-2 text-sm leading-6 text-slate-600"><p className="flex gap-2"><MapPin size={17} className="mt-1 shrink-0 text-orange-600" />{person.address}</p><a className="flex items-center gap-2 hover:text-orange-700" href={`tel:${person.phone.replace(/\s/g, "")}`}><Phone size={16}/>{person.phone}</a><a className="flex items-center gap-2 break-all hover:text-orange-700" href={`mailto:${person.email}`}><Mail size={16}/>{person.email}</a></div></article>)}</div></section>;
}

export default function About_Bearer() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <PageHero title="FASII Office Bearers" />
      <PeopleSection title="National Office Bearers" people={officeBearers} /><PeopleSection title="Regional Chairmen" people={regionalChairmen}/><p className="mx-auto max-w-7xl px-5 pb-12 text-sm text-slate-500 sm:px-8 lg:px-12">Contact and affiliation details are reproduced from the supplied Present Office Bearers document.</p>
    </main>
  );
}
