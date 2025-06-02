
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Privacy Policy
            </h1>
          </div>
          
          <div className="bg-white border border-green-100 rounded-xl p-8 shadow-lg">
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Data Protection at a Glance</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">General Information</h3>
                  <p>The following gives a simple overview of what happens to your personal information when you visit our website. Personal information is any data with which you could be personally identified.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. General Information and Mandatory Information</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Data Protection</h3>
                  <p>The operators of this website take the protection of your personal data very seriously. We treat your personal data as confidential and in accordance with the statutory data protection regulations and this privacy policy.</p>
                  
                  <h3 className="font-medium text-gray-700">Information about the responsible party</h3>
                  <p>The party responsible for data processing on this website is:</p>
                  <p className="ml-4">
                    Enactus Lüneburg e.V.<br />
                    Universitätsallee 1<br />
                    21335 Lüneburg<br />
                    Germany<br />
                    <br />
                    Phone: +49 (0) 4131 677-0<br />
                    Email: reframe@enactus-lueneburg.de
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Data Collection on this Website</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Cookies</h3>
                  <p>This website does not use cookies for basic functionality. Should cookies be used in the future, you will be informed accordingly.</p>
                  
                  <h3 className="font-medium text-gray-700">Server Log Files</h3>
                  <p>The website provider automatically collects and stores information that your browser automatically transmits to us in "server log files". These are:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Browser type and browser version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL</li>
                    <li>Host name of the accessing computer</li>
                    <li>Time of the server request</li>
                    <li>IP address</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Contact Form</h2>
                <p>If you send us inquiries via the contact form, your details from the inquiry form including the contact details you provided there will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Your Rights</h2>
                <p>You have the right to receive information about the origin, recipient, and purpose of your stored personal data at any time without charge. You also have the right to request the correction, blocking, or deletion of this data.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. External Links</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Instagram</h3>
                  <p>This website contains links to Instagram. When you click on these links, you will be redirected to Instagram. We have no influence on the data processing by Instagram. Information about data protection at Instagram can be found in Instagram's privacy policy.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last updated: January 2025<br />
                  This privacy policy was created with a privacy policy generator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
