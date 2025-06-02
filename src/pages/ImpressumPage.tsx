
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Legal Notice
            </h1>
          </div>
          
          <div className="bg-white border border-green-100 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Information pursuant to § 5 TMG</h2>
                <p className="text-gray-600">
                  Enactus Lüneburg e.V.<br />
                  Universitätsallee 1<br />
                  21335 Lüneburg<br />
                  Germany
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Represented by</h2>
                <p className="text-gray-600">
                  [Board Chairman Name]<br />
                  [Additional Board Members]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact</h2>
                <p className="text-gray-600">
                  Phone: +49 (0) 4131 677-0<br />
                  Email: reframe@enactus-lueneburg.de
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Register Entry</h2>
                <p className="text-gray-600">
                  Entry in the Association Register.<br />
                  Register Court: [District Court]<br />
                  Registration Number: [VR-Number]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">VAT ID</h2>
                <p className="text-gray-600">
                  VAT identification number according to § 27 a Value Added Tax Act:<br />
                  [VAT-ID if applicable]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Responsible for content according to § 55 para. 2 RStV</h2>
                <p className="text-gray-600">
                  [Name of Responsible Person]<br />
                  Universitätsallee 1<br />
                  21335 Lüneburg
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-medium text-gray-700">Liability for Content</h3>
                    <p>As service providers, we are liable for own contents of these websites according to general laws. However, we are not under obligation to monitor external information provided or stored on our website. Once we have become aware of a specific infringement of law, we will immediately remove the content in question.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Liability for Links</h3>
                    <p>Our website contains links to external websites, over whose contents we have no control. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Copyright</h3>
                    <p>The contents and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ImpressumPage;
