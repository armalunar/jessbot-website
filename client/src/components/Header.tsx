import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import { playMeowSound } from "@/utils/sounds";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    playMeowSound();
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const handleThemeToggle = () => {
    playMeowSound();
    toggleTheme();
  };

  return (
    <nav className="relative z-10 bg-card/80 backdrop-blur-md border-b border-border/50 kawaii-shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-kawaii-pink to-kawaii-purple p-2 rounded-full kawaii-shadow">
              <img 
                src="/jessbot.png" 
                alt="Jess BOT Avatar" 
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="text-xl font-bold gradient-text">Jess BOT</div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 kawaii-shadow"
              data-testid="button-language-toggle"
            >
              <i className="fas fa-globe mr-2"></i>
              <span>{language.toUpperCase()}</span>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="bg-accent hover:bg-accent/80 text-accent-foreground p-3 rounded-full transition-all duration-300 hover:scale-105 kawaii-shadow"
              data-testid="button-theme-toggle"
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
