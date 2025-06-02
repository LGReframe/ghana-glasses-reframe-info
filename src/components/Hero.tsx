

import { Button } from "@/components/ui/button";
import { Glasses } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  surveyLink?: string;
}

const Hero = ({ surveyLink }: HeroProps) => {
  const handleSurveyClick = () => {
    if (surveyLink) {
      window.open(surveyLink, '_blank');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 px-4">
      {/* Background image with low transparency */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: 'url(/lovable-uploads/5dda9312-67ea-4bc0-8ea3-06b8483c2fe7.png)'
      }} />
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" alt="Reframe Logo" className="h-24 md:h-32 object-contain rounded-lg" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Clear Vision for
          <span className="block text-amber-700">Everyone</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Providing affordable reading glasses to communities in Ghana, 
          making vision correction accessible to those who need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/our-story">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
              Learn Our Story
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-amber-500 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg transition-all duration-300"
            onClick={handleSurveyClick}
            disabled={!surveyLink}
          >
            Take Our Survey
          </Button>
          <Link to="/apply">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
              Apply for Glasses
            </Button>
          </Link>
        </div>
        
        <div className="mt-16 flex justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

