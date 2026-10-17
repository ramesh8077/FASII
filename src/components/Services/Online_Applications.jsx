import { Link } from "react-router-dom";
// import BannerImage from "../../../assets/Images/About/about-organization.jpg";
const paragraphs = [
"1.2.1. Part A- First Timer: It provides one time incentive of upto ₹ 15,000/- to assist first timers in navigating their learning curve before they become fully productive. ",
"1.2.2. Part B- Support to Employers with focus on Manufacturing sector: It is an employer-focused Part of the scheme that supports creation of sustained additional employment in all sectors. It incentivizes employers for 02 years for the creation of additional employment. For the establishments engaged in the manufacturing sector, the incentives will be provided for 04 years."
];
const SchemeObjective  = [
"2.1.  The Pradhan Mantri Viksit Bharat Rozgar Yojana (hereinafter referred to as the Scheme) has been designed to stimulate employment creation by providing incentives to employees and employers. Its core objective is to promote the generation of sustained additional employment, increase formalization of the workforce and enhance employability. ",
"2.2.  The scheme will provide support to employees and establishments. ",
"2.3.  Part A of the initiative supports first time employees in their learning curve, by offsetting costs of upskilling, thereby leading to increased productivity and employability. Additionally, the scheme emphasizes financial literacy for first timers, equipping them with essential skills for managing their finances. ",
"2.4.  The incentives under Part B of the Scheme will give impetus to employment generation in all sectors with an additional focus on the Manufacturing Sector. ",
"2.5.  Through these comprehensive measures, the scheme strives to foster a more dynamic, formal and inclusive labour market in India particularly for the Youth. ",
]
const Definitions = [
  "3.1. For the purpose of this Scheme: ",
"  3.1.1. “Aadhaar” means the Aadhaar Number as defined under the Aadhaar Act, 2016. ",
" 3.1.2. “Baseline” For existing establishments registered with EPFO for more than 12 months prior to 01.08.2025 of the scheme, the Baseline is defined as the average number of employees during the previous 12 months.  Further, for the establishment registered with EPFO for less than 12 months prior to 01.08.2025, the baseline will be the average number of employees for all months till 31.07.2025. ",
" For the new establishments, the baseline will be 20 and the establishment will start getting benefits for additionality over and above this baseline once the threshold criterion is fulfilled. ",
"3.1.3. “Completed Wage Month” refers to a full calendar month for which the Electronic Challan-cum-Return (ECR) has been duly filed with the EPFO. For the purpose of determining eligibility and calculating incentives under this Scheme, first Completed Wage Month will be determined as follows:  i. Where an employee’s Date of Joining is on or before the 5th day of a given calendar month, that same month shall be treated as the first Completed Wage Month.  ii. Where the Date of Joining is after the 5th day of the month, the subsequent calendar month shall be treated as the first Completed Wage Month. This definition of completed wage month will be equally applicable for both employees’ & employers’ incentives under Part A and Part B of the scheme. ",
"3.1.4. “Electronic Challan cum Return” (ECR) means the monthly Electronic Challan cum Return submitted online along with prescribed amount of contributions, by the establishments under provisions of the Employees’ Provident Funds Scheme, 1952.  Explanation: The members in respect of whom such contribution is not received, will not be considered for ascertaining the benefits under Part A and Part B of the scheme. However, the same shall be counted towards ascertaining the Baseline. For providing the incentive, the scheme will take into account only those employees for whom contribution has been received along with the ECR for a particular month.",
"3.1.5. “Employee” means a person joining an establishment covered under EPF & MP Act, 1952 and in respect of whom the establishment pays contributions to EPFO through ECR or remits EPF contribution in the Trust of an exempted establishment (as defined in Point viii below). ",
"i. New Employee: An employee who has joined the establishment during the scheme registration period (from 1/08/25 to 31/07/27) will be considered as a new employee.  ii. First timer : An employee who was not a contributing member of the EPFO or Exempted Trust prior to commencement of the scheme and his date of joining in an establishment is during the scheme registration period and contribution is received in EPFO or Exempted Trust for the first time, will be termed as First Timer or First time employee.  Incentives to a First Timer under Part A will be admissible only if his UAN is authenticated by Face Authentication Technology on the UMANG App. iii. Re-joinee means an employee with a previous contributory membership of Employees Provident Fund either with EPFO or Exempted Trust and joins an establishment registered with EPFO or an exempted trust during the scheme registration period. Incentives to the employers in respect of any Re-joinee will be admissible only if such Re-joinee has UAN which is Aadhaar Authenticated using biometric or face authentication technology. iv. Eligible Employee: Any new employee in respect of whom contribution is received in EPFO or Exempted Trust for at least 6 months for both the employee and the employer and whose gross wages at the time of the joining the establishment is less than Rs. 1,00,000 per month, will be considered for incentive to Establishments under Part B of the scheme.  v. Old   employee: An employee who joined the establishment before 01/08/2025  and has not exited,  will be considered as an Old employee and the employer in respect of these employees will not be eligible for the incentive under the scheme.",
" 3.1.6.  EPF Wage refers to the wage on which contributions are made in accordance with Section 6 of the EPF and MP Act, 1952. This wage will be considered for the purpose of calculating incentives under the Scheme. The EPF wage shall be derived through a reverse calculation method",
"based on the actual contribution amount submitted via the ECR, using the following formula, depending on the applicable contribution rate: i. EPF Wage = (Total Contribution Amount × 100) / 24 or ii. EPF Wage = (Total Contribution Amount × 100) / 20, Note: The divisors 24 and 20 represent the combined percentage of employee and employer contributions, which may be 12% + 12% = 24% or 10% + 10% = 20%, respectively, depending on the category of establishment. Accordingly, the EPF wage for ascertaining both eligibility and the incentive amount shall be calculated for the first Completed Wage Month, duly factoring into account the employee’s actual date of joining and wages paid.  ",
"3.1.7. “Establishment” means an entity covered under and having an EPF code number under Section 1(3), 1(4) or 2A of the EPF and MP Act, 1952 along with a unique PAN number.  i. “Existing Establishment” An establishment registered with EPFO before 01.08.2025 will be termed as “Existing Establishment” under the Scheme   ii. “New Establishment” an establishment registered with EPFO on or after 01.08.2025 will be termed as “New Establishment” under the Scheme.  Explanation: For the purpose of this scheme, all the establishments with the same PAN as available with EPFO on or after 01.08.2025, would be considered as a single entity.  3.1.8 “Exempted Establishment” means an establishment which has been notified as ‘exempted’ in terms of Section 17 of EPF and MP Act,1952  ",
"and maintains their own Trust for providing provident fund benefits which are not less favourable than the benefits provided under EPF and MP Act,1952.  3.1.9 “Financial Literacy Course” means the mandatory module of Financial Literacy developed for providing information on personal finance, savings & investments, and financial planning among others; and made available through EPFO’s Employee portal/website.  3.1.10 “Gross Wage” means all emoluments, whether in cash or kind received by the employee as per the terms of the employment contract.  3.1.11 “Manufacturing” means and includes activities as defined in Section 2(72) of Central Goods and Service Tax Act, 2017 and as mentioned in Registration certificate of the Establishment. ",
"3.1.12 Registration Period: The registration period of the scheme will be from 01.08.2025 to 31.07.2027. All the employees joining an establishment during this period will be considered towards deciding Threshold, additionality and calculation of incentives.  Note: The new employment generated after the registration period is over will only be counted for ascertaining the eligibility of the employer as per the threshold criteria, but no incentive will be provided in respect thereof.  Effective Date of Scheme: 01.08.2025 is the Effective date from when the scheme will be applicable.   3.1.13 “Universal Account Number (UAN)” means Aadhaar authenticated unique account number allotted by Employees’ Provident Fund Organization. With effect from 01.08.2025, for generation of UAN, the Facial Authentication Technology (FAT) facility as provided on UMANG Mobile App, has to be utilised. ",
" 3.2. The definitions and other expressions used in this Scheme shall carry the same meaning as are assigned to them in the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952 (henceforth called “The Act” or “EPF & MP Act, 1952”) or any of the Schemes framed there under, in case they are not defined in the above para. ",
]

export default function Online_Applications({
  // bannerImage = BannerImage,
}) {
  return (
    <main className="bg-white text-slate-900">
      {/* Page title and breadcrumb */}
      <header className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-375 px-5 py-7 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
       Schems  
          </h1>

          <nav aria-label="Breadcrumb" className="mt-4">
            <ol className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500 sm:text-base">
              <li>
                <Link
                  to="/services"
                  className="transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500"
                >
Schems             </Link>
              </li>

              <li aria-hidden="true" className="text-slate-800">
                /
              </li>

              <li aria-current="page" className="text-slate-600">
Scehems               </li>
            </ol>
          </nav>
        </div>
      </header>

      {/* Full-width organization banner */}
      {/* <figure className="overflow-hidden bg-slate-200">
        <img
          src={bannerImage}
          alt="FASSI Federation House surrounded by greenery"
          className="h-55 w-full object-cover object-center sm:h-70 lg:h-85"
          fetchPriority="high"
        />
      </figure> */}

      {/* About content */}
      <section aria-labelledby="about-content-title" className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-9 flex justify-center" aria-hidden="true">
          <span className="font-serif text-[78px] font-bold leading-none text-black/[0.035] sm:text-[110px] lg:text-[145px]">
            FASSI
          </span>
        </div>

        <div className="relative mx-auto max-w-375 px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <span className="mx-auto mb-4 block h-0.75 w-12 bg-orange-500" aria-hidden="true" />

            <h2 id="about-content-title" className="font-serif text-3xl font-medium text-slate-900 sm:text-4xl">
              Pradhan Mantri Viksit Bharat Rozgar Yojana  
            </h2>
          </div>

       <div
        className="mt-12 lg:mt-16">
    <h3 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
    1. Part A & Part B
  </h3>
          <div
           className="mt-12 space-y-7 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 lg:mt-16">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
         </div>

           <div className="mt-12 lg:mt-16">
    <h3 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
    2. Scheme Objective 
  </h3>

          <div
          

   className="mt-12 space-y-7 text-base leading-8 text-slate-800 sm:text-lg sm:leading-9 lg:mt-16">
            {SchemeObjective.map((SchemeObjective) => (
              <p key={SchemeObjective}>{SchemeObjective}</p>
              
            ))}
          </div>
          </div>

          <div className="mt-12 lg:mt-16">
    <h3 className="mb-6 text-2xl font-bold text-black sm:text-3xl">
    3. Definitions
  </h3>
           <div

   className="mt-12 space-y-7 text-base leading-8 text-slate-800 sm:text-lg sm:leading-9 lg:mt-16">
            {Definitions.map((Definitions) => (
              <p key={Definitions}>{Definitions}</p>
              
            ))}
          </div>
          </div>

        </div>
      </section>
    </main>
  );
}