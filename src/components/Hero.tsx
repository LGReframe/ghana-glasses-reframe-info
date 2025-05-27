
import { Button } from "@/components/ui/button";
import { Glasses } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-100 to-slate-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/126b97c5-b912-4bc5-bafc-fd4ac4508589.png" 
            alt="Reframe Logo" 
            className="h-24 md:h-32 object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
          Clear Vision for
          <span className="block text-gray-600">Everyone</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Providing affordable reading glasses to communities in Ghana, 
          making vision correction accessible to those who need it most.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300"
          >
            Learn Our Story
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-lg transition-all duration-300"
          >
            Take Our Survey
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <Glasses className="h-16 w-16 text-gray-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
