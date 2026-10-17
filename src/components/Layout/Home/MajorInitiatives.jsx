import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronsRight} from "react-icons/fi";

const initiatives = [
  {
    id: 1,
    title: "TechEquity",
    image: "/images/initiatives/tech-equity.jpg",
    href: "",
  },
  {
    id: 2,
    title: "India's Century",
    image: "/images/initiatives/indias-century.jpg",
    href: "",
  },
  {
    id: 3,
    title: "Intellectual Property Certificate Courses",
    image: "/images/initiatives/intellectual-property.jpg",
    href: "",
  },
  {
    id: 4,
    title: "FICCI Wellbeing Wave Portal",
    image: "/images/initiatives/wellbeing.jpg",
    href: "",
  },
];

export default function MajorInitiatives() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      aria-labelledby="initiatives-heading"
      className="relative overflow-hidden bg-white py-12 lg:py-16"
    >
      {/* Faded background heading */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-5
          whitespace-nowrap font-serif text-[60px] font-bold
          leading-none text-black/[0.035]
          sm:text-[90px] lg:text-[120px]"
      >
        For the Community
      </span>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Heading and controls */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <h2
            id="initiatives-heading"
            className="text-2xl font-medium text-slate-900 sm:text-3xl"
          >
            Major Initiatives
          </h2>

          <div className="flex shrink-0 items-center gap-2">

            <Link
              to="/initiatives"
              aria-label="View all initiatives"
              className="grid h-12 w-12 place-items-center
                bg-[#f8f8f8] text-3xl text-slate-900 transition-colors
                hover:bg-orange-500 hover:text-white
                focus-visible:outline
                focus-visible:outline-orange-500 sm:h-14 sm:w-14"
            >
              <FiChevronsRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Slider viewport */}
        <div
          className="mi-viewport"
          tabIndex={0}
          role="region"
          aria-label="Major initiatives carousel"
        >
          <div
            className="mi-track"
            style={{
              animationPlayState: isPaused ? "paused" : undefined,
            }}
          >
            {/* Two identical groups make the loop seamless */}
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="mi-group"
                aria-hidden={groupIndex === 1 ? true : undefined}
              >
                {initiatives.map((item) => {
                  const Wrapper = item.href ? "a" : "div";

                  return (
                    <article key={item.id} className="mi-card">
                      <Wrapper
                        href={item.href || undefined}
                        tabIndex={
                          item.href && groupIndex === 1 ? -1 : undefined
                        }
                        className="mi-card-content"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          draggable={false}
                          className="mi-image"
                        />
                      </Wrapper>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mi-viewport {
          container-type: inline-size;
          overflow: hidden;
        }

        .mi-viewport:focus-visible {
          outline: 2px solid #ea580c;
          outline-offset: 4px;
        }

        .mi-track {
          display: flex;
          width: max-content;
          animation: mi-slide-left 32s linear infinite;
        }

        .mi-group {
          display: flex;
          flex-shrink: 0;
          gap: 16px;
          padding-right: 16px;
        }

        .mi-card {
          box-sizing: border-box;
          flex-shrink: 0;
          width: calc((100cqw - 48px) / 4);
          padding: 10px;
          border: 1px solid #ececec;
          background: white;
        }

        .mi-card-content {
          display: block;
          overflow: hidden;
          border-radius: 6px;
          background: #f8fafc;
        }

        .mi-card-content:focus-visible {
          outline: 3px solid #ea580c;
          outline-offset: -3px;
        }

        .mi-image {
          display: block;
          width: 100%;
          aspect-ratio: 8 / 5;
          object-fit: contain;
        }

        .mi-viewport:hover .mi-track,
        .mi-viewport:focus-within .mi-track {
          animation-play-state: paused;
        }

        @keyframes mi-slide-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1023px) {
          .mi-card {
            width: calc((100cqw - 16px) / 2);
          }
        }

        @media (max-width: 639px) {
          .mi-card {
            width: 82cqw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mi-track {
            animation: none;
            transform: none;
          }

          .mi-group[aria-hidden="true"] {
            display: none;
          }

          .mi-viewport {
            overflow-x: auto;
          }
        }
      `}</style>
      
    </section>
  );
}