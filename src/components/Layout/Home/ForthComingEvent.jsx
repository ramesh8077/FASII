import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCalendar } from "react-icons/fi";
import event1 from "../../../assets/Images/Events/business-conference.jpg";
import event2 from "../../../assets/Images/Events/india-chem-2026.jpg";
import event3 from "../../../assets/Images/Events/manufacturing-summit.jpg";

const events = [
  {
    id: 1,
    title: "India Chem 2026",
    date: "22–24 October 2026",
    location: "NESCO, Mumbai",
    image: event1,
    path: "/events/india-chem-2026",
  },
  {
    id: 2,
    title: "India Manufacturing Summit",
    date: "10 November 2026",
    location: "New Delhi",
    image: event2,
    path: "/events/manufacturing-summit",
  },
  {
    id: 3,
    title: "Sustainable Business Conference",
    date: "18 December 2026",
    location: "Bengaluru",
    image: event3,
    path: "/events/business-conference",
  },
];

export default function ForthcomingEvents() {
  const [currentEvent, setCurrentEvent] = useState(0);
  const intervalRef = useRef(null);

  const changeSlide = (direction) => {
    setCurrentEvent((previous) => {
      if (direction === "next") {
        return (previous + 1) % events.length;
      }

      return (previous - 1 + events.length) % events.length;
    });
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentEvent((previous) => (previous + 1) % events.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, []);

  const event = events[currentEvent];

  return (
    <section
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={startAutoSlide}
      className="relative overflow-hidden bg-[#f5f5f5] py-14 lg:py-20"
    >
      {/* Faded background heading */}
      <span className="pointer-events-none absolute left-4 top-5 whitespace-nowrap font-serif text-[70px] font-semibold leading-none text-black/[0.035] sm:text-[100px] lg:text-[130px]">
        Events
      </span>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.75 w-10 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                Upcoming Programmes
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Forthcoming Events
            </h2>
          </div>

          {/* Desktop controls */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => changeSlide("previous")}
              aria-label="Previous event"
              className="grid h-12 w-12 place-items-center border border-slate-300 bg-white text-xl text-slate-800 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <FiArrowLeft />
            </button>

            <button
              type="button"
              onClick={() => changeSlide("next")}
              aria-label="Next event"
              className="grid h-12 w-12 place-items-center bg-slate-900 text-xl text-white transition hover:bg-orange-500"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Event banner */}
<article className="overflow-hidden bg-white shadow-sm">
  <div className="overflow-hidden">
    <div
      className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
      style={{
        transform: `translateX(-${currentEvent * 100}%)`,
      }}
    >
      {events.map((item, index) => (
        <a
          key={item.id}
          href={item.path}
          aria-label={`View ${item.title}`}
          aria-hidden={index !== currentEvent}
          tabIndex={index === currentEvent ? 0 : -1}
          className="block w-full min-w-0 shrink-0"
        >
          <img
            src={item.image}
            alt={item.title}
            draggable={false}
            className="block aspect-4.5/1 w-full bg-white object-contain"
          />
        </a>
      ))}
    </div>
  </div>

  {/* Mobile information below the banner */}
  <div className="border-t border-slate-100 p-4 sm:hidden">
    <span className="mb-2 flex items-center gap-2 text-xs font-semibold text-orange-600">
      <FiCalendar aria-hidden="true" />
      {event.date}
    </span>

    <a
      href={event.path}
      className="text-lg font-semibold text-slate-900"
    >
      {event.title}
    </a>

    <p className="mt-1 text-sm text-slate-600">
      {event.location}
    </p>
  </div>
</article>

        {/* Bottom controls */}
        <div className="mt-5 flex items-center justify-between gap-4">
          {/* Slide indicators */}
          <div className="flex items-center gap-2">
            {events.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentEvent(index)}
                aria-label={`Show ${item.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentEvent
                    ? "w-9 bg-orange-500"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <a
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 transition hover:text-orange-600"
          >
            View all events
            <FiArrowRight />
          </a>
        </div>

        {/* Mobile navigation */}
        <div className="mt-5 flex gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => changeSlide("previous")}
            className="grid h-11 flex-1 place-items-center border border-slate-300 bg-white text-slate-900"
            aria-label="Previous event"
          >
            <FiArrowLeft />
          </button>

          <button
            type="button"
            onClick={() => changeSlide("next")}
            className="grid h-11 flex-1 place-items-center bg-slate-900 text-white"
            aria-label="Next event"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}