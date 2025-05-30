
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Team from "@/components/Team";
import Survey from "@/components/Survey";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  // You can change this URL to your actual survey link
  const surveyUrl = "https://forms.google.com/your-survey-link";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero surveyLink={surveyUrl} />
      <Mission />
      <Team />
      <About />
      <Survey />
      <Footer />
    </div>
  );
};

export default Index;
