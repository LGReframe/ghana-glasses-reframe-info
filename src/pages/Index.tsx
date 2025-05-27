
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Impact from "@/components/Impact";
import Survey from "@/components/Survey";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Mission />
      <Impact />
      <Survey />
      <Footer />
    </div>
  );
};

export default Index;
