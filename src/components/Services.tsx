import lawnImg from "@/assets/services-lawn.jpg";
import gardenImg from "@/assets/services-garden.jpg";
import hardscapeImg from "@/assets/services-hardscape.jpg";

const services = [
  {
    title: "Lawn Care & Maintenance",
    description: "Regular mowing, fertilization, aeration, and weed control to keep your lawn lush and healthy year-round.",
    image: lawnImg,
  },
  {
    title: "Garden Design & Planting",
    description: "Custom flower beds, shrub installation, tree planting, and seasonal color that brings your yard to life.",
    image: gardenImg,
  },
  {
    title: "Hardscaping & Patios",
    description: "Stone walkways, retaining walls, patios, and outdoor features that add beauty and value to your property.",
    image: hardscapeImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-warm-gold font-medium tracking-widest uppercase text-sm text-center mb-3">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="overflow-hidden h-56">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-display">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
