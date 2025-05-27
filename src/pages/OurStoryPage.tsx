
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Lightbulb, Users, Target, Globe } from "lucide-react";

const OurStoryPage = () => {
  const milestones = [
    {
      icon: Lightbulb,
      title: "The Idea",
      description: "Recognizing the need for affordable vision care in Ghana, our team identified an opportunity to make a real difference."
    },
    {
      icon: Users,
      title: "Team Formation",
      description: "Six passionate students from Enactus Lüneburg came together with a shared vision of social impact."
    },
    {
      icon: Target,
      title: "Project Development",
      description: "We developed the Reframe concept, focusing on sustainable and affordable reading glasses distribution."
    },
    {
      icon: Globe,
      title: "Impact Planning",
      description: "Currently planning our implementation strategy to bring vision care to communities in Ghana."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="py-20 px-4">
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
              <div key={index} className="flex items-start space-x-6 bg-white rounded-xl p-8 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-slate-200 rounded-xl flex items-center justify-center">
                    <milestone.icon className="h-8 w-8 text-gray-600" />
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
          
          <div className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
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
