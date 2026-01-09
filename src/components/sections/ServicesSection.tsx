import { FileText, Calculator, Settings, BookOpen } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Jahresabschlüsse erstellen',
    description: 'Mit meinen Erfahrungen in grossen und kleinen Gesellschaften sowie in Stiftungen kann ich Ihnen die Erstellung des Jahresabschlusses abnehmen und den Abschluss bereit für die Revision erstellen.',
  },
  {
    icon: Calculator,
    title: 'Steuererklärungen ausfüllen und kontrollieren',
    description: 'Nach einer allfälligen Revision ist der letzte Schritt die Steuererklärung korrekt und fristgerecht einzureichen. Auch dies kann ich für Sie erledigen.',
  },
  {
    icon: Settings,
    title: 'Geschäftsprozesse optimieren und automatisieren',
    description: 'Wenn Ihre Finanzprozesse sich schon seit mehreren Jahren nicht mehr geändert haben, besteht bestimmt Potential, diese zu optimieren. Ich kann Ihnen hierbei unter die Arme greifen.',
  },
  {
    icon: BookOpen,
    title: 'Dokumentationen erstellen',
    description: 'Jede Unternehmung sollte ihre Finanzprozesse möglichst schlank und selbstständig ausführen können. Damit Ihre Sachbearbeiterin die Finanzen effizient und selbstsicher ausführen kann, kann ich Ihnen gut verständliche Dokumentationen Ihrer eigenen Prozesse erstellen.',
  },
];

const ServicesSection = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Mein Angebot
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card border border-border rounded-sm p-8 hover:border-primary/50 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            Interesse an meinen Dienstleistungen?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Kontaktieren Sie mich für ein unverbindliches Erstgespräch.
          </p>
          <a 
            href="#kontakt"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-gold-dark transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
