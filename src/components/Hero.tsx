import heroImg from "@/assets/hero-carpentry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <img
        src={heroImg}
        alt="Jose Carmona De La Rosa's carpentry workshop"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsla(24,10%,10%,0.8), hsla(24,10%,10%,0.3))" }} />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-4">
            Carpenter & Contractor
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Jose Carmona<br />De La Rosa
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            Bringing craftsmanship and quality to every project — from custom woodwork to full home renovations.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </a>
            <a
              href="#services"
              className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
