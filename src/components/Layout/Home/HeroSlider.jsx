import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import banner2 from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import banner3 from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import banner4 from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";

const slides = [
  {
    id: "about",
    label: "About FASII",
    title: "A national federation for small industries",
    description: "Connecting industry associations and supporting small industries through programmes, awareness and vendor development.",
    button: "About FASII",
    path: "/about",
    image: banner1,
  },
  {
    id: "leadership",
    label: "Office Bearers",
    title: "Member associations from across India",
    description: "Meet FASII's national office bearers and regional chairmen representing industry associations across the country.",
    button: "Meet the Office Bearers",
    path: "/about/office-bearers",
    image: banner2,
  },
  {
    id: "events",
    label: "Events & Programmes",
    title: "MSME programmes and industry engagement",
    description: "Explore FASII's recent vendor development, awareness, exhibition and industry engagement programmes.",
    button: "Latest FASII Updates",
    path: "/media/news",
    image: banner3,
  },
  {
    id: "schemes",
    label: "Schemes & Services",
    title: "Government schemes made accessible",
    description: "Scheme awareness, applications, grievance support and downloads for small enterprises.",
    button: "View Services",
    path: "/services/YojanaIntro",
    image: banner4,
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    if (media.matches) setPlaying(false);

    const handleChange = (event) => {
      setReducedMotion(event.matches);
      if (event.matches) setPlaying(false);
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!playing || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [playing, focused, reducedMotion]);

  const changeSlide = (index) => setActiveSlide((index + slides.length) % slides.length);

  return (
    <section
      aria-label="Homepage highlights"
      aria-roledescription="carousel"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
      className="relative isolate overflow-hidden border-b-4 border-amber-500 bg-orange-950 text-white"
    >
      <div className="relative h-110 sm:h-150 lg:h-180">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            aria-hidden="true"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* light overlay so the photo stays visible */}
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-orange-950/90 via-orange-950/20 to-transparent" />

        {/* caption band */}
        <div className="absolute inset-x-0 bottom-0">
          <div
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeSlide + 1} of ${slides.length}`}
            aria-live={playing ? "off" : "polite"}
            className="mx-auto max-w-7xl px-5 pb-6 sm:px-8 lg:px-12 lg:pb-8"
          >
            <p className="inline-block bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[.18em] text-orange-950">
              {currentSlide.label}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {currentSlide.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-orange-50 sm:text-base">{currentSlide.description}</p>
            <Link
              to={currentSlide.path}
              className="group mt-5 inline-flex items-center gap-2 bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {currentSlide.button}
              <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </div>
        </div>

        {/* arrows */}
        <button
          type="button"
          onClick={() => changeSlide(activeSlide - 1)}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-orange-950/60 text-white transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-amber-300"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => changeSlide(activeSlide + 1)}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-orange-950/60 text-white transition hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-amber-300"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      {/* indicator strip */}
      <div className="bg-orange-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="flex items-center">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => changeSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.label}`}
                aria-current={index === activeSlide ? "true" : undefined}
                className="flex h-11 items-center px-2 focus-visible:outline-2 focus-visible:outline-amber-300"
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 transition-all motion-reduce:transition-none ${
                    index === activeSlide ? "w-10 bg-amber-400" : "w-5 bg-white/50 hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>
          <span aria-hidden="true" className="text-sm tabular-nums text-amber-200">
            {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}