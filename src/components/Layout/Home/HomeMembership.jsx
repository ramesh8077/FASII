import { Link } from "react-router-dom";
import { ArrowRight, Building2, Handshake, Mail, Megaphone, Network, ShieldCheck } from "lucide-react";
import { contactInfo } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";

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
    <section className="relative isolate overflow-hidden border-y-4 border-amber-500 text-white" aria-labelledby="home-membership-heading">
      <img src={conclave} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-orange-950/95 via-orange-950/85 to-orange-950/60" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-amber-300">
              <Handshake size={15} aria-hidden="true" /> Membership &amp; partnership
            </p>
            <h2 id="home-membership-heading" className="mt-3 border-l-4 border-amber-400 pl-4 text-3xl font-bold sm:text-4xl">
              Work with FASII
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-orange-50">
              Member associations form the foundation of the federation. Association representatives
              serve as FASII's national and regional office bearers, and together they represent the
              interests of small industries before government and industry stakeholders.
            </p>

            <ul className="mt-6 divide-y divide-white/20 border-y border-white/20">
              {benefits.map(({ title, text, icon: Icon }) => (
                <li key={title} className="flex items-start gap-4 py-4">
                  <Icon size={22} className="mt-1 shrink-0 text-amber-300" aria-hidden="true" />
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-orange-100">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about/allied-organisations"
                className="inline-flex items-center gap-2 bg-amber-400 px-5 py-3 font-semibold text-orange-950 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Building2 size={18} aria-hidden="true" /> Member associations
              </Link>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 border border-white/60 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                <Mail size={18} aria-hidden="true" /> Enquire about membership
              </a>
            </div>
          </div>

          <aside aria-labelledby="home-join-heading" className="self-end border-l-4 border-amber-400 bg-orange-950/70 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">Join the federation</p>
            <h2 id="home-join-heading" className="mt-2 text-2xl font-bold leading-snug">
              Is your association part of FASII?
            </h2>
            <p className="mt-3 text-sm leading-7 text-orange-100">
              Associations representing small industries are welcome to join FASII's growing network.
              Membership connects your members to national advocacy, programmes and a countrywide peer network.
            </p>

            <div className="mt-6 border-t border-white/20 pt-5">
              <p className="text-[11px] font-bold uppercase tracking-[.16em] text-amber-300">Membership enquiries</p>
              <p className="mt-2 font-semibold">{contact.name}</p>
              <p className="text-sm text-orange-200">{contact.role}</p>
              <a href={`mailto:${contact.email}`} className="mt-3 flex items-center gap-2 break-all text-sm text-orange-50 transition hover:text-white">
                <Mail size={15} className="shrink-0 text-amber-300" aria-hidden="true" />
                {contact.email}
              </a>
            </div>

            <Link to="/about/office-bearers" className="mt-6 inline-flex items-center gap-2 font-bold text-amber-300 transition hover:text-white">
              See all office bearers <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}