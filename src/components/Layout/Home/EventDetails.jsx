import {FiMapPin,FiCalendar,FiCheckSquare,FiClipboard,FiArrowUpRight} from "react-icons/fi";

const event = {
  title: "MASCRADE 2026",
  location: "Bharat Mandapam, New Delhi",
  date: "Sep 17 – Sep 18, 2026",
  description:
    "Movement Against Smuggled and Counterfeit Trade. Theme: One World, One Fight: Eliminating Counterfeiting and Smuggling Through Collective Action.",
};

// Google Calendar uses an exclusive end date for all-day events.
const calendarParams = new URLSearchParams({
  action: "TEMPLATE",
  text: event.title,
  dates: "20260917/20260919",
  location: event.location,
  details: event.description,
});

const calendarUrl = `https://calendar.google.com/calendar/render?${calendarParams}`;

export default function EventDetails({ registrationUrl }) {
  return (
    <section
      aria-labelledby="event-details-heading "
      className="bg-white"
    >
      {/* Event information bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {/* Location */}
        <div className="flex min-w-0 items-center gap-4 bg-[#30b9d6] px-5 py-6 lg:px-6">
          <FiMapPin
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-white text-2xl"
          />

          <div className="min-w-0">
            <h3 className=" font-semibold text-white text-lg">
              Location
            </h3>

            <p className="mt-1 text-sm leading-6 text-white font-semibold ">
              {event.location}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex min-w-0 items-center gap-4 bg-[#d7e69b] px-5 py-6 lg:px-6">
          <FiCalendar
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-white text-2xl"
          />

          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-white">
              Date
            </h3>

            <p className="mt-1 text-sm leading-6 text-white font-semibold ">
              {event.date}
            </p>
          </div>
        </div>

        {/* Add to Calendar */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Add ${event.title} to Google Calendar (opens a new tab)`}
          className="group flex min-w-0 items-center gap-4 bg-[#49dce0] px-5 py-6 text-white transition-colors hover:bg-[#35ccd1] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-slate-900 lg:px-6"
        >
          <FiCheckSquare
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-white"
          />

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold">
              Add to Calendar
            </h3>

            <p className="mt-1 text-sm leading-6">
              Save the date
            </p>
          </div>

          <FiArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
        </a>

        {/* Participate */}
        {registrationUrl ? (
          <a
            href={registrationUrl}
            className="group flex min-w-0 items-center gap-4 bg-[#7cf0c8] px-5 py-6 text-white transition-colors hover:bg-[#62e5b7] focus-visible:outline focus-visible:-outline-offset-4 focus-visible:outline-slate-900 lg:px-6"
          >
            <FiClipboard
              aria-hidden="true"
              className="h-8 w-8 shrink-0"
            />

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold">
                Participate
              </h3>

              <p className="mt-1 text-sm leading-6">
                Registration form online
              </p>
            </div>

            <FiArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </a>
        ) : (
          <div className="flex min-w-0 items-center gap-4 bg-[#7cf0c8] px-5 py-6 text-white lg:px-6">
            <FiClipboard
              aria-hidden="true"
              className="h-8 w-8 shrink-0"
            />

            <div className="min-w-0">
              <h3 className="text-lg font-semibold">
                Participate
              </h3>

              <p className="mt-1 text-sm leading-6">
                Registration link coming soon
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Event description */}
      <div className="mx-auto max-w-375 px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <h2
          id="event-details-heading"
          className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
        >
          {event.title}
        </h2>

        <span
          aria-hidden="true"
          className="mt-4 block h-0.75 w-14 bg-orange-500"
        />

        <div className="mt-8 space-y-7 text-left text-base leading-8 text-slate-700 lg:text-lg">
          <p>
            Illicit trade has increasingly evolved into a sophisticated
            global challenge that disrupts fair market practices, fuels
            organised criminal networks and creates significant obstacles
            to economic resilience and governance. The growing scale and
            complexity of illicit trade across countries continue to pose
            serious challenges to regulatory enforcement frameworks and
            the integrity of global trade ecosystems.
          </p>

          <p>
            FASSI Committee Against Smuggling and Counterfeiting
            Activities Destroying the Economy (CASCADE) is organizing
            the 12th edition of its annual flagship conference,
            MASCRADE 2026 — Movement Against Smuggled and Counterfeit
            Trade — on 17–18 September 2026 at Bharat Mandapam,
            New Delhi. The theme of this year’s conference is{" "}
            <strong className="font-semibold text-slate-900">
              “One World, One Fight: Eliminating Counterfeiting and
              Smuggling Through Collective Action.”
            </strong>
          </p>

          <p>
            The international conference focuses on understanding the
            multifaceted risks and threats that illicit trade, smuggling
            and counterfeiting pose to economies worldwide. Discussions
            will explore global standards to prevent illicit trade,
            international collaboration, sharing best practices and
            policies that promote transparency, accountability and
            good governance.
          </p>

          <p>
            The conference will also examine approaches to combating
            counterfeiting and smuggling through stronger brand
            protection, effective legal frameworks, and investment in
            research and development.
          </p>
        </div>
      </div>

   <button
  className="mx-auto mt-8 block rounded-md bg-blue-400 px-6 py-3
    text-base font-medium text-white shadow-sm hover:bg-blue-500
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Visit website
</button>
    </section>
  );
}