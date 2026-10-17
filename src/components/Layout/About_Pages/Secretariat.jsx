import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const secretariatOffices = [
  {
    office: "National Secretariat",
    region: "Headquarters",
    contact: {
      name: "Shri Shivanshu Tyagi",
      designation: "National Honorary General Secretary",
      affiliation: "Association for Helping Hand",
      address: "R-17/B-16, Raj Nagar, Ghaziabad, Uttar Pradesh – 201002",
      phone: "99116 20123",
      email: "Tyagishivanshu79@gmail.com"
    }
  },
  {
    office: "Southern Regional Office",
    region: "South",
    contact: {
      name: "Shri B. Karthikeyan",
      designation: "Regional Chairman – Southern Region",
      affiliation: "Indian Industries and Rural Development Foundation",
      address: "Plot No. 29, 1st Main Road, 3rd Cross Street, Sabari Nagar Extension, Mugalivakkam, Chennai – 600125",
      phone: "09444182838",
      email: "fasiichairman@gmail.com"
    }
  },
  {
    office: "Eastern Regional Office",
    region: "East",
    contact: {
      name: "Shri Chiranjib Ghosh",
      designation: "Regional Chairman – Eastern Region",
      affiliation: "North 24 Parganas Chamber of Commerce & Industry",
      address: "Bodai Panchayat Road, P.O. Jugberia, North 24 Parganas, Kolkata – 700110",
      phone: "9339200544",
      email: "chiranjib36@gmail.com"
    }
  },
  {
    office: "Western Regional Office",
    region: "West",
    contact: {
      name: "Shri Devendra Wasundeorao Sherekar",
      designation: "Regional Chairman – Western Region",
      affiliation: "M/s. Soni Information & Education Society",
      address: "G-102, Vimaco Enclave, Opp. Spl. I.G. Bungalow, Camp, Amravati – 444602",
      phone: "080559 67444",
      email: "devenwarud@rediffmail.com"
    }
  },
  {
    office: "Northern Regional Office",
    region: "North",
    contact: {
      name: "Shri Himanshu Tyagi",
      designation: "Regional Chairman – Northern Region",
      affiliation: "M/s. Organic Basket Enterprises",
      address: "R/7-B-16, Raj Nagar, Ghaziabad, Uttar Pradesh – 201002",
      phone: "7982147575",
      email: "Organicbasket09@gmail.com"
    }
  }
];

const services = [
  {
    title: "Membership Services",
    description: "Processing membership applications, maintaining member database, and coordinating with member associations"
  },
  {
    title: "Event Coordination",
    description: "Organizing vendor development programmes, exhibitions, conclaves, and awareness campaigns"
  },
  {
    title: "Government Liaison",
    description: "Coordinating with ministries, departments, and government institutions on policy matters"
  },
  {
    title: "Information Dissemination",
    description: "Sharing updates on schemes, policies, circulars, and opportunities relevant to small industries"
  },
  {
    title: "Documentation & Records",
    description: "Maintaining federation records, minutes, and official documentation"
  },
  {
    title: "Member Support",
    description: "Addressing member queries, facilitating networking, and providing assistance on industry matters"
  }
];

export default function Secretariat() {
  return (
    <main className="bg-white text-slate-900">
      <header className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <h1 className="text-3xl font-semibold sm:text-4xl">Secretariat</h1>
          <p className="mt-3 text-slate-600">
            <Link to="/about" className="hover:text-orange-700">About FASII</Link> / Secretariat
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="text-lg leading-7 text-slate-600">
            The FASII Secretariat coordinates federation activities, manages member services, and serves as the primary point of contact for member associations, government agencies, and stakeholders across India.
          </p>
        </div>

        {/* Secretariat Structure */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Secretariat Offices</h2>
          <div className="space-y-6">
            {secretariatOffices.map((office, index) => (
              <article key={index} className={`rounded-lg border-2 p-6 shadow-sm ${
                index === 0 ? 'border-orange-300 bg-orange-50' : 'border-slate-200 bg-white'
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                    index === 0 ? 'bg-orange-200 text-orange-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">{office.office}</h3>
                        <p className="mt-1 text-sm font-medium text-orange-600">{office.region}</p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-700">{office.contact.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{office.contact.designation}</p>
                      <p className="mt-1 text-xs text-slate-500">{office.contact.affiliation}</p>

                      <div className="mt-4 space-y-2 text-sm text-slate-700">
                        <p className="flex gap-2">
                          <MapPin size={16} className="mt-0.5 shrink-0 text-orange-600" />
                          {office.contact.address}
                        </p>
                        <a href={`tel:${office.contact.phone}`} className="flex items-center gap-2 hover:text-orange-700">
                          <Phone size={16} className="text-orange-600" />
                          {office.contact.phone}
                        </a>
                        <a href={`mailto:${office.contact.email}`} className="flex items-center gap-2 hover:text-orange-700 break-all">
                          <Mail size={16} className="text-orange-600" />
                          {office.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Services Provided */}
        <div className="mb-10">
          <h2 className="mb-6 text-2xl font-semibold text-slate-900">Secretariat Functions</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-lg bg-slate-50 p-8">
          <h3 className="text-xl font-semibold text-slate-900">Get in Touch</h3>
          <p className="mt-3 text-slate-700">
            For general inquiries, membership information, or assistance with FASII programmes, please contact the National Secretariat or your respective regional office.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/about/office-bearers" className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700">
              <Mail size={18} />
              View All Contact Details
            </Link>
            <Link to="/services/grievances" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
              Submit Query
            </Link>
          </div>
        </div>

        {/* Working Hours */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            <strong>Working Hours:</strong> Monday to Friday, 10:00 AM to 5:30 PM (IST)<br />
            Closed on public holidays and second Saturdays
          </p>
        </div>
      </section>
    </main>
  );
}