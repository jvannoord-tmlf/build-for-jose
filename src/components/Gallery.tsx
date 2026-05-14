const IMG_BASE = "https://jcrosaslandscaping.grpub.net/img";

const photos = [
  { src: `${IMG_BASE}/otay.jpg`, alt: "Landscape project in Otay" },
  { src: `${IMG_BASE}/pond.jpg`, alt: "Custom pond installation" },
  { src: `${IMG_BASE}/walkway.jpg`, alt: "Stone walkway" },
  { src: `${IMG_BASE}/stairs.jpg`, alt: "Hardscape stairs" },
  { src: `${IMG_BASE}/other.jpg`, alt: "Completed landscaping project" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-warm-gold font-medium tracking-widest uppercase text-sm text-center mb-3">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Recent Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <div
              key={p.src}
              className={`overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
