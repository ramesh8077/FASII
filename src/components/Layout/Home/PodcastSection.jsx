export default function PodcastSection() {
  return (
    <section className=" relative overflow-hidden bg-[#f5f5f5] py-14 lg:py-20">
      {/* Background faded heading */}
<span
  aria-hidden="true"
  className="pointer-events-none absolute left-4 top-5 whitespace-nowrap font-serif text-[60px] font-semibold leading-none text-black/[0.035] sm:text-[90px] lg:text-[120px]"
>
  Podcast Series
</span>
      <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
<h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
  The Fine Print – A Podcast Series by FASSI
</h2>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/*left: Yotube video*/}
<div className="aspect-video overflow-hidden rounded-xl bg-slate-200">
  <iframe
    src="https://www.youtube.com/embed/v-eDD7Le91A?start=4"
    title="The Fine Print Podcast"
    className="h-full w-full border-0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

          {/*Right : episode details*/ }

          <div className="min-w-0">

            <h3 className="text-lg font-semibold leading-7 text-slate-900">
              Podcast Episode 1: The Future of Work in India with Nitin Gadkari 
            </h3>
             {/* p: Short introduction */}
            <p className="mt-2 text-sm leading-6 text-slate-600">
              In this episode, we explore the future of work in India with Nitin Gadkari, the Minister for Road Transport & Highways and Minister of Micro, Small and Medium Enterprises. We discuss the impact of technology on the workforce, the role of education and training, and the challenges and opportunities facing workers in India.
            </p>
                {/* p: Episode description */}
            <p className="mt-4 text-base leading-8 text-slate-700">
              Join us as we dive deep into the intricacies
               of the modern workforce and the policies shaping 
               its future.
            </p>
             {/* p: Guest information */}
            <p className="mt-4 text-base leading-8 text-slate-700">
              Nitin Gadkari is the Minister for Road Transport & Highways and Minister of Micro, Small and Medium Enterprises in the Government of India.
            </p>

            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700"></div>
          </div>

        </div>
      </div>

    </section>
  )
}