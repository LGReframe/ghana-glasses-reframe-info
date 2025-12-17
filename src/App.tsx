
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TeamPage from "./pages/TeamPage";
import AboutEnactusPage from "./pages/AboutEnactusPage";
import OurMissionPage from "./pages/OurMissionPage.tsx";
import ContactPage from "./pages/ContactPage";
import ApplyPage from "./pages/ApplyPage";
import ImpressumPage from "./pages/ImpressumPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import ContributePage from "./pages/ContributePage";



import './styles/underline.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about-enactus" element={<AboutEnactusPage />} />
          <Route path="/our-mission" element={<OurMissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

