import { Mail, MapPin, Phone } from "lucide-react";

export default function PeopleTable({ id, title, people }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12" aria-labelledby={id}>
      <h2 id={id} className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <div
            key={person.email ?? person.name}
            className="flex flex-col overflow-hidden rounded-xl border border-orange-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-orange-300"
          >
            <div className="bg-orange-50 px-5 py-3 border-b border-orange-100">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                {person.role}
              </span>
            </div>
            
            <div className="flex flex-col flex-grow p-5">
              <h3 className="text-xl font-bold text-orange-950">{person.name}</h3>
              <p className="mb-5 mt-1 text-sm font-semibold text-slate-600">
                {person.affiliation}
              </p>
              
              <div className="mt-auto space-y-3 text-sm leading-5 text-slate-700">
                <p className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  <span>{person.address}</span>
                </p>
                <a
                  className="flex items-center gap-3 transition-colors hover:text-orange-700"
                  href={`tel:${person.phone.replace(/\s/g, "")}`}
                >
                  <Phone size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  <span>{person.phone}</span>
                </a>
                <a
                  className="flex items-center gap-3 break-all transition-colors hover:text-orange-700"
                  href={`mailto:${person.email}`}
                >
                  <Mail size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  <span>{person.email}</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}