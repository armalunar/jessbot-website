import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoSection from "@/components/DemoSection";
import { playMeowSound } from "@/utils/sounds";

export default function HeroSection() {
  const { t } = useLanguage();
  const [showDemo, setShowDemo] = useState(false);
  
  const handleDemoClick = () => {
    playMeowSound();
    setShowDemo(!showDemo);
  };

  return (
    <section className="relative py-20 lg:py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="cloud w-32 h-16 top-10 left-10 animate-float"></div>
        <div className="cloud w-24 h-12 top-20 right-16 animate-bounce-slow"></div>
        <div className="cloud w-20 h-10 bottom-20 left-1/4 animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-white rounded-full p-2 kawaii-shadow animate-float">
              <img 
                src="/jessbot.png" 
                alt="Jess BOT Avatar" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Hero Text */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white dark:text-white mb-6 animate-fade-in drop-shadow-lg">
            {t("hero.title")}
          </h1>
          
          <p className="text-xl lg:text-2xl text-white dark:text-gray-100 mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://discord.com/oauth2/authorize?client_id=1414041497233395772&permissions=8&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playMeowSound}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 kawaii-shadow group"
              data-testid="button-add-discord"
            >
              <i className="fab fa-discord mr-3 text-xl group-hover:animate-bounce"></i>
              {t("hero.discord")}
            </a>
            
            <button
              onClick={handleDemoClick}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              data-testid="button-view-demo"
            >
              <i className="fas fa-play mr-3"></i>
              {t("hero.demo")}
            </button>
          </div>
        </div>
        
        {/* Demo Section */}
        {showDemo && (
          <div className="mt-16 animate-fade-in">
            <DemoSection />
          </div>
        )}
      </div>
    </section>
  );
}
