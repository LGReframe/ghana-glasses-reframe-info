import { Button } from "@/components/ui/button";
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
      // ÄNDERUNGEN HIER:
      // 1. min-h-screen: Macht die Sektion mindestens so hoch wie das Browserfenster
      // 2. flex & items-center: Zentriert den Inhalt vertikal in der großen Box
      // 3. w-full: Stellt sicher, dass die Breite 100% ist
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-4 overflow-hidden">

        {/* Das Hintergrundbild füllt nun den gesamten Bereich, weil der Eltern-Container größer ist */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
          backgroundImage: 'url(/lovable-uploads/5dda9312-67ea-4bc0-8ea3-06b8483c2fe7.png)'
        }} />

        {/* Content overlay */}
        <div className="relative z-10 max-w-6xl mx-auto text-center py-20">
          <div className="flex justify-center mb-8">
            <img src="/logos/Reframe_Logo-komplett.svg" alt="Reframe Logo" className="h-24 md:h-32 object-contain rounded-lg" />
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
            <Link to="/our-mission">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
               About =ur Mission
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
        </div>
      </section>
  );
};

export default Hero;