import PageHero from "../Layout/common/PageHero";
import { documents } from "../../data/fasiiContent.js";
import { FileText, Download, ShieldCheck } from "lucide-react";

// Supplied scheme wording and clause numbering are retained.
const sections = [
  {
    "number": "8",
    "title": "Special Provisions for Exempted Establishments",
    "blocks": [
      {
        "type": "clause",
        "text": "All the exempted establishments under the provisions of the EPF & MP Act 1952 are eligible for availing incentives of this scheme. These exempted establishments have to file returns as prescribed by EPFO for availing the incentives under this Scheme for each month. Further, for calculation of baseline, the Exempted Trusts need to submit ECRs along with details of employees for 12 months preceding August, 2025 (i.e. from wage month of August, 2024 to July, 2025). Furthermore, for smooth implementation of the Scheme and for transparency, the Exempted establishments are required to open or take Aadhaar authenticated UAN through EPFO for all their existing employees as well as new employees. For this purpose, the FAT facility provided on UMANG Mobile App may be utilized for registration of such employees of exempted trusts.",
        "number": "8.1."
      }
    ]
  },
  {
    "number": "9",
    "title": "Identification of fraudulent activity",
    "blocks": [
      {
        "type": "clause",
        "text": "To identify potentially fraudulent activities, the Executive Committee will formulate a comprehensive Standard Operating Procedure (SOP) using IT tools and also utilize the information available through API integration with EPFO. Any additional employment generation can be corroborated with enhanced trade activity/tax deposit/ electricity utilization etc, if need so arises in doubtful cases. Further, the Executive Committee will utilize the experience of other implementing agencies of the similar programmes like PLI scheme, Make in India, Stand-up India, Skill India Mission, Atmanirbhar Bharat Abhiyaan etc. as well as other global practices for this purpose. Additionally, data obtained through GST, CBIC, CBDT, MCA, ESIC, Udhyam Portals etc will also be utilized. The decision of the Executive Committee to cease incentives, if any establishment or employee is found to have committed fraud or engaged in any misuse as per the SOP, shall be final.",
        "number": "9.1."
      }
    ]
  },
  {
    "number": "10",
    "title": "Penalty Clause",
    "blocks": [
      {
        "type": "clause",
        "text": "In case any establishment is found to have indulged in fraudulent activities or avail incentive under any part of the Scheme, based on fictitious data/documents, or otherwise, necessary action will be taken against such establishments or individuals, if any, as per law. Further, a comprehensive Penalty clause will be issued separately by Ministry of Labour & Employment in due course.",
        "number": "10.1."
      }
    ]
  },
  {
    "number": "11",
    "title": "Communications and Advocacy",
    "blocks": [
      {
        "type": "clause",
        "text": "Multi-media outreach strategy using various channels including social media, Traditional Media, Workshops, Webinars, etc. will be adopted.",
        "number": "11.1."
      },
      {
        "type": "clause",
        "text": "The outreach will be done in multiple languages for better advocacy of the scheme.",
        "number": "11.2."
      }
    ]
  },
  {
    "number": "12",
    "title": "Monitoring and Evaluation",
    "blocks": [
      {
        "type": "clause",
        "text": "The scheme will be monitored by the Steering Committee constituted by the Ministry of Labour and Employment.",
        "number": "12.1."
      },
      {
        "type": "subheading",
        "text": "Steering Committee",
        "number": "12.2."
      },
      {
        "type": "clause",
        "text": "An inter-ministerial Steering Committee under the Chairpersonship of Secretary (M/o L&E) shall be constituted by M/o L&E. The recommendations of the Committee related to change in scheme guidelines involving modification of financial outlay of the scheme will be implemented with concurrence of D/o Expenditure and approval of Union Minister for Labour and Employment. The other recommendations of the Steering Committee will be implemented with approval of the Union Minister for Labour and Employment. Further, the inter-se allocation between the two parts of the scheme within the overall approved outlay may be done based on recommendations of the Steering Committee and with concurrence of IFD, M/o L&E and approval of Minister.",
        "number": "12.2.1."
      },
      {
        "type": "label",
        "text": "The Committee will consist of:"
      },
      {
        "type": "list",
        "items": [
          "Secretary, M/o L&E, Chairperson",
          "Central Provident Fund Commissioner (CPFC)",
          "Financial Adviser, M/o L&E",
          "Joint Secretary, M/o L&E in charge of Scheme Division",
          "One Senior Officer each not below the rank of Joint Secretary from DoE, NITI Aayog, DPIIT.",
          "Heads of Scheme/Planning Division of 4-6 labour-intensive ministries/departments like M/o Textiles, M/o MSME, M/o Food Processing Industries, MEITY etc.",
          "Chairman of the committee may co-opt any other member"
        ]
      },
      {
        "type": "clause",
        "text": "The function of the Steering Committee would be to provide recommendations on the following:",
        "number": "12.2.3."
      },
      {
        "type": "list",
        "items": [
          "Broad policy directions including change in scheme guidelines.",
          "The on-going interventions/upcoming Schemes of different Ministries/ Departments from the perspective of job creation, employability and formalization of work force.",
          "Dynamic allocation of targets between the two parts of the scheme",
          "Measures for removal of difficulties/provide operative remedies for any issues in implementation, Monitoring and Evaluation of the Scheme",
          "Review risks and risk mitigation measures",
          "To review performance of Project Management &Monitoring Unit (PMMU)",
          "Annual budget, budget estimation approvals",
          "Mid Term & End Term evaluation of the scheme",
          "Any other function as maybe decided by the Chairperson"
        ]
      },
      {
        "type": "clause",
        "text": "The Steering committee will meet at least once every quarter or as decided by the Chairperson.",
        "number": "12.2.4."
      },
      {
        "type": "subheading",
        "text": "Executive Committee",
        "number": "12.3."
      },
      {
        "type": "clause",
        "text": "An Executive Committee under Chairpersonship of the CPFC shall be constituted by M/o L&E",
        "number": "12.3.1."
      },
      {
        "type": "clause",
        "text": "The Executive Committee will consist of:",
        "number": "12.3.2."
      },
      {
        "type": "list",
        "items": [
          "Chief Controller of Accounts, M/o L&E",
          "Financial Adviser & Chief Accounts Officer of EPFO",
          "Additional Central Commissioner (HQ) (ISD)",
          "Additional Central Commissioner (HQ) (Compliance)",
          "Director, SS Division, M/o L&E The Chairperson of the committee may co-opt any other member."
        ]
      },
      {
        "type": "clause",
        "text": "The Executive Committee will meet every month to ensure implementation of the scheme including:",
        "number": "12.3.3."
      },
      {
        "type": "list",
        "items": [
          "Project implementation,",
          "Effective implementation of SOPs of the scheme",
          "Approval for development of IT systems",
          "Communication and Advocacy measures",
          "Grievance Redressal",
          "Any other function as may be decided by the Chairperson"
        ]
      },
      {
        "type": "subheading",
        "text": "Evaluation",
        "number": "12.4."
      },
      {
        "type": "clause",
        "text": "A mid-term evaluation of the Scheme shall be undertaken by a third party for necessary course correction after one year of start of the scheme, based on the recommendations of Steering Committee. Further, an end-term evaluation of the Scheme shall be conducted through a third party to assess the Scheme outcomes within a period of three months from the closure of these Schemes. The incidental cost for the evaluations shall be met from the Administrative Charges of this Scheme.",
        "number": "12.4.1."
      }
    ]
  },
  {
    "number": "13",
    "title": "Administration of the Scheme and Grievance Redressal",
    "blocks": [
      {
        "type": "clause",
        "text": "The scheme shall be administrated by EPFO under the overall supervision of the Ministry of Labour and Employment.",
        "number": "13.1."
      },
      {
        "type": "clause",
        "text": "The cost of the administration shall include any external agency hired for communication and advocacy, monitoring & evaluation, procurement/development of IT systems/ software and other activities for effective and efficient administration of the scheme and shall be borne by the Central Government.",
        "number": "13.1.1."
      },
      {
        "type": "clause",
        "text": "A separate administrative account shall be maintained for the Scheme by the Ministry of Labour and Employment.",
        "number": "13.1.2."
      },
      {
        "type": "clause",
        "text": "The expenditure under the scheme shall be audited in accordance with the instructions issued by the Central Government in consultation with the Comptroller and Auditor-General of India.",
        "number": "13.1.3."
      },
      {
        "type": "clause",
        "text": "EPFO shall provide an estimate of the beneficiaries and expenditure likely to be incurred in each financial year in respect of each part of the Scheme. Further, EPFO will develop a Portal for effective monitoring of the progress of the scheme showing the number of beneficiaries already covered under Part A & Part B, total expenditure incurred, number of claims pending (age-wise), statics in r/o sectors most/least benefitting under the scheme, number of defaulting establishments identified etc.",
        "number": "13.1.4."
      },
      {
        "type": "clause",
        "text": "The identification and verification of the beneficiaries under the respective part of the Scheme will be through IT System developed by EPFO for this purpose. If need so arises in doubtful cases, the verification of claims may be corroborated with the information available on other Government Portals like Income Tax, GSTN, MoCA, Udhyam Portal etc.",
        "number": "13.1.5."
      },
      {
        "type": "subheading",
        "text": "Grievance Redressal",
        "number": "13.2."
      },
      {
        "type": "clause",
        "text": "EPFO shall provide an online facility for all the stakeholders to file grievances related to the scheme. Further, for assisting the stakeholders EPFO will also put in place a call centre for Pradhan Mantri Viksit Bharat Yojana.",
        "number": "13.2.1."
      },
      {
        "type": "clause",
        "text": "EPFO shall strive to resolve the grievances of the stakeholders at the earliest, not exceeding 15 days.",
        "number": "13.2.2."
      },
      {
        "type": "clause",
        "text": "In case the grievance is not resolved, or grievance redressal is not satisfactory, an escalation matrix is to be provided for the stakeholders to appeal.",
        "number": "13.2.3."
      },
      {
        "type": "clause",
        "text": "The grievances can be filed on the following grounds:",
        "number": "13.2.4."
      },
      {
        "type": "list",
        "items": [
          "Eligibility related",
          "Applicability related",
          "Non-receipt of incentives",
          "IT systems related",
          "Receipt of lesser incentives",
          "Any other issue related to Pradhan Mantri Viksit Bharat Yojana"
        ]
      }
    ]
  }
];

const schemeDocument = documents.find((document) => document.id === "pmvbry");

function ContentBlock({ block }) {
  const bodyClass = "text-sm leading-6 text-slate-700 md:text-base md:leading-8";

  if (block.type === "subheading") {
    return (
      <h3 className="mt-8 mb-3 flex items-baseline gap-2 text-base font-bold uppercase tracking-wider text-[#b45309]">
        <span className="shrink-0 tabular-nums">{block.number}</span>
        <span>{block.text}</span>
      </h3>
    );
  }

  if (block.type === "label") {
    return <p className="font-bold text-slate-900 mt-4 mb-2">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ol
        type="i"
        className={`${bodyClass} list-outside list-[lower-roman] space-y-2 pl-6 marker:text-[#b45309] marker:font-bold border-l-2 border-slate-200 ml-4`}
      >
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex} className="pl-2">{item}</li>
        ))}
      </ol>
    );
  }

  if (block.type === "clause") {
    return (
      <div className="flex gap-4 mt-4">
        <span className={`${bodyClass} font-bold text-slate-900 shrink-0`}>
          {block.number}
        </span>
        <p className={`${bodyClass} text-justify`}>{block.text}</p>
      </div>
    );
  }

  return <p className={`${bodyClass} text-justify mt-4`}>{block.text}</p>;
}

export default function Downloads() {
  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen pb-16">
      <PageHero title="Official Policy Document & Provisions" />

      <section className="mx-auto max-w-6xl px-5 mt-10 sm:px-8 lg:px-12">
        
        {/* Document Header & Download Block */}
        <aside className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-slate-300 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <FileText size={48} className="text-[#b45309] shrink-0" />
            <div>
              <p className="text-lg font-black uppercase text-slate-900">{schemeDocument.title}</p>
              <p className="mt-1 text-sm font-medium leading-6 text-slate-600 border-l-4 border-amber-500 pl-3">{schemeDocument.description}</p>
            </div>
          </div>
          <a
            href={schemeDocument.file}
            download
            className="flex items-center gap-2 border-2 border-[#b45309] bg-[#b45309] px-6 py-3 font-bold uppercase text-white transition hover:bg-white hover:text-[#b45309] whitespace-nowrap"
          >
            <Download size={18} /> Download Gazette PDF
          </a>
        </aside>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          
          {/* Left Navigation (Strict Sidebar) */}
          <nav aria-label="On this page" className="sticky top-6 border border-slate-300 bg-white shadow-sm">
            <div className="bg-slate-800 text-white px-5 py-4">
              <p className="text-sm font-bold uppercase tracking-widest">Document Index</p>
            </div>
            <ol className="divide-y divide-slate-200">
              {sections.map((section) => (
                <li key={section.number}>
                  <a
                    href={`#provision-${section.number}`}
                    className="flex items-baseline gap-3 px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-[#b45309]"
                  >
                    <span className="shrink-0 font-bold text-amber-600">Section {section.number}.</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="bg-amber-50 p-4 border-t border-slate-300">
                <img 
                  src="https://loremflickr.com/400/200/document,stamp/all" 
                  alt="Official Government Document stamp" 
                  className="w-full h-32 object-cover border border-slate-300 opacity-80"
                />
            </div>
          </nav>

          {/* Right Content Area (Gazette Style) */}
          <div className="bg-white border border-slate-300 p-8 md:p-12 shadow-sm relative">
            <div className="absolute top-6 right-6 opacity-5">
              <ShieldCheck size={180} />
            </div>

            <article aria-label="Scheme provisions, sections 8 to 13" className="relative z-10 space-y-12">
              {sections.map((section) => (
                <section
                  key={section.number}
                  id={`provision-${section.number}`}
                  aria-labelledby={`provision-title-${section.number}`}
                  className="scroll-mt-28"
                >
                  <div className="bg-[#fff8ec] border-l-4 border-[#b45309] px-5 py-3 mb-6">
                    <h2
                      id={`provision-title-${section.number}`}
                      className="flex items-baseline gap-3 text-lg font-bold uppercase tracking-wide text-orange-950"
                    >
                      <span className="shrink-0">Section {section.number}.</span>
                      <span>{section.title}</span>
                    </h2>
                  </div>
                  <div className="pl-2">
                    {section.blocks.map((block, index) => (
                      <ContentBlock key={index} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </div>

      </section>
    </main>
  );
}