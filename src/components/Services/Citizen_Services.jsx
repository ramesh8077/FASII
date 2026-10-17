import { Link } from "react-router-dom";
// import BannerImage from "../../../assets/Images/About/about-organization.jpg";
const paragraphs = [
"To achieve the vision of Viksit Bharat@2047, the Government of India in the Budget 2024-25 announced Employment Linked Incentives Scheme as  part of the “Prime Minister’s Package for Employment and Skilling”. The scheme is named as Pradhan Mantri Viksit Bharat Rozgar Yojana. The  scheme consists of two parts-it provides assistance to employees and support to the establishments for making the first timer employee more productive and incentivizes those establishments that generate additional employment. Further, the scheme will complement the ‘National Manufacturing Mission’ in promoting entry of new industries as well as scaling up of the existing industries particularly in labour-intensive manufacturing sectors. The scheme will be implemented by Ministry of Labour and Employment through the Employees’ Provident Fund Organisation (EPFO). "
];

export default function About_Orgniz({
  // bannerImage = BannerImage,
}) {
  return (
    <main className="bg-white text-slate-900">
      {/* Page title and breadcrumb */}
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
       Pradhan Mantri Viksit Bharat Rozgar Yojana  
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                >
                  Pradhan Mantri Viksit Bharat Rozgar Yojana  
                </Link>
              </li>

              <li aria-hidden="true" className="text-slate-800">
                /
              </li>

              <li aria-current="page" className="text-slate-600">
Pradhan Mantri Viksit Bharat Rozgar Yojana                </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Full-width organization banner */}
      {/* <figure className="overflow-hidden bg-slate-200">
        <img
          src={bannerImage}
          alt="FASSI Federation House surrounded by greenery"
          className="h-55 w-full object-cover object-center sm:h-70 lg:h-85"
          fetchPriority="high"
        />
      </figure> */}

      {/* About content */}
      
      <section aria-labelledby="about-content-title" className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center" aria-hidden="true">
          <span className="font-serif text-[78px] font-bold leading-none text-black/[0.035] sm:text-[110px] lg:text-[145px]">
            FASSI
          </span>
        </div>

        <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="mx-auto mb-4 block h-0.75 w-12 bg-orange-500" aria-hidden="true" />

            <h2 id="about-content-title" className="font-serif text-3xl font-medium text-slate-900 sm:text-4xl">
              Pradhan Mantri Viksit Bharat Rozgar Yojana  
            </h2>
          </div>

          <div className="mt-12 space-y-7 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 lg:mt-16">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}