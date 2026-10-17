import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Home, Menu, X } from "lucide-react";
import { navigationItems } from "../../../data/navigationData.js";

export default function Navbar() {
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
    `flex min-h-14 items-center px-1.5 text-[10px] font-semibold
     uppercase tracking-wide transition-colors 2xl:px-2
     focus-visible:outline-2 focus-visible:outline-offset-[-4px]
     focus-visible:outline-orange-400 ${
       isActive
         ? "bg-orange-600 text-white"
         : "text-slate-800 hover:bg-white/10 hover:text-black/90"
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
      className="relative min-w-0 flex-1 bg-white"
    >
      <div className="min-w-0">
        {/* Desktop navigation */}
        <ul className="hidden items-stretch justify-between 2xl:flex">
          <li>
            <NavLink
              to="/"
              end
              aria-label="Home"
              onClick={closeMenus}
              className={desktopLinkClass}
            >
              <Home size={19} />
            </NavLink>
          </li>

          {navigationItems.map((item, index) => {
            const isOpen = activeMenu === item.label;
            const panelId = `desktop-nav-panel-${index}`;
            const buttonId = `desktop-nav-button-${index}`;

            if (!item.children) {
              return (
                <li key={item.label}>
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
  className="relative"
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
                  className={`flex min-h-14 items-center gap-1 px-1.5
                    text-[10px] font-semibold uppercase tracking-wide 2xl:px-2
                    transition-colors focus-visible:outline-2
                    focus-visible:-outline-offset-4
                    focus-visible:outline-orange-400 ${
                      isOpen || isSectionActive(item)
                        ? "bg-orange-600 text-white"
                        : "text-slate-800 hover:bg-white/10 hover:text-black/90"
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
                    rounded-b-xl border border-slate-200 bg-white
                    shadow-[0_18px_40px_rgba(15,23,42,0.15)] ${
                      alignRight ? "right-0" : "left-0"
                    } ${wideMenu ? "w-140" : "w-72"}`}
                >
                  <div className="border-b border-orange-100 bg-orange-50 px-5 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-700">
                      {item.label}
                    </p>
                  </div>

                  <ul
                    aria-labelledby={buttonId}
                    className={`grid gap-1 p-3 ${
                      wideMenu ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          end
                          onClick={closeMenus}
                          className={({ isActive }) =>
                            `group flex h-full items-center justify-between
                             gap-3 rounded-lg px-3 py-3 text-sm
                             transition-colors focus-visible:outline-2
                             focus-visible:outline-orange-500 ${
                               isActive
                                 ? "bg-orange-50 font-semibold text-orange-700"
                                 : "text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                             }`
                          }
                        >
                          {child.label}

                          <ChevronRight
                            size={14}
                            aria-hidden="true"
                            className="shrink-0 text-slate-900 transition-transform group-hover:translate-x-0.5"
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

        {/* Mobile/tablet toolbar */}
        <div className="flex min-h-12 items-center justify-end 2xl:hidden">
          <Link
            to="/"
            onClick={closeMenus}
            className="sr-only"
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
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-black hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-orange-400"
          >
            {mobileOpen ? "Close" : "Menu"}
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile accordion navigation */}
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-full z-50 max-h-[65dvh] overflow-y-auto overscroll-contain border-b border-slate-200 bg-white shadow-xl 2xl:hidden"
      >
        <ul className="mx-auto max-w-7xl divide-y divide-slate-100 px-4">
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
                        justify-between gap-4 rounded px-2 text-left
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
                      className="mb-3 space-y-1 rounded-xl bg-slate-50 p-2"
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
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            end
                            onClick={closeMenus}
                            className={({ isActive }) =>
                              `block rounded-lg px-4 py-3 text-sm
                               focus-visible:outline-2
                               focus-visible:outline-orange-500 ${
                                 isActive
                                   ? "bg-orange-100 font-semibold text-orange-800"
                                   : "text-slate-800 hover:bg-orange-50 hover:text-orange-700"
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
                      `flex min-h-14 items-center rounded px-2
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
