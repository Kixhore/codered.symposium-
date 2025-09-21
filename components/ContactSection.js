function ContactSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative z-10" data-name="contact-section" data-file="components/ContactSection.js">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Get in</span> <span className="text-[var(--neon-red)]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about the symposium? We're here to help!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className={`glass-card p-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-bold text-[var(--neon-red)] mb-8 text-center">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-map-pin text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <a 
                      href="https://www.google.com/maps/place/Loyola+Institute+of+Tech.+%26+Science+(Official)/@8.204799,77.511616,12z/data=!4m14!1m7!3m6!1s0x3b04f54e9c564f8f:0x60827bb5cda43f48!2sLoyola+Institute+of+Tech.+%26+Science+(Official)!8m2!3d8.2064985!4d77.4937676!16s%2Fg%2F11rz7nby3q!3m5!1s0x3b04f54e9c564f8f:0x60827bb5cda43f48!8m2!3d8.2064985!4d77.4937676!16s%2Fg%2F11rz7nby3q?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[var(--neon-red)] transition-colors cursor-pointer"
                    >
                      Loyola Institute of Technology & Science<br />Loyola Nagar, Thovalai - Rajavoor Road <br/> Kanyakumari, 629302
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-mail text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">homizzad@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-phone text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+91 9442463994</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-calendar text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Event Dates</h4>
                    <p className="text-gray-300">October 13, 2025</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--glass-border)] text-center">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://twitter.com/demo." 
                    target="_blank" 
                    rel="noopener noreferrer"

                    className="w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="icon-twitter text-lg text-[var(--neon-red)]"></div>
                  </a>
                  <a 
                    href="https://linkedin.com/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="icon-linkedin text-lg text-[var(--neon-red)]"></div>
                  </a>
                  <a 
                    href="https://www.instagram.com/ad_homizz?igsh=M2pmb2U2ZGc4cm41" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="icon-instagram text-lg text-[var(--neon-red)]"></div>
                  </a>
                  <a 
                    href="https://facebook.com/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="icon-facebook text-lg text-[var(--neon-red)]"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
