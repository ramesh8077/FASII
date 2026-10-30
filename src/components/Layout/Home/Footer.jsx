import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contactInfo, organization } from "../../../data/fasiiContent.js";

const exploreLinks = [
  ["About FASII", "/about"],
  ["Office bearers", "/about/office-bearers"],
  ["Sectors", "/sectors/msme"],
  ["News & events", "/media/news"],
];

const resourceLinks = [
  ["Applications", "/services/applications"],
  ["Public grievances", "/services/grievances"],
  ["Publications", "/knowledge/publications"],
  ["Downloads", "/services/downloads"],
];

export default function Footer() {
  const contact = contactInfo.southernRegion;

  return (
    <footer className="border-t-4 border-orange-500 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.25fr_.8fr_.8fr_1.15fr] lg:gap-x-16 lg:gap-y-10 lg:px-12">
        <div className="-ml-3 sm:-ml-4 lg:-ml-6">
          <Link to="/" className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-400">
            <img src="/site-logo-final.png" alt="FASII logo" className="h-14 w-14 rounded-full bg-white object-contain ring-2 ring-orange-400" />
            <span className="max-w-56">
              <span className="block text-xs font-bold uppercase tracking-[.2em] text-orange-400">FASII</span>
              <span className="mt-1 block text-sm font-semibold leading-5 text-white">Federation of Associations of Small Industries of India</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">{organization.about}</p>
        </div>

        <nav aria-label="Explore FASII">
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-orange-300">Explore</h2>
          <ul className="mt-4 space-y-3">{exploreLinks.map(([label, path]) => <li key={path}><Link to={path} className="text-sm text-slate-300 transition hover:text-white">{label}</Link></li>)}</ul>
        </nav>

        <nav aria-label="Resources and services">
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-orange-300">Resources</h2>
          <ul className="mt-4 space-y-3">{resourceLinks.map(([label, path]) => <li key={path}><Link to={path} className="text-sm text-slate-300 transition hover:text-white">{label}</Link></li>)}</ul>
        </nav>

        <address className="not-italic">
          <h2 className="text-xs font-bold uppercase tracking-[.16em] text-orange-300">Contact · Southern Region</h2>
          <p className="mt-4 text-sm font-semibold text-white">{contact.name}</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">{contact.address}</p>
          <div className="mt-4 space-y-2.5">
            <a href={`tel:+91${contact.phone.replace(/\D/g, "").replace(/^0/, "")}`} className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"><Phone size={15} className="text-orange-400" />{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 break-all text-sm text-slate-300 transition hover:text-white"><Mail size={15} className="shrink-0 text-orange-400" />{contact.email}</a>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} FASII · Supporting India’s small industries</p>
          <Link to="/about/office-bearers" className="inline-flex items-center gap-1.5 font-medium text-slate-300 transition hover:text-orange-300">Meet the office bearers <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </footer>
  );
}
