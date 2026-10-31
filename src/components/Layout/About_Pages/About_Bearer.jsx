import { officeBearers, regionalChairmen } from "../../../data/fasiiContent.js";
import PageHero from "../common/PageHero.jsx";
import PeopleTable from "./PeopleTable.jsx";

export default function About_Bearer() {
  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="FASII Office Bearers" />

      <PeopleTable id="national-bearers-title" title="National Office Bearers" people={officeBearers} />
      <PeopleTable id="regional-chairmen-title" title="Regional Chairmen" people={regionalChairmen} />

      <p className="mx-auto max-w-7xl border-t border-orange-200 px-5 py-6 text-sm text-slate-600 sm:px-8 lg:px-12">
        Contact and affiliation details are reproduced from the supplied Present Office Bearers document.
      </p>
    </main>
  );
}