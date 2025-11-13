import { Card } from '@/components/ui/card';
import { Award, BookOpen, Mail, Gem } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CertificationsSection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      title: t('cert.winter'),
      description: t('cert.winter.desc'),
      icon: Award,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: t('cert.storytelling'),
      description: t('cert.storytelling.desc'),
      icon: BookOpen,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: t('cert.email'),
      description: t('cert.email.desc'),
      icon: Mail,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: t('cert.lv'),
      description: t('cert.lv.desc'),
      icon: Gem,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="certifications" className="bg-background">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('cert.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className="p-6 card-hover border-2 border-border bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${cert.bgColor} rounded-lg flex-shrink-0`}>
                    <Icon className={`h-6 w-6 ${cert.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
