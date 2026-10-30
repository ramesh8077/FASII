import BannerImage from "../../../assets/Images/FASIIEvents/msme-connect-main.jpeg";
import PageHero from "../common/PageHero.jsx";
const paragraphs = [
  "The Federation of Associations of Small Industries of India (FASII) is a national federation that brings together associations representing small industries across the country. Our office bearers represent member industry associations and regional industry communities from all corners of India, working collectively to strengthen and support the small industries sector.",
  "FASII serves as a vital link between small industries, government departments, Central Public Sector Undertakings (CPSUs), and various stakeholders in the MSME ecosystem. Through our national and regional leadership, we advocate for policies that foster growth, sustainability, and competitiveness of small industries.",
  "Our key focus areas include organizing vendor development programmes, facilitating industrial exhibitions and connect events, conducting MSME awareness and capacity building initiatives, advocating for supportive policies, and creating networking opportunities for industry associations. Recent activities include the National Conclave for Industry Associations in New Delhi, MSME Connect’26 in Virudhunagar, and awareness programmes in Chennai, demonstrating our commitment to empowering small industries across India.",
];

export default function About_Orgniz({
  bannerImage = BannerImage,
}) {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="About FASII" image={bannerImage} />

      {/* About content */}
      <section aria-labelledby="about-content-title" className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center" aria-hidden="true">
          <span className="font-serif text-[78px] font-bold leading-none text-black/[0.035] sm:text-[110px] lg:text-[145px]">
            FASII
          </span>
        </div>

        <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="mx-auto mb-4 block h-0.75 w-12 bg-orange-500" aria-hidden="true" />

            <h2 id="about-content-title" className="font-serif text-3xl font-medium text-slate-900 sm:text-4xl">
              About Us
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
