import PageHero from "../Layout/common/PageHero";

const paragraphs = [
  "4.1. All establishments including New Establishments as well as the Exempted establishments covered under EPF & MP Act, 1952, are eligible under the scheme, provided they file the ECR along with contributions regularly and fulfill other conditions of the scheme.",
  "4.2. The period for registration under the scheme will be as following:"
];

const Determination = [
  "The baseline under Part B for calculation of Net Additional Employment shall be as under:",
  "5.1. Existing Establishment - For establishments registered with EPFO before 31.07.2024 and regularly filing ECRs with contributions, the baseline shall be the average number of employees as per ECRs filed for the 12-month period from 01.08.2024 to 31.07.2025. For establishments registered with EPFO between 01.08.2024 and 31.07.2025, the baseline will be the average number of employees as per ECRs for all the months up to 31.07.2025.",
  "For availing the benefits of the scheme, the establishments are required to submit ECRs along with contributions for all the months from August 2024 or from the date of registration in EPFO, whichever is later, up to the wage month of July 2025. All these ECRs along with contributions are required to be filed by the establishments prior to 31st January 2026.",
  "5.2. New Establishment: For those new Establishments which get registered with EPFO between 01.08.2025 and 31.07.2027, the baseline will be 20 as per the EPFO criterion for mandatory registration. However, only the additional jobs created over and above the baseline of 20 as per threshold criteria will be considered for incentive. The baseline shall not be subject to change after 6 months from the start of the scheme. However, in case a higher number of employees are shown in revised ECRs during these 6 months, the same will be considered for calculating baseline."
];

const Guidelines = [
  "i. For Part A, the First Timer in all the establishments, which are covered under EPF&MP Act, 1952 are eligible subject to fulfilment of the eligibility criteria as explained in the subsequent paras.",
  "ii. All ‘First-Timers’ who had Gross wages up to ₹ 1 Lakh at the time of joining the establishment registered with EPFO as well as exempted establishments, will be eligible for the incentive under this Part of the scheme, after filing of ECRs along with contributions for 6 continuous months. However, the establishments which are part of seasonal industry as defined in the EPF Scheme, 1952, ECRs for six months, irrespective of continuity of the ECR over a period of 12months would be considered for deciding the eligibility of the First Timer provided he/she continues with the same establishment for the entire period.",
  "iii. Exempted Establishments have to file the ECR (without contributions) in EPFO providing details of their employees including the First Timers, for whom the contributions are being deposited in their PF Trust on the same basis as above.",
  "a. Further, for receiving the second installment under Part A of the scheme, all the 12 months’ ECRs should have been filed within a period of 18 months from the date of joining of First Timer in the establishment.",
  "b. Calculation of Incentive for First time employees under Part A:",
  "● The incentives under Part A to the First Timer shall be equivalent to the one completed month EPF wage, subject to a maximum of ₹15,000/-",
  "c. The incentives shall be payable in two instalments:",
  "● The 1st instalment will be up to a maximum of ₹7,500/-, to be calculated as half of the average EPF wage for six continuous completed months and payable after filing of six completed months’ ECRs along with contributions.",
  "● The 2nd instalment, payable to the First Timer, will be equal to the average of the 12 completed months’ EPF wage reduced by 1st instalment and restricted to a total incentive of ₹15,000. The 2nd installment will be kept in an appropriate saving instrument/deposit account for a period to be specified in the guidelines which will be issued by M/o L&E in due course. The First Timer will become eligible for this part of incentive only after completion of the Financial Literacy program and filing of 12 completed months’ ECRs along with contributions by the establishment."
];

const Partb = [
  "The benefits under this Part will be provided to the employers in respect of the employees who are either first timers or Re-Joinees, subject to fulfilling the threshold criterion."
];

export default function Public_Grievances() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Applicability & Scheme Guidelines" />

      <section className="mx-auto max-w-6xl px-5 mt-12 sm:px-8 lg:px-12">
        <div className="bg-white border border-slate-300 shadow-sm">
          
          <div className="bg-[#b45309] text-white p-6 border-b-8 border-amber-500">
             <h1 className="text-2xl font-bold uppercase tracking-wide">Applicability of the Scheme to an Establishment</h1>
          </div>

          <div className="p-8 md:p-10 space-y-12">
            
            {/* Section 4 */}
            <div>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify mb-6">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="pl-4 border-l-2 border-slate-300">{paragraph}</p>
                ))}
              </div>

              {/* Registration Dates Table */}
              <div className="border border-slate-300 mt-4">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="px-5 py-3 font-bold border-r border-slate-600">Scheme Segment</th>
                      <th className="px-5 py-3 font-bold border-r border-slate-600">Effective Date</th>
                      <th className="px-5 py-3 font-bold">End Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr>
                      <td className="px-5 py-4 font-bold text-orange-950 border-r border-slate-300">Part A &amp; Part B</td>
                      <td className="px-5 py-4 text-slate-700 border-r border-slate-300 font-semibold">01.08.2025</td>
                      <td className="px-5 py-4 text-slate-700 font-semibold">31.07.2027</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-amber-50 p-4 border-t border-slate-300 text-sm text-slate-800">
                  <strong className="text-orange-900">Note:</strong> All the existing establishments which are registered with EPFO and having a unique Employer’s code, would be considered deemed registered under the scheme w.e.f. 01.08.2025. However, such establishments would require to provide details of PAN, GSTN and PAN linked Bank Account Number of the employer.
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center gap-2">
                <span className="bg-amber-500 text-white px-3 py-1 text-lg">5.</span> Determination Guidelines
              </h2>
              <div className="space-y-5 text-sm md:text-base text-slate-700 leading-relaxed text-justify bg-slate-50 p-6 border border-slate-200">
                {Determination.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-6 flex items-center gap-2">
                <span className="bg-[#b45309] text-white px-3 py-1 text-lg">6.</span> Incentive Calculation Guidelines
              </h2>
              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify mb-10">
                {Guidelines.map((item, index) => (
                  <p key={index} className={item.startsWith('●') ? "pl-8 font-semibold text-orange-900" : ""}>{item}</p>
                ))}
              </div>

              <div className="bg-[#fff8ec] border border-amber-200 p-6 mb-8">
                <h3 className="text-lg font-bold text-[#b45309] uppercase mb-4">6.2.1. Amount of Incentive / Periodicity</h3>
                <div className="mb-6 text-sm text-slate-700 leading-relaxed text-justify">
                  {Partb.map((item, index) => <p key={index}>{item}</p>)}
                  <p className="mt-4">
                    Under this Part of the Scheme, incentives will be provided to the employer at the following rates for two years in respect of employment generated over and above the baseline fulfilling the threshold limit i.e., at least 2 additional employments with baseline of less than 50 and at least 5 additional employments with baseline of 50 or above.
                  </p>
                </div>

                {/* EPF Wage Slabs Table */}
                <div className="border border-amber-300 bg-white shadow-sm mb-6">
                  <table className="w-full text-center text-sm border-collapse">
                    <thead className="bg-[#b45309] text-white">
                      <tr>
                        <th className="px-4 py-4 font-bold border-r border-amber-600 align-middle">EPF Wage Slabs of Additional Employee (₹)</th>
                        <th className="px-4 py-4 font-bold align-middle">Benefit to Employer (₹) <br/><span className="font-normal text-xs">(per additional employment/month)</span></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800 font-semibold">
                      <tr className="hover:bg-amber-50">
                        <td className="px-4 py-4 border-r border-slate-300">{"<= 10,000"} <sup className="text-orange-600">*</sup></td>
                        <td className="px-4 py-4">Up to 1000</td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <td className="px-4 py-4 border-r border-slate-300">{">10,000 to <=20,000"}</td>
                        <td className="px-4 py-4">2000</td>
                      </tr>
                      <tr className="hover:bg-amber-50">
                        <td className="px-4 py-4 border-r border-slate-300">{"> 20,000 to 1,00,000"} <sup className="text-orange-600">#</sup></td>
                        <td className="px-4 py-4">3000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="text-xs text-slate-600 space-y-3 leading-relaxed border-t border-amber-200 pt-4">
                  <p><strong className="text-orange-600">*</strong> In respect of employees getting EPF wages below ₹ 10,000, the incentive at the rate of 10% of EPF wage will be provided as an additional risk mitigation measure.</p>
                  <p><strong className="text-orange-600">#</strong> Incentive will be paid in respect of new employees with Gross wage up to ₹ 1 Lakh at the time of joining the establishment.</p>
                  <p>i. For the manufacturing sector, the incentive to the employer will continue for the third and the fourth year.</p>
                  <p>ii. The benefits will be provided to all eligible establishments on six monthly lump sum basis after filing of six completed months’ ECRs. The calculation of benefits will take into account the net additional employment generated.</p>
                  <p>iii. The benefits to the employer will not accrue for any month in which the employer is not eligible as per the threshold criteria.</p>
                </div>
              </div>

              {/* Sections 6.2.2 onwards */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase mb-3">6.2.2. Eligibility of establishments under Part B:</h3>
                  <div className="bg-slate-50 border-l-4 border-slate-400 p-5 text-sm text-slate-700 space-y-4">
                    <p><strong>i. First six months:</strong> Average employees in ECR should be {">="} Baseline + Threshold limit.</p>
                    <p><strong>ii. 7th to 12th month:</strong> Average employees from 1st month up to that month should be {">="} Baseline + Threshold limit.</p>
                    <p><strong>iii. 13th month onwards:</strong> Average employees for preceding 11 months + that month should be {">="} Baseline + Threshold limit.</p>
                    <p className="pt-2 border-t border-slate-200"><strong>6.2.3.</strong> Incentive under Part B will not be provided to establishments with pending inquiries under Section 7A/7B/7C of EPF & MP Act.</p>
                    <p><strong>6.2.4.</strong> Incentive will not be provided where FIR is filed by EPFO for fraudulent practices.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase mb-3">6.3. Cessation of incentives:</h3>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 marker:text-[#b45309]">
                    <li><strong>6.3.1.</strong> First Timer leaving employment.</li>
                    <li><strong>6.3.2.</strong> Eventuality like death of beneficiary.</li>
                    <li><strong>6.3.3.</strong> Closure/winding up of establishment.</li>
                    <li><strong>6.3.4.</strong> Event of misrepresentation or fraud.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase mb-3">6.4. Mode of Payments:</h3>
                  <div className="text-sm text-slate-700 leading-relaxed space-y-3 bg-white border border-slate-200 p-5">
                    <p>Disbursed within 45 days after fulfilling eligibility and filing paid ECR:</p>
                    <p><strong>6.4.1.</strong> Employees paid through Aadhaar Bridge Payment System (DBT) to Aadhaar seeded accounts.</p>
                    <p><strong>6.4.2.</strong> Establishments paid as DBT to PAN linked bank account.</p>
                    <p className="text-xs bg-amber-50 p-2 border border-amber-200 mt-2 text-amber-900"><em>Note: If employee bank account is pending Aadhaar seeding, payment is suspended but continues to accrue.</em></p>
                  </div>
                </div>
              </div>
            </div>
            
            <hr className="border-slate-200 my-10" />

            <div className="bg-slate-800 text-white p-6 text-center">
              <h2 className="text-lg font-bold uppercase tracking-wider mb-2">7. Rounding off Policy</h2>
              <p className="text-sm text-slate-300">7.1. For the purpose of calculation of baseline, threshold and average employment strength, averages may be rounded off to nearest integer.</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}