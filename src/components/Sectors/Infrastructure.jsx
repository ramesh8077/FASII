import { Link } from "react-router-dom";
export default function Infrastructure() {
    return (
      <main className="bg-white text-slate-900">
        {/* Page title and breadcrumb */}
        <header className="bg-[#f5f5f5]">
          <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
Infrastructure           </h1>

            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                  >
Sectors               </Link>
                </li>

                <li aria-hidden="true" className="text-slate-800">
                  /
                </li>

                <li aria-current="page" className="text-slate-600">
                 Infrastructure            </li>
              </ol>
            </nav>
          </div>
        </header>
      </main>
    );
  }