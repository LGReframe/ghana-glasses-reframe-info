
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      {/* Traditional Ghanaian pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <Navigation />
      
      <section className="py-20 px-4 relative">
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
              <div key={index} className="flex items-start space-x-6 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-orange-100">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center border-2 border-orange-200">
                    <milestone.icon className="h-8 w-8 text-orange-700" />
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
          
          <div className="mt-16 bg-gradient-to-br from-orange-800 via-red-800 to-amber-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            {/* Traditional pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
              <p className="text-xl text-orange-100 leading-relaxed">
                We're actively working on implementing our vision and are excited to share 
                our progress as we move forward with bringing affordable vision care to Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default OurStoryPage;
