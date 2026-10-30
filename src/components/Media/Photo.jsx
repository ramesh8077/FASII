import PageHero from "../Layout/common/PageHero";

const eventPhotos = Object.entries(
  import.meta.glob("../../assets/Images/FASIIEvents/*.jpeg", {
    eager: true,
    query: "?url",
    import: "default",
  })
).sort(([first], [second]) => first.localeCompare(second));

const eventCaptions = {
  "sidbi-conclave-main.jpeg":
    "FASII office bearers at the National Conclave for Industry Associations organised by SIDBI in New Delhi",
  "msme-connect-main.jpeg":
    "FASII MSME Connect'26 Vendor Development Programme cum Industrial Exhibition at Virudhunagar, Tamil Nadu",
  "msme-awareness-main.jpeg":
    "MSME Awareness Programme and FASII Annual General Meeting at Avadi, Chennai",
  "hosur-schemes-main.jpeg":
    "FASII Southern Regional Chairman addressing Hosur Industrial Association on MSME schemes",
};

const photoAlt = (path) => {
  const file = path.split("/").pop();
  return (
    eventCaptions[file] ??
    "Photograph from a FASII programme and industry engagement"
  );
};

const photoCaption = (path) => {
  const file = path.split("/").pop();
  if (eventCaptions[file]) return eventCaptions[file];
  const stamp = file.replace("WhatsApp Image ", "").replace(".jpeg", "");
  return `FASII event photograph · ${stamp}`;
};

export default function Photo() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Photo Gallery" />

      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12">
        <p className="max-w-3xl text-lg leading-7 text-slate-600">
          A photographic record of FASII conclaves, vendor development programmes,
          awareness initiatives and industry engagements with associations across
          India.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventPhotos.map(([path, image]) => (
            <figure
              key={path}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-orange-200 hover:shadow-lg"
            >
              <img
                src={image}
                alt={photoAlt(path)}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">
                {photoCaption(path)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
