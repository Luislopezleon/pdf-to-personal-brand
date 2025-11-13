import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos');
      return;
    }
    
    // Here you would typically send the form data to a backend
    toast.success('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto p-8 border-2 border-accent/20 bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                {t('contact.name')}
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                {t('contact.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                className="bg-background"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                {t('contact.message')}
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntame sobre tu proyecto o cómo podemos colaborar..."
                rows={6}
                className="bg-background resize-none"
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent-hover text-accent-foreground group"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('contact.send')}
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>
        
        {/* Footer Message */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground italic leading-relaxed">
            {t('footer.final')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
