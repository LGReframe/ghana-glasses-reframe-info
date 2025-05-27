
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" 
              alt="Reframe Logo" 
              className="h-8 object-contain rounded"
            />
            <span className="text-xl font-bold text-gray-800">Reframe</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/team" className="text-gray-600 hover:text-gray-800 transition-colors">
              About Us
            </Link>
            <Link to="/about-enactus" className="text-gray-600 hover:text-gray-800 transition-colors">
              About Enactus Lüneburg
            </Link>
            <Link to="/our-story" className="text-gray-600 hover:text-gray-800 transition-colors">
              Our Story
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
              Contact
            </Link>
            <Link to="/apply" className="text-gray-600 hover:text-gray-800 transition-colors">
              Apply for Glasses
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
