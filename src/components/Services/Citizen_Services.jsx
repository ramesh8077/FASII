import PageHero from "../Layout/common/PageHero";

const paragraphs = [
"To achieve the vision of Viksit Bharat@2047, the Government of India in the Budget 2024-25 announced Employment Linked Incentives Scheme as  part of the “Prime Minister’s Package for Employment and Skilling”. The scheme is named as Pradhan Mantri Viksit Bharat Rozgar Yojana. The  scheme consists of two parts-it provides assistance to employees and support to the establishments for making the first timer employee more productive and incentivizes those establishments that generate additional employment. Further, the scheme will complement the ‘National Manufacturing Mission’ in promoting entry of new industries as well as scaling up of the existing industries particularly in labour-intensive manufacturing sectors. The scheme will be implemented by Ministry of Labour and Employment through the Employees’ Provident Fund Organisation (EPFO). "
];

export default function Citizen_Services() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Pradhan Mantri Viksit Bharat Rozgar Yojana" />

      {/* Scheme content */}
      <section
        aria-labelledby="about-content-title"
        className="relative mx-auto max-w-375 overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center" aria-hidden="true">
          <span className="font-serif text-[78px] font-bold leading-none text-black/[0.035] sm:text-[110px] lg:text-[145px]">
            FASII
          </span>
        </div>

        <div className="relative max-w-4xl">
          <h2 id="about-content-title" className="text-2xl font-semibold text-slate-900">
            Pradhan Mantri Viksit Bharat Rozgar Yojana
          </h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
