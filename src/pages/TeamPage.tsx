import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Team from "@/components/Team"; // Importiert die Team-Komponente
import { Lightbulb, Users, Target, Globe } from "lucide-react";

const AboutUsPage = () => {
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
        <div className="min-h-screen bg-reframe-beige font-inter">
            <Navigation />

            {/* 1. Sektion: Team (Importiert) */}
            <Team />

            {/* 2. Sektion: Our Story */}
            {/* Hintergrund etwas dunkler (beigedark), um es vom Team abzuheben */}
            <section className="py-24 px-4 bg-reframe-beigedark border-t border-reframe-whiteice">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-reframe-terracotta mb-6 font-nunito">
                            Our Story
                        </h2>
                        <p className="text-xl text-reframe-darktext leading-relaxed">
                            The journey of how Reframe came to life through the vision and dedication
                            of our Enactus Lüneburg team.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start space-x-6 bg-white border border-reframe-whiteice rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-reframe-whiteice rounded-xl flex items-center justify-center">
                                        <milestone.icon className="h-8 w-8 text-reframe-turquoise" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-reframe-darktext mb-3 font-nunito">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-reframe-darktext/80 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Outlook Box */}
                    <div className="mt-16 bg-gradient-to-br from-reframe-green to-[#1e4635] rounded-2xl p-8 text-center text-white shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 font-nunito">What's Next?</h2>
                        <p className="text-xl text-reframe-highlight leading-relaxed">
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

export default AboutUsPage;