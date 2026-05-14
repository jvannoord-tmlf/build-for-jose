import { useState } from "react";

const IMG_BASE = "https://jcrosaslandscaping.grpub.net/img";

const main = { src: `${IMG_BASE}/pond.jpg`, alt: "Custom pond installation" };
const thumbs = [
  { src: `${IMG_BASE}/otay.jpg`, alt: "Landscape project in Otay" },
  { src: `${IMG_BASE}/walkway.jpg`, alt: "Stone walkway" },
  { src: `${IMG_BASE}/stairs.jpg`, alt: "Hardscape stairs" },
  { src: `${IMG_BASE}/other.jpg`, alt: "Completed landscaping project" },
  { src: `${IMG_BASE}/pond.jpg`, alt: "Custom pond installation" },
];

const Gallery = () => {
  const [overlay, setOverlay] = useState(main);
  const [hovering, setHovering] = useState(false);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-warm-gold font-medium tracking-widest uppercase text-sm text-center mb-3">Our Work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Recent Projects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="relative md:col-span-2 md:row-span-2 overflow-hidden rounded-lg shadow-sm aspect-[4/3]">
            <img
              src={main.src}
              alt={main.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={overlay.src}
              alt={overlay.alt}
              aria-hidden={!hovering}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovering ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          {thumbs.map((p) => (
            <div
              key={p.src}
              onMouseEnter={() => { setOverlay(p); setHovering(true); }}
              onMouseLeave={() => setHovering(false)}
              className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
