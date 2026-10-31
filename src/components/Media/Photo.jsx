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
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Photo Gallery" />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-8 border-b-2 border-slate-300 pb-4">
          <p className="max-w-4xl text-sm font-medium leading-7 text-slate-700">
            A photographic record of FASII conclaves, vendor development programmes,
            awareness initiatives and industry engagements with associations across
            India.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventPhotos.map(([path, image]) => (
            <figure
              key={path}
              className="border border-slate-300 bg-white p-2 shadow-sm"
            >
              <div className="border border-slate-200 w-full h-48 overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={photoAlt(path)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <figcaption className="bg-slate-50 border-t border-slate-200 px-3 py-3 mt-2">
                <p className="text-xs font-bold leading-5 text-slate-700 uppercase">
                  {photoCaption(path)}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}