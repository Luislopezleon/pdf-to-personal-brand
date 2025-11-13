import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: t('project1.name'),
      description: t('project1.description'),
      tags: [t('project1.tag1'), t('project1.tag2'), t('project1.tag3'), t('project1.tag4')],
      color: 'from-orange-500/20 to-red-500/20',
    },
    {
      name: t('project2.name'),
      description: t('project2.description'),
      tags: [t('project2.tag1'), t('project2.tag2'), t('project2.tag3'), t('project2.tag4')],
      color: 'from-blue-500/20 to-purple-500/20',
    },
  ];

  return (
    <section id="projects" className="bg-section-bg">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('projects.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover border-2 border-accent/20 bg-card"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-accent/30 flex items-center justify-center">
                    <span className="text-2xl">📁</span>
                  </div>
                  <p className="text-xs text-muted-foreground px-4">
                    Espacio para imágenes del proyecto
                  </p>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
