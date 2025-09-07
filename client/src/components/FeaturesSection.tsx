import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

function FeatureCard({ 
  icon, 
  iconColor, 
  title, 
  description 
}: { 
  icon: string; 
  iconColor: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="bg-card p-6 rounded-2xl kawaii-shadow hover:scale-105 transition-all duration-300 border-0">
      <div className={`bg-${iconColor}/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
        <i className={`${icon} text-${iconColor} text-2xl`} style={{ color: `var(--kawaii-${iconColor})` }}></i>
      </div>
      <h4 className="font-bold text-lg mb-2 text-center">{title}</h4>
      <p className="text-muted-foreground text-center text-sm">{description}</p>
    </div>
  );
}

function ConversionsSection() {
  const { t } = useLanguage();
  const { ref, hasBeenVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`mb-16 transition-all duration-800 ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
        <i className="fas fa-exchange-alt mr-3"></i>
        {t("features.conversions")}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon="fas fa-film"
          iconColor="pink"
          title={t("features.video_gif")}
          description={t("features.video_gif_desc")}
        />
        
        <FeatureCard
          icon="fas fa-image"
          iconColor="blue"
          title={t("features.format_conversion")}
          description={t("features.format_conversion_desc")}
        />
        
        <FeatureCard
          icon="fas fa-magic"
          iconColor="purple"
          title={t("features.banner_creation")}
          description={t("features.banner_creation_desc")}
        />
      </div>
    </div>
  );
}

function AdvancedSection() {
  const { t } = useLanguage();
  const { ref, hasBeenVisible } = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`mb-16 transition-all duration-800 ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
        <i className="fas fa-cogs mr-3"></i>
        {t("features.advanced")}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon="fas fa-compress"
          iconColor="yellow"
          title={t("features.optimization")}
          description={t("features.optimization_desc")}
        />
        
        <FeatureCard
          icon="fas fa-sliders-h"
          iconColor="pink"
          title={t("features.quality")}
          description={t("features.quality_desc")}
        />
        
        <FeatureCard
          icon="fas fa-cut"
          iconColor="blue"
          title={t("features.effects")}
          description={t("features.effects_desc")}
        />
        
        <FeatureCard
          icon="fas fa-clock"
          iconColor="purple"
          title={t("features.fps")}
          description={t("features.fps_desc")}
        />
      </div>
    </div>
  );
}

function FormatsSection() {
  const { t } = useLanguage();
  const { ref, hasBeenVisible } = useIntersectionObserver();

  const inputFormats = ["MP4", "AVI", "MOV", "WMV", "MKV", "GIF", "PNG", "JPG", "JPEG", "WEBP"];
  const outputFormats = ["GIF", "PNG", "JPG", "MP4", "WEBP"];

  return (
    <div 
      ref={ref}
      className={`transition-all duration-800 ${
        hasBeenVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
        <i className="fas fa-file-alt mr-3"></i>
        {t("features.formats")}
      </h3>
      
      <div className="bg-gradient-to-br from-kawaii-pink/5 via-kawaii-blue/5 to-kawaii-purple/5 p-8 rounded-3xl kawaii-shadow border-0 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-kawaii-pink/20 p-2 rounded-full mr-3">
                <i className="fas fa-arrow-right text-kawaii-pink" style={{ color: 'var(--kawaii-pink)' }}></i>
              </div>
              <h4 className="font-bold text-lg gradient-text">{t("features.input_formats")}</h4>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {inputFormats.map((format, index) => (
                <div 
                  key={format}
                  className="bg-kawaii-pink/20 hover:bg-kawaii-pink/30 px-4 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105 cursor-pointer min-w-[60px]"
                  style={{ 
                    color: 'var(--kawaii-pink)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-xs font-bold">{format}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-kawaii-blue/20 p-2 rounded-full mr-3">
                <i className="fas fa-arrow-left text-kawaii-blue" style={{ color: 'var(--kawaii-blue)' }}></i>
              </div>
              <h4 className="font-bold text-lg gradient-text">{t("features.output_formats")}</h4>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mb-4">
              {outputFormats.map((format, index) => (
                <div 
                  key={format}
                  className="bg-kawaii-blue/20 hover:bg-kawaii-blue/30 px-4 py-2 rounded-xl text-center font-medium transition-all duration-300 hover:scale-105 cursor-pointer min-w-[60px]"
                  style={{ 
                    color: 'var(--kawaii-blue)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="text-xs font-bold">{format}</div>
                </div>
              ))}
            </div>
            <div className="bg-kawaii-yellow/10 p-3 rounded-xl border-l-4" style={{ borderLeftColor: 'var(--kawaii-yellow)' }}>
              <div className="flex items-center">
                <i className="fas fa-info-circle mr-2" style={{ color: 'var(--kawaii-yellow)' }}></i>
                <p className="text-muted-foreground text-sm font-medium">{t("features.size_limit")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <ConversionsSection />
        <AdvancedSection />
        <FormatsSection />
      </div>
    </section>
  );
}
