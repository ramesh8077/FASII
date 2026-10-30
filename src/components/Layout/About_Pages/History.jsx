import PageHero from "../common/PageHero.jsx";

export default function History() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="History of FASII" />

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="space-y-8">
          {/* Vision Section */}
              <section className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                  <span className="inline-block h-1 w-16 bg-orange-500 mb-4" aria-hidden="true" />
                  <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                    Our Journey
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-8">
                  <p className="text-lg">
                    The Federation of Associations of Small Industries of India (FASII) has been established as a unifying platform bringing together associations representing small industries from across the nation. Our federation serves as a vital bridge connecting small industries, government departments, and key stakeholders in the MSME ecosystem.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Our Foundation</h3>
                  <p>
                    FASII was founded on the principle that small industries are the backbone of India's economic growth and employment generation. Recognizing the need for a coordinated voice at the national level, industry associations from various states came together to form this federation, ensuring that the concerns, aspirations, and achievements of small industries receive the attention they deserve.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Representing India's Geographic Diversity</h3>
                  <p>
                    From its inception, FASII has emphasized regional representation through a structured leadership framework. Our four regional chairmen represent the geographical breadth of India's small industries sector:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Southern Region:</strong> Representing Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana</li>
                    <li><strong>Eastern Region:</strong> Covering West Bengal, Odisha, Bihar, Jharkhand, and the Northeast</li>
                    <li><strong>Western Region:</strong> Including Maharashtra, Gujarat, Goa, and Madhya Pradesh</li>
                    <li><strong>Northern Region:</strong> Spanning Uttar Pradesh, Delhi NCR, Punjab, Haryana, and Rajasthan</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Evolution and Growth</h3>
                  <p>
                    Over the years, FASII has evolved from a coordinating body to an active participant in policy advocacy, capacity building, and industry development. Our member associations, representing diverse sectors from manufacturing to services, have collectively strengthened the federation's ability to address challenges facing small industries.
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Key Milestones</h3>
                  <p>
                    FASII's journey has been marked by significant achievements in vendor development, industry exhibitions, and awareness programmes. Notable initiatives include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Organization of national conclaves with SIDBI and other government institutions</li>
                    <li>MSME Connect programmes facilitating partnerships with CPSUs and government departments</li>
                    <li>Awareness programmes in collaboration with Ministry of Defence and Ministry of MSME</li>
                    <li>Industry addresses on sustainability schemes and long-term growth strategies</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">Our Present Focus</h3>
                  <p>
                    Today, FASII continues to champion the cause of small industries through strategic partnerships, policy advocacy, and capacity building initiatives. We work closely with government agencies, financial institutions, and industry bodies to create an enabling environment for small industries to thrive and contribute to India's economic development.
                  </p>

                  <p className="text-lg font-medium text-orange-700 mt-8">
                    As we move forward, FASII remains committed to empowering small industries across India, ensuring they have access to opportunities, resources, and a strong collective voice in shaping policies that affect their growth and sustainability.
                  </p>
                </div>
              </section>
        </div>
      </div>
    </main>
  );
}