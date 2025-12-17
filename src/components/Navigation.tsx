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
      const threshold = 50;
      const scrollingUp = currentScrollY < lastScrollY;
      const nearTop = currentScrollY < threshold;
      setShowNavbar(scrollingUp || nearTop);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
      <nav
          className={`sticky top-0 z-50 transition-transform duration-300 ${
              showNavbar ? "translate-y-0" : "-translate-y-full"
          } bg-reframe-beigedark border-y-1 border-black shadow-md`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 px-2">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                    src="/logos/Reframe_Logo-klein.svg"
                    alt="Reframe Logo"
                    className="h-12 object-contain"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 font-inter font-medium text-reframe-darktext text-base">
                <Link
                    to="/our-mission"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  Our Mission
                </Link>
                <Link
                    to="/team"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  About Us
                </Link>
                <Link
                    to="/about-enactus"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  About Enactus Germany
                </Link>
                <Link
                    to="/contact"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  Contact
                </Link>
                <Link
                    to="/apply"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  Apply for Glasses
                </Link>
                <Link
                    to="/contribute"
                    className="underline-animation font-inter font-medium text-base text-reframe-terracotta"
                >
                  Contribute
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMobileMenu}
                  className="text-reframe-terracotta hover:bg-reframe-terracotta/10"
              >
                {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                  <Link
                      to="/our-story"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    Our Mission
                  </Link>
                  <Link
                      to="/team"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                  <Link
                      to="/about-enactus"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    About Enactus Lüneburg
                  </Link>
                  <Link
                      to="/contact"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                  <Link
                      to="/apply"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    Apply for Glasses
                  </Link>
                  <Link
                      to="/contribute"
                      className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                  >
                    Contribute
                  </Link>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;