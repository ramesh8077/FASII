import { Link } from "react-router-dom";
import { FileText, Users, TrendingUp, Award } from "lucide-react";
import PageHero from "../Layout/common/PageHero";

export default function MSME() {
  return (
    <main className="bg-[#f8fafc] text-slate-900 font-sans">
      <PageHero title="Core MSME Sector" />

      {/* Hero Banner Box */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 lg:px-12">
        <div className="bg-[#b45309] border-b-8 border-amber-500 text-white p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 text-amber-400">Sector Directive</h2>
            <p className="text-sm leading-6 text-orange-50">
              Micro, Small, and Medium Enterprises (MSMEs) form the backbone of India's economy, contributing significantly to employment generation, industrial output, and exports. FASII is dedicated to strengthening this vital sector through advocacy, capacity building, and strategic partnerships.
            </p>
          </div>
          <Link to="/knowledge/policies" className="bg-white text-[#b45309] font-bold text-sm px-6 py-3 uppercase whitespace-nowrap hover:bg-amber-100 border border-transparent">
            View MSME Bill
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Classification Table (Strict) */}
          <div className="border border-slate-300 bg-white">
            <div className="bg-slate-800 px-4 py-3">
              <h2 className="text-sm font-bold uppercase text-white">Official MSME Classification</h2>
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-slate-100 border-b-2 border-slate-300">
                <tr>
                  <th className="px-4 py-3 font-bold text-slate-800 border-r border-slate-300">Category</th>
                  <th className="px-4 py-3 font-bold text-slate-800 border-r border-slate-300">Investment</th>
                  <th className="px-4 py-3 font-bold text-slate-800">Turnover</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-orange-50">
                  <td className="px-4 py-3 font-bold text-slate-900 border-r border-slate-300">Micro</td>
                  <td className="px-4 py-3 text-slate-700 border-r border-slate-300">Up to ₹1 Cr</td>
                  <td className="px-4 py-3 text-slate-700">Up to ₹5 Cr</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-4 py-3 font-bold text-slate-900 border-r border-slate-300">Small</td>
                  <td className="px-4 py-3 text-slate-700 border-r border-slate-300">Up to ₹10 Cr</td>
                  <td className="px-4 py-3 text-slate-700">Up to ₹50 Cr</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-4 py-3 font-bold text-slate-900 border-r border-slate-300">Medium</td>
                  <td className="px-4 py-3 text-slate-700 border-r border-slate-300">Up to ₹50 Cr</td>
                  <td className="px-4 py-3 text-slate-700">Up to ₹250 Cr</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-orange-50 px-4 py-2 border-t border-slate-300 text-xs font-semibold text-orange-800">
              Reference: Gazette of India, Notification defining MSMEs
            </div>
          </div>

          {/* FASII Initiatives List */}
          <div className="border border-slate-300 bg-white">
            <div className="bg-[#b45309] px-4 py-3 border-b-4 border-amber-500">
              <h2 className="text-sm font-bold uppercase text-white">Strategic Operations</h2>
            </div>
            <div className="p-0">
              <div className="flex border-b border-slate-200 p-4 items-center">
                <Users className="text-[#b45309] mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Vendor Development</h3>
                  <p className="text-xs text-slate-600 mt-1">Connecting MSMEs with CPSUs and government procurement.</p>
                </div>
              </div>
              <div className="flex border-b border-slate-200 p-4 items-center">
                <TrendingUp className="text-[#b45309] mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Capacity Building</h3>
                  <p className="text-xs text-slate-600 mt-1">Awareness on MSME schemes and sustainability strategies.</p>
                </div>
              </div>
              <div className="flex p-4 items-center">
                <Award className="text-[#b45309] mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-sm text-slate-900">Quality & Certification</h3>
                  <p className="text-xs text-slate-600 mt-1">Guidance on BIS certification and government standards compliance.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}