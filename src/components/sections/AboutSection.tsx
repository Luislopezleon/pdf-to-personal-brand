import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-section-bg">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              {t('about.text').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 card-hover border-2 border-accent/20 bg-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">
                    {t('about.university')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('about.degree')}
                  </p>
                  <div className="pt-2 space-y-1">
                    <p className="text-sm font-medium text-accent">
                      Especialización:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Publicidad, Branding e Identidad Creativa
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
