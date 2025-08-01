
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const Survey = () => {
  const handleSurveyClick = () => {
    window.open("https://evasys.leuphana.de/evasys/public/online/index/index?online_php=&p=Survey1&ONLINEID=79733511747139648131331712312576848297271", '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-800 via-emerald-800 to-teal-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-green-700" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Help Us Improve
        </h2>
        
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your insights are invaluable to our mission. Take our survey to help us better 
          understand vision care needs and improve our Reframe project.
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-green-400/30">
          <h3 className="text-xl font-semibold text-white mb-4">
            What we'd love to know:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-green-100">
            <div>
              <h4 className="font-medium mb-2">Vision Care Access</h4>
              <p className="text-sm">Current challenges and barriers</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Price Sensitivity</h4>
              <p className="text-sm">Affordable pricing expectations</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Community Needs</h4>
              <p className="text-sm">Local preferences and requirements</p>
            </div>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-amber-500 text-gray-900 hover:bg-amber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group"
          onClick={handleSurveyClick}
        >
          Take Our Survey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <p className="text-green-200 mt-4 text-sm">
          Takes only 3-5 minutes • Your responses help shape our impact
        </p>
      </div>
    </section>
  );
};

export default Survey;

