import { Card } from '@/components/ui/card';
import { Sparkles, Palette, Globe2, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t('skills.tools'),
      icon: Sparkles,
      skills: [
        t('tools.ai'),
        t('tools.office'),
        t('tools.canva'),
        t('tools.illustrator'),
        t('tools.photoshop'),
        t('tools.affinity'),
      ],
    },
    {
      title: t('skills.marketing'),
      icon: Palette,
      skills: [
        t('marketing.visual'),
        t('marketing.verbal'),
        t('marketing.strategy'),
        t('marketing.brandbook'),
        t('marketing.social'),
        t('marketing.copy'),
        t('marketing.email'),
      ],
    },
    {
      title: t('skills.languages'),
      icon: Globe2,
      skills: [
        t('lang.spanish'),
        t('lang.english'),
      ],
    },
    {
      title: t('skills.other'),
      icon: Target,
      skills: [
        t('other.presentation'),
        t('other.autonomous'),
        t('other.creativity'),
        t('other.vision'),
      ],
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('skills.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover border-2 border-border bg-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {group.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
