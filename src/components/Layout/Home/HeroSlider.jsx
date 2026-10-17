import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import banner1 from "../../../assets/Images/HeroSliderimages/banner-1.jpg";
import banner2 from "../../../assets/Images/HeroSliderimages/banner-2.jpg";
import banner3 from "../../../assets/Images/HeroSliderimages/banner-3.jpg";

const slides = [
  {
    id: "services",
    label: "FASII",
    title: "A national federation",
    highlight: "for small industries.",
    description: "Connecting industry associations and supporting small industries through programmes, awareness and vendor development.",
    button: "About FASII",
    path: "/about",
      image: banner1,
    background: "linear-gradient(120deg, #0f172a, #164e63)",
  },
  {
    id: "knowledge",
    label: "Office Bearers",
    title: "Member associations",
    highlight: "from across India.",
    description: "Meet FASII’s national office bearers and regional chairmen representing industry associations across the country.",
    button: "Meet the Office Bearers",
    path: "/about/office-bearers",
    image: banner2,
    background: "linear-gradient(120deg, #172554, #065f46)",
  },
  {
    id: "events",
    label: "Events & Programmes",
    title: "MSME programmes",
    highlight: "industry engagement.",
    description: "Explore FASII’s recent vendor development, awareness, exhibition and industry engagement programmes.",
    button: "Latest FASII Updates",
    path: "/media/news",
    image: banner3,
    background: "linear-gradient(120deg, #1c1917, #7c2d12)",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
//   const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const currentSlide = slides[activeSlide];

  // Respect the visitor's motion preference.
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReducedMotion(media.matches);
    setPlaying(!media.matches);

    const handleChange = (event) => {
      setReducedMotion(event.matches);

      if (event.matches) {
        setPlaying(false);
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  // Automatically advance only when the visitor isn't interacting.
 useEffect(() => {
  if (!playing || focused || reducedMotion) return;

  const timer = window.setInterval(() => {
    setActiveSlide((previous) => (previous + 1) % slides.length);
  }, 4000);

  return () => window.clearInterval(timer);
}, [playing, focused, reducedMotion]);

const changeSlide = (index) => {
  setActiveSlide((index + slides.length) % slides.length);
};

  return (
    <section
      aria-label="Homepage highlights"
      aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
      className="relative isolate overflow-hidden bg-slate-900 text-white"
    >
      {/* Background images and gradient fallbacks */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden="true"
          style={{
            backgroundImage: `${slide.background}`,
          }}
          className={`absolute inset-0 -z-20 transition-opacity duration-700 motion-reduce:transition-none ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover object-center"
          />
        </div>
      ))}

      {/* Readability overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"
      />

      <div className="mx-auto flex min-h-130 max-w-7xl flex-col justify-between px-5 py-10 sm:min-h-140 sm:px-8 sm:py-12 lg:min-h-155 lg:px-6 lg:py-16">
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeSlide + 1} of ${slides.length}`}
          aria-live={playing ? "off" : "polite"}
          className="my-auto max-w-3xl py-6 sm:py-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-orange-400"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300 sm:text-sm">
              {currentSlide.label}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            {currentSlide.title}

            <span className="mt-2 block text-orange-300">
              {currentSlide.highlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
            {currentSlide.description}
          </p>

          <Link
            to={currentSlide.path}
            className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {currentSlide.button}

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </Link>
        </div>

        {/* Slider controls */}


        <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/20 pt-5">
          <div className="flex items-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => changeSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className="flex h-11 w-11 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-orange-300"
              >
                {/* <span
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${
                    index === activeSlide
                      ? "w-8 bg-orange-400"
                      : "w-3 bg-white/50"
                  }`}
                /> */}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="mr-3 hidden text-sm tabular-nums text-slate-300 sm:block"
            >
              {String(activeSlide + 1).padStart(2, "0")}
              <span className="mx-2 text-white/40">/</span>
              {String(slides.length).padStart(2, "0")}
            </span>

            {/* {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPlaying((previous) => !previous)}
                aria-label={
                  playing ? "Pause automatic slides" : "Start automatic slides"
                }
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-orange-300"
              >
                {playing ? (
                  <Pause size={17} aria-hidden="true" />
                ) : (
                  <Play size={17} aria-hidden="true" />
                )}
              </button>
            )} */}

            <button
              type="button"
              onClick={() => changeSlide(activeSlide - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-orange-300"
            >
              <ChevronLeft size={21} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => changeSlide(activeSlide + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-orange-300"
            >
              <ChevronRight size={21} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
