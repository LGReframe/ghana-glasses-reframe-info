
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const Survey = () => {
  const handleSurveyClick = () => {
    window.open("https://evasys.leuphana.de/evasys/public/online/index/index?online_php=&p=Survey1&ONLINEID=79733511747139648131331712312576848297271", '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-900 via-red-900 to-amber-900 relative overflow-hidden">
      {/* Traditional Kente-inspired pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20zm20 20h20v20H40V40zM0 20h20v20H0V20zm40-20h20v20H40V0zM20 40h20v20H20V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-full border border-orange-300/30">
            <FileText className="h-16 w-16 text-orange-200" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Help Us Improve
        </h2>
        
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your insights are invaluable to our mission. Take our survey to help us better 
          understand vision care needs and improve our Reframe project.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-orange-300/20">
          <h3 className="text-xl font-semibold text-white mb-4">
            What we'd love to know:
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-orange-100">
            <div className="p-4 bg-white/5 rounded-lg border border-orange-400/20">
              <h4 className="font-medium mb-2">Vision Care Access</h4>
              <p className="text-sm">Current challenges and barriers</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-orange-400/20">
              <h4 className="font-medium mb-2">Price Sensitivity</h4>
              <p className="text-sm">Affordable pricing expectations</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg border border-orange-400/20">
              <h4 className="font-medium mb-2">Community Needs</h4>
              <p className="text-sm">Local preferences and requirements</p>
            </div>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-orange-900 hover:bg-orange-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group border-2 border-orange-200"
          onClick={handleSurveyClick}
        >
          Take Our Survey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <p className="text-orange-200 mt-4 text-sm">
          Takes only 3-5 minutes • Your responses help shape our impact
        </p>
      </div>
    </section>
  );
};

export default Survey;
