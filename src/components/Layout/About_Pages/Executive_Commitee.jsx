import { officeBearers, regionalChairmen } from "../../../data/fasiiContent.js";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import PageHero from "../common/PageHero.jsx";
import PeopleTable from "./PeopleTable.jsx";

const committeeFunctions = [
  { title: "Strategic Planning", text: "Formulates policies, sets strategic direction, and approves major federation initiatives" },
  { title: "Member Services", text: "Oversees programmes and services for member associations across all regions" },
  { title: "Government Liaison", text: "Coordinates advocacy efforts with ministries, departments, and government institutions" },
  { title: "Regional Coordination", text: "Ensures effective implementation of federation activities across all four regions" },
];

export default function Executive_Commitee() {
  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="Executive Committee" />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-14 lg:px-12">
          <p className="border-l-4 border-amber-500 pl-4 text-lg leading-8 text-slate-700">
            The FASII Executive Committee comprises all national office bearers and regional chairmen, collectively
            providing strategic leadership and operational oversight for the federation's activities across India.
          </p>
          <img
            src={conclave}
            alt="FASII office bearers at a national conclave"
            loading="lazy"
            className="aspect-[16/9] w-full rounded-xl border-b-8 border-amber-500 object-cover shadow-lg"
          />
        </div>
      </section>

      <PeopleTable id="exec-national-title" title="National Office Bearers" people={officeBearers} />
      <PeopleTable id="exec-regional-title" title="Regional Chairmen" people={regionalChairmen} />

      <section aria-labelledby="committee-functions-title" className="mt-6 border-y-4 border-amber-500 bg-orange-900 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <h2 id="committee-functions-title" className="text-2xl font-bold sm:text-3xl">Committee Functions</h2>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {committeeFunctions.map((item, index) => (
              <div key={item.title} className="flex flex-col rounded-xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-lg font-bold text-amber-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-amber-200">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-orange-100">{item.text}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-8 rounded-lg bg-orange-950/50 p-5 text-sm leading-7 text-orange-100 border border-white/10">
            The Executive Committee meets regularly to review federation activities, address member concerns, and ensure
            coordinated action on matters affecting small industries.
          </p>
        </div>
      </section>
    </main>
  );
}