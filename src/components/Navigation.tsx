import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
      <nav
          className={`sticky top-0 z-50 transition-transform duration-300 ${
              showNavbar ? 'translate-y-0' : '-translate-y-full'
          } bg-reframe-background border-y-1 border-black shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-start h-16 gap-8 px-2">
            <Link to="/" className="flex items-center">
              <img
                  src="/logos/Reframe_Logo-klein.svg"
                  alt="Reframe Logo"
                  className="h-12 object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/our-story" className="text-reframe-primary underline-animation">
                Our Story
              </Link>
              <Link to="/team" className="text-reframe-primary underline-animation">
                About Us
              </Link>
              <Link to="/about-enactus" className="text-reframe-primary underline-animation">
                About Enactus Lüneburg
              </Link>
              <Link to="/contact" className="text-reframe-primary underline-animation">
                Contact
              </Link>
              <Link to="/apply" className="text-reframe-primary underline-animation">
                Apply for Glasses
              </Link>
              <Link to="/contribute" className="text-reframe-primary underline-animation">
                Contribute
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
