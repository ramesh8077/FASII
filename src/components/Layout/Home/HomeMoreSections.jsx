import {
  ArrowRight, ArrowUpRight, Building2, FileDown, Handshake,
  Mail, MapPin, MessageSquareText, Phone, ShieldCheck, UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo, officeBearers, organization, regionalChairmen } from "../../../data/fasiiContent.js";

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
      <section className="bg-[#fffaf5] py-14 sm:py-20" aria-labelledby="home-regions-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">A national network</p>
              <h2 id="home-regions-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Regional leadership</h2>
              <p className="mt-4 leading-7 text-slate-600">Meet the regional chairmen representing FASII across India and explore the regional pages.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {regionalChairmen.map((person) => {
                const region = person.role.split("–").at(-1).trim().replace(" Region", "");
                return (
                  <Link key={person.role} to={regionLinks[region] ?? "/about/office-bearers"} className="group flex items-center gap-4 rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition hover:border-orange-300 hover:shadow-md">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange-100 text-orange-700"><MapPin size={21} /></span>
                    <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-wider text-orange-700">{region} region</span><span className="mt-1 block truncate font-semibold text-slate-900">{person.name}</span><span className="mt-0.5 block text-xs text-slate-500">{person.address.split(",").slice(-2).join(",")}</span></span>
                    <ArrowUpRight size={17} className="ml-auto shrink-0 text-slate-400 transition group-hover:text-orange-700" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="home-leadership-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">People behind the federation</p><h2 id="home-leadership-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">National office bearers</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">FASII’s leadership comes from member associations and industry communities around the country.</p></div>
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-4 py-2.5 text-sm font-bold text-orange-800 transition hover:bg-orange-50">Meet the team <ArrowRight size={17} /></Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {officeBearers.slice(0, 4).map((person, index) => (
              <article key={person.name} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#fffaf5] p-5">
                <span className="absolute right-4 top-3 font-serif text-5xl font-bold text-orange-100">0{index + 1}</span>
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-orange-300"><UsersRound size={22} /></span>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-orange-700">{person.role.replace("National ", "")}</p>
                <h3 className="mt-2 font-bold text-slate-950">{person.name}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{person.affiliation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white sm:py-20" aria-labelledby="home-engagement-heading">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-12">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-orange-300">Industry engagement</p><h2 id="home-engagement-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Turning connection into opportunity</h2><p className="mt-4 leading-7 text-slate-300">FASII works with associations, government departments and other stakeholders through practical programmes and industry representation.</p><Link to="/media/news" className="mt-6 inline-flex items-center gap-2 font-bold text-orange-300 hover:text-white">See FASII in action <ArrowRight size={17} /></Link></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {organization.focus.map((item, index) => <div key={item} className="flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-white/[.06] p-4"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-500/20 text-sm font-bold text-orange-200">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold leading-6 text-slate-100">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] py-14 sm:py-20" aria-labelledby="home-services-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-orange-700">Public services</p><h2 id="home-services-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Services and useful links</h2><p className="mt-3 leading-7 text-slate-600">Go directly to scheme information, online services, grievance support and downloads.</p></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceLinks.map(({ title, text, path, icon: Icon }) => <Link key={path} to={path} className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"><span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white"><Icon size={22} /></span><h3 className="mt-5 font-bold text-slate-900">{title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-700">Open service <ArrowUpRight size={16} /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="home-contact-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-orange-600 px-6 py-9 text-white sm:px-10 sm:py-12 lg:px-14">
            <div aria-hidden="true" className="absolute -right-12 -top-28 h-80 w-80 rounded-full border-[50px] border-white/10" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[.2em] text-orange-100">Let’s connect</p><h2 id="home-contact-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Working with industry associations?</h2><p className="mt-3 max-w-2xl leading-7 text-orange-50">Get in touch with FASII to learn more about its work with small industries and member associations.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={`mailto:${contactInfo.southernRegion.email}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 font-bold text-orange-800 transition hover:bg-orange-50"><Mail size={17} /> Email Southern Region</a>
                <a href={`tel:+91${contactInfo.southernRegion.phone.replace(/\D/g, "").replace(/^0/, "")}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/50 px-5 font-bold text-white transition hover:bg-white/10"><Phone size={17} /> Call Southern Region</a>
              </div>
            </div>
            <div className="relative mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/25 pt-5 text-sm text-orange-50"><Handshake size={17} /><span>Southern Region contact: {contactInfo.southernRegion.name}</span><span className="hidden sm:inline">·</span><span>{contactInfo.southernRegion.address}</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
