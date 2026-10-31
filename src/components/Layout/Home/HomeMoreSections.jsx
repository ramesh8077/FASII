import {
  ArrowRight, ArrowUpRight, Building2, FileDown, Handshake,
  Mail, MessageSquareText, Phone, ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo, officeBearers, organization, regionalChairmen } from "../../../data/fasiiContent.js";
import hosur from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";

const regionLinks = {
  Northern: "/1/north",
  Southern: "/2/south",
  Eastern: "/3/east",
  Western: "/about/office-bearers",
};

const serviceLinks = [
  { title: "Government scheme", text: "Read about PM Viksit Bharat Rozgar Yojana.", path: "/services/YojanaIntro", icon: ShieldCheck },
  { title: "Online applications", text: "Find online application information and services.", path: "/services/applications", icon: Building2 },
  { title: "Public grievances", text: "View the public grievance service page.", path: "/services/grievances", icon: MessageSquareText },
  { title: "Downloads", text: "Open reports, forms and reference documents.", path: "/services/downloads", icon: FileDown },
];

export default function HomeMoreSections() {
  return (
    <>
      {/* Regional leadership: image + table */}
      <section className="bg-[#fff8ec] py-12 sm:py-16" aria-labelledby="home-regions-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
            <figure className="self-start">
              <img
                src={hosur}
                alt="FASII regional programme"
                loading="lazy"
                className="aspect-[4/3] w-full border-b-8 border-amber-500 object-cover"
              />
              <figcaption className="bg-orange-900 px-4 py-2 text-xs font-medium text-amber-100">
                FASII regional programme
              </figcaption>
            </figure>

            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">A national network</p>
              <h2 id="home-regions-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
                Regional leadership
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Meet the regional chairmen representing FASII across India and explore the regional pages.
              </p>

              <div className="mt-5 border-t-4 border-orange-600 bg-white">
                <div className="hidden bg-orange-700 text-xs font-bold uppercase tracking-wider text-white sm:grid sm:grid-cols-[8rem_1fr_1fr_2.5rem]">
                  <span className="px-4 py-3">Region</span>
                  <span className="px-4 py-3">Chairman</span>
                  <span className="px-4 py-3">Location</span>
                  <span />
                </div>
                <ul className="divide-y divide-orange-100 border-b border-orange-200">
                  {regionalChairmen.map((person) => {
                    const region = person.role.split("–").at(-1).trim().replace(" Region", "");
                    return (
                      <li key={person.role}>
                        <Link
                          to={regionLinks[region] ?? "/about/office-bearers"}
                          className="group grid gap-0.5 px-4 py-3 transition odd:bg-[#fff8ec] hover:bg-amber-100 sm:grid-cols-[8rem_1fr_1fr_2.5rem] sm:items-center sm:gap-0 sm:px-0 sm:py-0"
                        >
                          <span className="text-xs font-bold uppercase tracking-wider text-orange-700 sm:px-4 sm:py-4">{region}</span>
                          <span className="font-semibold text-slate-900 sm:px-4 sm:py-4">{person.name}</span>
                          <span className="text-sm text-slate-600 sm:px-4 sm:py-4">{person.address.split(",").slice(-2).join(",")}</span>
                          <ArrowUpRight size={17} className="hidden text-slate-400 group-hover:text-orange-700 sm:block" aria-hidden="true" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National office bearers: table */}
      <section className="bg-white py-12 sm:py-16" aria-labelledby="home-leadership-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">People behind the federation</p>
              <h2 id="home-leadership-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
                National office bearers
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                FASII's leadership comes from member associations and industry communities around the country.
              </p>
            </div>
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-900">
              Meet the team <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7 border-t-4 border-orange-600">
            <div className="hidden bg-orange-700 text-xs font-bold uppercase tracking-wider text-white md:grid md:grid-cols-[4rem_1.2fr_1fr_1.4fr]">
              <span className="px-4 py-3">#</span>
              <span className="px-4 py-3">Name</span>
              <span className="px-4 py-3">Designation</span>
              <span className="px-4 py-3">Association</span>
            </div>
            <ul className="divide-y divide-orange-100 border-b border-orange-200">
              {officeBearers.slice(0, 4).map((person, index) => (
                <li
                  key={person.name}
                  className="grid gap-0.5 px-4 py-4 odd:bg-[#fff8ec] md:grid-cols-[4rem_1.2fr_1fr_1.4fr] md:gap-0 md:px-0 md:py-0"
                >
                  <span className="hidden font-bold tabular-nums text-amber-600 md:block md:px-4 md:py-4">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-bold text-orange-950 md:px-4 md:py-4">{person.name}</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-700 md:px-4 md:py-4 md:leading-6">{person.role.replace("National ", "")}</span>
                  <span className="text-sm leading-6 text-slate-600 md:px-4 md:py-4">{person.affiliation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Industry engagement: image band */}
      <section className="relative isolate overflow-hidden border-y-4 border-amber-500 text-white" aria-labelledby="home-engagement-heading">
        <img src={connect} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-orange-950/85" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Industry engagement</p>
            <h2 id="home-engagement-heading" className="mt-3 border-l-4 border-amber-400 pl-4 text-3xl font-bold sm:text-4xl">
              Turning connection into opportunity
            </h2>
            <p className="mt-4 leading-7 text-orange-100">
              FASII works with associations, government departments and other stakeholders through
              practical programmes and industry representation.
            </p>
            <Link to="/media/news" className="mt-6 inline-flex items-center gap-2 font-bold text-amber-300 hover:text-white">
              See FASII in action <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {organization.focus.map((item, index) => (
              <li key={item} className="flex items-start gap-4 border-t border-white/25 py-4">
                <span className="w-8 shrink-0 text-lg font-bold tabular-nums text-amber-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold leading-6">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-[#fff8ec] py-12 sm:py-16" aria-labelledby="home-services-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Public services</p>
          <h2 id="home-services-heading" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
            Services and useful links
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Go directly to scheme information, online services, grievance support and downloads.
          </p>

          <div className="mt-7 grid divide-y divide-orange-200 border-y-2 border-orange-600 bg-white sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4 xl:divide-x">
            {serviceLinks.map(({ title, text, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className="group flex flex-col p-6 transition hover:bg-amber-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-orange-600 sm:border-b sm:border-orange-200 xl:border-b-0"
              >
                <Icon size={28} className="text-orange-700" aria-hidden="true" />
                <h3 className="mt-4 font-bold text-orange-950">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700 group-hover:text-orange-900">
                  Open service <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact band */}
      <section className="border-t-4 border-amber-400 bg-orange-700 text-white" aria-labelledby="home-contact-heading">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-200">Let's connect</p>
              <h2 id="home-contact-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Working with industry associations?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-orange-50">
                Get in touch with FASII to learn more about its work with small industries and member associations.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${contactInfo.southernRegion.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-amber-400 px-5 font-bold text-orange-950 transition hover:bg-amber-300"
              >
                <Mail size={17} aria-hidden="true" /> Email Southern Region
              </a>
              <a
                href={`tel:+91${contactInfo.southernRegion.phone.replace(/\D/g, "").replace(/^0/, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/60 px-5 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={17} aria-hidden="true" /> Call Southern Region
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/30 pt-5 text-sm text-orange-50">
            <Handshake size={17} aria-hidden="true" />
            <span>Southern Region contact: {contactInfo.southernRegion.name}</span>
            <span className="hidden sm:inline">·</span>
            <span>{contactInfo.southernRegion.address}</span>
          </div>
        </div>
      </section>
    </>
  );
}