import Magazine from "../../../assets/Magazine.jpg";

const articles = [
  {
    id: 1,
    title:
      "Indian Real Estate Sector on Course to Reach USD 5.8 Trillion by 2047",
    dotColor: "bg-orange-600",
  },
  {
    id: 2,
    title:
      "Principal Scientific Adviser's Office Sign MoU to Strengthen India's R&D and Innovation Ecosystem",
    dotColor: "bg-green-600",
  },
  {
    id: 3,
    title:
      "Commerce and Industry Sign MoU to Strengthen India's Trade and Investment Ecosystem",
    dotColor: "bg-blue-600",
  },
    {
    id: 4,
    title:
      "Ministry of Commerce and Industry Sign MoU to Strengthen India's Trade and Investment Ecosystem",
    dotColor: "bg-orange-600",
  },
  {
    id: 5,
    title:
      "Ministry of Commerce and Industry Sign MoU to Strengthen India's Trade and Investment Ecosystem",
    dotColor: "bg-green-600",
  },
  {
    id: 6,
    title:
      " Ministry of Commerce and Industry Sign MoU to Strengthen India's Trade and Investment Ecosystem",
    dotColor: "bg-blue-600",
  }
];

export default function BusinessDigest() {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      {/* Background text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-5 whitespace-nowrap font-serif text-[65px] font-semibold leading-none text-black/[0.035] sm:text-[90px] lg:text-[120px]"
      >
        Periodicals
      </span>

      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Business Digest
        </h2>

        {/* Two-column layout */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* First column: heading and articles */}
          <div className="min-w-0">
            <h3 className="font-serif text-3xl text-slate-900">
              Issue: May, 2026
            </h3>

            <ul className="mt-8 space-y-7">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="flex items-start gap-4"
                >
                  <span
                    aria-hidden="true"
                    className={`mt-2 h-3 w-3 shrink-0 rounded-full ${article.dotColor}`}
                  />

                  <p className="text-base font-semibold leading-7 text-slate-800">
                    {article.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Second column: magazine cover */}
          <div className="mx-auto w-full max-w-85 lg:mx-0">
            <img
              src={Magazine}
              alt="Business Digest magazine — May 2026 issue"
              className="block h-auto w-full border-[5px] border-red-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}