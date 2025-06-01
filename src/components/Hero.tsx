
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
    <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 px-4 overflow-hidden">
      {/* Traditional Ghanaian-inspired geometric pattern */}
      <div className="absolute inset-0 opacity-8" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.15'%3E%3Cpath d='M40 40l20-20v40zm0 0l-20-20v40zm0 0l20 20H20zm0 0l-20 20H60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Background image with low transparency */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{
        backgroundImage: 'url(/lovable-uploads/5dda9312-67ea-4bc0-8ea3-06b8483c2fe7.png)'
      }} />
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-orange-200 shadow-lg">
            <img src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" alt="Reframe Logo" className="h-20 md:h-28 object-contain rounded-lg" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Clear Vision for
          <span className="block text-orange-700">Everyone</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Providing affordable reading glasses to communities in Ghana, 
          making vision correction accessible to those who need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/our-story">
            <Button size="lg" className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-lg transition-all duration-300">
              Learn Our Story
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-orange-400 text-orange-700 hover:bg-orange-100 px-8 py-3 rounded-lg transition-all duration-300"
            onClick={handleSurveyClick}
            disabled={!surveyLink}
          >
            Take Our Survey
          </Button>
          <Link to="/apply">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
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
