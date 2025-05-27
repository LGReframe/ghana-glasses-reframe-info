
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" 
              alt="Reframe Logo" 
              className="h-8 object-contain rounded-md"
            />
            <span className="text-xl font-bold text-gray-800">Reframe</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/our-story" className="text-gray-600 hover:text-gray-800 transition-colors">
              Our Story
            </Link>
            <Link to="/team" className="text-gray-600 hover:text-gray-800 transition-colors">
              About Us
            </Link>
            <Link to="/about-enactus" className="text-gray-600 hover:text-gray-800 transition-colors">
              About Enactus Lüneburg
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
              Contact
            </Link>
            <Link to="/apply" className="text-gray-600 hover:text-gray-800 transition-colors">
              Apply for Glasses
            </Link>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <Link 
                to="/our-story" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Our Story
              </Link>
              <Link 
                to="/team" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link 
                to="/about-enactus" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                About Enactus Lüneburg
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link 
                to="/apply" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Apply for Glasses
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
