import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Recycle, ShieldCheck, BookOpen, MapPin, Glasses, HandHeart, ArrowRight, Heart } from "lucide-react";

const MissionPage = () => {

  // --- Data based on your website & Concept Paper ---

  // 1. Core Values (from Website)
  const coreValues = [
    {
      icon: Recycle,
      title: "Circular Responsibility",
      text: "We reduce waste in Germany by collecting unused reading glasses and giving them a second purpose."
    },
    {
      icon: ShieldCheck,
      title: "Professional Standards",
      text: "Every pair is professionally cleaned, repaired, and measured to ensure high quality."
    },
    {
      icon: BookOpen,
      title: "Access to Opportunity",
      text: "Good vision is the foundation for education and independence. We make it accessible."
    }
  ];

  // 2. Statistics (from Concept Paper)
  const statistics = [
    {
      value: "95%",
      label: "of people in Ghana needing vision correction lack access to glasses.",
      source: "Vision Action Study, 2023"
    },
    {
      value: "43%",
      label: "of the population live in rural areas with limited healthcare access.",
      source: "Ghana Statistical Service, 2021"
    },
    {
      value: "44%",
      label: "of severe visual impairments are caused by uncorrected errors.",
      source: "IAPB Study, 2015"
    }
  ];

  return (
      <div className="min-h-screen bg-reframe-beige font-inter selection:bg-reframe-terracotta selection:text-white">
        <Navigation />

        {/* --- HERO SECTION --- */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-reframe-green/5 pattern-grid-lg opacity-20" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-reframe-terracotta/10 text-reframe-terracotta font-bold text-sm mb-6 tracking-wide">
            OUR MISSION
          </span>
            <h1 className="text-4xl md:text-6xl font-bold text-reframe-darktext mb-6 font-nunito leading-tight">
              We are reframing the <br/>
              <span className="text-reframe-terracotta">eyewear lifecycle.</span>
            </h1>
            <p className="text-xl md:text-2xl text-reframe-darktext/70 max-w-3xl mx-auto leading-relaxed">
              From Lüneburg to Ghana: Giving old glasses a new purpose.
            </p>
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
                <div key={index} className="p-8 rounded-2xl bg-reframe-beige border border-reframe-beigedark hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 text-reframe-green group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-reframe-darktext mb-4 font-nunito">{value.title}</h3>
                  <p className="text-reframe-darktext/80 leading-relaxed">
                    {value.text}
                  </p>
                </div>
            ))}
          </div>
        </section>

        {/* --- THE PROBLEM --- */}
        <section className="py-24 px-4 bg-reframe-green text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-nunito">
                  Why Vision Matters
                </h2>
                <p className="text-reframe-highlight text-lg mb-6 leading-relaxed">
                  Reading is crucial for daily life and educational success.
                  Despite a high literacy rate in Ghana, the lack of accessible reading glasses remains a major barrier.
                </p>
                <div className="flex items-center gap-4 text-reframe-highlight font-medium">
                  <MapPin className="w-6 h-6" />
                  <span>Focus Area: Rural Ghana</span>
                </div>
              </div>

              <div className="grid gap-6">
                {statistics.map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <div className="text-4xl font-bold text-reframe-highlight mb-2 font-nunito">{stat.value}</div>
                      <div className="text-white font-medium mb-1">{stat.label}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">{stat.source}</div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- OUR NEW APPROACH (Process Flow) --- */}
        <section className="py-24 px-4 bg-reframe-beigedark">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-reframe-terracotta mb-6 font-nunito">
              How We Work
            </h2>
            <p className="text-xl text-reframe-darktext">
              Simple, transparent, and effective. Here is the journey of a Reframe pair of glasses.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">

            {/* Step 1: Collection */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-reframe-whiteice flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-reframe-beige rounded-full flex items-center justify-center text-reframe-terracotta font-bold text-2xl font-nunito">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-reframe-darktext mb-3 font-nunito flex items-center gap-3">
                  Collection in Germany
                </h3>
                <p className="text-reframe-darktext/80 leading-relaxed text-lg">
                  We collect used reading glasses in Lüneburg and the surrounding areas.
                  Instead of gathering dust in drawers, these resources become valuable tools for others.
                </p>
              </div>
            </div>

            {/* Step 2: Refinement */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-reframe-whiteice flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-reframe-beige rounded-full flex items-center justify-center text-reframe-terracotta font-bold text-2xl font-nunito">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-reframe-darktext mb-3 font-nunito flex items-center gap-3">
                  Professional Refinement
                </h3>
                <p className="text-reframe-darktext/80 leading-relaxed text-lg mb-4">
                  We don't just ship anything. We partner with <span className="font-semibold">BrillenWeltWeit</span>.
                  They professionally clean, repair, and measure every single pair, making them look and feel like new.
                </p>
                <a
                    href="https://brillenweltweit.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-reframe-terracotta hover:text-reframe-green font-medium transition-colors"
                >
                  Visit our Partner BrillenWeltWeit <ArrowRight className="ml-2 w-4 h-4"/>
                </a>
              </div>
            </div>

            {/* Step 3: The Simplicity Strategy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-reframe-whiteice flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-reframe-beige rounded-full flex items-center justify-center text-reframe-terracotta font-bold text-2xl font-nunito">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-reframe-darktext mb-3 font-nunito flex items-center gap-3">
                  Why Reading Glasses?
                </h3>
                <p className="text-reframe-darktext/80 leading-relaxed text-lg">
                  We currently focus <strong>exclusively on reading glasses</strong>.
                  The advantage? You don't need a complex medical prescription.
                  A simple reading test is enough to find the right strength.
                  This allows us to help people quickly and effectively without needing a full clinic setup yet.
                </p>
                <p className="text-sm text-reframe-darktext/60 mt-2 italic">
                  *Future Goal: We plan to organize mobile eye clinics for comprehensive care later.
                </p>
              </div>
            </div>

            {/* Step 4: Distribution */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-reframe-whiteice flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-reframe-beige rounded-full flex items-center justify-center text-reframe-terracotta font-bold text-2xl font-nunito">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-reframe-darktext mb-3 font-nunito flex items-center gap-3">
                  Local Partnerships
                </h3>
                <p className="text-reframe-darktext/80 leading-relaxed text-lg mb-4">
                  We send the glasses to Ghana, where they are distributed to those who need them most.
                  To reach the right people, we are actively searching for local partners—churches, community hubs, or NGOs.
                </p>
                <div className="inline-block bg-reframe-green/10 text-reframe-green px-4 py-2 rounded-lg font-medium">
                  Are you a potential partner in Ghana? Contact us!
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- NON-PROFIT & CTA SECTION --- */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto bg-reframe-terracotta rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 pattern-grid-lg opacity-20 pointer-events-none" />

            <Heart className="w-16 h-16 mx-auto mb-6 text-reframe-beigedark animate-pulse" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-nunito relative z-10">
              Zero Profit. 100% Impact.
            </h2>
            <p className="text-xl text-reframe-beigedark/90 mb-8 leading-relaxed max-w-2xl mx-auto relative z-10">
              We are a non-profit initiative. We don't make money; we only cover our logistics and shipping costs.
              Your contribution directly helps us ship more glasses to Ghana.
            </p>

            <a
                href="https://www.enactus-reframe.org/contribute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-reframe-terracotta font-bold text-lg px-8 py-4 rounded-full hover:bg-reframe-beigedark transition-colors shadow-lg relative z-10"
            >
              Support Our Mission
            </a>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default MissionPage;