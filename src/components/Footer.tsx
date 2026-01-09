const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          Copyright {currentYear} – CS Finanzberatung
        </p>
      </div>
    </footer>
  );
};

export default Footer;
