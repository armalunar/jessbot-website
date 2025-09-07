import { useLanguage } from "@/contexts/LanguageContext";
import { playMeowSound } from "@/utils/sounds";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-card border-t border-border/50" data-testid="footer">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-gradient-to-r from-kawaii-pink to-kawaii-purple p-1 rounded-full">
            <img 
              src="/jessbot.png" 
              alt="Jess BOT Avatar" 
              className="w-6 h-6 rounded-full"
            />
          </div>
          <span className="text-lg font-bold gradient-text">Jess BOT</span>
        </div>
        
        <p className="text-muted-foreground mb-4">
          {t("footer.description")}
        </p>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); playMeowSound(); }}
            className="text-muted-foreground hover:text-kawaii-pink transition-colors"
            data-testid="link-discord"
            style={{ '--hover-color': 'var(--kawaii-pink)' } as React.CSSProperties}
          >
            <i className="fab fa-discord text-xl"></i>
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); playMeowSound(); }}
            className="text-muted-foreground hover:text-kawaii-blue transition-colors"
            data-testid="link-github"
            style={{ '--hover-color': 'var(--kawaii-blue)' } as React.CSSProperties}
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); playMeowSound(); }}
            className="text-muted-foreground hover:text-kawaii-purple transition-colors"
            data-testid="link-email"
            style={{ '--hover-color': 'var(--kawaii-purple)' } as React.CSSProperties}
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
