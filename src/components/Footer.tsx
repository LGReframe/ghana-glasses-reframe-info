
import { Mail, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" 
                alt="Reframe Logo" 
                className="h-8 object-contain rounded"
              />
              <h3 className="text-xl font-bold text-white">Reframe</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Making vision correction accessible and affordable for communities in Ghana 
              through sustainable entrepreneurial solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About Enactus</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-400" />
                <span>Global student initiative</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-gray-400" />
                <span>Social entrepreneurship</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>Sustainable impact</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Involved</h4>
            <p className="text-gray-400 mb-4">
              Interested in our work or want to collaborate? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Enactus Lüneburg • Reframe Project • 
            <span className="text-gray-500"> Making vision accessible for all</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
