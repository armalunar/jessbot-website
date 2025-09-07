import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { playMeowSound } from "@/utils/sounds";

type TabType = "terms" | "privacy";

export default function LegalSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("terms");

  return (
    <section className="py-20 bg-muted/30" data-testid="section-legal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text text-center mb-12">
            {t("legal.title")}
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-2xl p-2 kawaii-shadow border-0">
              <button
                onClick={() => { playMeowSound(); setActiveTab("terms"); }}
                className={`px-6 py-3 mr-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "terms"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
                data-testid="tab-terms"
              >
                {t("legal.terms")}
              </button>
              <button
                onClick={() => { playMeowSound(); setActiveTab("privacy"); }}
                className={`px-6 py-3 ml-2 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "privacy"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
                data-testid="tab-privacy"
              >
                {t("legal.privacy")}
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="bg-card rounded-2xl p-8 kawaii-shadow border-0 max-h-96 overflow-y-auto">
            {activeTab === "terms" && (
              <div data-testid="content-terms">
                <h3 className="text-xl font-bold mb-6 gradient-text">{t("legal.terms_title")}</h3>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-base">{t("legal.terms_intro")}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.acceptance")}</h4>
                      <p className="text-sm">{t("legal.terms_content.acceptance_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.service")}</h4>
                      <p className="text-sm">{t("legal.terms_content.service_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.usage")}</h4>
                      <p className="text-sm">{t("legal.terms_content.usage_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.prohibited")}</h4>
                      <p className="text-sm">{t("legal.terms_content.prohibited_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.limitations")}</h4>
                      <p className="text-sm">{t("legal.terms_content.limitations_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.terms_content.changes")}</h4>
                      <p className="text-sm">{t("legal.terms_content.changes_desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "privacy" && (
              <div data-testid="content-privacy">
                <h3 className="text-xl font-bold mb-6 gradient-text">{t("legal.privacy_title")}</h3>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-base">{t("legal.privacy_intro")}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.collection")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.collection_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.usage")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.usage_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.storage")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.storage_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.sharing")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.sharing_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.security")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.security_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.rights")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.rights_desc")}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{t("legal.privacy_content.contact")}</h4>
                      <p className="text-sm">{t("legal.privacy_content.contact_desc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
