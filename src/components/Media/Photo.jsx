import { Link } from "react-router-dom";
const eventPhotos = Object.entries(import.meta.glob("../../assets/Images/FASIIEvents/*.jpeg", { eager: true, query: "?url", import: "default" }))
  .sort(([first], [second]) => first.localeCompare(second));
export default function Photo() {
    return (
      <main className="bg-white text-slate-900">
        {/* Page title and breadcrumb */}
        <header className="bg-[#f5f5f5]">
          <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
Photo           </h1>

            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                  >
Media         </Link>
                </li>

                <li aria-hidden="true" className="text-slate-800">
                  /
                </li>

                <li aria-current="page" className="text-slate-600">
                 Photo            </li>
              </ol>
            </nav>
          </div>
        </header>
        <section className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">
          {eventPhotos.map(([path, image]) => <figure key={path} className="overflow-hidden rounded-lg bg-slate-100">
            <img src={image} alt="FASII event photograph" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm text-slate-600">FASII programme and industry engagement · {path.split("/").pop().replace("WhatsApp Image ", "").replace(".jpeg", "")}</figcaption>
          </figure>)}
        </section>
      </main>
    );
  }
