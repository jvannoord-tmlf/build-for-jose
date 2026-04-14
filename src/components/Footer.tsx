const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 py-8">
    <div className="container mx-auto px-6 text-center text-sm">
      <p className="font-display text-primary-foreground text-lg mb-2">JC Rosas Landscaping</p>
      <p>4166 Pepper Drive, San Diego, CA 92105 · (619) 794-8510</p>
      <p className="mt-1">License #936696</p>
      <p className="mt-3">© {new Date().getFullYear()} JC Rosas Landscaping. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
