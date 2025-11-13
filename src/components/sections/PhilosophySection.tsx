import { Card } from '@/components/ui/card';
import { Lightbulb, Target, MessageCircle, Palette, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PhilosophySection = () => {
  const { t } = useLanguage();

  const principles = [
    {
      text: t('philosophy.1'),
      icon: Target,
    },
    {
      text: t('philosophy.2'),
      icon: Palette,
    },
    {
      text: t('philosophy.3'),
      icon: MessageCircle,
    },
    {
      text: t('philosophy.4'),
      icon: Star,
    },
    {
      text: t('philosophy.5'),
      icon: Lightbulb,
    },
  ];

  return (
    <section id="philosophy" className="bg-section-bg">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          {t('philosophy.title')}
        </h2>
        
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('philosophy.intro')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover border-2 border-accent/20 bg-card text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
