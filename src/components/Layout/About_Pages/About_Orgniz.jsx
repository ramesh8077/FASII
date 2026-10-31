import BannerImage from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import connect from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import PageHero from "../common/PageHero.jsx";

const paragraphs = [
  "The Federation of Associations of Small Industries of India (FASII) is a national federation that brings together associations representing small industries across the country. Our office bearers represent member industry associations and regional industry communities from all corners of India, working collectively to strengthen and support the small industries sector.",
  "FASII serves as a vital link between small industries, government departments, Central Public Sector Undertakings (CPSUs), and various stakeholders in the MSME ecosystem. Through our national and regional leadership, we advocate for policies that foster growth, sustainability, and competitiveness of small industries.",
  "Our key focus areas include organizing vendor development programmes, facilitating industrial exhibitions and connect events, conducting MSME awareness and capacity building initiatives, advocating for supportive policies, and creating networking opportunities for industry associations. Recent activities include the National Conclave for Industry Associations in New Delhi, MSME Connect’26 in Virudhunagar, and awareness programmes in Chennai, demonstrating our commitment to empowering small industries across India.",
];

const focusAreas = [
  "Vendor development programmes",
  "Industrial exhibitions and connect events",
  "MSME awareness and capacity building",
  "Advocacy for supportive policies",
  "Networking opportunities for industry associations",
];

const recentActivities = [
  { title: "National Conclave for Industry Associations", place: "New Delhi", image: conclave },
  { title: "MSME Connect ’26", place: "Virudhunagar", image: connect },
  { title: "MSME awareness programmes", place: "Chennai", image: awareness },
];

export default function About_Orgniz({ bannerImage = BannerImage }) {
  const [intro, role, focus] = paragraphs;

  return (
    <main className="bg-white text-slate-900">
      <PageHero title="About FASII" image={bannerImage} />

      <section aria-labelledby="about-content-title" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Who we are</p>
            <h2 id="about-content-title" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-800">{intro}</p>
            <p className="mt-5 text-base leading-8 text-slate-700">{role}</p>
          </div>

          <figure className="self-start overflow-hidden rounded-xl shadow-lg">
            <img
              src={conclave}
              alt="FASII national conclave for industry associations"
              loading="lazy"
              className="aspect-[4/3] w-full border-b-4 border-amber-500 object-cover"
            />
            <figcaption className="bg-orange-950 px-5 py-3 text-sm font-medium text-amber-100 text-center">
              National Conclave for Industry Associations
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="about-focus-title" className="border-y-4 border-amber-500 bg-orange-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">What we do</p>
            <h2 id="about-focus-title" className="mt-2 text-3xl font-bold sm:text-4xl">Our key focus areas</h2>
            <p className="mt-6 text-base leading-8 text-orange-100">{focus}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-lg font-bold text-amber-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-activities-title" className="bg-[#fff8ec] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">In the field</p>
          <h2 id="about-activities-title" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
            Recent activities
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentActivities.map((item) => (
              <figure key={item.title} className="group overflow-hidden rounded-xl border border-orange-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t-4 border-amber-500 p-5">
                  <span className="block text-lg font-bold leading-tight text-orange-950 mb-1">{item.title}</span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800">
                    {item.place}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}