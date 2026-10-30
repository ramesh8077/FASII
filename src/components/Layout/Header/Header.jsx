import { useEffect, useMemo, useState } from "react";
import { Accessibility, Languages, Mail, Phone, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { navigationItems } from "../../../data/navigationData.js";

/* Root font-size steps drive the accessibility text-size control (A- / A / A+). */
const FONT_STEPS = ["100%", "112.5%", "125%"];

const searchPages = [
  { label: "Home", path: "/", keywords: "fasii federation small industries" },
  ...navigationItems.flatMap((item) =>
    item.children
      ? item.children.map((child) => ({ ...child, keywords: item.label }))
      : [{ ...item, keywords: "" }],
  ),
];

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [fontStep, setFontStep] = useState(0);

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_STEPS[fontStep];
  }, [fontStep]);
  const normalizedTerm = searchTerm.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedTerm) return [];
    return searchPages
      .filter((page) => `${page.label} ${page.path} ${page.keywords}`.toLowerCase().includes(normalizedTerm))
      .slice(0, 8);
  }, [normalizedTerm]);

  const submitSearch = (event) => {
    event.preventDefault();
    if (results[0]) {
      navigate(results[0].path);
      setSearchTerm("");
      setMobileSearchOpen(false);
    }
  };

  const searchBox = (id) => (
    <form className="relative" onSubmit={submitSearch}>
      <label htmlFor={id} className="sr-only">Search website</label>
      <div className="flex h-11 items-center rounded-full border border-slate-300 bg-white transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
        <input id={id} type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => { if (event.key === "Escape") setSearchTerm(""); }}
          placeholder="Search website" className="w-full min-w-0 bg-transparent px-4 text-sm text-slate-800 outline-none" />
        <span aria-hidden="true" className="mr-3 text-slate-400"><Search size={17} /></span>
      </div>
      {normalizedTerm && <div className="absolute right-0 top-full z-[60] mt-2 max-h-80 w-72 overflow-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl sm:w-80" role="listbox" aria-label="Search results">
        {results.length ? results.map((page) => <Link key={page.path} to={page.path} onClick={() => { setSearchTerm(""); setMobileSearchOpen(false); }} className="block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-orange-50 hover:text-orange-700">{page.label}</Link>) : <p className="px-3 py-3 text-sm text-slate-500">No pages found for “{searchTerm}”.</p>}
      </div>}
    </form>
  );

  return (
    
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Accessibility and contact bar */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center justify-between gap-4 px-4 lg:px-6">
          <p className="hidden text-xs text-white md:block">
            Federation of Associations of Small Industries of India
          </p>

          <div className="ml-auto flex items-center divide-x divide-white/20">
            <a
              href="mailto:fasiichairman@gmail.com"
              className="flex items-center gap-2 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Mail size={14} aria-hidden="true" />
              <span className="hidden sm:inline">fasiichairman@gmail.com</span>
            </a>

            <a
              href="tel:+919444182838"
              className="flex items-center gap-2 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Phone size={14} aria-hidden="true" />
              <span className="hidden md:inline">
                +91 94441 82838
              </span>
            </a>

            <div
              className="flex items-center gap-1 px-3 py-2 text-xs"
              role="group"
              aria-label="Text size"
            >
              <Accessibility size={15} aria-hidden="true" />
              <button
                type="button"
                onClick={() => setFontStep((step) => Math.max(0, step - 1))}
                disabled={fontStep === 0}
                aria-label="Decrease text size"
                className="rounded px-1 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontStep(1)}
                aria-label="Reset text size"
                aria-pressed={fontStep === 1}
                className="rounded px-1 font-semibold transition hover:bg-white/10"
              >
                A
              </button>
              <button
                type="button"
                onClick={() =>
                  setFontStep((step) => Math.min(FONT_STEPS.length - 1, step + 1))
                }
                disabled={fontStep === FONT_STEPS.length - 1}
                aria-label="Increase text size"
                className="rounded px-1 font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
              >
                A+
              </button>
            </div>

            <button
              type="button"
              disabled
              title="Hindi version will be available soon"
              className="flex cursor-not-allowed items-center gap-2 px-3 py-2 text-xs opacity-60"
              aria-label="Hindi version will be available soon"
            >
              <Languages size={15} aria-hidden="true" />
              <span>हिंदी</span>
            </button>
          </div>
        </div>
      </div>

      {/* Announcement bar */}
    {/* Moving announcement bar */}
<div className="border-b border-orange-700 bg-orange-500">
  <div className="mx-auto flex min-h-11 max-w-7xl items-center gap-3 px-4 lg:px-6">
    <span className="relative z-10 shrink-0 rounded bg-orange-600 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
      Latest
    </span>

    <div className="announcement-window min-w-0 flex-1 overflow-hidden py-2">
      <div
        className="announcement-track flex w-max"
        style={{
          animationPlayState: "running",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="announcement-copy flex shrink-0 items-center gap-12 pr-12"
          >
            <span className="whitespace-nowrap text-sm font-medium text-white">
              Recent FASII updates: National Conclave for Industry Associations (12 October 2026), MSME Connect ’26, and industry programmes across Tamil Nadu.
            </span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-white"
            />
          </div>
        ))}
      </div>
    </div>

    {/* <button
      type="button"
      onClick={() => setAnnouncementPaused((paused) => !paused)}
      aria-label={
        announcementPaused
          ? "Resume scrolling announcements"
          : "Pause scrolling announcements"
      }
      className="announcement-control shrink-0 rounded px-2 py-2 text-xs font-semibold text-orange-800 hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-orange-600"
    >
      {announcementPaused ? "Resume" : "Pause"}
    </button> */}
  </div>
</div>

      {/* Branding, navigation, and search share one desktop row. */}
      <div className="bg-white">
        <div className="mx-auto flex min-h-24 max-w-[90rem] items-center gap-3 px-4 py-3 lg:gap-4 lg:px-6">
          {/* Logo and department name */}
          <a href="/" className="flex min-w-0 shrink-0 items-center gap-2">
            <img
              src="/site-logo-final.png"
              alt="FASII — Federation of Associations of Small Industries of India"
              className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
            />

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-orange-700 sm:text-xs">
                FASII
              </p>

              <h1 className="max-w-64 text-xs font-bold leading-tight text-slate-900 sm:text-sm lg:text-base">
                Federation of Associations of Small Industries of India
              </h1>

              <p className="hidden text-[11px] text-slate-500 lg:block">Supporting India’s small industries</p>
            </div>
          </a>

          <Navbar />

          {/* Header actions */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden 2xl:block">{searchBox("header-search")}</div>

            <button
              type="button"
              aria-label="Search website"
              onClick={() => setMobileSearchOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 2xl:hidden"
            >
              {mobileSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>
        </div>
        {mobileSearchOpen && <div className="absolute left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-lg 2xl:hidden">{searchBox("mobile-header-search")}</div>}
      </div>
    </header>
  );
};

export default Header;
