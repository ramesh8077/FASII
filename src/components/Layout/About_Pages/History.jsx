import { Link } from "react-router-dom";
export default function History() {
    return (
      <main className="bg-white text-slate-900">
        {/* Page title and breadcrumb */}
        <header className="bg-[#f5f5f5]">
          <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
              About Us
            </h1>

            <nav aria-label="Breadcrumb" className="mt-4">
              <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
                <li>
                  <Link
                    to="/about"
                    className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                  >
                    About Us
                  </Link>
                </li>

                <li aria-hidden="true" className="text-slate-800">
                  /
                </li>

                <li aria-current="page" className="text-slate-600">
                  History        
                  </li>

              </ol>
          
            </nav>

            <div className="mt-8 sm:mt-10 lg:mt-12 bg-white p-8 rounded-lg shadow-md">
              
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl text-center underline decoration-orange-500 decoration-3">
                History
                
              </h2>
              <p className="mt-4 text-slate-800">
                Learn about the rich history and legacy of our organization.The Federation had come into existence after almost 22 years of hibernation. Two years later, the name was changed to the Federation of Indian Chambers of Commerce and Industry, thus emphasizing its character as representative not only of commerce but also of Industry.

The Federation, from its very inception, was treated as a platform for redressal of not only the immediate grievances of industry and trade but also a forum for generating public opinion on larger issues that affected the Indian economy.

The Federation acquired a large and rapidly increasing representation from all parts of India. Some of the members of the Federation like the Indian Chamber of Commerce, Calcutta, the Southern India Chamber of Commerce, Madras, the UP Chamber of Commerce, Cawnpore, the Ahmedabad Millowners' Association, the Bombay Shroffs' Association and the East India Jute Association, Calcutta, were very large organizations <br/>
The Federation had come into existence after almost 22 years of hibernation. Two years later, the name was changed to the Federation of Indian Chambers of Commerce and Industry, thus emphasizing its character as representative not only of commerce but also of Industry.

The Federation, from its very inception, was treated as a platform for redressal of not only the immediate grievances of industry and trade but also a forum for generating public opinion on larger issues that affected the Indian economy.

The Federation acquired a large and rapidly increasing representation from all parts of India. Some of the members of the Federation like the Indian Chamber of Commerce, Calcutta, the Southern India Chamber of Commerce, Madras, the UP Chamber of Commerce, Cawnpore, the Ahmedabad Millowners' Association, the Bombay Shroffs' Association and the East India Jute Association, Calcutta, were very large organizations <br/>
The Federation had come into existence after almost 22 years of hibernation. Two years later, the name was changed to the Federation of Indian Chambers of Commerce and Industry, thus emphasizing its character as representative not only of commerce but also of Industry.

The Federation, from its very inception, was treated as a platform for redressal of not only the immediate grievances of industry and trade but also a forum for generating public opinion on larger issues that affected the Indian economy.

The Federation acquired a large and rapidly increasing representation from all parts of India. Some of the members of the Federation like the Indian Chamber of Commerce, Calcutta, the Southern India Chamber of Commerce, Madras, the UP Chamber of Commerce, Cawnpore, the Ahmedabad Millowners' Association, the Bombay Shroffs' Association and the East India Jute Association, Calcutta, were very large organizations
              </p>
            </div>
          </div>
        </header>
      </main>
    );
}