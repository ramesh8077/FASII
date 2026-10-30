import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Handshake,
  Mail,
  Megaphone,
  Network,
  ShieldCheck,
} from "lucide-react";
import { contactInfo } from "../../../data/fasiiContent.js";

const benefits = [
  {
    title: "A national network",
    text: "Join member associations from across India and connect with industry communities in every region.",
    icon: Network,
  },
  {
    title: "Policy & scheme updates",
    text: "Receive circulars, scheme documents and standards guidance relevant to small industries.",
    icon: ShieldCheck,
  },
  {
    title: "Programmes & exhibitions",
    text: "Participate in vendor development programmes, industrial exhibitions and awareness initiatives.",
    icon: Megaphone,
  },
];

export default function HomeMembership() {
  const contact = contactInfo.nationalPresident;

  return (
    <section className="bg-white py-14 sm:py-20" aria-labelledby="home-membership-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-orange-700">
              <Handshake size={15} aria-hidden="true" /> Membership &amp; partnership
            </p>
            <h2 id="home-membership-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Work with FASII
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Member associations form the foundation of the federation. Association
              representatives serve as FASII&apos;s national and regional office bearers,
              and together they represent the interests of small industries before
              government and industry stakeholders.
            </p>

            <div className="mt-7 space-y-3">
              {benefits.map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-[#fffaf5] p-4 sm:p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-orange-700 ring-1 ring-orange-100">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-slate-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about/allied-organisations" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
                <Building2 size={18} aria-hidden="true" /> Member associations
              </Link>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-5 py-3 font-semibold text-orange-800 transition hover:bg-orange-50">
                <Mail size={18} aria-hidden="true" /> Enquire about membership
              </a>
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white sm:p-9" aria-labelledby="home-join-heading">
            <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-orange-600/25 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-300">Join the federation</p>
              <h2 id="home-join-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                Is your association part of FASII?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Associations representing small industries are welcome to join FASII&apos;s
                growing network. Membership connects your members to national advocacy,
                programmes and a countrywide peer network.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.06] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[.16em] text-orange-300">
                  Membership enquiries
                </p>
                <p className="mt-2 font-semibold text-white">{contact.name}</p>
                <p className="text-sm text-slate-400">{contact.role}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2 break-all transition hover:text-white">
                    <Mail size={15} className="shrink-0 text-orange-400" aria-hidden="true" />
                    {contact.email}
                  </a>
                </div>
              </div>

              <Link to="/about/office-bearers" className="mt-6 inline-flex items-center gap-2 font-bold text-orange-300 transition hover:text-white">
                See all office bearers <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
