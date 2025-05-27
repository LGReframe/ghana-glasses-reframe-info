
import { Target, Heart, Globe, TrendingUp } from "lucide-react";

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
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Starting local in Ghana with the vision to expand globally."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <principle.icon className="h-12 w-12 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
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
