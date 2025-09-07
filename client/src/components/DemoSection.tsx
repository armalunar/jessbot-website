import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { playMeowSound } from "@/utils/sounds";

export default function DemoSection() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoSteps = [
    {
      titleKey: "demo.step1.title",
      descKey: "demo.step1.desc",
      icon: "fas fa-upload",
      color: "kawaii-pink"
    },
    {
      titleKey: "demo.step2.title", 
      descKey: "demo.step2.desc",
      icon: "fas fa-magic",
      color: "kawaii-blue"
    },
    {
      titleKey: "demo.step3.title",
      descKey: "demo.step3.desc",
      icon: "fas fa-download",
      color: "kawaii-purple"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % demoSteps.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demoSteps.length]);

  const startDemo = () => {
    playMeowSound();
    setIsPlaying(true);
    setCurrentStep(0);
  };

  const stopDemo = () => {
    playMeowSound();
    setIsPlaying(false);
  };

  return (
    <div className="bg-card rounded-3xl p-8 kawaii-shadow max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold gradient-text mb-2">
          <i className="fas fa-play-circle mr-2"></i>
          {t("demo.title")}
        </h3>
        <p className="text-muted-foreground">
          {t("demo.subtitle")}
        </p>
      </div>

      {/* Demo Animation */}
      <div className="bg-gradient-to-br from-kawaii-pink/10 to-kawaii-purple/10 rounded-2xl p-6 mb-6">
        <div className="flex justify-center items-center space-x-4 sm:space-x-8 min-h-[120px]">
          {demoSteps.map((step, index) => (
            <div key={index} className="text-center flex-1 max-w-[120px]">
              <div 
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 mx-auto transition-all duration-500 ${
                  currentStep === index 
                    ? `scale-110 animate-pulse` 
                    : 'bg-muted/50'
                }`}
                style={{
                  backgroundColor: currentStep === index ? `var(--${step.color})` : undefined,
                  opacity: currentStep === index ? 1 : 0.5
                }}
              >
                <i 
                  className={`${step.icon} text-lg sm:text-xl ${
                    currentStep === index ? 'text-white' : 'text-muted-foreground'
                  }`}
                />
              </div>
              <h4 className={`font-semibold text-xs sm:text-sm ${
                currentStep === index ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {t(step.titleKey)}
              </h4>
              <p className={`text-xs mt-1 ${
                currentStep === index ? 'text-muted-foreground' : 'text-muted-foreground/50'
              }`}>
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted/30 rounded-full h-2 mt-6">
          <div 
            className="bg-gradient-to-r from-kawaii-pink to-kawaii-purple h-2 rounded-full transition-all duration-500"
            style={{ 
              width: isPlaying ? `${((currentStep + 1) / demoSteps.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      {/* Demo Controls */}
      <div className="text-center">
        <button
          onClick={isPlaying ? stopDemo : startDemo}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 kawaii-shadow ${
            isPlaying 
              ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
          data-testid="button-demo-toggle"
        >
          <i className={`fas ${isPlaying ? 'fa-stop' : 'fa-play'} mr-2`}></i>
          {isPlaying ? t("demo.stop") : t("demo.start")}
        </button>
      </div>
    </div>
  );
}