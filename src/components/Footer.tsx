const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 py-8">
    <div className="container mx-auto px-6 text-center text-sm">
      <p className="font-display text-primary-foreground text-lg mb-2">JC Rosas Landscaping</p>
      <p>© {new Date().getFullYear()} JC Rosas Landscaping. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
