import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";

const spotlightNews = [
  {
    id: 1,
    source: "Times of India",
    date: "Aug 26, 2026",
    title:
      "Businesses concerned over India-Japan trade deal: FICCI President Anant Goenka",
    path: "/news/india-japan-trade-deal",
  },
  {
    id: 2,
    source: "The Hindu",
    date: "Aug 26, 2026",
    title:
      "Customs transitioned from duty collector to trade facilitator, says official",
    path: "/news/customs-trade-facilitator",
  },
  {
    id: 3,
    source: "Economic Times",
    date: "Aug 26, 2026",
    title:
      "Convening India's brightest minds: The Bharat Life Sciences Innovation Summit",
    path: "/news/bharat-life-sciences-summit",
  },
];

export default function FicciSpotlight() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-12 lg:py-16">
      {/* Faded heading */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 top-4 whitespace-nowrap
          font-serif text-[65px] font-bold leading-none text-black/[0.035]
          sm:text-[90px] lg:text-[120px]"
      >
        What&apos;s Happening
      </span>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-12 flex items-center justify-between gap-5">
          <h2 className="text-2xl font-medium text-slate-900 sm:text-3xl">
           Spotlight
          </h2>

          <Link
            to="/news"
            aria-label="View all news"
            className="grid h-14 w-14 shrink-0 place-items-center
              bg-white text-3xl text-slate-900 transition
              hover:bg-orange-500 hover:text-white
              focus-visible:outline
              focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <FiChevronsRight aria-hidden="true" />
          </Link>
        </div>

        {/* News cards */}
        <div
          className="grid grid-flow-col auto-cols-[88%] gap-6 overflow-x-auto
            pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden
            sm:auto-cols-[48%] lg:grid-flow-row lg:grid-cols-3 lg:overflow-visible"
        >
          {spotlightNews.map((news, index) => (
            <article
              key={news.id}
              className={`min-w-0 px-1 lg:pr-8 ${
                index !== spotlightNews.length - 1
                  ? "lg:border-r lg:border-slate-200"
                  : ""
              }`}
            >
              {/* Source and date */}
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-400 sm:text-base">
                <span className="capitalize">{news.source}</span>

                <span aria-hidden="true">|</span>

                <time dateTime="2026-08-26">{news.date}</time>
              </div>

              {/* Green line */}
              <span
                aria-hidden="true"
                className="my-3 block h-0.5 w-16 bg-emerald-500"
              />

              {/* Article title */}
              <h3>
                <Link
                  to={news.path}
                  className="block text-base font-normal leading-7
                    text-slate-800 transition-colors
                    hover:text-orange-600 sm:text-lg"
                >
                  {news.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}