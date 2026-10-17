import { Accessibility, Languages, Mail, Phone, Search } from "lucide-react";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    
    <header className="relative z-50 bg-white shadow-sm">
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
              <Mail size={14} />
              <span className="hidden sm:inline">Southern Region contact</span>
            </a>

            <a
              href="tel:+919444182838"
              className="flex items-center gap-2 px-3 py-2 text-xs transition hover:bg-white/10"
            >
              <Phone size={14} />
              <span className="hidden md:inline">
                Southern Region
              </span>
            </a>

            <button
              type="button"
              className="flex items-center gap-1 px-3 py-2 text-xs transition hover:bg-white/10"
              aria-label="Accessibility options"
            >
              <Accessibility size={15} />
              <span>A-</span>
              <span>A</span>
              <span>A+</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 text-xs transition hover:bg-white/10"
              aria-label="Change language"
            >
              <Languages size={15} />
              <span>हिंदी</span>
            </button>
          </div>
        </div>
      </div>

      {/* Announcement bar */}
    {/* Moving announcement bar */}
<div className="border-b border-orange-200 bg-orange-50">
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
            <span className="whitespace-nowrap text-sm font-medium text-slate-700">
              Recent FASII updates: National Conclave for Industry Associations (12 October 2026), MSME Connect ’26, and industry programmes across Tamil Nadu.
            </span>

            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
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
            <form className="hidden 2xl:block">
              <label htmlFor="header-search" className="sr-only">
                Search website
              </label>

              <div className="flex h-11 items-center rounded-full border border-slate-300 bg-white transition focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100">
                <input
                  id="header-search"
                  type="search"
                  placeholder="Search website"
                  className="w-40 bg-transparent px-4 text-sm text-slate-800 outline-none"
                />

                <button
                  type="submit"
                  aria-label="Search"
                  className="mr-1 flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white transition hover:bg-orange-700"
                >
                  <Search size={17} />
                </button>
              </div>
            </form>

            <button
              type="button"
              aria-label="Search website"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 2xl:hidden"
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
