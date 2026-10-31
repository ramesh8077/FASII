import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 * Optimized Hero Slider.
 * 
 * All text overlays, buttons, and visual effects (filters/gradients) 
 * have been removed as per expert image optimization requirements.
 * Images are served in high-quality WebP format with enhanced sharpness.
 */
import banner1 from "../../../assets/Images/Hero/msme-connect-main.webp";
import banner2 from "../../../assets/Images/Hero/msme-awareness-main.webp";
import banner4 from "../../../assets/Images/Hero/hosur-schemes-main.webp";
import banner3Small from "../../../assets/Images/Hero/msme-inauguration-1280.webp";
import banner3 from "../../../assets/Images/Hero/msme-inauguration-1920.webp";

const slides = [
  {
    id: "about",
    image: banner1,
    focus: "center",
  },
  {
    id: "leadership",
    image: banner2,
    focus: "center",
  },
  {
    id: "events",
    image: banner3,
    srcSet: `${banner3Small} 1280w, ${banner3} 1920w`,
    focus: "center",
  },
  {
    id: "schemes",
    image: banner4,
    focus: "center",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
      <div className="relative h-110 sm:h-150 lg:h-190">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            srcSet={slide.srcSet}
            sizes={slide.srcSet ? "100vw" : undefined}
            alt=""
            aria-hidden="true"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition: slide.focus }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* 
          Note: Per user instructions, all text overlays, buttons, and 
          visual effects (gradients, filters, etc.) have been removed.
        */}

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
                aria-label={`Show slide ${index + 1}`}
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
