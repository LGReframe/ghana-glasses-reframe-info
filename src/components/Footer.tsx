
import { Mail, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-gray-300 relative overflow-hidden">
      {/* Traditional pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M25 25l12.5-12.5v25zm0 0l-12.5-12.5v25zm0 0l12.5 12.5H12.5zm0 0l-12.5 12.5H37.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-orange-300/30">
                <img 
                  src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" 
                  alt="Reframe Logo" 
                  className="h-8 object-contain rounded"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Reframe</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Making vision correction accessible and affordable for communities in Ghana 
              through sustainable entrepreneurial solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">About Enactus</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600/30 rounded-lg flex items-center justify-center">
                  <Globe className="h-4 w-4 text-orange-200" />
                </div>
                <span>Global student initiative</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600/30 rounded-lg flex items-center justify-center">
                  <Users className="h-4 w-4 text-orange-200" />
                </div>
                <span>Social entrepreneurship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-600/30 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-orange-200" />
                </div>
                <span>Sustainable impact</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get Involved</h4>
            <p className="text-gray-300 mb-4">
              Interested in our work or want to collaborate? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <button className="bg-orange-700/80 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 border border-orange-500/50 backdrop-blur-sm">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-orange-700/50 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Enactus Lüneburg • Reframe Project • 
            <span className="text-orange-200"> Making vision accessible for all</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
