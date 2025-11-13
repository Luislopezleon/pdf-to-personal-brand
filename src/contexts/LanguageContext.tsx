import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.certifications': 'Certificaciones',
    'nav.philosophy': 'Filosofía Creativa',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.subtitle': 'Marketing · Branding · Creatividad',
    'hero.description': 'Estudiante de 3º de Marketing en la Universidad de Málaga, especializado en publicidad, branding e identidad creativa. Me apasiona construir marcas desde cero.',
    'hero.cta': 'Ver Proyectos',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.text': 'Soy estudiante de 3º de Marketing en la Universidad de Málaga, especializado en publicidad, branding e identidad creativa. Me apasiona construir marcas desde cero: darles personalidad, una historia coherente y un universo visual que conecte con las personas.\n\nMi objetivo es dedicarme profesionalmente al branding, la publicidad y el diseño aplicado al marketing. Actualmente desarrollo proyectos personales donde aplico todo mi proceso creativo: investigación, estrategia, identidad visual y verbal, redes sociales y presentación profesional.\n\nMe considero una persona inquieta, autodidacta y con iniciativa. Me gusta crear, experimentar y mejorar en cada proyecto.',
    'about.university': 'Universidad de Málaga',
    'about.degree': 'Grado en Marketing (2023-2027)',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.tools': 'Herramientas',
    'skills.marketing': 'Marketing & Branding',
    'skills.languages': 'Idiomas',
    'skills.other': 'Otras Competencias',
    
    // Tools
    'tools.ai': 'IA aplicada al marketing y diseño',
    'tools.office': 'Microsoft Office (Excel, Word, PowerPoint)',
    'tools.canva': 'Canva',
    'tools.illustrator': 'Adobe Illustrator',
    'tools.photoshop': 'Adobe Photoshop',
    'tools.affinity': 'Affinity (en aprendizaje)',
    
    // Marketing Skills
    'marketing.visual': 'Identidad visual',
    'marketing.verbal': 'Identidad verbal',
    'marketing.strategy': 'Estrategia de marca',
    'marketing.brandbook': 'Creación de brandbooks',
    'marketing.social': 'Marketing digital y redes sociales',
    'marketing.copy': 'Copywriting',
    'marketing.email': 'Email marketing',
    
    // Languages
    'lang.spanish': 'Español — Nativo',
    'lang.english': 'Inglés — C1 Cambridge',
    
    // Other Competencies
    'other.presentation': 'Presentación de propuestas',
    'other.autonomous': 'Trabajo autónomo',
    'other.creativity': 'Creatividad orientada a resultados',
    'other.vision': 'Visión estratégica y analítica',
    
    // Projects Section
    'projects.title': 'Proyectos',
    'project1.name': 'Identidad y Estrategia de Marca para Empresa Ficticia',
    'project1.description': 'Proyecto integral creado desde cero donde trabajo como un departamento de marketing completo. Incluye identidad visual y verbal, estrategia de marca, redes sociales y brandbook profesional.',
    'project1.tag1': 'Branding',
    'project1.tag2': 'Identidad Visual',
    'project1.tag3': 'Identidad Verbal',
    'project1.tag4': 'Redes Sociales',
    
    'project2.name': 'Propuestas de Branding Universitario',
    'project2.description': 'Ejercicios desarrollados con Adobe Illustrator y Photoshop. Incluyen logotipos, paletas de color, aplicación visual de marca y presentaciones estilo pitch.',
    'project2.tag1': 'Universidad',
    'project2.tag2': 'Adobe Illustrator',
    'project2.tag3': 'Adobe Photoshop',
    'project2.tag4': 'Logotipos',
    
    // Certifications Section
    'cert.title': 'Certificaciones y Cursos',
    'cert.winter': 'Finalista — Reto Winter (Gran Canaria)',
    'cert.winter.desc': 'Propuesta de marketing para la aerolínea Minter, destacada por creatividad y coherencia estratégica.',
    'cert.storytelling': 'Curso de Storytelling',
    'cert.storytelling.desc': 'Técnicas narrativas aplicadas a marcas.',
    'cert.email': 'Curso de Email Marketing',
    'cert.email.desc': 'Segmentación, copywriting y automatizaciones.',
    'cert.lv': 'Curso "Louis Vuitton Moët Genesis" (en proceso)',
    'cert.lv.desc': 'Formación en Branding Experience, lujo, herencia de marca y storytelling sensorial.',
    
    // Philosophy Section
    'philosophy.title': 'Filosofía Creativa',
    'philosophy.intro': 'Creo en las marcas que cuentan una historia real y que emocionan. Mi enfoque mezcla creatividad y estrategia:',
    'philosophy.1': 'Estrategia antes que diseño',
    'philosophy.2': 'Diseño como herramienta para hacer la estrategia memorable',
    'philosophy.3': 'Coherencia visual y verbal',
    'philosophy.4': 'Storytelling como base',
    'philosophy.5': 'Diferenciación como objetivo',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Estoy buscando oportunidades para prácticas, trabajos junior o colaboraciones. Si tienes un proyecto en mente o simplemente quieres conectar, no dudes en escribirme.',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    
    // Footer
    'footer.final': 'Estoy en constante construcción, aprendiendo, creando y mejorando con cada proyecto. Aspiro a dedicarme profesionalmente al branding, la publicidad y la creatividad, aportando ideas frescas y proyectos con sentido.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.philosophy': 'Creative Philosophy',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Marketing · Branding · Creativity',
    'hero.description': '3rd year Marketing student at Universidad de Málaga, specialized in advertising, branding, and creative identity. Passionate about building brands from scratch.',
    'hero.cta': 'View Projects',
    
    // About Section
    'about.title': 'About Me',
    'about.text': 'I am a 3rd year Marketing student at Universidad de Málaga, specialized in advertising, branding, and creative identity. I am passionate about building brands from scratch: giving them personality, a coherent story, and a visual universe that connects with people.\n\nMy goal is to work professionally in branding, advertising, and design applied to marketing. I currently develop personal projects where I apply my entire creative process: research, strategy, visual and verbal identity, social media, and professional presentation.\n\nI consider myself a curious, self-taught person with initiative. I like to create, experiment, and improve with each project.',
    'about.university': 'Universidad de Málaga',
    'about.degree': 'Marketing Degree (2023-2027)',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.tools': 'Tools',
    'skills.marketing': 'Marketing & Branding',
    'skills.languages': 'Languages',
    'skills.other': 'Other Competencies',
    
    // Tools
    'tools.ai': 'AI applied to marketing and design',
    'tools.office': 'Microsoft Office (Excel, Word, PowerPoint)',
    'tools.canva': 'Canva',
    'tools.illustrator': 'Adobe Illustrator',
    'tools.photoshop': 'Adobe Photoshop',
    'tools.affinity': 'Affinity (learning)',
    
    // Marketing Skills
    'marketing.visual': 'Visual identity',
    'marketing.verbal': 'Verbal identity',
    'marketing.strategy': 'Brand strategy',
    'marketing.brandbook': 'Brandbook creation',
    'marketing.social': 'Digital marketing and social media',
    'marketing.copy': 'Copywriting',
    'marketing.email': 'Email marketing',
    
    // Languages
    'lang.spanish': 'Spanish — Native',
    'lang.english': 'English — C1 Cambridge',
    
    // Other Competencies
    'other.presentation': 'Proposal presentation',
    'other.autonomous': 'Autonomous work',
    'other.creativity': 'Results-oriented creativity',
    'other.vision': 'Strategic and analytical vision',
    
    // Projects Section
    'projects.title': 'Projects',
    'project1.name': 'Brand Identity and Strategy for Fictional Company',
    'project1.description': 'Comprehensive project created from scratch where I work as a complete marketing department. Includes visual and verbal identity, brand strategy, social media, and professional brandbook.',
    'project1.tag1': 'Branding',
    'project1.tag2': 'Visual Identity',
    'project1.tag3': 'Verbal Identity',
    'project1.tag4': 'Social Media',
    
    'project2.name': 'University Branding Proposals',
    'project2.description': 'Exercises developed with Adobe Illustrator and Photoshop. Include logos, color palettes, visual brand application, and pitch-style presentations.',
    'project2.tag1': 'University',
    'project2.tag2': 'Adobe Illustrator',
    'project2.tag3': 'Adobe Photoshop',
    'project2.tag4': 'Logos',
    
    // Certifications Section
    'cert.title': 'Certifications and Courses',
    'cert.winter': 'Finalist — Reto Winter (Gran Canaria)',
    'cert.winter.desc': 'Marketing proposal for Minter airline, highlighted for creativity and strategic coherence.',
    'cert.storytelling': 'Storytelling Course',
    'cert.storytelling.desc': 'Narrative techniques applied to brands.',
    'cert.email': 'Email Marketing Course',
    'cert.email.desc': 'Segmentation, copywriting, and automations.',
    'cert.lv': '"Louis Vuitton Moët Genesis" Course (in progress)',
    'cert.lv.desc': 'Training in Branding Experience, luxury, brand heritage, and sensory storytelling.',
    
    // Philosophy Section
    'philosophy.title': 'Creative Philosophy',
    'philosophy.intro': 'I believe in brands that tell a real story and evoke emotions. My approach blends creativity and strategy:',
    'philosophy.1': 'Strategy before design',
    'philosophy.2': 'Design as a tool to make strategy memorable',
    'philosophy.3': 'Visual and verbal coherence',
    'philosophy.4': 'Storytelling as foundation',
    'philosophy.5': 'Differentiation as objective',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'I am looking for opportunities for internships, junior positions, or collaborations. If you have a project in mind or just want to connect, feel free to reach out.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.final': 'I am constantly evolving, learning, creating, and improving with each project. I aspire to dedicate myself professionally to branding, advertising, and creativity, bringing fresh ideas and meaningful projects.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
