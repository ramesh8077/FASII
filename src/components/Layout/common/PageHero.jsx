import PropTypes from "prop-types";

// Photograph pool used by the inner-page hero banners. Every page resolves a
// different photograph from this list so the same picture is not repeated.
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import hosur from "../../../assets/Images/FASIIEvents/hosur-schemes-main.jpeg";
import highlight1 from "../../../assets/Images/EventHighlights/highlight-1.jpg";
import highlight2 from "../../../assets/Images/EventHighlights/highlight-2.jpg";
import highlight3 from "../../../assets/Images/EventHighlights/highlight-3.jpg";
import highlight4 from "../../../assets/Images/EventHighlights/highlight-4.jpg";
import ev01 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-12 at 9.35.22 AM (1).jpeg";
import ev02 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-12 at 9.35.22 AM.jpeg";
import ev03 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-12 at 9.35.23 AM.jpeg";
import ev04 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.55 PM (1).jpeg";
import ev05 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.55 PM (2).jpeg";
import ev06 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.55 PM.jpeg";
import ev07 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.56 PM (1).jpeg";
import ev08 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.14.56 PM.jpeg";
import ev09 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.31 PM (1).jpeg";
import ev10 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.32 PM (1).jpeg";
import ev11 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.32 PM.jpeg";
import ev12 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.33 PM (1).jpeg";
import ev13 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.15.33 PM.jpeg";
import ev14 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.26 PM.jpeg";
import ev15 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.27 PM (1).jpeg";
import ev16 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.27 PM.jpeg";
import ev17 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.28 PM.jpeg";
import ev18 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.29 PM (1).jpeg";
import ev19 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.29 PM.jpeg";
import ev20 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.18.30 PM.jpeg";
import ev21 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.22.26 PM (1).jpeg";
import ev22 from "../../../assets/Images/FASIIEvents/WhatsApp Image 2026-10-14 at 4.22.26 PM.jpeg";

const heroPool = [
  connect,
  awareness,
  conclave,
  hosur,
  highlight1,
  highlight2,
  highlight3,
  highlight4,
  ev01,
  ev02,
  ev03,
  ev04,
  ev05,
  ev06,
  ev07,
  ev08,
  ev09,
  ev10,
  ev11,
  ev12,
  ev13,
  ev14,
  ev15,
  ev16,
  ev17,
  ev18,
  ev19,
  ev20,
  ev21,
  ev22,
];

// One dedicated photograph per inner page, so no two pages share the same banner.
const heroByTitle = {
  "About FASII": connect,
  "FASII Office Bearers": awareness,
  "Executive Committee": conclave,
  "Past Presidents": hosur,
  "History of FASII": highlight1,
  "Steering Committee": highlight2,
  Secretariat: highlight3,
  "Member Associations & Partners": highlight4,
  Publications: ev01,
  "Research Reports": ev02,
  "Policy Documents": ev03,
  Circulars: ev04,
  "Annual Reports": ev05,
  "Core MSME Sector": ev06,
  "Agriculture & Allied Industries": ev07,
  "Banking & Finance": ev08,
  "Education & Skill Development": ev09,
  "Energy & Renewable Energy": ev10,
  "Healthcare & Pharmaceuticals": ev11,
  "Information Technology & Software": ev12,
  "Infrastructure & Construction": ev13,
  "Manufacturing Sector": ev14,
  "Tourism & Hospitality": ev15,
  "Pradhan Mantri Viksit Bharat Rozgar Yojana": ev16,
  "Scheme Specifications & Definitions": ev17,
  "Applicability & Scheme Guidelines": ev18,
  "Official Policy Document & Provisions": ev19,
  "News & Events": ev20,
  "Photo Gallery": ev21,
  "Video Gallery": ev22,
  "Press Releases": ev09,
  "FASII North Zone": ev10,
  "FASII South Zone": ev11,
  "FASII East Zone": ev12,
  "FASII West Zone": ev13,
  "International Engagement": ev14,
  "State-wise Presence": ev15,
};

// Stable fallback for any future page title that is not mapped above.
function poolImageFor(title) {
  let hash = 0;

  for (let index = 0; index < title.length; index += 1) {
    hash = (hash * 31 + title.charCodeAt(index)) % 997;
  }

  return heroPool[hash % heroPool.length];
}

export default function PageHero({ title, image }) {
  const background = image || heroByTitle[title] || poolImageFor(title);

  return (
    <section className="relative flex min-h-110 items-center overflow-hidden bg-slate-900 sm:min-h-150 lg:min-h-180">
      <img
        src={background}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-linear-to-r from-slate-950/90 via-slate-950/60 to-slate-950/15"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1 w-12 bg-orange-600" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              FASII Official
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
