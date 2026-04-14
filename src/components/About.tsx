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
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Built on Trust & Skill</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Jose Carmona De La Rosa has been serving homeowners and businesses with exceptional carpentry and general contracting services for over two decades. From intricate custom woodwork to major renovations, every project is handled with meticulous attention to detail and a commitment to quality that stands the test of time.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Licensed, insured, and dedicated to exceeding expectations — Jose and his team bring professionalism and craftsmanship to every job, big or small.
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
