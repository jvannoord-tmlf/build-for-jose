const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-warm-gold font-medium tracking-widest uppercase text-sm mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Ready to start your next project? Reach out for a free consultation and estimate.
          </p>
        </div>
        <div className="max-w-lg mx-auto space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input type="text" placeholder="Your Name" className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40" />
          <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none" />
          <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (619) 794-8510
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            4166 Pepper Drive, San Diego, CA 92105
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3"/><polyline points="14 2 14 8 20 8"/><path d="M4 12h12"/></svg>
            License #936696
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
