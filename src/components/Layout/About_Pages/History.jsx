import conclave from "../../../assets/Images/FASIIEvents/sidbi-conclave-main.jpeg";
import awareness from "../../../assets/Images/FASIIEvents/msme-awareness-main.jpeg";
import PageHero from "../common/PageHero.jsx";
import { Map, CheckCircle2 } from "lucide-react";

const regions = [
  { region: "Southern Region", coverage: "Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana" },
  { region: "Eastern Region", coverage: "West Bengal, Odisha, Bihar, Jharkhand, and the Northeast" },
  { region: "Western Region", coverage: "Maharashtra, Gujarat, Goa, and Madhya Pradesh" },
  { region: "Northern Region", coverage: "Uttar Pradesh, Delhi NCR, Punjab, Haryana, and Rajasthan" },
];

const milestones = [
  "Organization of national conclaves with SIDBI and other government institutions",
  "MSME Connect programmes facilitating partnerships with CPSUs and government departments",
  "Awareness programmes in collaboration with Ministry of Defence and Ministry of MSME",
  "Industry addresses on sustainability schemes and long-term growth strategies",
];

function Chapter({ title, children }) {
  return (
    <div className="grid gap-5 border-t border-orange-200 py-10 lg:grid-cols-[18rem_1fr] lg:gap-12">
      <h3 className="border-l-4 border-amber-500 pl-4 text-2xl font-bold text-orange-950 self-start">{title}</h3>
      <div className="space-y-4 leading-8 text-slate-700">{children}</div>
    </div>
  );
}

export default function History() {
  return (
    <main className="bg-[#fff8ec] text-slate-900">
      <PageHero title="History of FASII" />

      <section aria-labelledby="history-title" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 bg-white rounded-b-3xl shadow-sm">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-orange-700">Our journey</p>
            <h2 id="history-title" className="mt-2 border-l-4 border-amber-500 pl-4 text-3xl font-bold text-orange-950 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-800">
              The Federation of Associations of Small Industries of India (FASII) has been established as a unifying
              platform bringing together associations representing small industries from across the nation. Our federation
              serves as a vital bridge connecting small industries, government departments, and key stakeholders in the
              MSME ecosystem.
            </p>
          </div>
          <figure className="self-start">
            <img
              src={conclave}
              alt="FASII national conclave"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-t-xl object-cover shadow-sm border border-orange-100"
            />
            <figcaption className="rounded-b-xl bg-orange-900 px-5 py-3 text-sm font-medium text-amber-100 text-center shadow-md">
              FASII national conclave with SIDBI
            </figcaption>
          </figure>
        </div>

        <div className="mt-16">
          <Chapter title="Our Foundation">
            <p className="text-lg">
              FASII was founded on the principle that small industries are the backbone of India's economic growth and
              employment generation. Recognizing the need for a coordinated voice at the national level, industry
              associations from various states came together to form this federation, ensuring that the concerns,
              aspirations, and achievements of small industries receive the attention they deserve.
            </p>
          </Chapter>

          <Chapter title="Representing India's Geographic Diversity">
            <p className="mb-6 text-lg">
              From its inception, FASII has emphasized regional representation through a structured leadership framework.
              Our four regional chairmen represent the geographical breadth of India's small industries sector:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {regions.map((item) => (
                <div key={item.region} className="flex flex-col rounded-xl border border-orange-200 bg-[#fff8ec] p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2 text-orange-800">
                    <span className="font-bold">{item.region}</span>
                  </div>
                  <span className="text-sm leading-6 text-slate-700">{item.coverage}</span>
                </div>
              ))}
            </div>
          </Chapter>

          <Chapter title="Evolution and Growth">
            <p className="text-lg">
              Over the years, FASII has evolved from a coordinating body to an active participant in policy advocacy,
              capacity building, and industry development. Our member associations, representing diverse sectors from
              manufacturing to services, have collectively strengthened the federation's ability to address challenges
              facing small industries.
            </p>
          </Chapter>

          <Chapter title="Key Milestones">
            <p className="mb-6 text-lg">
              FASII's journey has been marked by significant achievements in vendor development, industry exhibitions, and
              awareness programmes. Notable initiatives include:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {milestones.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-orange-50 p-4 border border-orange-100">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-amber-500" size={20} />
                  <span className="text-sm font-medium leading-6 text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </Chapter>

          <Chapter title="Our Present Focus">
            <p className="text-lg">
              Today, FASII continues to champion the cause of small industries through strategic partnerships, policy
              advocacy, and capacity building initiatives. We work closely with government agencies, financial
              institutions, and industry bodies to create an enabling environment for small industries to thrive and
              contribute to India's economic development.
            </p>
          </Chapter>
        </div>
      </section>

      <section className="relative isolate overflow-hidden mt-12 border-y-4 border-amber-500 text-white">
        <img src={awareness} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-orange-950/85" />
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <span className="mx-auto mb-5 block h-1 w-16 bg-amber-400" aria-hidden="true" />
          <p className="text-lg font-medium leading-8 sm:text-xl sm:leading-9">
            As we move forward, FASII remains committed to empowering small industries across India, ensuring they have
            access to opportunities, resources, and a strong collective voice in shaping policies that affect their
            growth and sustainability.
          </p>
        </div>
      </section>
    </main>
  );
}