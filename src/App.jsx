import { Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header/Header.jsx";
import HeroSlider from "./components/Layout/Home/HeroSlider.jsx";
import QuickAccess from "./components/Layout/common/QuickAccess.jsx";
import PressRelease from "./components/Layout/Home/PressRelease.jsx";
import EventHighlights from "./components/Layout/Home/EventHighlights.jsx";
import Footer from "./components/Layout/Home/Footer.jsx";

import AboutOrganization from "./components/Layout/About_Pages/About_Orgniz.jsx";
import AboutBearer from "./components/Layout/About_Pages/About_Bearer.jsx";
import Executive_Commitee from "./components/Layout/About_Pages/Executive_Commitee.jsx";
import Past_Presidents from "./components/Layout/About_Pages/Past_Presidents.jsx";
import History from "./components/Layout/About_Pages/History.jsx";
import Committee from "./components/Layout/About_Pages/Committee.jsx";
import Secretariat from "./components/Layout/About_Pages/Secretariat.jsx";
import Allied_Organization from "./components/Layout/About_Pages/Allied_Organization.jsx";


import Publications from "./components/Knowledge_Hub_Pages/Publications.jsx";
import ResearchReports from "./components/Knowledge_Hub_Pages/Research_Reports.jsx";
import PolicyDocuments from "./components/Knowledge_Hub_Pages/Policy_Documents.jsx";
import Circulars from "./components/Knowledge_Hub_Pages/Circulars.jsx";
import AnnualReports from "./components/Knowledge_Hub_Pages/Annual_Reports.jsx";


import Agriculture from "./components/Sectors/Agriculture.jsx";
import Banking from "./components/Sectors/Banking.jsx";
import Education from "./components/Sectors/Education.jsx";
import Energy from "./components/Sectors/Energy.jsx";
import Healthcare from "./components/Sectors/Healthcare.jsx";
import Information_Technology from "./components/Sectors/Information_Technology.jsx";
import Infrastructure from "./components/Sectors/Infrastructure.jsx";
import Manufacturing from "./components/Sectors/Manufacturing.jsx";
import MSME from "./components/Sectors/MSME.jsx";
import Tourism from "./components/Sectors/Tourism.jsx";


import Citizen_Services from "./components/Services/Citizen_Services.jsx";
import Online_Applications from "./components/Services/Online_Applications.jsx";
import Public_Grievances from "./components/Services/Public_Grievances.jsx";
import Downloads from "./components/Services/Downloads.jsx";


import Photo from "./components/Media/Photo.jsx";
import Press from "./components/Media/Press.jsx";
import Video from "./components/Media/Video.jsx";
import Latest_News from "./components/Media/Latest_News.jsx";


import Zone1 from "./components/Zone/Zone1.jsx";
import Zone2 from "./components/Zone/Zone2.jsx";
import Zone3 from "./components/Zone/Zone3.jsx";

function App() {
  return (
    <>
      <Header />

                 <main id="main-content">
                     <Routes>
                   {/* Homepage */}
                   <Route
                                 path="/"
            element={
              <>
                <HeroSlider />
                <PressRelease />
                <EventHighlights />
              </>
                                            }
                                 />

          {/* About Pages */}
          <Route path="/about" element={<AboutOrganization />} />
          <Route path="/about/office-bearers" element={<AboutBearer />} />
          <Route path="/about/executive-committee" element={<Executive_Commitee />} />
          <Route path="/about/past-presidents" element={<Past_Presidents />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/steering-committee" element={<Committee />} />
          <Route path="/about/secretariat" element={<Secretariat />} />
          <Route path="/about/allied-organisations" element={<Allied_Organization />} />
          
          {/* Knowledge Hub Pages */}

          <Route path="/knowledge/publications" element={<Publications />} />
          <Route path="/knowledge/reports" element={<ResearchReports />} />
          <Route path="/knowledge/policies" element={<PolicyDocuments />} />
          <Route path="/knowledge/circulars" element={<Circulars />} />
          <Route path="/knowledge/annual-reports" element={<AnnualReports />} />

          {/* Sectors Pages */}
          <Route path="/sectors/agriculture" element={<Agriculture />} />
          <Route path="/sectors/finance" element={<Banking />} />
          <Route path="/sectors/education" element={<Education />} />
          <Route path="/sectors/energy" element={<Energy />} />
          <Route path="/sectors/healthcare" element={<Healthcare />} />
          <Route path="/sectors/technology" element={<Information_Technology />} />
          <Route path="/sectors/infrastructure" element={<Infrastructure />} />
          <Route path="/sectors/manufacturing" element={<Manufacturing />} />
          <Route path="/sectors/msme" element={<MSME />} />
          <Route path="/sectors/tourism" element={<Tourism />} />

            {/* Services Pages */}
          <Route path="/services/YojanaIntro" element={<Citizen_Services />} />
          <Route path="/services/applications" element={<Online_Applications />} />
          <Route path="/services/grievances" element={<Public_Grievances />} />
          <Route path="/services/downloads" element={<Downloads />} />

 {/* Media Pages */}
          <Route path="/media/photos" element={<Photo />} />
          <Route path="/media/press/releases" element={<Press />} />
          <Route path="/media/videos" element={<Video />} />
          <Route path="/media/news" element={<Latest_News />} />
          <Route path="/events" element={<Latest_News />} />

 {/* Zone Pages */}
          <Route path="/1/north" element={<Zone1 />} />
          <Route path="/2/south" element={<Zone2 />} />
          <Route path="/3/east" element={<Zone3 />} />

          {/* Unmatched pages */}
          <Route
            path="*"
            element={
              <section className="px-5 py-20 text-center">
                <h1 className="text-3xl font-semibold">
                  Page not found
                </h1>

                <p className="mt-3 text-slate-600">
                  This page does not exist or hasn’t been added yet.
                </p>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
      <QuickAccess />
    </>
  );
}

export default App;
