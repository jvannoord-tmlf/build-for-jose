const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">About</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Rooted in Quality</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Jose Carmona De La Rosa has been transforming residential and commercial outdoor spaces with professional landscaping services for over two decades. From detailed garden designs to full property overhauls, every project is handled with care, precision, and a deep respect for the natural environment.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Licensed, insured, and passionate about creating beautiful landscapes — Jose and his team deliver results that grow more stunning with each passing season.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary font-display">{s.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
