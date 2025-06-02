

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "reframe@enactus-lueneburg.de",
      link: "mailto:reframe@enactus-lueneburg.de"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+49 (0) 4131 677-0",
      link: "tel:+4941316770"
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Leuphana University Lüneburg\nUniversitätsallee 1\n21335 Lüneburg, Germany",
      link: null
    },
    {
      icon: Globe,
      title: "Enactus Lüneburg",
      info: "www.enactus-lueneburg.de",
      link: "https://www.enactus-lueneburg.de"
    },
    {
      icon: Instagram,
      title: "Instagram",
      info: "@reframelg",
      link: "https://www.instagram.com/reframelg?igsh=MThmbmwwOHl0aXJndg=="
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get in touch with our team. We'd love to hear from you and answer any questions about the Reframe project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white border border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-teal-200 rounded-lg flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-green-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-gray-600 hover:text-green-700 transition-colors whitespace-pre-line"
                        target={contact.title === "Instagram" ? "_blank" : undefined}
                        rel={contact.title === "Instagram" ? "noopener noreferrer" : undefined}
                      >
                        {contact.info}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {contact.info}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-amber-100 leading-relaxed">
              Whether you're interested in our work, want to collaborate, or have questions about vision care in Ghana, 
              we're here to help and would love to connect with you.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

