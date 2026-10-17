import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiX,
  FiTrendingUp,
  FiImage,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const quickLinks = [
  {
    title: "Research & Policy",
    description: "Studies, Surveys & Policy Recommendations",
    icon: FiTrendingUp,
    path: "/research-policy",
  },
  {
    title: "Media Centre",
    description: "Press Releases, Statements, Images & Videos",
    icon: FiImage,
    path: "/media-centre",
  },
  {
    title: "International Engagement",
    description: "Bilateral & Global Initiatives",
    icon: FiGlobe,
    path: "/international-engagement",
  },
  {
    title: "Members",
    description: "Benefits, Services & Member Resources",
    icon: FiUsers,
    path: "/members",
  },
];

export default function QuickAccess() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-0 right-3 z-50 w-[calc(100%-1.5rem)] max-w-93.75 sm:right-6"
    >
      {/* Expandable panel */}
      <nav
        id="quick-access-panel"
        aria-label="Quick access"
        hidden={!isOpen}
        className="max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.14)]"
      >
        {quickLinks.map(({ title, description, icon: Icon, path }) => (
          <Link
            key={path}
            to={path}
            onClick={() => setIsOpen(false)}
            className="group flex items-start gap-4 border-b border-slate-100 px-5 py-5 transition-colors last:border-b-0 hover:bg-sky-50 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-sky-600 sm:py-6"
          >
            {/* Icon */}
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f4f4f4] text-[#333] transition-colors group-hover:bg-sky-100 group-hover:text-sky-600">
              <Icon size={27} aria-hidden="true" />
            </span>

            {/* Text */}
            <div className="min-w-0">
              <h3 className="text-[17px] font-semibold leading-snug text-[#292929] sm:text-xl">
                {title}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-[#707070]">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </nav>

      {/* Fixed toggle */}
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="quick-access-panel"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`relative flex min-h-14 w-full items-center justify-center gap-2 bg-[#09b6e5] px-4 py-4 text-lg font-medium text-white shadow-lg transition-colors hover:bg-[#009fce] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-white ${
          isOpen ? "" : "rounded-t-xl"
        }`}
      >
        {isOpen ? (
          <FiX size={25} aria-hidden="true" />
        ) : (
          <FiSearch size={25} strokeWidth={3} aria-hidden="true" />
        )}

        <span>{isOpen ? "Close Quick Access" : "Find What You Need"}</span>
      </button>
    </div>
  );
}