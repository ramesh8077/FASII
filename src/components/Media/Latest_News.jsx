import { CalendarDays, MapPin } from "lucide-react";
import { fasiiEvents } from "../../data/fasiiContent.js";
import PageHero from "../Layout/common/PageHero";

const eventImageModules = import.meta.glob("../../assets/Images/FASIIEvents/*-main.jpeg", {
  eager: true,
  query: "?url",
  import: "default",
});

const imageByFile = Object.fromEntries(
  Object.entries(eventImageModules).map(([path, url]) => [path.split("/").pop(), url])
);

const imageForEvent = (event) => imageByFile[event.image.split("/").pop()] ?? "";

export default function Latest_News() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="News & Events" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          The latest programmes, conclaves and industry engagements from FASII across
          the country.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {fasiiEvents.map((event) => (
            <article
              key={event.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={imageForEvent(event)}
                alt={event.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
                  {event.category}
                </span>

                <h2 className="mt-4 text-xl font-semibold leading-snug text-slate-950">
                  {event.title}
                </h2>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} className="text-orange-600" />
                    {event.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={16} className="text-orange-600" />
                    {event.location}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-700">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
