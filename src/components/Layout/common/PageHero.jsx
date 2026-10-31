import PropTypes from "prop-types";

/*
 * Hero image pool.
 *
 * Only landscape photographs with a real resolution of at least 1280 px wide
 * are used here. Portrait shots (1200x1600 / 720x1280) and smaller files were
 * removed because a 2:1 full-bleed banner crops them so hard that faces and
 * subjects fall outside the visible band.
 *
 * All images are optimized WebP versions with enhanced sharpness and clarity.
 */
import connect from "../../../assets/Images/Hero/msme-connect-main.webp";
import awareness from "../../../assets/Images/Hero/msme-awareness-main.webp";
import hosur from "../../../assets/Images/Hero/hosur-schemes-main.webp";
import highlight3 from "../../../assets/Images/Hero/highlight-3.webp";
import evOpen1 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-12 at 9.35.23 AM.webp";
import evOpen2 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.14.55 PM (1).webp";
import evOpen3 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.14.55 PM (2).webp";
import evOpen4 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.14.55 PM.webp";
import evSession1 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.15.31 PM (1).webp";
import evSession2 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.15.32 PM (1).webp";
import evSession3 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.15.32 PM.webp";
import evSession4 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.15.33 PM (1).webp";
import evSession5 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.15.33 PM.webp";
import evWide1 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.18.26 PM.webp";
import evWide2 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.18.27 PM.webp";
import evWide3 from "../../../assets/Images/Hero/WhatsApp Image 2026-10-14 at 4.18.28 PM.webp";

// Optimized WebP derivatives of oversized originals
import outreach1280 from "../../../assets/Images/Hero/msme-outreach-1280.webp";
import outreach1920 from "../../../assets/Images/Hero/msme-outreach-1920.webp";
import conference1280 from "../../../assets/Images/Hero/msme-conference-1280.webp";
import conference1920 from "../../../assets/Images/Hero/msme-conference-1920.webp";
import inauguration1280 from "../../../assets/Images/Hero/msme-inauguration-1280.webp";
import inauguration1920 from "../../../assets/Images/Hero/msme-inauguration-1920.webp";

const DEFAULT_FOCUS = "center";

const heroPool = [
  { key: "connect", src: connect, focus: "center" },
  { key: "awareness", src: awareness, focus: "center" },
  { key: "hosur-scheme", src: hosur, focus: "center" },
  { key: "highlight-3", src: highlight3, focus: "center" },
  { key: "outreach", src: outreach1920, srcSet: `${outreach1280} 1280w, ${outreach1920} 1920w`, focus: "center" },
  { key: "conference", src: conference1920, srcSet: `${conference1280} 1280w, ${conference1920} 1920w`, focus: "center" },
  { key: "inauguration", src: inauguration1920, srcSet: `${inauguration1280} 1280w, ${inauguration1920} 1920w`, focus: "center" },
  { key: "opening-1", src: evOpen1, focus: "center" },
  { key: "opening-2", src: evOpen2, focus: "center" },
  { key: "opening-3", src: evOpen3, focus: "center" },
  { key: "opening-4", src: evOpen4, focus: "center" },
  { key: "session-1", src: evSession1, focus: "center" },
  { key: "session-2", src: evSession2, focus: "center" },
  { key: "session-3", src: evSession3, focus: "center" },
  { key: "session-4", src: evSession4, focus: "center" },
  { key: "session-5", src: evSession5, focus: "center" },
  { key: "wide-1", src: evWide1, focus: "center" },
  { key: "wide-2", src: evWide2, focus: "50% 15%" },
  { key: "wide-3", src: evWide3, focus: "50% 15%" },
];

const heroByKey = Object.fromEntries(heroPool.map((hero) => [hero.key, hero]));

const heroByTitle = {
  "About FASII": heroByKey.connect,
  "FASII Office Bearers": heroByKey.awareness,
  "Executive Committee": heroByKey["hosur-scheme"],
  "Past Presidents": heroByKey["highlight-3"],
  "History of FASII": heroByKey.outreach,
  "Steering Committee": heroByKey.conference,
  Secretariat: heroByKey.inauguration,
  "Member Associations & Partners": heroByKey["opening-1"],

  Publications: heroByKey["opening-2"],
  "Research Reports": heroByKey["opening-3"],
  "Policy Documents": heroByKey["opening-4"],
  Circulars: heroByKey["session-1"],
  "Annual Reports": heroByKey["session-2"],

  "Core MSME Sector": heroByKey["session-3"],
  "Agriculture & Allied Industries": heroByKey["session-4"],
  "Banking & Finance": heroByKey["session-5"],
  "Education & Skill Development": heroByKey["wide-1"],
  "Energy & Renewable Energy": heroByKey["wide-2"],
  "Healthcare & Pharmaceuticals": heroByKey["wide-3"],
  "Information Technology & Software": heroByKey.outreach,
  "Infrastructure & Construction": heroByKey.conference,
  "Manufacturing Sector": heroByKey.inauguration,
  "Tourism & Hospitality": heroByKey.connect,

  "Pradhan Mantri Viksit Bharat Rozgar Yojana": heroByKey.awareness,
  "Scheme Specifications & Definitions": heroByKey["highlight-3"],
  "Applicability & Scheme Guidelines": heroByKey["opening-1"],
  "Official Policy Document & Provisions": heroByKey["opening-2"],

  "News & Events": heroByKey["opening-3"],
  "Photo Gallery": heroByKey["session-1"],
  "Video Gallery": heroByKey["session-2"],
  "Press Releases": heroByKey["wide-1"],

  "FASII North Zone": heroByKey["wide-2"],
  "FASII South Zone": heroByKey["wide-3"],
  "FASII East Zone": heroByKey["opening-4"],
  "FASII West Zone": heroByKey["session-3"],

  "International Engagement": heroByKey["session-4"],
  "State-wise Presence": heroByKey["session-5"],
};

function heroForTitle(title) {
  let hash = 0;
  for (let index = 0; index < title.length; index += 1) {
    hash = (hash * 31 + title.charCodeAt(index)) % 997;
  }
  return heroPool[hash % heroPool.length];
}

export default function PageHero({ title, image }) {
  const hero =
    typeof image === "string" ? { src: image } : heroByTitle[title] || heroForTitle(title);

  return (
    <section className="relative flex min-h-110 items-center overflow-hidden bg-slate-900 sm:min-h-150 lg:min-h-190">
      <img
        src={hero.src}
        srcSet={hero.srcSet}
        sizes={hero.srcSet ? "100vw" : undefined}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{ objectPosition: hero.focus || DEFAULT_FOCUS }}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* 
        Note: Per user instructions, all text overlays and visual effects 
        (gradients, filters, etc.) have been removed to display clean, 
        high-quality images.
      */}
    </section>
  );
}

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
