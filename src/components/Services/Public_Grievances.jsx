import PageHero from "../Layout/common/PageHero";

const paragraphs = [
"4.1. All establishments including New Establishments as well as the Exempted establishments covered under EPF & MP Act, 1952, are eligible under the scheme, provided they file the ECR along with contributions regularly and fulfill other conditions of the scheme. ",
"4.2. The period for registration under the scheme will be as following: ",
];
const Determination=[
  "The baseline under Part B for calculation of Net Additional Employment shall be as under:",
  "5.1. Existing Establishment- For establishments registered with EPFO before 31.07.2024 and regularly filing ECRs with contributions, the baseline shall be the average number of employees as per ECRs filed for the 12-month period from 01.08.2024 to 31.07.2025. For establishments registered with EPFO between 01.08.2024 and 31.07.2025, the baseline will be the average number of employees as per ECRs for all the months up to 31.07.2025. ",
  "For availing the benefits of the scheme, the establishments are required to submit ECRs along with contributions for all the months from August 2024 or from the date of registration in EPFO, whichever is later, up to the wage month of July 2025. All these ECRs along with contributions are required to be filed by the establishments prior to 31st January 2026. ",
  "5.2. New Establishment: For those new Establishments which get registered with EPFO between 01.08.2025 and 31.07.2027, the baseline will be 20 as per the EPFO criterion for mandatory registration. However, only the additional jobs created over and above the baseline of 20 as per threshold criteria will be considered for incentive. The baseline shall not be subject to change after 6 months from the start of the scheme. However, in case a higher number of employees are shown in revised ECRs during these 6 months, the same will be considered for calculating baseline. ",

]
const Guidelines = [
  "i. For Part A, the First Timer  in  all the establishments, which are covered under EPF&MP Act, 1952 are eligible subject to fulfilment of the eligibility criteria as explained in the subsequent paras. ",
  "ii. All ‘First-Timers’ who had Gross wages up to ₹ 1 Lakh at the time of joining the establishment registered with EPFO as well as exempted establishments, will be eligible for the incentive under this Part of the scheme, after filing of ECRs along with contributions for 6 continuous months. However, the establishments which are part of seasonal industry as defined in the EPF Scheme, 1952, ECRs for six months, irrespective of continuity of the ECR over a period of 12months would be considered for deciding the eligibility of the First Timer provided he/she continues with the same establishment for the entire period.  ",
  "iii. Exempted Establishments have to file the ECR (without contributions) in EPFO providing details of their employees including the First Timers, for whom the contributions are being deposited in their PF Trust on the same basis as above.",
"a. Further, for receiving the second installment under Part A of the scheme, all the 12 months’ ECRs should have been filed within a period of 18 months from the date of joining of First Timer in the establishment.  ",
"b. Calculation of Incentive for  First time employees under Part A:",
" ● The incentives under Part A to the First Timer shall be equivalent to the one completed month EPF wage, subject to a maximum of ₹15,000/- ",
"c. The incentives shall be payable in two instalments: ",
"● The 1st instalment will be up to a maximum of ₹7,500/-, to be calculated as half of the average EPF wage for six continuous completed months and payable after filing of six completed months’ ECRs along with contributions. ",
"● The 2nd instalment, payable to the First Timer, will be equal to the average of the 12 completed months’ EPF wage reduced by 1st instalment and restricted to a total incentive of ₹15,000. The 2nd installment will be kept in an appropriate saving instrument/deposit account for a period to be specified in the guidelines which will be issued by M/o L&E in due course. The First Timer will become eligible for this part of incentive only after completion of the Financial Literacy program and filing of 12 completed months’ ECRs along with contributions by the establishment.  ",
""
]
const Partb = [
  "The benefits under this Part will be provided to the employers in respect of the employees who are either first timers or Re-Joinees, subject to fulfilling the threshold criterion. ",

]

const bodyClass = "text-base leading-8 text-slate-700 sm:text-lg sm:leading-9";
const headingClass = "text-2xl font-semibold text-slate-900";
const subHeadingClass = "text-xl font-semibold text-slate-900";

export default function Public_Grievances() {
  return (
    <main className="bg-white text-slate-900">
      <PageHero title="Applicability of the Scheme to an Establishment" />

      {/* Scheme content */}
      <section
        aria-labelledby="about-content-title"
        className="relative mx-auto max-w-375 overflow-hidden px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center" aria-hidden="true">
          <span className="font-serif text-[78px] font-bold leading-none text-black/[0.035] sm:text-[110px] lg:text-[145px]">
            FASII
          </span>
        </div>

        <div className="relative max-w-4xl">
          <h2 id="about-content-title" className={headingClass}>
            Applicability of the Scheme to an Establishment
          </h2>

          <div className={`mt-6 space-y-6 ${bodyClass}`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {/* Scheme registration dates */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-135 max-w-4xl border-collapse text-left text-base text-slate-700 sm:text-lg">
                <caption className="sr-only">
                  Scheme registration period for Part A and Part B
                </caption>

                <thead>
                  <tr className="bg-orange-50 text-orange-800">
                    <th scope="col" className="border border-slate-200 px-5 py-4 font-semibold">
                      Scheme
                    </th>
                    <th scope="col" className="border border-slate-200 px-5 py-4 font-semibold">
                      Effective date
                    </th>
                    <th scope="col" className="border border-slate-200 px-5 py-4 font-semibold">
                      End date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="row" className="border border-slate-200 px-5 py-4 font-semibold text-slate-900">
                      Part A &amp; Part B
                    </th>
                    <td className="border border-slate-200 px-5 py-4">
                      01.08.2025
                    </td>
                    <td className="border border-slate-200 px-5 py-4">
                      31.07.2027
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Note: All the existing establishments which are registered with EPFO and having a unique Employer’s code, would be considered deemed registered under the scheme w.e.f. 01.08.2025. However, such establishments would require to provide details of PAN, GSTN and PAN linked Bank Account Number of the employer.
            </p>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>Determination</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              {Determination.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>
              Guidelines for calculating incentive under the scheme
            </h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              {Guidelines.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>Part B of the scheme</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              {Partb.map((item) => (
                <p key={item}>{item}</p>
              ))}

              <h3 className={subHeadingClass}>6.2.1. Amount of Incentive/ Benefit and Periodicity</h3>
              <p>
                Under this Part of the Scheme, incentives will be provided to the employer at the following rates for two years in respect of employment generated over and above the baseline fulfilling the threshold limit i.e., at least 2 additional employments with baseline of less than 50 and at least 5 additional employments with baseline of 50 or above. The criteria for providing incentive to the employer will be as under:
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="mx-auto w-full min-w-162.5 max-w-226.25 table-fixed border-collapse bg-white text-center text-base text-slate-700 sm:text-lg">
                  <caption className="sr-only">
                    EPF wage slabs and monthly employer benefits
                  </caption>

                  <colgroup>
                    <col className="w-[37%]" />
                    <col className="w-[63%]" />
                  </colgroup>

                  <thead>
                    <tr className="bg-orange-50 text-orange-800">
                      <th
                        scope="col"
                        className="border border-slate-200 px-5 py-3 align-top font-semibold leading-[1.8]"
                      >
                        EPF Wage Slabs of
                        <br />
                        Additional Employee in
                        <br />
                        ₹
                      </th>

                      <th
                        scope="col"
                        className="border border-slate-200 px-5 py-3 align-top font-semibold leading-[1.8]"
                      >
                        Benefit to the Employer in ₹
                        <span className="mt-4 block">
                          (per additional employment per month as
                          <br />
                          per prescribed criteria)
                        </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        {"<= 10,000"}
                        <sup>*</sup>
                      </td>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        <span className="px-1">Up to 1000</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        {">10,000 to<=20,000"}
                      </td>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        2000
                      </td>
                    </tr>

                    <tr>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        {"> 20,000-1,00,000"}
                        <sup>#</sup>
                      </td>
                      <td className="h-16 border border-slate-200 px-4 align-top">
                        3000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                * In respect of employees getting EPF wages below ₹ 10,000, the incentive at the rate of 10% of EPF wage will be provided as an additional risk mitigation measure. <br /><br />
                # Incentive will be paid in respect of new employees with Gross wage up to ₹ 1 Lakh at the time of joining the establishment.<br /><br />
                i. For the manufacturing sector, the incentive to the employer will continue for the third and the fourth year.<br /><br />
                ii. The benefits will be provided to all eligible establishments on six monthly lump sum basis after filing of six completed months’ ECRs based on eligibility of the employer and employee as elaborated in previous paras. Further, the benefits will be provided in respect of those First Timers and Re-joinees who complete six months of employment with the same employer. The calculation of benefits will take into account the net additional employment generated.<br /><br />
                iii. The benefits to the employer will not accrue for any month in which the employer is not eligible as per the threshold criteria laid out in the Scheme. In such cases, there will be no extension of the incentive period.
              </p>

              <p className="font-semibold text-slate-900">
                Detailed Guidelines for calculation under this part will be issued separately.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>6.2.2. Eligibility of establishments under Part B:</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              <p>
                While calculating the incentive amount for a given month, eligibility of the establishment will be determined based on the threshold criteria, as detailed below
              </p>

              <h3 className={subHeadingClass}>i. Determining Eligibility for the first six months:</h3>
              <p>
                For being eligible in the first 6 months of joining the scheme, the average number of employees in the establishment as per the ECR filed for those six months should be more than or equal to the Baseline plus the Threshold limit.
              </p>

              <h3 className={subHeadingClass}>ii. Determining Eligibility from 7th month to 12th month:</h3>
              <p>
                For being eligible in any particular month, between 7th to 12th month, the average number of employees in the establishments as per the ECR filed, from 1st month up to that month should be more than or equal to the Baseline plus the Threshold limit.
              </p>

              <h3 className={subHeadingClass}>iii.  Determining Eligibility from 13 month onwards:</h3>
              <p>
                For being eligible in any particular month, from 13th month onwards, the average number of employees in the establishments as per the ECR filed for preceding 11 months and that particular month, should be more or equal to than the Baseline plus the Threshold limit
              </p>

              <p>
                <strong>6.2.3.</strong> Further, the incentive under Part B of the scheme will not be provided to such establishments against which inquiries under Section 7A/7B/7C of EPF & MP Act, 1952 and Para 26-B of the EPF Scheme, 1952 are pending, and if concluded, the said order has been appealed in a legal forum or not complied with otherwise.
              </p>

              <p>
                <strong>6.2.4. </strong> The incentive under Part B of the Scheme will not be provided to establishments against which a First Information Report (FIR) has been filed by EPFO for fraudulent practices, or where inquiries relating to irregularities under the ABRY scheme or any other scheme are pending or have been decided against the establishment.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>6.3. Cessation of incentives:</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              <p>
                Notwithstanding anything contained in this scheme, the payment of incentives under the scheme will cease-
              </p>
              <p>
                <strong>6.3.1.</strong> In the event of a First Timer leaving the employment on his own volition or otherwise.<br />
                <strong>6.3.2. </strong> In case of any eventuality like death, etc. of the beneficiary <br />
                <strong>6.3.3.</strong> In the event of closure/winding up etc. of the establishment.<br />
                <strong>6.3.4.</strong> In the event of any misrepresentation or fraud.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>6.4. Mode of Payments:</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              <p>
                The incentive shall be disbursed within 45 days after fulfilling the eligibility condition and filing of paid ECR as per the periodicity defined under respective Part of the scheme, through following mode of payment:
              </p>

              <p>
                <strong>6.4.1.</strong> The incentives to the employees shall be paid through (Aadhaar Bridge Payment System) Direct Benefit Transfer to their Aadhaar seeded bank accounts.
              </p>
              <p>
                <strong>6.4.2.</strong> The incentive to the establishment shall be provided as Direct Benefit Transfer to PAN linked bank account of the establishment. Where a group of establishments under the same PAN are eligible for the incentive, payment will be made to a single PAN linked bank account nominated by the group.
              </p>
              <p>
                Provided that, in case where employees’ bank account is pending for Aadhaar seeding, the payment of incentive shall remain suspended. However, the incentives would continue to accrue during this period. Once the bank account is Aadhaar seeded, the payment including arrears would be released as per scheme guidelines.
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <h2 className={headingClass}>7. Rounding off</h2>

            <div className={`mt-6 space-y-6 ${bodyClass}`}>
              <p>
                7.1.   For the purpose of calculation of baseline, threshold and average employment strength, averages may be rounded off to nearest integer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
