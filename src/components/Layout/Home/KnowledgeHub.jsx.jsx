import { useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiDownload } from "react-icons/fi";
import report1 from "../../../assets/Images/StudyImages/report-1.jpg";
import report2 from "../../../assets/Images/StudyImages/report-2.jpg";
import report3 from "../../../assets/Images/StudyImages/report-3.jpeg";
import report4 from "../../../assets/Images/StudyImages/report-4.jpeg";
import report5 from "../../../assets/Images/StudyImages/report-5.jpeg";


const reports = [
  {
    id: 1,
    title: "Growth Engines",
    category: "Economic Report",
    date: "July 2026",
    image: report1,
    file: "#",
  },
  {
    id: 2,
    title: "Sustainable Transformation",
    category: "Industry Study",
    date: "June 2026",
    image: report2,
    file: "#",
  },
  {
    id: 3,
    title: "India’s Real Estate Landscape",
    category: "Research Report",
    date: "May 2026",
    image: report3,
    file: "#",
  },
  {
    id: 4,
    title: "Responsible Textile Value Chains",
    category: "Sector Report",
    date: "April 2026",
    image: report4,
    file: "#",
  },
  {
    id: 5,
    title: "Empowering the Cocoa Sector",
    category: "Strategic Study",
    date: "April 2026",
    image: report5,
    file: "#",
  },
];

export default function KnowledgeHub() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const slide = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.querySelector("[data-report-card]");
    const distance = card ? card.offsetWidth + 24 : 350;

    slider.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const reachedEnd =
        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

      if (reachedEnd) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slide("next");
      }
    }, 4000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-14 lg:py-20">
      {/* Large faded text */}
      <span className="pointer-events-none absolute left-4 top-5 font-serif text-[70px] font-bold leading-none text-black/[0.035] sm:text-[100px] lg:text-[140px]">
        Studies
      </span>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mb-8 flex items-end justify-between gap-5 lg:mb-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.75 w-10 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                Reports & Publications
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Knowledge Hub
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Explore the latest research, industry reports and policy insights.
            </p>
          </div>

          {/* Desktop controls */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => slide("previous")}
              aria-label="Previous reports"
              className="grid h-12 w-12 place-items-center border border-slate-300 bg-white text-xl text-slate-800 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => slide("next")}
              aria-label="Next reports"
              className="grid h-12 w-12 place-items-center bg-slate-900 text-xl text-white transition hover:bg-orange-500"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={startAutoSlide}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scrollbar-none [&::-webkit-scrollbar]:hidden lg:gap-6"
        >
          {reports.map((report) => (
            <article
              key={report.id}
              data-report-card
              className="group relative w-[82%] shrink-0 snap-start overflow-hidden bg-white shadow-sm sm:w-[45%] lg:w-[31.7%] xl:w-[24%]"
            >
              {/* Report image */}
              <div className="relative aspect-3/4 overflow-hidden bg-slate-200">
                <img
                  src={report.image}
                  alt={report.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />

                <span className="absolute left-0 top-0 bg-orange-500 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white">
                  {report.category}
                </span>

                {/* Content shown over image */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white">
                    {report.date}
                  </p>

                  <h3 className="line-clamp-2 text-xl font-semibold leading-snug">
                    {report.title}
                  </h3>

                  <a
                    href={report.file}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-orange-300"
                  >
                    View publication
                    <FiDownload />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile buttons */}
        <div className="mt-3 flex gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => slide("previous")}
            className="grid h-11 flex-1 place-items-center border border-slate-300 bg-white text-slate-900"
            aria-label="Previous reports"
          >
            <FiArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => slide("next")}
            className="grid h-11 flex-1 place-items-center bg-slate-900 text-white"
            aria-label="Next reports"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}