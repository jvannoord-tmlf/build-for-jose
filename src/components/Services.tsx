import customImg from "@/assets/services-custom.jpg";
import renovationImg from "@/assets/services-renovation.jpg";
import outdoorImg from "@/assets/services-outdoor.jpg";

const services = [
  {
    title: "Custom Woodwork",
    description: "Handcrafted cabinets, furniture, and built-ins tailored to your vision with premium materials.",
    image: customImg,
  },
  {
    title: "Home Renovations",
    description: "Full-scale kitchen, bathroom, and living space remodels that transform your home.",
    image: renovationImg,
  },
  {
    title: "Outdoor Structures",
    description: "Decks, pergolas, fences, and outdoor living spaces built to last through the seasons.",
    image: outdoorImg,
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
