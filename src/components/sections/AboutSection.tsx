const AboutSection = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Über mich
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="order-2 md:order-1 animate-slide-up">
              <h2 className="font-heading text-2xl text-primary mb-2">
                wer bin ich?
              </h2>
              <h3 className="font-heading text-3xl md:text-4xl text-gold mb-6">
                Corinne<br />
                Walser-Schwarzentruber
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ich habe mich per Anfang 2018 selbstständig gemacht, da ich mein 
                Experten Wissen über optimierte und effiziente Finanzabläufe auch 
                an KMU weitergeben möchte. Es bereitet mir Spass, die Herausforderungen 
                der Auftraggeber zu meistern und mein eigenes Wissen dadurch zu verbreitern.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ich habe im Jahr 2012 das Eidg. Diplom zur Expertin in Rechnungslegung 
                und Controlling abgeschlossen. Neben dieser praxisbezogenen Ausbildung 
                habe ich für einen Lebensmittel-Grosshändler das Finanz- und 
                Controlling-Team geführt.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/corinne.schwarzentruber" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.xing.com/profile/Corinne_Schwarzentruber/cv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded"
                  aria-label="Xing"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916c-.004-.006-.004-.016 0-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.026c-.099.188-.093.381 0 .529.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.041z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative max-w-sm mx-auto">
                <img
                  src="/images/corinne-walser.jpg"
                  alt="Corinne Walser-Schwarzentruber"
                  className="w-full aspect-square object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/20 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
