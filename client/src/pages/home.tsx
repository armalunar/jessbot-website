import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <i className="star fas fa-star text-xl top-20 left-10 animate-float" style={{ color: 'var(--kawaii-yellow)' }}></i>
        <i className="star fas fa-heart text-lg top-40 right-20 animate-bounce-slow" style={{ color: 'var(--kawaii-pink)' }}></i>
        <i className="star fas fa-star text-sm top-60 left-1/4 animate-pulse-soft" style={{ color: 'var(--kawaii-yellow)' }}></i>
        <i className="star fas fa-sparkles text-lg top-32 right-1/3 animate-float" style={{ color: 'var(--kawaii-blue)' }}></i>
        <i className="star fas fa-heart text-sm top-80 right-10 animate-pulse-soft" style={{ color: 'var(--kawaii-purple)' }}></i>
        <div className="cloud w-16 h-8 top-24 right-1/4 animate-float"></div>
        <div className="cloud w-12 h-6 top-52 left-1/3 animate-bounce-slow"></div>
      </div>

      <Header />
      <HeroSection />
      <FeaturesSection />
      <LegalSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
