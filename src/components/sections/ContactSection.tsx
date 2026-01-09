import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+41 79 902 10 56',
    href: 'tel:+41799021056',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'cs-finanzberatung@bluewin.ch',
    href: 'mailto:cs-finanzberatung@bluewin.ch',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Berchtwilerstrasse 4, 6343 Rotkreuz/ZG',
    href: 'https://maps.google.com/?q=Berchtwilerstrasse+4,+6343+Rotkreuz',
  },
];

const ContactSection = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Kontakt
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Kontaktieren Sie mich
              </h2>
              <p className="text-muted-foreground">
                Hinterlassen Sie mir eine Nachricht und ich werde mich bei Ihnen melden.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Adresse' ? '_blank' : undefined}
                  rel={item.label === 'Adresse' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-6 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Embed (optional static image or iframe) */}
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-video bg-card border border-border rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5!2d8.4291!3d47.1433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aac!2sBerchtwilerstrasse+4%2C+6343+Rotkreuz!5e0!3m2!1sde!2sch!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort CS Finanzberatung"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
