const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 py-8">
    <div className="container mx-auto px-6 text-center text-sm">
      <p className="font-display text-primary-foreground text-lg mb-2">JC De La Rosa</p>
      <p>© {new Date().getFullYear()} Jose Carmona De La Rosa. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
