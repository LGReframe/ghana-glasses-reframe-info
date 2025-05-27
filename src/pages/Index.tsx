
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Survey from "@/components/Survey";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Mission />
      <Team />
      <Survey />
      <Footer />
    </div>
  );
};

export default Index;
