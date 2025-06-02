

import { Users, MapPin, DollarSign, Eye } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "1,000+",
      label: "People Reached",
      description: "Individuals who will benefit from affordable vision care"
    },
    {
      icon: MapPin,
      number: "5+",
      label: "Communities",
      description: "Rural and urban areas in Ghana where we operate"
    },
    {
      icon: DollarSign,
      number: "50%",
      label: "Cost Reduction",
      description: "Compared to traditional reading glasses prices"
    },
    {
      icon: Eye,
      number: "95%",
      label: "Success Rate",
      description: "Customer satisfaction with our vision solutions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through Reframe, we're making a measurable difference in Ghana's vision health landscape, 
            one pair of glasses at a time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white border border-teal-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-teal-50"
            >
              <div className="mb-4 flex justify-center">
                <div className="bg-gradient-to-br from-teal-600 to-green-700 rounded-full p-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-teal-700 mb-2">
                {stat.number}
              </h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {stat.label}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;

