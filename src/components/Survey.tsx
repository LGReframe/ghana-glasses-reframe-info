import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const Survey = () => {
  const handleSurveyClick = () => {
    window.open("https://evasys.leuphana.de/evasys/public/online/index/index?online_php=&p=Survey1&ONLINEID=79733511747139648131331712312576848297271", '_blank');
  };

  return (
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <div className="mb-6">
            <div className="w-20 h-20 bg-emerald-800/50 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto shadow-lg backdrop-blur-sm transform rotate-3">
              <FileText className="h-10 w-10 text-emerald-200" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Help Us Improve <br/>
            <span className="text-emerald-300">Vision Care in Ghana</span>
          </h2>

          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Are you currently living in Ghana? Your local insights are invaluable.
            Please take this short survey to help us understand the real needs of your community.
          </p>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/10 shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
              We need your local expertise on:
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-emerald-50">
              {/* Box 1 */}
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <h4 className="font-bold text-emerald-300 mb-2 text-lg">Access</h4>
                <p className="text-sm opacity-80 leading-relaxed">How hard is it to find glasses in your region?</p>
              </div>

              {/* Box 2 */}
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <h4 className="font-bold text-emerald-300 mb-2 text-lg">Costs</h4>
                <p className="text-sm opacity-80 leading-relaxed">What is considered a fair price in Ghana?</p>
              </div>

              {/* Box 3 */}
              <div className="bg-black/20 border border-white/5 p-5 rounded-xl hover:bg-black/30 transition-colors">
                <h4 className="font-bold text-emerald-300 mb-2 text-lg">Needs</h4>
                <p className="text-sm opacity-80 leading-relaxed">Which visual impairments are most common?</p>
              </div>
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col items-center gap-4">
            <Button
                size="lg"
                className="bg-amber-500 text-gray-900 hover:bg-amber-400 px-10 py-6 rounded-xl text-lg font-bold transition-all duration-300 group shadow-lg shadow-amber-900/20 hover:scale-105 border border-amber-400/50"
                onClick={handleSurveyClick}
            >
              Take the Survey (Ghana Only)
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            {/* NEU: Hintergrund-Box (Badge) für die Zeitanzeige */}
            <div className="inline-block bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mt-2">
              <p className="text-emerald-100 text-sm font-medium">
                ⏱️ Takes only 3-5 minutes
              </p>
            </div>
          </div>

        </div>
      </section>
  );
};

export default Survey;