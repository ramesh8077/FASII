import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building } from "lucide-react";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import PageHero from "../common/PageHero.jsx";

const secretariatOffices = [
  { office: "National Secretariat", region: "Headquarters", contact: { name: "Shri Shivanshu Tyagi", designation: "National Honorary General Secretary", affiliation: "Association for Helping Hand", address: "R-17/B-16, Raj Nagar, Ghaziabad, Uttar Pradesh – 201002", phone: "99116 20123", email: "Tyagishivanshu79@gmail.com" } },
  { office: "Southern Regional Office", region: "South", contact: { name: "Shri B. Karthikeyan", designation: "Regional Chairman – Southern Region", affiliation: "Indian Industries and Rural Development Foundation", address: "Plot No. 29, 1st Main Road, 3rd Cross Street, Sabari Nagar Extension, Mugalivakkam, Chennai – 600125", phone: "09444182838", email: "fasiichairman@gmail.com" } },
  { office: "Eastern Regional Office", region: "East", contact: { name: "Shri Chiranjib Ghosh", designation: "Regional Chairman – Eastern Region", affiliation: "North 24 Parganas Chamber of Commerce & Industry", address: "Bodai Panchayat Road, P.O. Jugberia, North 24 Parganas, Kolkata – 700110", phone: "9339200544", email: "chiranjib36@gmail.com" } },
  { office: "Western Regional Office", region: "West", contact: { name: "Shri Devendra Wasundeorao Sherekar", designation: "Regional Chairman – Western Region", affiliation: "M/s. Soni Information & Education Society", address: "G-102, Vimaco Enclave, Opp. Spl. I.G. Bungalow, Camp, Amravati – 444602", phone: "080559 67444", email: "devenwarud@rediffmail.com" } },
  { office: "Northern Regional Office", region: "North", contact: { name: "Shri Himanshu Tyagi", designation: "Regional Chairman – Northern Region", affiliation: "M/s. Organic Basket Enterprises", address: "R/7-B-16, Raj Nagar, Ghaziabad, Uttar Pradesh – 201002", phone: "7982147575", email: "Organicbasket09@gmail.com" } },
];

const services = [
  { title: "Membership Services", description: "Processing membership applications, maintaining member database, and coordinating with member associations" },
  { title: "Event Coordination", description: "Organizing vendor development programmes, exhibitions, conclaves, and awareness campaigns" },
  { title: "Government Liaison", description: "Coordinating with ministries, departments, and government institutions on policy matters" },
  { title: "Information Dissemination", description: "Sharing updates on schemes, policies, circulars, and opportunities relevant to small industries" },
  { title: "Documentation & Records", description: "Maintaining federation records, minutes, and official documentation" },
  { title: "Member Support", description: "Addressing member queries, facilitating networking, and providing assistance on industry matters" },
];

export default function Secretariat() {
  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="Secretariat" />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-14 lg:px-12">
          <p className="border-l-4 border-amber-500 pl-4 text-lg leading-8 text-slate-700">
            The FASII Secretariat coordinates federation activities, manages member services, and serves as the primary
            point of contact for member associations, government agencies, and stakeholders across India.
          </p>
          <img
            src={connect}
            alt="FASII secretariat at an MSME connect programme"
            loading="lazy"
            className="aspect-[16/9] w-full rounded-xl border-b-8 border-amber-500 object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <h2 className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 sm:text-3xl">
          Secretariat Offices
        </h2>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secretariatOffices.map((office, index) => (
            <div
              key={office.office}
              className={`flex flex-col rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                index === 0 ? "border-amber-400 ring-1 ring-amber-400 md:col-span-2 lg:col-span-3 lg:w-2/3" : "border-orange-200 hover:border-orange-400"
              }`}
            >
              <div className="mb-4 flex items-center justify-between border-b border-orange-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-orange-950">{office.office}</h3>
                  <span className="mt-1 inline-block rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-800">
                    {office.region}
                  </span>
                </div>
                <Building className="text-orange-300" size={32} />
              </div>

              <div className="mb-6">
                <p className="text-lg font-bold text-slate-900">{office.contact.name}</p>
                <p className="text-sm font-semibold text-orange-700">{office.contact.designation}</p>
                <p className="mt-1 text-sm text-slate-500">{office.contact.affiliation}</p>
              </div>

              <div className="mt-auto space-y-3 rounded-lg bg-[#fff8ec] p-4 text-sm leading-6 text-slate-700">
                <p className="flex gap-3">
                  <MapPin size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  {office.contact.address}
                </p>
                <a href={`tel:${office.contact.phone}`} className="flex items-center gap-3 transition hover:text-orange-700">
                  <Phone size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  {office.contact.phone}
                </a>
                <a href={`mailto:${office.contact.email}`} className="flex items-center gap-3 break-all transition hover:text-orange-700">
                  <Mail size={18} className="shrink-0 text-orange-600" aria-hidden="true" />
                  {office.contact.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="functions-title" className="border-y-4 border-amber-500 bg-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <h2 id="functions-title" className="text-2xl font-bold sm:text-3xl">Secretariat Functions</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={service.title} className="rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-lg font-bold text-amber-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-amber-200">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="touch-title" className="bg-orange-700 text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 id="touch-title" className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>
              <p className="mt-3 max-w-2xl leading-7 text-orange-50">
                For general inquiries, membership information, or assistance with FASII programmes, please contact the
                National Secretariat or your respective regional office.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/about/office-bearers" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amber-400 px-5 font-bold text-orange-950 transition hover:bg-amber-300">
                <Mail size={18} aria-hidden="true" /> View All Contact Details
              </Link>
              <Link to="/services/grievances" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/60 px-5 font-bold text-white transition hover:bg-white/10">
                Submit Query
              </Link>
            </div>
          </div>
          <p className="mt-8 border-t border-white/30 pt-5 text-sm leading-6 text-orange-50">
            <strong>Working Hours:</strong> Monday to Friday, 10:00 AM to 5:30 PM (IST)<br />
            Closed on public holidays and second Saturdays
          </p>
        </div>
      </section>
    </main>
  );
}