import { useEffect, useMemo, useState } from "react";
import { Accessibility, Languages, Mail, Phone, Search, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { navigationItems } from "../../../data/navigationData.js";

/* Root font-size steps drive the accessibility text-size control (A- / A / A+). */
const FONT_STEPS = ["100%", "112.5%", "125%"];

/* Same horizontal padding as every page section, so header and content line up. */
const CONTAINER = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";

const searchPages = [
  { label: "Home", path: "/", keywords: "fasii federation small industries" },
  ...navigationItems.flatMap((item) =>
    item.children
      ? item.children.map((child) => ({ ...child, keywords: item.label }))
      : [{ ...item, keywords: "" }],
  ),
];

const ANNOUNCEMENT =
  "Recent FASII updates: National Conclave for Industry Associations (12 October 2026), MSME Connect ’26, and industry programmes across Tamil Nadu.";

/* Moving announcement. `dark` = shown inside the dark menu bar (desktop),
   otherwise shown on a light strip (mobile). Uses the existing announcement-* CSS. */
const Ticker = ({ dark }) => (
  <div className="flex min-w-0 flex-1 items-center gap-3">
    <span
      className={`relative z-10 shrink-0 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
        dark ? "bg-amber-400 text-[#431407]" : "bg-orange-600 text-white"
      }`}
    >
      Latest
    </span>
    <div className="announcement-window min-w-0 flex-1 overflow-hidden py-2">
      <div className="announcement-track flex w-max" style={{ animationPlayState: "running" }}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="announcement-copy flex shrink-0 items-center gap-12 pr-12"
          >
            <span className={`whitespace-nowrap text-[13px] font-medium ${dark ? "text-amber-50" : "text-orange-950"}`}>
              {ANNOUNCEMENT}
            </span>
            <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 rotate-45 ${dark ? "bg-amber-400" : "bg-orange-600"}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

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
      <div className="flex h-10 items-center border border-orange-300 bg-white transition focus-within:border-orange-600 focus-within:ring-2 focus-within:ring-amber-200">
        <input
          id={id}
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSearchTerm("");
          }}
          placeholder="Search website"
          className="w-full min-w-0 bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-full w-10 shrink-0 items-center justify-center bg-orange-600 text-white transition hover:bg-orange-700"
        >
          <Search size={16} aria-hidden="true" />
        </button>
      </div>
      {normalizedTerm && (
        <div
          className="absolute right-0 top-full z-[60] mt-1 max-h-80 w-72 overflow-auto border-t-4 border-amber-400 bg-white shadow-xl sm:w-80"
          role="listbox"
          aria-label="Search results"
        >
          {results.length ? (
            <ul className="divide-y divide-orange-100">
              {results.map((page) => (
                <li key={page.path}>
                  <Link
                    to={page.path}
                    onClick={() => {
                      setSearchTerm("");
                      setMobileSearchOpen(false);
                    }}
                    className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-amber-50 hover:text-orange-700"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-3 text-sm text-slate-500">No pages found for “{searchTerm}”.</p>
          )}
        </div>
      )}
    </form>
  );

  return (
    <>
      {/* Thin saffron-to-gold line */}
      <div aria-hidden="true" className="h-1.5 bg-linear-to-r from-orange-600 via-amber-400 to-orange-600" />

      {/* Branding row: logo + title on the left, utility links + search on the right */}
      <div className="relative bg-white">
        <div className={`${CONTAINER} flex items-center gap-4 py-4 lg:py-5`}>
          <a href="/" className="flex min-w-0 items-center gap-4">
            <img
              src="/site-logo-final.png"
              alt="FASII — Federation of Associations of Small Industries of India"
              className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-amber-400 ring-offset-2 sm:h-20 sm:w-20"
            />
            <div className="min-w-0 border-l-2 border-amber-400 pl-4">
              <p className="text-[10px] font-bold uppercase tracking-[.3em] text-orange-700 sm:text-xs">FASII</p>
              <h1 className="mt-0.5 text-sm font-bold leading-tight text-[#431407] sm:text-xl lg:text-[1.65rem]">
                Federation of Associations of
                <br className="hidden sm:block" /> Small Industries of India
              </h1>
              <p className="mt-1 hidden text-xs font-medium tracking-wide text-slate-600 sm:block">
                Supporting India’s small industries
              </p>
            </div>
          </a>

          <div className="ml-auto flex shrink-0 flex-col items-end gap-2">
            {/* Utility links */}
            <div className="flex items-center divide-x divide-orange-200 text-xs text-slate-700">
              <a href="mailto:fasiichairman@gmail.com" className="hidden items-center gap-2 px-3 py-1 transition hover:text-orange-700 lg:flex">
                <Mail size={14} className="text-orange-600" aria-hidden="true" />
                fasiichairman@gmail.com
              </a>

              <a href="tel:+919444182838" className="hidden items-center gap-2 px-3 py-1 transition hover:text-orange-700 md:flex">
                <Phone size={14} className="text-orange-600" aria-hidden="true" />
                +91 94441 82838
              </a>

              <div className="flex items-center gap-1 px-3 py-1" role="group" aria-label="Text size">
                <Accessibility size={15} className="text-orange-600" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => setFontStep((step) => Math.max(0, step - 1))}
                  disabled={fontStep === 0}
                  aria-label="Decrease text size"
                  className="px-1.5 font-semibold transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A-
                </button>
                <button
                  type="button"
                  onClick={() => setFontStep(1)}
                  aria-label="Reset text size"
                  aria-pressed={fontStep === 1}
                  className="bg-orange-600 px-1.5 font-semibold text-white transition hover:bg-orange-700"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontStep((step) => Math.min(FONT_STEPS.length - 1, step + 1))}
                  disabled={fontStep === FONT_STEPS.length - 1}
                  aria-label="Increase text size"
                  className="px-1.5 font-semibold transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  A+
                </button>
              </div>

              <button
                type="button"
                disabled
                title="Hindi version will be available soon"
                className="hidden cursor-not-allowed items-center gap-2 px-3 py-1 opacity-60 sm:flex"
                aria-label="Hindi version will be available soon"
              >
                <Languages size={15} aria-hidden="true" />
                <span>हिंदी</span>
              </button>

              <button
                type="button"
                aria-label="Search website"
                onClick={() => setMobileSearchOpen((open) => !open)}
                className="flex items-center px-3 py-1 text-orange-700 hover:text-orange-900 lg:hidden"
              >
                {mobileSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            {/* Search (desktop) */}
            <div className="hidden w-80 lg:block">{searchBox("header-search")}</div>
          </div>
        </div>

        {mobileSearchOpen && (
          <div className="absolute inset-x-0 top-full z-40 border-t-4 border-amber-400 bg-white p-3 shadow-lg lg:hidden">
            {searchBox("mobile-header-search")}
          </div>
        )}
      </div>

      {/* Menu bar (the only sticky part). On desktop the ticker lives inside it. */}
      <Navbar ticker={<Ticker dark />} />

      {/* Mobile / tablet: ticker as a thin strip under the menu */}
      <div className="border-b border-amber-300 bg-[#fff3df] xl:hidden">
        <div className={`${CONTAINER} flex min-h-10 items-center`}>
          <Ticker />
        </div>
      </div>
    </>
  );
};

export default Header;