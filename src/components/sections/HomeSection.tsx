import { TrendingUp, Eye, Shield, FileCheck, Users, Award } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Effizient',
    description: 'Ihre Finanzprozesse sollen wirksam und wirtschaftlich werden?',
  },
  {
    icon: Eye,
    title: 'Transparent',
    description: 'Ihr Management will sichere und selbstverständliche Entscheidungsgrundlagen?',
  },
  {
    icon: Shield,
    title: 'Unabhängig',
    description: 'Arbeiten sollen für Stellvertretungen dokumentiert und dadurch sichergestellt werden?',
  },
];

const stats = [
  { value: '8', label: 'Mandate' },
  { value: '100%', label: 'Zufrieden' },
  { value: '10+', label: 'Jahre Expertin' },
];

const HomeSection = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Corinne Walser-Schwarzentruber
            </h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
              Finanzberatung
            </h2>
            <p className="text-xl text-muted-foreground tracking-wide">
              Rotkreuz/Zug
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 md:py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl md:text-4xl text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-3xl text-primary mb-6 text-center">
              Über mich
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center mb-8">
              Ich habe im Jahr 2012 das Eidg. Diplom zur Expertin in Rechnungslegung und 
              Controlling abgeschlossen. Neben dieser praxisbezogenen Ausbildung habe ich 
              für einen Lebensmittel-Grosshändler das Finanz- und Controlling-Team geführt. 
              In meinen weiteren Anstellungen habe ich die Arbeitsabläufe schlank und effizient 
              optimiert. Durch meine aktuelle Ausbildung in Wirtschaftsinformatik nutze ich 
              das Potential der Digitalisierung.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="font-heading text-xl md:text-2xl text-foreground italic mb-6">
              "Viele sind hartnäckig in Bezug auf den einmal eingeschlagenen Weg, 
              wenige in Bezug auf das Ziel."
            </p>
            <cite className="text-primary font-medium not-italic">
              — Friedrich Nietzsche
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
