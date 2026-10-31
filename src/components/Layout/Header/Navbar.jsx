import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Home, Menu, X } from "lucide-react";
import { navigationItems } from "../../../data/navigationData.js";

/* Same horizontal padding as every page section, so the menu lines up with content. */
const CONTAINER = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-12";

/* `ticker` is optional: when passed, it fills all the space to the right of the
   desktop menu items, all the way to the screen edge. */
export default function Navbar({ ticker = null }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const triggerRefs = useRef({});
  const mobileButtonRef = useRef(null);

  const { pathname } = useLocation();

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  // Close navigation after a route change.
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close when clicking outside.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = (label) => {
    setActiveMenu((current) => (current === label ? null : label));
  };

  const handleEscape = (event) => {
    if (event.key !== "Escape") return;

    if (activeMenu) {
      triggerRefs.current[activeMenu]?.focus();
      setActiveMenu(null);
    } else if (mobileOpen) {
      mobileButtonRef.current?.focus();
      setMobileOpen(false);
    }
  };

  const isSectionActive = (item) => {
    if (item.children) {
      return item.children.some((child) => child.path === pathname);
    }

    return pathname === item.path;
  };

  const desktopLinkClass = ({ isActive }) =>
    `flex min-h-12 items-center px-3 text-[11px] font-semibold
     uppercase tracking-wide transition-colors
     focus-visible:outline-2 focus-visible:-outline-offset-4
     focus-visible:outline-amber-300 ${
       isActive
         ? "bg-amber-400 text-[#431407]"
         : "text-white hover:bg-white/10"
     }`;

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onKeyDown={handleEscape}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenus();
        }
      }}
      className="sticky top-0 z-50 w-full border-b-[3px] border-amber-400 bg-[#4a1707] shadow-md [--pad:1.25rem] sm:[--pad:2rem] lg:[--pad:3rem]"
    >
      {/* Desktop: full-width row. Left gutter lines the menu up with the page
          content, the ticker then takes everything that is left to the screen edge. */}
      <div className="hidden items-stretch xl:flex">
        <div
          aria-hidden="true"
          className="shrink-0"
          style={{ width: "max(var(--pad), calc((100% - 80rem) / 2 + var(--pad)))" }}
        />

        <ul className="-ml-3 flex shrink-0 items-stretch">
          <li>
            <NavLink
              to="/"
              end
              aria-label="Home"
              onClick={closeMenus}
              className={desktopLinkClass}
            >
              <Home size={18} />
            </NavLink>
          </li>

          {navigationItems.map((item, index) => {
            const isOpen = activeMenu === item.label;
            const panelId = `desktop-nav-panel-${index}`;
            const buttonId = `desktop-nav-button-${index}`;

            if (!item.children) {
              return (
                <li key={item.label} className="border-l border-white/15">
                  <NavLink
                    to={item.path}
                    onClick={closeMenus}
                    className={desktopLinkClass}
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            }

            const wideMenu = item.children.length > 6;
            const alignRight = index > navigationItems.length / 2;

            return (
              <li
                key={item.label}
                className="relative border-l border-white/15"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  ref={(element) => {
                    triggerRefs.current[item.label] = element;
                  }}
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleMenu(item.label)}
                  className={`flex min-h-12 items-center gap-1 px-3
                    text-[11px] font-semibold uppercase tracking-wide
                    transition-colors focus-visible:outline-2
                    focus-visible:-outline-offset-4
                    focus-visible:outline-amber-300 ${
                      isOpen || isSectionActive(item)
                        ? "bg-amber-400 text-[#431407]"
                        : "text-white hover:bg-white/10"
                    }`}
                >
                  {item.label}

                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  hidden={!isOpen}
                  className={`absolute top-full z-50 overflow-hidden
                    border-t-4 border-amber-400 bg-white
                    shadow-[0_18px_40px_rgba(67,20,7,0.25)] ${
                      alignRight ? "right-0" : "left-0"
                    } ${wideMenu ? "w-140" : "w-72"}`}
                >
                  <div className="bg-orange-50 px-5 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-800">
                      {item.label}
                    </p>
                  </div>

                  <ul
                    aria-labelledby={buttonId}
                    className={`grid ${
                      wideMenu ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.path} className="border-t border-orange-100">
                        <NavLink
                          to={child.path}
                          end
                          onClick={closeMenus}
                          className={({ isActive }) =>
                            `group flex h-full items-center justify-between
                             gap-3 border-l-4 px-4 py-3 text-sm
                             transition-colors focus-visible:outline-2
                             focus-visible:-outline-offset-2
                             focus-visible:outline-orange-500 ${
                               isActive
                                 ? "border-amber-500 bg-amber-50 font-semibold text-orange-800"
                                 : "border-transparent text-slate-700 hover:border-amber-400 hover:bg-amber-50 hover:text-orange-700"
                             }`
                          }
                        >
                          {child.label}

                          <ChevronRight
                            size={14}
                            aria-hidden="true"
                            className="shrink-0 text-orange-400 transition-transform group-hover:translate-x-0.5"
                          />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        {ticker && (
          <div className="ml-4 flex min-w-0 flex-1 items-center border-l border-white/15 pl-4 pr-4">
            {ticker}
          </div>
        )}
      </div>

      {/* Mobile/tablet toolbar */}
      <div className={`${CONTAINER} flex min-h-12 items-center justify-between xl:hidden`}>
        <Link
          to="/"
          onClick={closeMenus}
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <Home size={18} aria-hidden="true" />
          Home
        </Link>

        <button
          ref={mobileButtonRef}
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveMenu(null);
          }}
          className="flex items-center gap-2 bg-amber-400 px-4 py-2 text-sm font-bold text-[#431407] hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-white"
        >
          {mobileOpen ? "Close" : "Menu"}
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile accordion navigation */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-full z-50 max-h-[65dvh] overflow-y-auto overscroll-contain border-b-4 border-amber-400 bg-white shadow-xl xl:hidden"
      >
        <ul className={`${CONTAINER} divide-y divide-orange-100`}>
          {navigationItems.map((item, index) => {
            const isOpen = activeMenu === item.label;
            const panelId = `mobile-nav-panel-${index}`;

            return (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button
                      ref={(element) => {
                        // Mobile and desktop have separate visible triggers.
                        if (element) {
                          triggerRefs.current[`mobile-${item.label}`] = element;
                        }
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleMenu(item.label)}
                      onKeyDown={(event) => {
                        if (event.key === "Escape" && isOpen) {
                          event.stopPropagation();
                          setActiveMenu(null);
                          event.currentTarget.focus();
                        }
                      }}
                      className={`flex min-h-14 w-full items-center
                        justify-between gap-4 px-2 text-left
                        text-sm font-semibold focus-visible:outline-2
                        focus-visible:outline-orange-500 ${
                          isOpen || isSectionActive(item)
                            ? "text-orange-700"
                            : "text-slate-800"
                        }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={17}
                        aria-hidden="true"
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <ul
                      id={panelId}
                      hidden={!isOpen}
                      className="mb-3 border-l-4 border-amber-400 bg-amber-50"
                      onKeyDown={(event) => {
                        if (event.key === "Escape") {
                          event.stopPropagation();
                          setActiveMenu(null);
                          triggerRefs.current[
                            `mobile-${item.label}`
                          ]?.focus();
                        }
                      }}
                    >
                      {item.children.map((child) => (
                        <li key={child.path} className="border-b border-orange-100 last:border-b-0">
                          <NavLink
                            to={child.path}
                            end
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-sm
                               focus-visible:outline-2
                               focus-visible:-outline-offset-2
                               focus-visible:outline-orange-500 ${
                                 isActive
                                   ? "bg-amber-100 font-semibold text-orange-800"
                                   : "text-slate-800 hover:bg-amber-100 hover:text-orange-700"
                               }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `flex min-h-14 items-center px-2
                       text-sm font-semibold focus-visible:outline-2
                       focus-visible:outline-orange-500 ${
                         isActive
                           ? "text-orange-700"
                           : "text-slate-800 hover:text-orange-700"
                       }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}