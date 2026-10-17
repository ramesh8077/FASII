import { Link, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { id: "principal-officers", label: "Principal Officers" },
  { id: "advisors", label: "Advisors" },
  { id: "secretariat", label: "Secretariat" },
];

const members = {
  "principal-officers": [
    {
      id: 1,
      name: "Anant Swarup",
      designation: "Secretary General",
      image: "/images/team/anant-swarup.jpg",
    },
    {
      id: 2,
      name: "Jyoti Vij",
      designation: "Director General",
      image: "/images/team/jyoti-vij.jpg",
    },
  ],

  // Replace these sample entries with actual advisor details.
  advisors: [
    {
      id: 1,
      name: "Advisor Name",
      designation: "Advisor Designation",
      image: "/images/team/advisor-1.jpg",
    },
    {
      id: 2,
      name: "Advisor Name",
      designation: "Advisor Designation",
      image: "/images/team/advisor-2.jpg",
    },
  ],

  // Replace these sample entries with actual secretariat details.
  secretariat: [
    {
      id: 1,
      name: "Member Name",
      designation: "Member Designation",
      image: "/images/team/secretariat-1.jpg",
    },
    {
      id: 2,
      name: "Member Name",
      designation: "Member Designation",
      image: "/images/team/secretariat-2.jpg",
    },
    {
      id: 3,
      name: "Member Name",
      designation: "Member Designation",
      image: "/images/team/secretariat-3.jpg",
    },
  ],
};

export default function Secretariat() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read the selected category from the URL.
  const selectedTab = location.hash.slice(1);

  const activeTab =
    tabs.find((tab) => tab.id === selectedTab) || tabs[0];

  const changeTab = (tabId) => {
    navigate(
      {
        pathname: location.pathname,
        search: location.search,
        hash: `#${tabId}`,
      },
      { replace: true },
    );
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Page heading */}
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium sm:text-4xl">
            Secretariat
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex items-center gap-4 text-sm font-semibold text-slate-500">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-orange-600"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true" className="text-slate-900">
                /
              </li>

              <li aria-current="page">Secretariat</li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Category selection and members */}
      <section className="mx-auto max-w-375 px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid items-start gap-10 md:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          {/* Left: category buttons */}
          <div
            role="group"
            aria-label="Choose team category"
            className="flex flex-col gap-4 md:gap-10"
          >
            {tabs.map((tab) => {
              const isActive = activeTab.id === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => changeTab(tab.id)}
                  aria-pressed={isActive}
                  aria-controls="team-members"
                  className={`flex w-full items-center gap-4 rounded
                    px-2 py-3 text-left text-xl transition-colors
                    focus-visible:outline-2
                    focus-visible:outline-orange-500 lg:text-2xl ${
                      isActive
                        ? "text-slate-950"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-7 w-7 shrink-0 rounded-full
                      transition-colors sm:h-9 sm:w-9 ${
                        isActive ? "bg-orange-600" : "bg-orange-200"
                      }`}
                  />

                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Right: selected member group */}
          <section
            id="team-members"
            aria-labelledby="team-category-heading"
            className="min-w-0 md:min-h-90"
          >
            <h2 id="team-category-heading" className="sr-only">
              {activeTab.label}
            </h2>

            <div
              className={`grid grid-cols-2 gap-x-5 gap-y-10 py-3 ${
                activeTab.id === "principal-officers"
                  ? "max-w-162.5"
                  : "lg:grid-cols-3"
              }`}
            >
              {members[activeTab.id].map((member) => (
                <article
                  key={`${activeTab.id}-${member.id}`}
                  className="min-w-0 text-center"
                >
                  {/* Member photo */}
                  <div
                    className="mx-auto h-32.5 w-27
                      overflow-hidden border border-slate-300
                      bg-slate-100 sm:h-37.5 sm:w-31.25"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="block h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="mt-3 text-base font-medium leading-6 sm:text-lg">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                    {member.designation}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}