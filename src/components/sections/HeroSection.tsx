import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Tu Nombre
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground group"
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent/20 to-secondary overflow-hidden border-4 border-accent/20 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-muted/50">
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-accent/30 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <p className="text-sm text-muted-foreground px-4">
                      Añade tu foto aquí
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
