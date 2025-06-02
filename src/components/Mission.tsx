

import { Target, Heart, TrendingUp } from "lucide-react";

const Mission = () => {
  const principles = [
    {
      icon: Target,
      title: "Clear Vision",
      description: "Making vision correction accessible and affordable for everyone in need."
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Creating meaningful change in communities by addressing real healthcare needs."
    },
    {
      icon: TrendingUp,
      title: "Economic Sustainability",
      description: "Building profitable business models that ensure long-term project viability."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Reframe Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're reframing how people access vision care by creating sustainable, 
            affordable solutions that improve lives and strengthen communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-white border border-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-green-50"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <principle.icon className="h-8 w-8 text-green-700 group-hover:text-green-800 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;

