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
  // New images from public/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/
  { key: "new-agriculture", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Agricultar.jpg", focus: "center" },
  { key: "new-annual-report", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Annual-Report.jpg", focus: "center" },
  { key: "new-banking", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Banking-Fiance.jpg", focus: "center" },
  { key: "new-circular", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Circular-Knowldge.jpg", focus: "center" },
  { key: "new-download", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Download.jpg", focus: "center" },
  { key: "new-east-zone", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/East Zone_ Heritage, Hills and Harmony.png", focus: "center" },
  { key: "new-education", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Education.jpg", focus: "center" },
  { key: "new-healthcare", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/HealthCare.jpg", focus: "center" },
  { key: "new-it", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Information Technoglgy.jpg", focus: "center" },
  { key: "new-infrastructure", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Infrasturtucre.jpg", focus: "center" },
  { key: "new-international", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/International.jpg", focus: "center" },
  { key: "new-publication", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Knowdlge-Publication.jpg", focus: "center" },
  { key: "new-news", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Lates News.jpg", focus: "center" },
  { key: "new-msme", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/MSME.jpg", focus: "center" },
  { key: "new-north-zone", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/North Zone_ India’s Vibrant Mosaic.png", focus: "center" },
  { key: "new-online-app", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Online-Application.jpg", focus: "center" },
  // Anchored to the top so the face is never cropped; the crop happens from the bottom (below the waist)
  { key: "new-pm-yojana", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/PM Viksit Bharat Rozgar Yojana Poster.png", focus: "50% 0%" },
  { key: "new-photo-gallery", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Photo Gallery.jpg", focus: "center" },
  { key: "new-policy", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Policy-documents.jpg", focus: "center" },
  { key: "new-press", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Press-Realsese.jpg", focus: "center" },
  { key: "new-grievance", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Public- Grienvence.jpg", focus: "center" },
  { key: "new-research", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Research Report.jpg", focus: "center" },
  { key: "new-south-zone", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/South Zone Scenic India Infographic.png", focus: "center" },
  { key: "new-states", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/States.jpg", focus: "center" },
  { key: "new-tourism", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Toursium.jpg", focus: "center" },
  { key: "new-video-gallery", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/Video-Gallery.jpg", focus: "center" },
  { key: "new-west-zone", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/West India Heritage and Horizons.png", focus: "center" },
  { key: "new-manufacturing", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/manifacturing.jpg", focus: "center" },
  { key: "new-energy", src: "/All Hero Section Images/North Zone_ India’s Vibrant Mosaic/solar-panel-cell-dramatic-sunset-sky-clean-alternative-power-energy-concept.jpg", focus: "center" },
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

  Publications: heroByKey["new-publication"],
  "Research Reports": heroByKey["new-research"],
  "Policy Documents": heroByKey["new-policy"],
  Circulars: heroByKey["new-circular"],
  "Annual Reports": heroByKey["new-annual-report"],

  "Core MSME Sector": heroByKey["new-msme"],
  "Agriculture & Allied Industries": heroByKey["new-agriculture"],
  "Banking & Finance": heroByKey["new-banking"],
  "Education & Skill Development": heroByKey["new-education"],
  "Energy & Renewable Energy": heroByKey["new-energy"],
  "Healthcare & Pharmaceuticals": heroByKey["new-healthcare"],
  "Information Technology & Software": heroByKey["new-it"],
  "Infrastructure & Construction": heroByKey["new-infrastructure"],
  "Manufacturing Sector": heroByKey["new-manufacturing"],
  "Tourism & Hospitality": heroByKey["new-tourism"],

  "Pradhan Mantri Viksit Bharat Rozgar Yojana": heroByKey["new-pm-yojana"],
  "Scheme Specifications & Definitions": heroByKey["new-online-app"],
  "Applicability & Scheme Guidelines": heroByKey["new-grievance"],
  "Official Policy Document & Provisions": heroByKey["new-download"],

  "News & Events": heroByKey["new-news"],
  "Photo Gallery": heroByKey["new-photo-gallery"],
  "Video Gallery": heroByKey["new-video-gallery"],
  "Press Releases": heroByKey["new-press"],

  "FASII North Zone": heroByKey["new-north-zone"],
  "FASII South Zone": heroByKey["new-south-zone"],
  "FASII East Zone": heroByKey["new-east-zone"],
  "FASII West Zone": heroByKey["new-west-zone"],

  "International Engagement": heroByKey["new-international"],
  "State-wise Presence": heroByKey["new-states"],
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
    <section className="page-hero relative flex min-h-110 items-center overflow-hidden bg-slate-900 sm:min-h-150 lg:min-h-190">
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
