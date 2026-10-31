import PageHero from "../Layout/common/PageHero";
import { FileText } from "lucide-react";

const paragraphs = [
  "To achieve the vision of Viksit Bharat@2047, the Government of India in the Budget 2024-25 announced Employment Linked Incentives Scheme as part of the “Prime Minister’s Package for Employment and Skilling”. The scheme is named as Pradhan Mantri Viksit Bharat Rozgar Yojana.",
  "The scheme consists of two parts - it provides assistance to employees and support to the establishments for making the first timer employee more productive and incentivizes those establishments that generate additional employment.",
  "Further, the scheme will complement the ‘National Manufacturing Mission’ in promoting entry of new industries as well as scaling up of the existing industries particularly in labour-intensive manufacturing sectors.",
  "The scheme will be implemented by Ministry of Labour and Employment through the Employees’ Provident Fund Organisation (EPFO)."
];

export default function Citizen_Services() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Pradhan Mantri Viksit Bharat Rozgar Yojana" />

      <section className="mx-auto max-w-5xl px-5 mt-12 sm:px-8 lg:px-12">
        <div className="border border-slate-300 bg-white shadow-sm relative overflow-hidden">
          
          {/* Official Header */}
          <div className="bg-[#b45309] text-white p-6 md:p-8 flex items-start gap-4 border-b-8 border-amber-500">
             <FileText size={36} className="text-amber-300 shrink-0 mt-1" />
             <div>
               <h1 className="text-2xl font-bold uppercase tracking-wide">PM Viksit Bharat Rozgar Yojana</h1>
               <p className="text-sm text-orange-100 mt-2 font-medium tracking-wide">Ministry of Labour and Employment, Govt. of India</p>
             </div>
          </div>

          <div className="p-8 md:p-12 relative z-10">
            {/* Background watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-[-1]" aria-hidden="true">
              <span className="font-serif text-[120px] font-bold text-slate-100 rotate-[-15deg] select-none">
                FASII
              </span>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 space-y-6">
              <h2 className="text-xl font-bold text-[#b45309] uppercase tracking-wider mb-2">Executive Summary</h2>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-8 text-slate-700 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-sm font-bold text-slate-500">
               <span>Implementation Agency: EPFO</span>
               <span className="mt-2 sm:mt-0">Budget 2024-25 Initiative</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}