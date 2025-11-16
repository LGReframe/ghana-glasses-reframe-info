import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ImpressumPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // Trigger bei Routenwechsel

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
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Information pursuant to § 5 TMG
                  </h2>
                  <p className="text-gray-600">
                    Enactus Lüneburg e. V.<br />
                    Universitätsallee 1<br />
                    21335 Lüneburg<br />
                    Germany
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Contact
                  </h2>
                  <p className="text-gray-600">
                    Email: reframe@lueneburg.enactus.team <br/>
                    Phone: +49 162 5785744
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Authorized Representatives
                  </h2>
                  <p className="text-gray-600">
                    Jakob Henri Haas, Team Lead Enactus Lüneburg e. V.<br />
                    Sarah Sophie Werner, Team Lead Enactus Lüneburg e. V.<br />
                    Nadine Haase, Team Lead Enactus Lüneburg e. V.<br />
                    Hannah Marieke Keller, Financial Officer Enactus Lüneburg e. V.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Register Entry
                  </h2>
                  <p className="text-gray-600">
                    Registered in the Association Register.<br />
                    Register Court: Amtsgericht Lüneburg<br />
                    Registration Number: VR 201347
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Online Dispute Resolution
                  </h2>
                  <p className="text-gray-600">
                    The European Commission provides a platform for online dispute resolution (ODR):<br />
                    <a
                        href="https://ec.europa.eu/consumers/odr/"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    <br />
                    We are neither willing nor obligated to participate in dispute resolution proceedings before a consumer arbitration board.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Liability and Copyright
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <h3 className="font-medium text-gray-700">Links to Third-Party Sites</h3>
                      <p>
                        We are not responsible for the content of external websites linked on our site. The responsibility lies solely with the respective provider. We do not adopt these contents as our own.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-700">Copyrights and Trademarks</h3>
                      <p>
                        All content on this website, including text, images, graphics, trademarks, and logos, is protected by copyright and trademark law. Any use beyond what is legally permitted requires prior written consent from the rights holders.
                      </p>
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
