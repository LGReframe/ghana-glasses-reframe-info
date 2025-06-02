

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Target, Globe } from "lucide-react";

const OurStoryPage = () => {
  const milestones = [
    {
      icon: Lightbulb,
      title: "2021 - The Beginning",
      description: "Reframe got started with the vision of making vision care accessible and affordable in Ghana."
    },
    {
      icon: Users,
      title: "2023 - National Recognition",
      description: "We competed in the National Cup from Enactus Germany, showcasing our commitment to social entrepreneurship."
    },
    {
      icon: Target,
      title: "2024 - New Leadership",
      description: "Max took the Project Lead and the project began making strong progress with renewed focus and direction."
    },
    {
      icon: Globe,
      title: "Current Phase - Local Testing",
      description: "At the moment we're trying to start in a local area to test, gather data and expand our network."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The journey of how Reframe came to life through the vision and dedication 
              of our Enactus Lüneburg team.
            </p>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white border border-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-amber-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-br from-green-700 to-teal-800 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
            <p className="text-xl text-green-100 leading-relaxed">
              We're actively working on implementing our vision and are excited to share 
              our progress as we move forward with bringing affordable vision care to Ghana.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurStoryPage;

